import { UnknownAction } from "redux";
import { LikesEnum } from "./LikesEnum";

export interface ILikesAction extends UnknownAction {
    type: LikesEnum,
    payload: string
}

export const LikesReducer = ( state: string[] = [], action: ILikesAction ) => {
    switch (action.type) {
        case LikesEnum.LIKE_ADD:
            {
                const arr = Object.assign([], state)
                arr.push(action.payload)
                return arr
            }
        return state
        case LikesEnum.LIKE_REMOVE:
            {
                const index = state.findIndex((item) => item === action.payload)
                if (index > -1) {
                    const arr = Object.assign([], state)
                    arr.splice(index, 1)
                    return arr
                }
            }
        return state
        default:
            return state
    }
}