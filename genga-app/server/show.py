import pandas as pd
import numpy as np

def show() -> dict:
    df = pd.read_csv('../genga-app/data/anime.csv')
    selection = df.iloc[0] # Select the second row of the dataframe
    print(selection)   # Print the dataframe
    return selection.to_dict() # Convert the dataframe to a dictionary

