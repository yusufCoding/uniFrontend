import React from 'react'
import axios from 'axios';


const LOGIN_API = "http://localhost:8080/api/v1/getUserData";
const EAS_API = "http://localhost:8080/api/v1/getEAS";
const EINFÜHRUNG_API = "http://localhost:8080/api/v1/getEinfeuhrungs";
const GETPRAKTIKUMFREI_API = "http://localhost:8080/api/v1/getPraktikumFrei";
const SENDEINFÜHRUNG_API = "http://localhost:8080/api/v1/getPraktikum";
const GETPRAKTIKUMLISTE_API = "http://localhost:8080/api/v1/getPraktikumListe";
const FORGETPLAN_API = "http://localhost:8080/api/v1/getPlan";
const GETPLAN_API = "http://localhost:8080/api/v1/getPlanPlattform";
class Service  {

    getPlan() {
        return axios.get(GETPLAN_API);
    }

    forGetPlan(eingabePraktikum) {
        return axios.post(FORGETPLAN_API, eingabePraktikum);
    }

    getPraktikumListe() {
        return axios.get(GETPRAKTIKUMLISTE_API);
    }

    sendEinführung(eingabee) {
        return axios.post(SENDEINFÜHRUNG_API, eingabee);
    }

    getListeFrei() {
        return axios.get(GETPRAKTIKUMFREI_API);
    }

    sendWahlpflicht(wahlpflicht) {
        return axios.post(EINFÜHRUNG_API, wahlpflicht);
    }

    sendEAS(eas) {
        return axios.post(EAS_API, eas);
    }

    login(user) {
        return axios.post(LOGIN_API, user);
    }

}

export default new Service();