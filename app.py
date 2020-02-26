from flask import Flask, render_template, make_response
from py_auth import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    resp = make_response(render_template("index.html"))
    resp.set_cookie('X-Qlik-Session-Mashup',getSession(),domain='.tripp.lan',samesite=False)
    return resp


if __name__ == '__main__':
    app.run(debug=True)
