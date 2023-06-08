from app import db
from app.auth.models import Users
from bcrypt import hashpw, gensalt, checkpw 
from base64 import b64encode 
from hashlib import sha256

def get_users():
    users = Users.query.all()

    return [{'id': u.id, 'username': u.username, 'password': u.password} for u in users]

def get_user(uid):
    users = Users.query.all()
    user = list(filter(lambda x: x.id == uid, users))[0]
    
    return {'id': user.id, 'username': user.username, 'password': user.password}

def add_user(username, password):
    if username and password :
        try:
            user = Users(username, password)
            user.save()

            return True
        except Exception as e:
            print(e)

            return False
    else:
        return False

def remove_user(user_id):
    if user_id:
        try:
            user = Users.query.get(user_id)
            db.session.delete(user)
            db.session.commit()

            return True
        except Exception as e:
            print(e)

            return False
    else:
        return False

def encrypt_pwd(password):
    return hashpw(b64encode(sha256(password.encode()).digest()), gensalt()).decode()


def check_pwd(pass_a, pass_b):
    """ 
    Check whether password hashed matches:
        * arg pass_a** password to check
        * arg pass_b** original hashed password
    """
    return checkpw(b64encode(sha256(pass_a.encode()).digest()), pass_b.encode())
