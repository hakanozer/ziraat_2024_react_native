import axios from "axios";
import { Platform } from "react-native";
import { UserModel } from "./models/UserModel";

const baseUrl = "https://dummyjson.com/"
const config = axios.create({
 baseURL: baseUrl,
 timeout: 30000,
 //auth: {username: '', password: ''}
 headers: {os: Platform.OS, version: Platform.Version},
 params: {data: 'newData'}
})


export const userLogin = ( username: string, password: string  ) => {
    const sendObj = {
        username: username,
        password: password
    }
    return config.post<UserModel>('auth/login', sendObj)
}