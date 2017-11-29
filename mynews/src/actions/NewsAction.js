export const loadNews = (news) => {
  return {
    type : 'GetNews',
    payload : {
      news
    }
  }
}
