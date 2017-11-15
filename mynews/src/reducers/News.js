const defaultState = {
  articles:[]
}

const NewsReducer = (state=defaultState,action)=>{
  switch(action.type){
    case 'GetNews' :
      console.log('paket sampe', action.payload.news);
      return {...state, articles:action.payload.news }
    default :
      return state
  }
}

export default NewsReducer
