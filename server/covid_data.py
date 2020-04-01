# Class to read in data
import pandas as pd
from collections import OrderedDict
import sys


def get_country_data():

    # target array: ["date", "state", "fips", "cases", "deaths"]
    cases_url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv'
    deaths_url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv'

    countries = ['US', 'Italy', 'China', 'Korea, South', 'Canada']
    cases_df = pd.read_csv(cases_url)
    deaths_df = pd.read_csv(deaths_url)
    payload = {}
    for country in countries:
        # reduce dataframe to only the country
        tmp_cases_df = cases_df.loc[(cases_df['Country/Region'] == country)]
        tmp_deaths_df = deaths_df.loc[(deaths_df['Country/Region'] == country)]
        # 4 is the first date column
        sum_cases = tmp_cases_df.iloc[:, 4:].sum().to_dict()
        sum_deaths = tmp_deaths_df.iloc[:, 4:].sum().to_dict()

        column_array = ['date', 'country', 'fips', 'cases', 'deaths']
        data_array = []
        for k, v in sum_cases.items():

            data_array.append([k, country, 'null', v, sum_deaths[k]])

        payload.update(
            {country: {"columns": column_array, "data": data_array}}
        )
    return payload


def get_state_data():
    target_states = ['Pennsylvania', 'New Jersey', 'New York', 'California']
    state_src = 'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv'

    df = pd.read_csv(state_src)
    state_payload = {}
    state_payload = OrderedDict()

    for state in target_states:
        tmp_df = df.loc[(df['state'] == state)]
        tmp_payload = {state: tmp_df.to_dict(orient='split')}
        state_payload.update(tmp_payload)

    return state_payload


if __name__ == "__main__":

    print("nothing")
    # print(get_country_data())
    # print(get_state_data())

    # target_countries = ['US', 'China', 'Italy', 'Korea, South']
    # target_states = ['Pennsylvania', 'New Jersey', 'New York', 'California']

    # # loop through all the days to aggregate the data

    # state_src = 'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv'

    # df = pd.read_csv(state_src)
    # print("size of this thing: ", sys.getsizeof(df))
    # print(df.head())
    # # https://datatofish.com/select-rows-pandas-dataframe/
    # # use above to get my rows, then make a json

    # target = 'Pennsylvania'
    # penn = df.loc[(df['state'] == target)]

    # total_confirmed = penn['cases'].sum()
    # total_deaths = penn['deaths'].sum()

    # payload = {}

    # for state in target_states:
    #     tmp_df = df.loc[(df['state'] == state)]
    #     tmp_payload = {state: tmp_df.to_dict(orient='split')}
    #     payload.update(tmp_payload)
