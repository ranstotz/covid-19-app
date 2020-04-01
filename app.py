from flask import jsonify, make_response
import os
from flask import Flask, jsonify, render_template, send_from_directory

from server.covid_data import get_state_data, get_country_data

counter = 0

app = Flask(__name__, static_folder='./client/dist',
            template_folder='./client/dist')

# TODO: objects outside of functions are not safe/consistent
# since flask has multiple processes running (gunicorn)
# therefore, either make multiple calls for same data,
# or return most or all relevant data in as few calls as possible
# Quickly transform Confirmed and Deaths in two calls. Easy peasy


@app.route('/app_hits_per_script')
def app_hits():
    global counter
    counter += 1
    return "Total visits: {}".format(counter)


@app.route('/api/country-data')
def country_data():
    country_payload = get_country_data()
    return jsonify(country_payload)


@app.route('/api/state-data')
def state_data():
    state_payload = get_state_data()
    return jsonify(state_payload)

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

@app.route('/api/covid-19-confirmed')
def confirmed_cases():
    ''' route to get json of confirmed cases from JHU '''
    return

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
