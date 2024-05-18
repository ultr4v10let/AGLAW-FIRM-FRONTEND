import axios from "axios";

export async function clientsAPI (){
    return await axios.get('http://18.185.53.142:8000/clients/')
}