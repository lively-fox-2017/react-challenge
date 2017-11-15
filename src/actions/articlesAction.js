export const articlesAction = (news) => {
  return {
    type: "ARTICLES",
    payload: news
  }
}

export const articleAction = (article) => {
  return {
    type: "ARTICLE",
    payload: article
  }
}
