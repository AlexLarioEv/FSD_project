import { TUser } from "@/entities/User"

export type TComment = {
    id: string,
    text: string,
    user: TUser
}