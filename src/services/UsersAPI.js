import API from "./API";

export default {
    getUsers(){
        return API().get('/?results=50')
    },
    getUser(){
        return API()
    }
}