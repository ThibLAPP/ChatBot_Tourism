from flask import Flask, jsonify, request, render_template, make_response
import json
import pandas as pd
import numpy as np

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/test', methods=['GET', 'POST'])
def testfn():
	if request.method =='GET':
		message = {'greeting':'Hello from Flask!'}
		return jsonify(message)
	if request.method == 'POST':
		print(request.get_json())
		return 'Sucesss', 200

@app.route('/recomandation', methods=['GET', 'POST'])
def recofn():
	if request.method =='GET':
		print(request)
		return message
	if request.method == 'POST':
		req = request.data
		req_string = req.decode("utf-8")
		req_json = json.loads(req_string)

		best_recom = reco(req_json["intent"])
		print(best_recom)
		k = 0
		reco_perso = best_recom[k][0]
		for j in range(3):
			for i in req_json["intent"]:
				if reco_perso == i:
					k = k + 1
					reco_perso = best_recom[k][0]

		res = make_response(jsonify({"message": reco_perso}), 200)
		return res







data_normal = pd.read_excel("data_normalised.xlsx")

data = pd.read_excel("countries_attributes.xlsx")

region_attributes = set()
touristic_attributes = set()
revenue_attributes = set()
climate_attributes = set()
for index in range(data.shape[0]):
    region_attributes.add(data['Region'][index])
    touristic_attributes.add(data['Touristic rank'][index])
    revenue_attributes.add(data['Revenue'][index])
    climate_attributes.add(data['Climate'][index])

all_attributes = region_attributes | touristic_attributes | revenue_attributes | climate_attributes



def country_preference(top_countries):
    rating_countries(top_countries)
    uservector = []
    for a in all_attributes:
        uservector.append((data_normal[a]*data_normal['rating']).sum())
    
    return uservector

def rating_countries(top_countries):
    for index in range(data_normal.shape[0]):
        data_normal["rating"][index] = 0.0
        if data_normal["Country"][index] == top_countries[0]:
            data_normal["rating"][index] = 5.0
        if data_normal["Country"][index] == top_countries[1]:
            data_normal["rating"][index] = 4.0
        if data_normal["Country"][index] == top_countries[2]:
            data_normal["rating"][index] = 3.5

def country_vector(countryTitle):
  vector = []
  for i in range(len(data_normal)):
    if data_normal.Country[i] == countryTitle:
      for a in all_attributes:
        vector.append(data_normal[a][i])
  return vector

def cos_pred(user_vector, country_vector):
  result = 0
  for i in range(len(user_vector)):
    result += user_vector[i] * country_vector[i]
  result /= len(user_vector) * len(country_vector)
  return result

def reco(userId):
  vector_user = country_preference(userId)
  best_recom = [["recom 1:", 0], ["recom 2:", 0], ["recom 3:", 0], ["recom 4:", 0]]
  for i in range(len(data_normal.Country)):
    country_vector_returned = country_vector(data_normal["Country"][i])
    cos = cos_pred(vector_user, country_vector_returned)
    #print(cos)
    recom_vect = [data_normal["Country"][i], cos]
    undone = True
    for j in best_recom:
      if j[1] < cos and undone:
        j[0] = recom_vect[0]
        j[1] = recom_vect[1]
        undone = False
  return best_recom


