const keyword = {"type":"ENTITY","value":"/m/014trl"}
const geo = {"country":"NL"}
const complexKeywordsRestriction = {"keyword":[keyword]}

const  comparisonItem = {
    "geo":geo,
    "complexKeywordsRestriction":complexKeywordsRestriction
}

const requestOptions = {"property":"","backend":"IZG","category":0} 
const userConfig = {"userType":"USER_TYPE_LEGIT_USER"}

const trendReq = {"time":"2023-09-11+2024-09-11",
    "resolution":"WEEK",
    "locale":"en-GB",
    "comparisonItem":[comparisonItem],
    "requestOptions":requestOptions,
    "userConfig":userConfig}
