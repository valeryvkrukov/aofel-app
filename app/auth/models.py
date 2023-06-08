import os
from app import db

class Users(db.Model):
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