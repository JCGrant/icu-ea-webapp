from server import app, society_api
from flask import render_template, jsonify

def member_name(member):
    return member['FirstName'] + ' ' + member['Surname']

@app.route('/members')
def get_members():
    members = society_api.list_members()
    return jsonify({'members': members})

@app.route('/')
def home():
    return render_template('index.html')
