# Class to read in data
import pandas as pd
from collections import OrderedDict
import sys


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

    target_countries = ['US', 'China', 'Italy', 'Korea, South']
    target_states = ['Pennsylvania', 'New Jersey', 'New York', 'California']

    # loop through all the days to aggregate the data

    state_src = 'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv'

    df = pd.read_csv(state_src)
    print("size of this thing: ", sys.getsizeof(df))
    print(df.head())
    # https://datatofish.com/select-rows-pandas-dataframe/
    # use above to get my rows, then make a json

    target = 'Pennsylvania'
    penn = df.loc[(df['state'] == target)]

    total_confirmed = penn['cases'].sum()
    total_deaths = penn['deaths'].sum()

    payload = {}

    for state in target_states:
        tmp_df = df.loc[(df['state'] == state)]
        tmp_payload = {state: tmp_df.to_dict(orient='split')}
        payload.update(tmp_payload)

    for k, v in payload.items():
        print(k, " : ", v)
