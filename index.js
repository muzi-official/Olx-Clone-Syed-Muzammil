
// const iState ={
//     current_card:[ {},{} ],
//     user_name:[ {} ]
//   }
  

// export default (state = iState, action)=>{
//     switch (action.type){
//       case "SETUSER":
//         return({
//           ...state,
//           current_card: action.payload
//         })
//         case "SHOW_PROD":
//         return({
//           ...state,
//           current_card: action.payload
//         })
      
//         case "SET_ID":
//           return({
//             ...state,
//             user_name: action.payload
//           })
        
//     }
//     return state;
//   }






const INITIAL_STATE = {
    users: [],
    current_user: {},
    current_card:[ {},{} ]
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SETUSER":
            return ({
                ...state,
                current_user: action.payload,
            })
    }
    return state;
}
