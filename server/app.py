from flask import Flask, Blueprint, request, render_template
from config.index import Config
from app import users

##
# View route
##

def create_app(config_object=Config):
    """ Factory function to start application  """
    app = Flask(__name__.split('.')[0], static_folder='../client/build/static', template_folder="../client/build")

    app.url_map.strict_slashes = False

    return app


