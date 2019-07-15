

const initState = {
    matchedUsers: [],
    isFetching:true,
    error:null
  };

export function userMatchesListReducer(state = initState, action){
    switch (action.type) {
   
      case 'REQUEST_LOAD_MATCHES': {
        return Object.assign({}, state, {
          matchedUsers:[],
          isFetching:true,
          error:false
        })
      }

      case 'LOAD_MATCHES_SUCCESS': {
        console.log('MATCHES LOADED SUCCESSFULLY')
        console.log(action)
        return Object.assign({}, state, {
          matchedUsers:action.data,
          isFetching:false,
          error:false
        })
      }
     
      case 'LOAD_MATCHES_FAILURE': {
        return Object.assign({}, state, {
          matchedUsers:[],
          isFetching:false,
          error:action.error
        })
      }
      default: {
        return state;
      }
    }
  };

