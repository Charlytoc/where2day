"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuario, Experiencias, Eventos
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager


api = Blueprint('api', __name__)




@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    usuario = Usuario.query.filter_by(email=email).first()
    print(usuario.serialize())


    if email != usuario.email or password != usuario.password:
        return jsonify({"msg": "Bad email or password"}), 401


    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token), 200


@api.route("/signup", methods=["POST"])
def to_signup():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    username = request.json.get("username", None)
    nombre =  request.json.get("nombre", None)
    apellido = request.json.get("apellido", None)
    edad = request.json.get("edad", None)

    nuevo_usuario = Usuario(email=email, password=password)
    

    db.session.add(nuevo_usuario)
    db.session.commit()

    response_body = "te has loggeado tío"
    return jsonify(response_body)