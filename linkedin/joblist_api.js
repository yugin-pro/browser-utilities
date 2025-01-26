const voyagerJobsDashJobCards = {
    firebaseProject: '',
    collection:209,
    keyword:'',
    start:0,
    apiUrl:function() {
      if(this.keyword.length <= 2) {
        throw new Error('set keyword')
      }
      return `https://www.linkedin.com/voyager/api/voyagerJobsDashJobCards?decorationId=com.linkedin.voyager.dash.deco.jobs.search.JobSearchCardsCollection-${this.collection}&count=25&q=jobSearch&query=(origin:JOB_SEARCH_PAGE_JOB_FILTER,keywords:${this.keyword},locationUnion:(geoId:102890719),selectedFilters:(sortBy:List(DD),distance:List(25),timePostedRange:List(r604800)),spellCorrectionEnabled:true)&start=${this.start}`
    },
    url:(categoryName, projectEndpoint) => {
      let d = new Date()
      return `${projectEndpoint}linkedin/voyagerJobsDashJobCards/${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}/${categoryName}.json`},
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
        let collection = Number(reqParams[0].match(/JobSearchCardsCollection-(\d+)\&/))
        if (typeof collection === 'number' && collection > 10) {
        this.collection = reqParams[0].match(/JobSearchCardsCollection-(\d+)\&/)
        }
        
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
        let res = await fetch(this.url(this.keyword, this.firebaseProject),{method:'POST',body: dataStr.replace(/\$/g,'')})
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
        console.log('download finished')
        this.start = 0
        return {status: 'finished'}
    },
    setKeyword: function(keyword) {     
        this.keyword = encodeURIComponent(keyword)
        return this
    },
    setConfig(config) {
        const {project,fetchParams,keywordList} = config
        
        this.firebaseProject = project
        
        this.request = fetchParams
        let collection = Number(fetchParams[0].match(/JobSearchCardsCollection-(\d+)\&/))
        if (typeof collection === 'number' && collection > 10) {
        this.collection = reqParams[0].match(/JobSearchCardsCollection-(\d+)\&/)
        }
        
        this.keywordList = keywordList
        
        return this
    },
    createQueue() {
        const data = this.keywordList[Symbol.iterator]()
        return Object.setPrototypeOf({
            snap() {
              let res = data.next().value 
              return res ? super.setKeyword(res)  : new Error('No value') 
            }
        },this)
    }
  } 

export { voyagerJobsDashJobCards }
