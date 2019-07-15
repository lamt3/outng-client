import {getMatchesRequest, postMatchesRequest} from '../../utils/APIUtil';

export const requestLoadMatches=()=>({
    type:'REQUEST_LOAD_MATCHES',
    isFetching:true
})

export const loadMatchesSuccess = (data) => {
  return{
    type:'LOAD_MATCHES_SUCCESS',
    data:data,
    isFetching:false,
    error:false
  }
}

export const loadMatchesFailure = (error) => ({
    type:'LOAD_MATCHES_FAILURE',
    error:error,
    isFetching:false
})

// const m = [{name:'abc', id:'123'}]
// export const loadMatches = () =>  {
//   return(dispatch) => {
//     return dispatch(loadMatchesSuccess(m))
//   }

  
// }


export const loadMatches=()=> {

  return function(dispatch){
    dispatch((requestLoadMatches()))
    return getMatchesRequest('/repair/matches', '',
        {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        // .then(response => {
        //   console.log(response)
        //   response.data
        // })
        .then(response => {
          if (response.status === 200) {
            dispatch(loadMatchesSuccess(response.data.matchedUsers));
          } else {
            dispatch(loadMatchesFailure('Error Fetching Matches Please Try Again'));
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch(loadMatchesFailure('Error Fetching Matches Please Try Again'));
        });
      // return {
      //   type: 'LOAD_MATCHES_SUCCESS',
      // };

  }

}

