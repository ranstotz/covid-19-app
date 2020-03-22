import os
from flask import Flask, jsonify, render_template, send_from_directory
# import pandas as pd


app = Flask(__name__, static_folder='./client/dist',
            template_folder='./client/dist')

# api routes
@app.route('/api/items')
def items():
    '''Sample API route for data'''
    # return jsonify([{'title': 'A'}, {'title': 'B'}])
    return jsonify({'title': 'A'})


# @app.route('/api/covid-19-data/worldwide-cases')
# def total_cases():
#     ''' Worldwide covid-19 cases over dates '''
#     data = pd.read_csv(
#         'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/who_covid_19_situation_reports/who_covid_19_sit_rep_time_series/who_covid_19_sit_rep_time_series.csv')
#     return jsonify({'title': 'A'})


# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    ''' serve index.html for non-api routes '''
    # if statement needed to accurately serve supporting files to index.html
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        # return send_from_directory(app.static_folder, 'index.html')
        return render_template("index.html")


if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)
