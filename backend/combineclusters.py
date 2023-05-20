import pandas as pd

# Create an empty DataFrame to store the concatenated data
concatenated_data = pd.DataFrame()

# Loop through the file numbers (assuming the files are named file1.csv, file2.csv, ..., file10.csv)
for i in range(1, 11):
    # Create the file path for each CSV file
    file_path = f"MOCK_DATA-({i}).csv"
    
    # Read the current CSV file
    current_data = pd.read_csv(file_path)
    
    # Concatenate the current data with the previous data
    concatenated_data = pd.concat([concatenated_data, current_data])

# Save the concatenated data as "clusteringdata.csv"
concatenated_data.to_csv("clusteringdata.csv", index=False)

print("Concatenation complete. clusteringdata.csv has been saved.")