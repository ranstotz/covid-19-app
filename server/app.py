from flask import Flask, Blueprint, request, render_template
from config.index import Config
from app import users

app = Flask(__name__, static_folder-'../client/build')

##
# View route
##

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
  '''Return index.html for all non-api routes'''
  #pylint: disable=unused-argument
  return send_from_directory(app.static_folder, 'index.html')




