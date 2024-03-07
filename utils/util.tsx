import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserModel } from "../models/UserModel";


export const userStore = async (user?: UserModel) => {
    const stUser = JSON.stringify(user)
    await AsyncStorage.setItem("user", stUser)
}

export const userGet = async () => {
    const stUser = await AsyncStorage.getItem("user")
    if (stUser) {
        try {
            const user = JSON.parse(stUser) as UserModel
            return user
        } catch (error) {
            return null
        }
    }
    return null
}