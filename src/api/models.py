from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()



class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    username = db.Column(db.String(120), unique=True, nullable=True)
    nombre = db.Column(db.String(120), unique=False, nullable=True)
    apellido = db.Column(db.String(120), unique=False, nullable=True)
    edad = db.Column(db.Integer, unique=False, nullable=True)
    pais = db.Column(db.String(120), unique=False, nullable=True)
    image_url =  db.Column(db.String(120), unique=False, nullable=True)
    
    experiencias = db.relationship('Experiencias', backref='usuario', lazy=True)
    invitado = db.relationship('Invitados', backref='usuario', lazy=True)
    eventos = db.relationship('Eventos', backref='usuario', lazy=True)
    todos = db.relationship('Todos', backref='usuario', lazy=True)

    def __repr__(self):
        return f'<Usuario {self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "edad": self.edad,
            "pais": self.pais,
            "image_url": self.image_url
        }



class Experiencias(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(120), unique=False, nullable=False)
    lugar = db.Column(db.String(120), unique=False, nullable=False)
    fecha = db.Column(db.String(80), unique=False, nullable=True)
    outdoor = db.Column(db.Boolean(), unique=False, nullable=True)
    indoor = db.Column(db.Boolean(), unique=False, nullable=True)
    anywhere = db.Column(db.Boolean(), unique=False, nullable=True)
    description = db.Column(db.String(250), unique=False, nullable=False)
    image_url = db.Column(db.String(250), unique=False, nullable=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'),
        nullable=False)
    todos = db.relationship('Todos', backref='experiencias', lazy=True)
    

    def __repr__(self):
        return f'<Experiencias {self.titulo}>'

    def serialize(self):
        return {
            "id": self.id,
            "titulo": self.titulo,
            # do not serialize the password, its a security breach
            "fecha": self.fecha,
            "descripcion": self.description,
            "lugar": self.lugar,
            "outdoor": self.outdoor,
            "indoor": self.indoor,
            "anywhere": self.anywhere,
            "exp_owner": self.usuario_id,
            "image_url": self.image_url
        }


class Eventos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(120), unique=False, nullable=False)
    lugar = db.Column(db.String(120), unique=False, nullable=False)
    fecha = db.Column(db.String(80), unique=False, nullable=False)
    outdoor = db.Column(db.Boolean(), unique=False, nullable=True)
    indoor = db.Column(db.Boolean(), unique=False, nullable=True)
    anywhere = db.Column(db.Boolean(), unique=False, nullable=True)
    description = db.Column(db.String(250), unique=False, nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'),
        nullable=False)
    invitado = db.relationship('Invitados', backref='eventos', lazy=True)

    def __repr__(self):
        return f'<Eventos {self.titulo}>'

    def serialize(self):
        return {
            "id": self.id,
            "titulo": self.titulo,
            # do not serialize the password, its a security breach
            "fecha": self.fecha,
            "descripcion": self.description,
            "lugar": self.lugar,
            "outdoor": self.outdoor,
            "indoor": self.indoor,
            "anywhere": self.anywhere,
            "eventOwner": self.usuario_id
        }


class Invitados(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'),
        nullable=False)
    eventos_id = db.Column(db.Integer, db.ForeignKey('eventos.id'),
        nullable=False)

    def __repr__(self):
        return f'<Invitados {self.id}>'

    def serialize(self):
        return {
            "id": self.id
        }

class Todos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'),
        nullable=False)
    experiencias_id = db.Column(db.Integer, db.ForeignKey('experiencias.id'),
        nullable=False)

    def __repr__(self):
        return f'<Todos {self.id}>'

    def serialize(self):
        return {
            "todo_id": self.id,
            "usuario_id": self.usuario_id,
            "experiencias_id": self.experiencias_id,
            "exp": Experiencias.query.get(self.experiencias_id).serialize()
        }


class Likes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'),
        nullable=False)
    experiencias_id = db.Column(db.Integer, db.ForeignKey('experiencias.id'),
        nullable=False)

    def __repr__(self):
        return f'<Likes {self.id}>'

    def serialize(self):
        return {
            "like_id": self.id,
            "usuario_id": self.usuario_id,
            "experiencias_id": self.experiencias_id
        }

