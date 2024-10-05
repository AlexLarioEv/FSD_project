export type TLoginSchema = {
    username?: string;
    password?: string;
    error?: string;
    isLoading?: boolean;
}

export type TLoginByUsernameProps = {
    username: string;
    password: string;
}