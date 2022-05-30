import axios from "axios"
import { EDIT_USER } from "../types/userTypes"


export const EditUser =(edituser,config)=>async(dispatch)=> {
    try {
        const res = await axios.put("/api/profile/edituser", {edituser}, config)
        dispatch({
            type : EDIT_USER,
            payload : res.data
        }) 
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}