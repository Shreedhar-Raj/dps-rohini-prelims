# get_predictions.py
import pickle
import numpy as np
loaded_model = None
# Load the model from the file
with open("/Users/aarush/Documents/Coding/dps-rohini-prelims/backend/kmeans_model.pkl", 'rb') as file:
    loaded_model = pickle.load(file)
arr = np.array([[39, 46, 0, 1, 0, 1, 9 ], [2, 46, 1, 1, 1, 1, 10 ], [39, 46, 0, 1, 0, 1, 9 ]])
def get_cluster(input_user_data):
  prediction = loaded_model.predict(input_user_data)
  print(prediction)
  return prediction

get_cluster(arr)