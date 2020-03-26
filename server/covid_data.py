# Class to read in data
import pandas as pd
import sys

'''
json shape

{
    'aggregate_country_data': [
        'us': {
            'deaths': 39,
            'confirmed': 300
        },
        'italy': {
            'deaths': 308:
            'confirmed': 1003
        }
    ],
    'aggregate_state_data': [
        'pennsylvania': {
            'deaths': 3:
            'confirmed': 38
        }, 
        'new jersey' : {
            'deaths': 9:
            'confirmed': 101
        }
    ],
    'time_series_country_data': [
        'US': [
            # note that the confirmed are only for that day and need to be calculated
            {'day': '02-24-2020', 'confirmed': '3', 'deaths': '0'},
            {'day': '02-25-2020', 'confirmed': '5', 'deaths': '0'}
        ],
        'China': [
            {'day': '02-24-2020', 'confirmed': '10', 'deaths': '1'},
            {'day': '02-25-2020', 'confirmed': '17', 'deaths': '2'}
        ]
    ],
    'time_series_state_data': [
        'pennsylvania': [
            # note that the confirmed are only for that day and need to be calculated
            {'day': '02-24-2020', 'confirmed': '3', 'deaths': '0'},
            {'day': '02-25-2020', 'confirmed': '5', 'deaths': '0'}
        ],
        'new jersey': [
            {'day': '02-24-2020', 'confirmed': '10', 'deaths': '1'},
            {'day': '02-25-2020', 'confirmed': '17', 'deaths': '2'}
        ]
    ]
}
'''

if __name__ == "__main__":

    aggregate_countries = ['US', 'China', 'Italy', 'Korea, South']
    aggregate_states = ['Pennsylvania', 'New Jersey', 'New York', 'California']

    # loop through all the days to aggregate the data

    day_src = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-25-2020.csv'
    day_src = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-14-2020.csv'

    df = pd.read_csv(day_src)
    print("size of this thing: ", sys.getsizeof(df))
    print(df.head())
    # https://datatofish.com/select-rows-pandas-dataframe/
    # use above to get my rows, then make a json

    target = 'Pennsylvania'
    try:
        penn = df.loc[(df['Province_State'] == target)]
    except:
        # inconsistency with their csv keys...
        pass
    try:
        penn = df.loc[(df['Province/State'] == target)]
    except:
        # inconsistency with their csv keys...
        pass

    total_confirmed = penn['Confirmed'].sum()
    total_deaths = penn['Deaths'].sum()

    print("total confirmed: ", total_confirmed, total_deaths)
    print(penn.head())

    print(payload)
