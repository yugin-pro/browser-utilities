voyagerJobsDashJobCards.formCredentails() - get access to api by inserting fetch request parameters 

voyagerJobsDashJobCards.setKeyword('google cloud platform').download() - loading results to db

voyagerJobsDashJobCards.firebaseProject = 'my project name with location'

let callb = function (params) {
    return voyagerJobsDashJobCards.setKeyword(params)
}

## Process 
```
const voyagerJobsDashJobCards = {}
const reqestList = []

voyagerJobsDashJobCards.firebaseProject = 'https://some_proj_location.firebasedatabase.app/'
voyagerJobsDashJobCards.formCredentails('fetch request')

const callbackWraper = function (params) {
    return voyagerJobsDashJobCards.setKeyword(params)
}

reqestList.createLine =  function (cb) {
  let data = this[Symbol.iterator]()
  return {
    snap: function() {
      let res = data.next().value 
      return res ? cb(res)  : new Error('No value') 
    }
  }
}

let q = reqestList.createLine(callbackWraper)

q.snap().download()

```
