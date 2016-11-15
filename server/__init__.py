from flask import Flask
from icu_ea_api import ICUEActivitiesAPI
import os

app = Flask(__name__)

CSP_CODE = os.environ['CSP_CODE']
API_KEY = os.environ['API_KEY']
YEAR = os.environ['YEAR']
society_api = ICUEActivitiesAPI(CSP_CODE, API_KEY, YEAR)

from .views import *
