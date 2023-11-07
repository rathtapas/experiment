import matplotlib.pyplot as plt
import pandas as pd

data = [{"ar1":0.9,"interpolatedAr2":1.37,"area":36000},{"ar1":0.9,"interpolatedAr2":1.34,"area":34125},{"ar1":1.2,"interpolatedAr2":0.99,"area":12000},{"ar1":1.06,"interpolatedAr2":1.02,"area":30600},{"ar1":0.8,"interpolatedAr2":1.48,"area":18000},{"ar1":0.9,"interpolatedAr2":1.35,"area":36000},{"ar1":0.89,"interpolatedAr2":1.39,"area":32300},{"ar1":1.15,"interpolatedAr2":1.01,"area":19500},{"ar1":1.13,"interpolatedAr2":0.99,"area":25500}]
df = pd.DataFrame(data)
df['ar2'] = 1/df['interpolatedAr2']
df.plot(kind='scatter', x='ar1', y='ar2', s=df['area']/1000, alpha=0.5)
plt.show()
import numpy as np

# Obtain slope and intercept of linear regression line
m, b = np.polyfit(df['ar1'], df['interpolatedAr2'], 1)

# Plot scatter plot
df.plot(kind='scatter', x='ar1', y='interpolatedAr2', s=df['area']/1000, alpha=0.5)

# Plot linear regression line
# plt.plot(df['ar1'], m*df['ar1'] + b, color='red')

plt.show()
