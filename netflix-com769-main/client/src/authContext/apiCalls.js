import axios from "axios";

export const login = async(user, dispatch) => {
    
    dispatch({ type: "LOGIN_START" });
    try{
        const res = await axios.post(`http://localhost:9000/api/auth/login`, user);
        console.log(res.data);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    }catch(err){
        dispatch({ type: "LOGIN_FAILURE" });
        console.log(err);
    }
};