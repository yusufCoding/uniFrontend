import React from 'react'
import axios from 'axios';


const LOGIN_API = "http://localhost:8080/api/v1/getUserData";
const EAS_API = "http://localhost:8080/api/v1/getEAS";
class Service  {

    sendEAS(eas) {
        return axios.post(EAS_API, eas);
    }

    login(user) {
        return axios.post(LOGIN_API, user);
    }

}

export default new Service();