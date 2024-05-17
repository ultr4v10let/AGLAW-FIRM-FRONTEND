import axios from "axios";

export async function newsAPI (){
    return await axios.get('http://18.185.53.142:8000/news/')
}