const jobApiConfig = {
  setProjectEndpoint(url) {
    this.project = url
    return this
  },
  setFetchParam(...arg) {
    this.fetchParams = arg
    return this
  },
  setKeywordList(...keywords) {
    this.keywordList = keywords.flat()
    return this
  }
}
