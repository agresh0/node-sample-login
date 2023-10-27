import axios from "axios";
import { SUCCESS,FAILL } from "../constants/actionTypes";

export const UserRegisterAction = (userName,password) => async (dispatch) =>{
    try{
        const {data} = await axios.post('http://localhost:3001/register',{userName,password})
        // const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch({
            type: SUCCESS,
            payload:data
        })
    }
    catch (error) {
        dispatch({
            type:FAILL,
            payload:error
        })
    }

}