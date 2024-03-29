const voyagerJobsDashJobCards = {
    keyword:'',
    start:0,
    apiUrl:function() {
      if(this.keyword.length <4) {
        throw new Error('set keyword')
      }
      return `https://www.linkedin.com/voyager/api/voyagerJobsDashJobCards?decorationId=com.linkedin.voyager.dash.deco.jobs.search.JobSearchCardsCollection-194&count=25&q=jobSearch&query=(origin:JOB_SEARCH_PAGE_JOB_FILTER,keywords:${this.keyword},locationUnion:(geoId:102890719),selectedFilters:(sortBy:List(DD),distance:List(25)),spellCorrectionEnabled:true)&start=${this.start}`
    },
    url:(categoryName) => {
      let d = new Date()
      return `firebase_path/${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}/${categoryName}.json`},
    request:[],  
    runApi:async function() {
      this.request[0] = this.apiUrl()
      let res = await fetch(...this.request)
      if(res.ok) {
        let data = await res.json()
        return data
      }
      throw new Error(res.statusText)
    },
    formCredentails: function(...reqParams) {
      this.request = reqParams
      return this
    },
    formPayload: async function() {
      let apiResponse = await this.runApi()
      return { 
        ts: Date.now(),
        request: this.request[0],
        data: apiResponse.data,
        included: apiResponse.included.filter(el=> el.hasOwnProperty('preDashNormalizedJobPostingUrn'))
         }
    },
    post: async function() {
      let payload = await this.formPayload()
      let dataStr = JSON.stringify(payload)
      let res = await fetch(this.url(this.keyword),{method:'POST',body: dataStr.replace(/\$/g,'')})
      let data = await res.json()
      if (payload.data.paging)
      this.start += 25
      console.log(data, this.keyword)
    },
    download:async function() {
      this.start = 0
      let d = await this.formPayload()
      while (this.start < d.data.paging.total) {
        await this.post()
      } 
      this.start = 0
    },
    setKeyword: function(keyword) {
      
      this.keyword = encodeURIComponent(keyword)
      return this
    }
  } 
