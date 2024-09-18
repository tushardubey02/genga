import pandas as pd
import numpy as np

def show() -> dict:
    df = pd.read_csv('/Users/tushardubey/Personal Projects/genga/genga-app/data/anime.csv')
    random_index = np.random.randint(1, 201)  # Random number between 1 and 200
    selection = df.iloc[random_index]  # Select the row at the random index
    print(selection)   # Print the selected row
    return selection.to_dict()  # Convert the row to a dictionary

# show()