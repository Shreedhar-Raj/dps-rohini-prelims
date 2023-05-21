import numpy as np
import pandas as pd
import pickle
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
import matplotlib.pyplot as plt

data = pd.read_csv("/Users/aarush/Documents/Coding/dps-rohini-prelims/backend/train.csv")

k = 20
kmeans = KMeans(n_clusters=k)

kmeans.fit(data)
labels = kmeans.labels_
centers = kmeans.cluster_centers_


filename = "kmeans_model.pkl"
with open(filename, 'wb') as file:
    pickle.dump(kmeans, file)
