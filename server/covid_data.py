# Class to read in data
import pandas as pd


class CovidData():
    def __init__(self):
        self.confirmed_src = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv'
        self.confirmed_df = ''

    def get_confirmed_dataframe(self):
        self.confirmed_df = pd.read_csv(self.confirmed_src)
        return self.confirmed_df


if __name__ == "__main__":
    # to test this script
    covid_instance = CovidData()
    df = covid_instance.get_confirmed_dataframe()
    print(df.head())
