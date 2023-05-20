# get_predictions.py
import pickle
loaded_model = None
# Load the model from the file
with open("kmeans_model.pkl", 'rb') as file:
    loaded_model = pickle.load(file)

def get_cluster(input_user_data):
  prediction = loaded_model.predict(input_user_data)
  print(prediction)
  return prediction