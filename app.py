
from flask import Flask, flash, redirect, render_template, request, session


# Configure application
app = Flask(__name__)




# --------------------------------------------------------------------------------- /
@app.route("/")
def index():
    return render_template("index.html")

# --------------------------------------------------------------------------------- /Dany
@app.route("/Dany")
def Dany():
    return render_template("Dany.html")