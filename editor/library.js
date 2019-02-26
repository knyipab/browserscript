var library = {
  "<div style='width: 40px; height: 40px; background-image: url(data:image/png;base64,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); background-repeat: no-repeat; background-position: center;' ></div>": {
    "import": {
      "import…": "from datetime import date\nfrom pandas_datareader import data\nimport matplotlib as mpl\nimport matplotlib.pyplot as plt\n%matplotlib inline\nimport pandas as pd\nimport numpy as np\nimport scipy\nimport random\nfrom scipy import stats\nimport json\nimport statsmodels.formula.api as smf\nimport statsmodels.stats.stattools\nimport statsmodels as sm\nfrom statsmodels.tsa.seasonal import seasonal_decompose\nmpl.pyplot.style.use('ggplot')\npd.DataFrame.range = pd.Series.range = np.range = lambda x: x.max() - x.min()\npd.DataFrame.iq_range = pd.Series.iq_range = np.iq_range = lambda x: x.quantile(0.75) - x.quantile(0.25)\npd.DataFrame.q1= pd.Series.q1 = np.q1 = lambda x: x.quantile(0.25)\npd.DataFrame.q2 = pd.Series.q2 = np.q2 = lambda x: x.quantile(0.5)\npd.DataFrame.q3 = pd.Series.q3 = np.q3 = lambda x: x.quantile(0.75)\npd.DataFrame.coeff_var = pd.Series.coeff_var = np.coeff_var = lambda x, ddof=1: np.std(x, ddof=ddof) / np.mean(x)\npd.DataFrame.z_score = pd.Series.z_score = np.z_score = lambda x, index, ddof=1: ((x.ix[index] if type(x) == pd.DataFrame else x[index]) - x.mean()) / x.std(ddof=ddof)\npd.DataFrame.crosstab = pd.DataFrame.contab = lambda x, c1, c2: pd.crosstab(x[c1], x[c2])\npd.DataFrame.chi2 = lambda x, c1=None, c2=None, correction=False: stats.chi2_contingency(x.crosstab(c1, c2), correction=correction)[0] if c1 != None else stats.chi2_contingency(x, correction=correction)[0]\npd.DataFrame.cramers_v = lambda x, c1=None, c2=None, correction=False: np.sqrt(x.chi2(c1=c1, c2=c2, correction=correction) / (x.sum().sum() * min(x.columns.size - 1, x.index.size - 1)))\npd.DataFrame.cov = lambda x, c1, c2, ddof=1: np.cov(x[c1], x[c2], ddof=ddof)[0,1]\npd.DataFrame.corrcoef = lambda x, c1, c2, ddof=1: np.corrcoef(x[c1], x[c2], ddof=ddof)[0,1]\npd.options.display.max_rows = 10"
    },
    "File": {
      "File Binary": "open('filename', mode='r')",
      "CSV(read)": "pd.read_csv('filename.csv', header=0)",
      "CSV(write)": ".to_csv('filename.csv')",
      "Excel(read)": "pd.ExcelFile('filename.xls').parse('Sheet1')",
      "JSON(str2dict)": "json.loads('') #=> dict",
      "JSON(dict2str)": "json.dumps({}) #=> string",
      "Pickle(write)": ".save('filename')",
      "Pickle(read)": "pd.load('filename')"
    },
    "np.A": {
      "Init": "np.array([],\n dtype=None)",
      "Select": "[rCond, cCond]",
      "Sort": ".sort()",
      "Sampling": "np.random.choice(A, size=None, replace=True)",
      "Apply": "ufunc=np.vectorize(func)\nufunc(A)",
      "Matrix Transpose": ".T",
      "Matrix Multiply": "np.dot(A, B)",
      "Matrix Determinant": "np.linalg.det(A)",
      "Matrix Inverse": "np.linalg.inv(A)",
      "Linear Solve (AX=B)": "np.linalg.solve(A, B)"
    },
    "pd.S": {
      "Init": "pd.Series([], index=None)",
      "Select": "[Cond]",
      "Plot": ".plot(kind='line', figsize=None, grid=None, legend=None, rot=None, xticks=None, yticks=None, xlim=None, ylim=None, fontsize=None, label=None)",
      "Frequency": ".value_counts(normalize=False, sort=True, ascending=False)",
      "Sampling": ".sample(n=None, frac=None, replace=False, axis=None)",
      "Apply": ".map(func)",
      "Sort(data)": ".order(ascending=True)",
      "Sort(index)": ".sort_index()",
      "Duplicate": ".duplicated()\n.drop_duplicates()",
      "Reindex": ".reindex([])",
      "NaN": ".dropna()\n.fillna(value)"
    },
    "pd.DF": {
      "Init": "pd.DataFrame({}, columns=None, index=None)",
      "Select(col)": "[Cond]",
      "Select(r&c)": ".loc[rCond, cCond]",
      "Plot": ".plot(kind='line', figsize=None, stacked=False, grid=None, legend=None, rot=None, xticks=None, yticks=None, xlim=None, ylim=None, fontsize=None, label=None)",
      "Sampling": ".sample(n=None, frac=None, replace=False, axis=None)",
      "Apply(r/c)": ".apply(func, axis=0)",
      "Apply(element)": ".applymap(func)",
      "Sort(by data)": ".sort_values(by='col_name')",
      "Sort(row names)": ".sort_index()",
      "Sort(col names)": ".sort_index(axis=1)",
      "Transpose": ".T",
      "Duplicate": ".duplicated()\n.drop_duplicates()",
      "Reindex(row)": ".reindex([])",
      "Reindex(col)": ".reindex(columns=[])",
      "NaN": ".dropna(axis=0, how='any')"
    },
    "pyplot": {
      "figure": "fig = plt.figure(figsize=(w, h))",
      "subplot": "ax = plt.subplot(nrows=, ncols=, plot_number=)",
      "subplots": "fig, axs = plt.subplots(nrows=, ncols=, sharex=False, sharey=False)",
      "annotate": "ax.annotate(s=\"\", xy=(,), xytext=(,), arrowprops=dict(facecolor=\"black\", arrowstyle=\"simple\", connectionstyle=\"angle3\"))",
      "xticks": "plt.xticks(x, ticks)",
      "legend": "plt.legend()",
      "grid": "plt.grid()",
      "xlabel": "plt.xlabel([])",
      "ylabel": "plt.ylabel([])",
      "title": "plt.title('')",
      "axvline": "plt.axvline(x=0, color='b')",
      "axhline": "plt.axhline(x=0, color='b')",
      "bar": "plt.bar(x, height, width=0.8, yerr=None, label='')",
      "pie": "plt.pie(x, autopct=None, colors=None, explode=None)",
      "hist": "plt.hist([1, 2, 3], bins=10, cumulative=False, normed=None)",
      "plot": "plt.plot(x, y, fmt='-')",
      "scatter": "plt.scatter(x, y, s=20)",
      "boxplot": "plt.boxplot(x)"
    },
    "Statistics": {
      "Mean, Mode, Median": ".mean()\n.mode()\n.median()",
      "Range*, Quantile, IQ Range*": ".range()\n.quantile(q=0.5)\n.iq_range()",
      "Variance": ".var(ddof=1)",
      "Std Deviation": ".std(ddof=1)",
      "Coeff of Var*, Z score*": ".coeff_var(ddof=1)\n.z_score(index, ddof=None)",
      "Contingency*": ".crosstab(c1, c2)",
      "Chi2*": ".chi2(c1, c2, correction=True)",
      "Cramer's V*": ".cramers_v(c1, c2, correction=True)",
      "Covariance*": ".cov(c1, c2, ddof=None)",
      "Correlation Coeff*": ".corrcoef(c1, c2, ddof=None)"
    },
    "Distribution": {
      "Confidence Interval": "stats.norm.interval(0.95, .mean(), .std(ddof=)/np.sqrt())",
      "Random Sampling": ".rvs(size=None)",
      "PMF": ".pmf(x)",
      "PDF": ".pdf(x)",
      "CDF": ".cdf(x)",
      "PPF": ".ppf(q)",
      "Custom Continuous Distribution": "class myDist(stats.rv_continuous):\n def _pdf(self,x):\n return ",
      "Discrete Uniform": "stats.randint(low=, high=)",
      "Contin. Uniform": "stats.uniform(loc=, scale=)",
      "Nomral": "stats.norm(loc=0, scale=1)"
    },
    "Models": {
      "Least Square": "lm = smf.ols(formula=\"y ~ x\", data=).fit()",
      "Summary": ".summary()",
      "Parameters": ".params",
      "Predict": ".predict({\"x\": })",
      "Confidence Interval": ".conf_int(alpha=0.05)",
      "P-Value": ".pvalues",
      "R-Squared": ".rsquared",
      "SSE": "(data['y'] - lm.predict(data)) ** 2).sum()",
      "RMSE": "np.sqrt(SSE/(len(data) - lm.df_model - 1))"
    },
    "TimeSeries": {
      "Seasonal Decompose": "sm.tsa.seasonal_decompose(x, model='additive', freq=1)"
    },
    "Math": {
      "Absolute": "np.abs(x), np.fabs(x), np.sgn(x)",
      "Square & Root": "np.sqrt(x), np.squre(x)",
      "Exponential": "np.exp(x)",
      "Logorithm": "np.log(x), np.log10(x)",
      "Round": "np.ceil(x), np.floor(x), np.rint(x)",
      "Fraction": "np.modf(x)",
      "Trigonometry": "np.sin(x), np.cos(x), np.tan(x)\nnp.sinh(x), np.cosh(x), np.tanh(x)\nnp.arcsin(x), np.arccos(x), np.arctan(x)",
      "Condition": "np.where(cond, tV, fV)",
      "Statistics": "np.mean(x), np.median(x), np.sum(x)\nnp.max(x), np.min(x)\nnp.std(x[, ddof=]), np.var(x)\n\nnp.diff(x, axis=)"
    }
  },
  "<div style='width: 40px; height: 40px; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAATCAYAAACKsM07AAAEI0lEQVR42pWUb2gbdRjHz+moBV/4t+2atllrNxQERVBwyNzbMRER+qJs7domW7dqwTcKBSHgdNDqmiYZSZMmbZqkyeWSuyR3l/v/J23d3hhw7yuIisrogW5WGbXN4+8uTZPWTusDz5vk8vk++T7P9zDsgBJv3WpR1eV3FH0lIWulNVHW74uStsmLyhYnKJtMUdqgGf6HAs2Vsnn6I4qiXvJ6vU3YYUpVVbu2vDqp6itbsloCUdFBkFRAYCjyMrBFEWhWAASHXL4IZI4BkqK3iCz9eSJBdjwUHAyWj8ra6hgCgwmWFASXNeBFBDfBnASMCWZ4yBc4oPKsCYZMtgDpTA7SRA5SOAnJJO50uVyP7YGXy+WjWmk1pWjLu+Da1JwgV4qc9BvLCuU8w0/TNN9PUMwbBEG9RZC5oXSG8qTT1NfJFPnrUjKzHU+kIR7HF1wuvSqi63ovmtq33w5eUCpFQd5gWfZF7JAVjeKnF2P4vcVYqrKwmJiyPlTUEo4mr0gWXDPB1tQcJ0X6+voetR46oz9+8oNl48T7JdS60TumGT1XVdSK0T0qG8cvi8bxUXHdNsJ92ucinogsJL4JR+LbodD8KQyB7+96LcjmIissL2X2jNZ3uxnBoXdMt/r5qypqBXquyNA9KqEWAYmA/ZIAXQ7ul3cnqJOhUPTe7Gx0AUOWbPM7F8KYF8IIG//470igCtcQWLMEeq4oCCzvwAWr7Zd46HJyYBthPgsE5im/P/IthqbearwQdH5rBwtoO5NX4fbLwjm7QzjXNSy83engvqrBOx1FsA2zZb8/fP3mzdBdDN31ujl57fzIPPvdQQKNk5vWNH79zAD/ngnvchaRAAsdw/SKzxf6wucL3sZQaJJWaApFoKzQMA8OFqjDTd/tTtFhdoeDdyLfN3fhIwy0D9HjXm9Q9ngCH2MkybyMErmOwJAhC0Bk8ig0+TUUliN1AaK57rlkLbTRc9MWsztGWGRP4c6HruCrMzP+n9xu95PW7zOZ3BkEf1BLI+rK0hLxYySSaq8JPAzeMPmfrYO085Nrvm632//9jRueU3tcwHHytRSe/QOlEappTEMshlei0VRybIpo2w/vcHJuNPHPNVvM7hzJr0196f99asr9yoFJnJ6ebkZwJRbHAaURotEkLESXKrNzie06vCrg84WXZjxBye6gLbhtmDbtgfYBcvw/Iz83l2wNhxMTkfn4ZjgcA//s4u7kNWvQhYDHMwsT1+fq8KE8tA3m/nr6/L+8VRvLfCsGAgHbtZno6brn1aV6vYHXJyd97WfHuaZjQ4W7JvzYxRxqCp67QCax/1VoyfWFVpe6Jwf92RfaLua2TXjbIAmtA2TlqX7izcMLnOWaENhAS0XNGMgSY98Tj7QMUndaB7JG60DGaLlAGM+eJ2TkwZG/Af8MOcuboLrbAAAAAElFTkSuQmCC); background-repeat: no-repeat; background-position: center;' ></div>": {
    "import": {
      "import…": "library(ggplot2)\nlibrary(predict)\nlibrary(scales)\nlibrary(xlsx)\nlibrary(rjson)\nlibrary(plyr)\noptions(repr.plot.width = 5, repr.plot.height = 5, repr.plot.res = 300)"
    },
    "File": {
      "File Binary": "file('filename', open='r')",
      "DAT(read)": "read.table('filename.dat', header = FALSE, sep = '')",
      "CSV(read)": "read.csv('filename.csv')",
      "CSV(write)": "write.csv(data,'filename.csv)'",
      "Excel(read)": "read.xlsx('filename.xlsx', sheetIndex = 1)",
      "JSON(read)": "as.data.frame(fromJSON(file = 'filename.json'))"
    },
    "data.frame": {
      "Init": "data.frame(colname1 = c (1:3), colname2 = c('A','B','C'), stringsAsFactors = FALSE)",
      "Select(col)": "$cName",
      "Select(r,c)": "[rCond, cCond]",
      "Bind": "rbind(data1, data2)"
    },
    "plot": {
      "plot": "plot(x, xlab=NULL, ylab=NULL, main=NULL)",
      "pie": "pie(x, labels = names(x), main=NULL)",
      "barplot": "barplot(height, names.arg=NULL, xlab=NULL, ylab=NULL, main=NULL)",
      "hist": "hist(x, main=NULL, xlab=NULL)",
      "ggplot()": "ggplot() + scale_y_continuous()",
      "+ point": " + geom_point(aes(x, y))",
      "+ line": " + geom_line(aes(x, y))",
      "+ title": " + ggtitle('')",
      "+ x-axis label": " + xlab('')",
      "+ y-axis label": " + ylab('')",
      "y value comma": " + scale_y_continuous(label=comma)"
    },
    "Models": {
      "OLS": "lm(y ~ x1 + x2 + x3, data = input)",
      "Simple Exponential Smoothing": "ses(input)",
      "Holt's": "holt(input, initial='simple', h=4)",
      "Predict": "predict(reg_result, input)"
    },
    "TimeSeries": {
      "Init": "ts(x, frequency=1)",
      "Classical Decompose": "decompose(ts, type='additive')",
      "STL Decompose": "stl(ts, s.window=7)$time.series"
    }
  }
}
