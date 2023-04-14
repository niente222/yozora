from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route("/yozora")
def html_page():
    return render_template('marry.html')

if __name__ == '__main__':
    app.run()
