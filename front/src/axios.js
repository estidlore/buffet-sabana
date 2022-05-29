import axios from "axios";

export const axiosDishesInstance = axios.create({baseURL: "http://localhost:4000"})
export const axiosBeveragesInstance = axios.create({baseURL: "http://localhost:4001"})