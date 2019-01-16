import axios from 'axios';

const optionsGet = { mode: 'cors', method: 'GET', headers: { 
    'Content-Type': 'application/json', 
    Authorization : 'PWhUwtDha3Vd63dSfUvqrwbN6H9v1Cks'
}}
const optionsPost = { method: 'PUT', headers: { 
    'Content-Type': 'application/json; charset=utf-8', 
    authorization : 'PWhUwtDha3Vd63dSfUvqrwbN6H9v1Cks'
}}
const alarmId = '5c332564a4b6a759edb84a31';
const userId = '5c3dae48617f0966fddd0737';
const api = {
    getAlarm() {
        const url = `http://king-secure.alwaysdata.net:80/alarm/${alarmId}`;
        return fetch(url, optionsGet).then((res) => res.json());
    },
    getUser() {
        const url = `http://king-secure.alwaysdata.net:80/user/${userId}`;
        return fetch(url, optionsGet).then((res) => res.json());
    },
    setAlarm(alarmStatus) {
        // const optionsPut = Object.assign(optionsPost, alarmStatus);
        // console.log('optionsPut', JSON.stringify(optionsPut));
        const url = `http://king-secure.alwaysdata.net:80/alarm/${alarmId}`;;
        return fetch(url, { method: 'PUT', body: JSON.stringify(alarmStatus), headers: { 
            'Content-Type': 'application/json', 
            authorization : 'PWhUwtDha3Vd63dSfUvqrwbN6H9v1Cks'
        }}).then((res) => console.log(res));
    }
}


export default api;