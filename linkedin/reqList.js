const reqestList = ["cro specialist",
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


reqestList.createLine =  function (cb) {
  let data = this[Symbol.iterator]()
  return {
    snap: function() {
      let res = data.next().value 
      return res ? cb(res)  : new Error('No value') 
    }
  }
}

let test = createLine(callback)

console.log(test.snap())

