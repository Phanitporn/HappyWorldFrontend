import axios from "axios";
const Authen =axios.create( {
    // baseURL: 'http://project_happyworld.local/api/',
    baseURL: 'https://happyworld.ajkit.com/api/',
    withCredentials:true,
    header:{
        "content-type" : "application/json",
        "Accept"    : "application/json"

    }
});
export default Authen;