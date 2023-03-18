import { ADD_USER, CHECK_USER } from "../actions/actionTypes";

const users=[];
const userReducer=(state=users,action)=>{
    switch (action.type) {
        case ADD_USER:
            let newuser=[...state]
            newuser.push(action.payload)
            return newuser
            
        case CHECK_USER:

        break
        default:
            return state;
    }
}
export default userReducer;