from sklearn.cluster import KMeans
import numpy as np
import pandas as pd
import pickle
data = pd.read_csv("train.csv")

k = 20
kmeans = KMeans(n_clusters=k)

kmeans.fit(data)
labels = kmeans.labels_
centers = kmeans.cluster_centers_

filename = "kmeans_model.pkl"
with open(filename, 'wb') as file:
    pickle.dump(kmeans, file)