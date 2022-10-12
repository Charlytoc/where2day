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
    # username = request.json.get("username", None)
    # nombre =  request.json.get("nombre", None)
    # apellido = request.json.get("apellido", None)
    # edad = request.json.get("edad", None)

    # nuevo_usuario = Usuario(email=email, password=password, username=username, nombre=nombre, apellido=apellido, edad=edad)
    nuevo_usuario = Usuario(email=email, password=password)

    db.session.add(nuevo_usuario)
    db.session.commit()

    response_body = "te has loggeado tío"
    return jsonify(response_body)


@api.route("/postear", methods=["POST"])
def to_post():

    titulo = request.json.get("titulo", None)
    lugar = request.json.get("lugar", None)
    description = request.json.get("description", None)
    user_id = request.json.get("usuario_id", None)

    print(titulo, lugar, description, user_id)



    # nuevo_usuario = Usuario(email=email, password=password, username=username, nombre=nombre, apellido=apellido, edad=edad)
    nueva_experiencia = Experiencias(titulo=titulo, lugar=lugar, description=description, usuario_id=user_id)

    print(nueva_experiencia)

    db.session.add(nueva_experiencia)
    db.session.commit()

    response_body = "has agregado una nueva experiencia"
    return jsonify(response_body)



@api.route("/usuario", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    print(current_user)

    usuario = Usuario.query.filter_by(email=current_user).first()
    print(usuario.id)

    return jsonify(usuario.id), 200
