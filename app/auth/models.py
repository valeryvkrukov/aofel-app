import os
from app import db

class Users(db.Model):
    __tablename__ = "users"

    id = db.Column('user_id', db.Integer, primary_key=True)
    username = db.Column(db.String(24))
    password = db.Column(db.String(64))

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def __init__(self, username, password):
        self.username = username
        self.password = password

    def __repr__(self):
        return "<User: Username - {}; password - {};>".format(self.username, self.password)

class InvalidToken(db.Model):
    __tablename__ = "invalid_tokens"

    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String)

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    @classmethod
    def is_invalid(cls, jti):
        query = cls.query.filter_by(jti=jti).first()
        return bool(query)