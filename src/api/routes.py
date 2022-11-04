"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, Usuario, Experiencias, Eventos, Todos, Likes
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import random, string
from flask_mail import Message


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

    if email != usuario.email  and password != usuario.password:
        return jsonify({"msg": "Bad email and password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token), 200



@api.route("/basedata", methods=["GET"])
def parse_basedata():

    nuevo_usuario = Usuario(email="charlyjchaconc@gmail.com", password="Char.dev", pais="Ecuador", username="Charlytoc", nombre="Charly", apellido="Chacón", edad=23, image_url="https://res.cloudinary.com/dlmcf8yed/image/upload/v1667496142/pruebas/edahciykyeeiyo5a5j3t.jpg")
    usuario_existente = Usuario.query.filter_by(email="charlyjchaconc@gmail.com").first()

    if nuevo_usuario == usuario_existente:
        return jsonify("Ya tienes todo bien"), 200

    db.session.add(nuevo_usuario)
    db.session.commit()


    return jsonify("Todo bien el DB"), 200



@api.route("/cargarExp", methods=["GET"])
def cargar_exp():
    # print("bien")
    nueva_experiencia = Experiencias(titulo="Viaje a Cuenca", lugar="Cuenca, Ecuador", description="Fui de vacaciones para conocer a una amiga, debo decir que la ciudad me pareció muy limpia y ordenada", usuario_id=1, fecha="12/10/22", outdoor=True , indoor=False, anywhere=False, image_url="https://res.cloudinary.com/dlmcf8yed/image/upload/v1667445987/pruebas/qbbity8sg6bylfffekzi.jpg")
    nueva_experiencia2 = Experiencias(titulo="Cocinando pollo Gordon Bleu", lugar="Guayaquil, Ecuador", description="Esta es de esas recetas que son sencillas pero que quedan exquisitas. Además, cocinar siempre me despeja la mente y me hace pensar en cosas interesantes", usuario_id=1, fecha="13/09/22", outdoor=False , indoor=True, anywhere=False, image_url="https://res.cloudinary.com/dlmcf8yed/image/upload/v1667499696/pruebas/vzskhugafiy1eowtravh.jpg")
    db.session.add(nueva_experiencia)
    db.session.add(nueva_experiencia2)
    db.session.commit()


    return jsonify("Todo bien en el DB"), 200


@api.route("/signup", methods=["POST"])
def to_signup():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
   
    usuario_existente = Usuario.query.filter_by(email=email).first()
    print(usuario_existente)

    if usuario_existente:
        return "El usuario ya existe", 400

    nuevo_usuario = Usuario(email=email, password=password)
    
    db.session.add(nuevo_usuario)    
    db.session.commit()

    response_body = "te has loggeado tío, y todo bien"
    return jsonify(response_body), 200


@api.route('/leerPost', methods=['GET'])
def obtener_experiencias():
    exp_query = Experiencias.query.limit(10)

    all_exp = list(map(lambda item: item.serialize(), exp_query))

    response_body = {
        "msg": "OK",
        "results": all_exp,
        "filter": "Ultimas experiencias"
    }
    return jsonify(response_body), 200


@api.route('/leerEventos', methods=['GET'])
def obtener_eventos():
    event_query = Eventos.query.limit(10)

    all_events = list(map(lambda item: item.serialize(),  event_query))

    response_body = {
        "msg": "OK ",
        "results": all_events
    }
    return jsonify(response_body), 200


@api.route("/postear", methods=["POST"])
def to_post():

    titulo = request.json.get("titulo", None)
    lugar = request.json.get("lugar", None)
    description = request.json.get("description", None)
    usuario_id = request.json.get("usuario_id", None)
    fecha = request.json.get("fecha", None)
    outdoor = request.json.get("outdoor", None)
    indoor = request.json.get("indoor", None)
    anywhere = request.json.get("anywhere", None)
    imagen = request.json.get("imagen", None)


    
    nueva_experiencia = Experiencias(titulo=titulo, lugar=lugar, description=description, usuario_id=usuario_id, fecha=fecha, outdoor=outdoor, indoor=indoor, anywhere=anywhere, image_url=imagen)

    print(nueva_experiencia)
    db.session.add(nueva_experiencia)
    db.session.commit()

    response_body = "has agregado una nueva experiencia"
    return jsonify(response_body)


@api.route("/getuser", methods=["GET"])
@jwt_required()
def getUser_id ():
    # Access the identity of the current user with get_jwt_identity

    # Para usar esta ruta se debe enviar un bearer token con el token del usuario 
    # en el header del fetch


    current_user = get_jwt_identity()

    usuario = Usuario.query.filter_by(email=current_user).first()

    return jsonify(usuario.id), 200



@api.route('/filtrarExp', methods=['POST'])
def get_filtered_experiences ():

    variable = request.json.get("variable", None)
    user = request.json.get("user", None)

    # print(variable)

    if variable == 'outdoor':
        exp_query = Experiencias.query.filter_by(outdoor = True).all()
        filter_var = 'Experiencias fuera de casa'
    elif variable == 'indoor':
        exp_query = Experiencias.query.filter_by(indoor = True).all()
        filter_var = 'Experiencias dentro de casa'
    elif variable == 'anywhere':
        exp_query = Experiencias.query.filter_by(anywhere = True).all()
        filter_var = 'Experiencias online'
    elif user:
        exp_query = Experiencias.query.filter_by(usuario_id = user).all()
        filter_var = 'Tus experiencias'
    else: 
        response_body = {
            'msg': 'No valid filter'
        }
        return jsonify(response_body), 200

    

    all_exp = list(map(lambda item: item.serialize(), exp_query))

    # print(all_exp)
    response_body = {
        "msg": "OK",
        "results": all_exp,
        "filter": filter_var
    }
    return jsonify(response_body), 200



@api.route("/postearEvento", methods=["POST"])
def to_post_event ():
    titulo = request.json.get("titulo", None)
    lugar = request.json.get("lugar", None)
    description = request.json.get("description", None)
    usuario_id = request.json.get("usuario_id", None)
    fecha = request.json.get("fecha", None)
    outdoor = request.json.get("outdoor", None)
    indoor = request.json.get("indoor", None)
    anywhere = request.json.get("anywhere", None)




    print(titulo, lugar, description, usuario_id)



    # nuevo_usuario = Usuario(email=email, password=password, username=username, nombre=nombre, apellido=apellido, edad=edad)
    nuevo_evento = Eventos(titulo=titulo, lugar=lugar, description=description, usuario_id=usuario_id, fecha=fecha, outdoor=outdoor, indoor=indoor, anywhere=anywhere)

    print(nuevo_evento)
    db.session.add(nuevo_evento)
    db.session.commit()

    response_body = "has agregado un nuevo evento"
    return jsonify(response_body)




@api.route("/updateUser", methods=["POST"])
def update_user ():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    username = request.json.get("username", None)
    nombre =  request.json.get("nombre", None)
    apellido = request.json.get("apellido", None)
    edad = request.json.get("edad", None)
    usuario_id = request.json.get("usuario_id", None)
    pais = request.json.get("pais", None)
    image_url = request.json.get("image_url", None)

    
    user1 = Usuario.query.get(usuario_id)

    if user1 is None:
      raise APIException('User not found', status_code=404)

    if username:
     user1.username = username

    if email:
        user1.email = email
    if image_url:
        user1.image_url = image_url
    
    if password:
        user1.password = password
    if nombre:
        user1.nombre = nombre
    if apellido:
        user1.apellido = apellido
    if edad:
        user1.edad = edad

    if pais:
        user1.pais = pais


    db.session.commit()


    response_body = "Has agregado los cambios a tu usuario"
    return jsonify(response_body), 200


@api.route("/updateExp", methods=["POST"])
def update_exp ():
    titulo = request.json.get("titulo", None)
    lugar = request.json.get("lugar", None)
    fecha = request.json.get("fecha", None)
    description =  request.json.get("description", None)
    indoor = request.json.get("indoor", None)
    outdoor = request.json.get("outdoor", None)
    anywhere = request.json.get("anywhere", None)
    exp_id = request.json.get("exp_id", None)
    image_url = request.json.get("image_url", None)

    
    exp = Experiencias.query.get(exp_id)

    if exp is None:
      raise APIException('Experiencia no encontrada', status_code=404)

    if titulo:
     exp.titulo = titulo
    if image_url:
     exp.image_url = image_url

    if lugar:
        exp.lugar = lugar
    
    if description:
        exp.description = description
    if outdoor:
        exp.outdoor = outdoor
    if fecha:
        exp.fecha = fecha
    if indoor:
        exp.indoor = indoor
    if anywhere:
        exp.anywhere = anywhere


    db.session.commit()


    response_body = "Has agregado los cambios a tu experiencia"
    return jsonify(response_body), 200


@api.route("/updateEvento", methods=["POST"])
def update_evento ():
    titulo = request.json.get("titulo", None)
    lugar = request.json.get("lugar", None)
    fecha = request.json.get("fecha", None)
    description =  request.json.get("description", None)
    indoor = request.json.get("indoor", None)
    outdoor = request.json.get("outdoor", None)
    anywhere = request.json.get("anywhere", None)
    event_id = request.json.get("event_id", None)

    
    event = Experiencias.query.get(event_id)

    if event is None:
      raise APIException('Evento no encontrado', status_code=404)

    if titulo:
     event.titulo = titulo

    if lugar:
        event.lugar = lugar
    
    if description:
        event.description = description
    if outdoor:
        event.outdoor = outdoor
    if fecha:
        event.fecha = fecha
    if indoor:
        event.indoor = indoor
    if anywhere:
        event.anywhere = anywhere


    db.session.commit()


    response_body = "Has agregado los cambios a tu Evento"
    return jsonify(response_body), 200



@api.route("/delete", methods=["POST"])
def delete_exp ():

    id = request.json.get('id', None)
    exp_or_event = request.json.get('exp_or_event', None)
    
    if exp_or_event == 'event':
        event = Eventos.query.get(id)
        db.session.delete(event)
        db.session.commit()
        response_body = "¡Has eliminado el evento, yeeha!"
    elif exp_or_event == 'exp':
        exp = Experiencias.query.get(id)
        db.session.delete(exp)
        db.session.commit()
        response_body = "¡Has eliminado la experiencia, yeeha!"
    
    return jsonify(response_body), 200


@api.route("/deleteEvent", methods=["POST"])
def delete_event ():

    event_id = request.json.get('event_id', None)

    
    event = Eventos.query.get(event_id)

    db.session.delete(event)
    db.session.commit()


    response_body = "Has eliminado el evento"
    return jsonify(response_body), 200




@api.route('/getProfile', methods=['POST'])
def get_profile():

    usuario_id = request.json.get("usuario_id", None)

    user = Usuario.query.get(usuario_id)

    print(user.serialize())


    response_body = {
        "msg": "OK",
        "results": user.serialize()
    }
    return jsonify(response_body), 200


@api.route("/forgotpassword", methods=["POST"])
def forgotpassword():
    recover_email = request.json['email']
    recover_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(8)) #clave aleatoria nueva
    if not recover_email:
        return jsonify({"msg": "Debe ingresar el correo"}), 401
	#busco si el correo existe en mi base de datos
    user = Usuario.query.filter_by(email=recover_email).first()
    if recover_email != user.email:
        return jsonify({"msg": "El correo ingresado no existe en nuestros registros"}), 400
    #si existe guardo la nueva contraseña aleatoria
	
	#luego se la envio al usuario por correo para que pueda ingresar
    msg = Message("Hi", recipients=[recover_email])
    msg.html = f"""<h1>Su nueva contraseña es: {recover_password}</h1>"""

    user.password = recover_password
    db.session.commit()
    
    current_app.mail.send(msg)
    return jsonify({"msg": "Su nueva clave ha sido enviada al correo electrónico ingresado"}), 200


@api.route('/todos', methods=['POST'])
def get_user_todos ():

    user_id = request.json.get("user_id", None)


    todos_to = Todos.query.filter_by(usuario_id=user_id).all()
    
    todos = list(map(lambda item: item.serialize(), todos_to))

    print(todos)
    response_body = {
        "msg": "OK",
        "user": user_id,
        "todos": todos
    }
    return jsonify(response_body), 200


@api.route('/actividad', methods=['POST'])
def set_todo ():

    exp_id = request.json.get("exp_id", None)
    user_id = request.json.get("user_id", None)



    todo = Todos(usuario_id=user_id, experiencias_id=exp_id)

    db.session.add(todo)
    db.session.commit()

    response_body = {
        "msg": "OK"
    }
    return jsonify(response_body), 200



@api.route('/deleteTodo', methods=['POST'])
def delete_todo ():

    todo_id = request.json.get("todo_id", None)

    todo = Todos.query.get(todo_id)
    
    db.session.delete(todo)
    db.session.commit()

    response_body = {
        "msg": "OK"
    }
    return jsonify(response_body), 200



@api.route('/getExp', methods=['POST'])
def get_one_exp ():

    exp_id = request.json.get("exp_id", None)

    exp = Experiencias.query.get(exp_id)
    
    exp_to = exp.serialize()

    response_body = {
        "msg": "OK",
        "exp": exp_to
    }
    return jsonify(response_body), 200


@api.route('/likear', methods=['POST'])
def likeando ():

    exp_id = request.json.get("exp_id", None)
    user_id = request.json.get("user_id", None)



    like = Likes(usuario_id=user_id, experiencias_id=exp_id)

    db.session.add(like)
    db.session.commit()

    response_body = {
        "msg": "Le has da'o like"
    }
    return jsonify(response_body), 200



@api.route('/likes', methods=['POST'])
def get_post_likes ():

    exp_id = request.json.get("exp_id", None)

    

    likes_to = Likes.query.filter_by(experiencias_id=exp_id).count()
    
    return jsonify(likes_to), 200