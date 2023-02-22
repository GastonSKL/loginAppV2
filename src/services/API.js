import axios from "axios";

export default(url='https://randomuser.me/api')=>{
    return axios.create({
        baseURL: url,
    })
}