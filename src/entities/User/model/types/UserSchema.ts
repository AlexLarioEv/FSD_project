export type TUser = {
    id: string;
    username: string;
}

export type TUserSchema = {
    auth?: TUser;
    _init?: boolean;
}
