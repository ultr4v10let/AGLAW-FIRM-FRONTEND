import axios from "axios";

const legalServicesAPI = async () => {
    return await axios.get('http://18.185.53.142:8000/legal-services/')
}

const clientsAPI  = async () => {
    return await axios.get('http://18.185.53.142:8000/clients/')
}

const teamMembersAPI  = async () => {
    return await axios.get('http://18.185.53.142:8000/team-members/')
}

const newsAPI  = async () => {
    return await axios.get('http://18.185.53.142:8000/news/')
}

const galleryAPI = async () => {
    return await axios.get('http://18.185.53.142:8000/gallery/')
}

export {legalServicesAPI, clientsAPI, teamMembersAPI, newsAPI, galleryAPI}