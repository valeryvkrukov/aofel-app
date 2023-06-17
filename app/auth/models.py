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
    jti = db.Column(db.String(64))

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    @classmethod
    def is_invalid(cls, jti):
        query = cls.query.filter_by(jti=jti).first()
        return bool(query)

class TestItems(db.Model):
    __tablename__ = "test_items"

    id = db.Column(db.Integer, primary_key=True)
    step_name = db.Column(db.String(64))
    instructions = db.Column(db.String(256))
    excepted_result = db.Column(db.String(128))
    actual_result = db.Column(db.String(128))

    def save(self):
        db.session.add(self)
        db.session.commit()

    def __init__(self, step_name, instructions="", excepted_result="", actual_result=""):
        self.step_name = step_name
        self.instructions = instructions
        self.excepted_result = excepted_result
        self.actual_result = actual_result

    def __repr__(self):
        return "<Test: step_name - {}; instructions - {}; excepted_result - {}; actual_result - {};>".format(
            self.step_name, 
            self.instructions,
            self.excepted_result, 
            self.actual_result
        )