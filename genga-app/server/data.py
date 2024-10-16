import pandas as pd
import numpy as np

def get_show() -> dict:
    df = pd.read_csv("S:\\Code\\genga\\genga-app\\data\\anime3.csv")
    while True:
        random_index = np.random.randint(1, len(df))  # Random number between 1 and the number of rows in the dataframe
        selection = df.iloc[random_index]  # Select the row at the random index
        if selection["English name"] != "Unknown":  # Skip if the English name is "Unknown"
            print(selection)  # Print the selected row
            return selection.to_dict()  # Convert the row to a dictionary


# get_show()