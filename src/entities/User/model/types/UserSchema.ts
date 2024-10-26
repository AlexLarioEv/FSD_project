export type TUser = {
    id: string;
    username: string;
    avatar?: string;
}

export type TUserSchema = {
    auth?: TUser;
    _init: boolean;
}
