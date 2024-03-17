
import axios from "axios";
import { getServerURL } from "./config";

const clienteAxios = axios.create({
    baseURL: getServerURL(),
    headers: {
        'Content-Type': 'application/json'
    }
});



export default clienteAxios;