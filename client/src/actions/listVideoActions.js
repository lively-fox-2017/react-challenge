export const fetchAllVideo = (listVideo) => {
  return {
    type: 'fetchAll',
    payload: {
      listVideo
    }
  }
}

export const paramChange = (param) => {
  // console.log('xxxxxx', param);
  return {
    type: 'param_change',
    payload: {
      param
    }
  }
}
