import pandas as pd
import numpy as np

confirmed_cases = pd.read_csv(
    "dataset/confirmed_cases.csv")
confirmed_cases = confirmed_cases.drop(
    ["Province/State", "Lat", "Long"], axis=1)

duplicated = confirmed_cases[confirmed_cases.duplicated(["Country/Region"])]
dup_country_list = []
dup_country_list = set(duplicated['Country/Region'])

confirmed_cases.set_index("Country/Region")

confirmed_cases = pd.read_csv(
    "dataset/confirmed_cases.csv", index_col="Country/Region")
confirmed_cases = confirmed_cases.drop(
    ["Province/State", "Lat", "Long"], axis=1)

country_cases = {}
for country in dup_country_list:
    temp_matrix = np.matrix(confirmed_cases.loc[country])
    print(temp_matrix)
    res_mat = np.zeros(temp_matrix[0].shape)
    for mats in temp_matrix:
        res_mat += mats
    country_cases[country] = res_mat[0]

confirmed_cases = confirmed_cases.drop(dup_country_list)

new_df = pd.DataFrame.from_dict(country_cases, orient="index")
new_df.columns = confirmed_cases.columns
confirmed_cases = confirmed_cases.append(new_df)

countries = pd.read_csv("dataset/countryFinal.csv", index_col="index")
country_dict = {countries["Name"][i]: countries["Code"][i]
                for i in range(len(countries))}

confirmed_cases.to_csv("dataset/final.csv")
confirmed_cases = pd.read_csv("dataset/final.csv")

for i in range(len(confirmed_cases)):
    try:
        confirmed_cases["Unnamed: 0"][i] = country_dict[confirmed_cases["Unnamed: 0"][i]]
    except KeyError:
        pass

confirmed_cases.to_csv('dataset/final.csv')
