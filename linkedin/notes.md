
## Process 
```
const jobApiConfig

jobApiConfig.setKeywordList(["cro specialist",
"performance analyst",
"sea specialist",
"advertisment analyst",
"adwords analyst",
"conversion analyst",
"data analyst",
"google analytics",
"marketing analyst",
"marketing automation",
"power bi",
"sql developer",
"web analyst",
"conversion optimization",
"paid search analyst",
"looker",
"data professional",
"matomo",
"piwik pro",
"ads analyst",
"bigquery",
"google cloud platform",
"ecommerce analyst"]
)

jobApiConfig.setProjectEndpoint('')
jobApiConfig.setFetchParam()

const voyagerJobsDashJobCards
voyagerJobsDashJobCards.setConfig(jobApiConfig)

const line = voyagerJobsDashJobCards.createQueue()
line.snap().download()


```
