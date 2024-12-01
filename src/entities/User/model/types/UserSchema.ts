export enum ERoleUser {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MANAGER = 'MANAGER',
}

export type TUser = {
    id: string;
    username: string;
    avatar?: string;
    role?: ERoleUser;
};

export type TUserSchema = {
    auth?: TUser;
    _init: boolean;
};
