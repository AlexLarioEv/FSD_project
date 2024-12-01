export type TLoginByUsernameProps = {
    username: string;
    password: string;
};

export type TLoginSchema = {
    username?: string;
    password?: string;
    error?: string;
    isLoading?: boolean;
};
