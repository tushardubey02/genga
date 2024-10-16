import pandas as pd
import numpy as np

def get_show() -> dict:
    df = pd.read_csv("S:\\Code\\genga\\genga-app\\data\\anime3.csv")
    random_index = np.random.randint(1, 500)  # Random number between 1 and 200
    selection = df.iloc[random_index]  # Select the row at the random index
    print(selection)   # Print the selected row
    return selection.to_dict()  # Convert the row to a dictionary

# get_show()