
## Process 
```
const jobApiConfig

jobApiConfig.setKeywordList([
"performance analyst",
"advertisment analyst",
"adwords analyst",
"conversion analyst",
"data analyst",
"google analytics",
"marketing analyst",
"power bi",
"sql developer",
"web analyst",
"tag manager",
"paid search analyst",
"looker",
"data professional",
"matomo",
"piwik pro",
"ads analyst",
"bigquery",
"google cloud platform",
"ecommerce analyst",
"advertising",
"ecommerce",
"ppc",
"seo",
"facebook ads",
"google ads",
"cro specialist",
"sea specialist",
"conversion optimization",
"marketing automation",
]
)

jobApiConfig.setProjectEndpoint('')
jobApiConfig.setFetchParam()

const voyagerJobsDashJobCards
voyagerJobsDashJobCards.setConfig(jobApiConfig)

const line = voyagerJobsDashJobCards.createQueue()
line.snap().download()


```
