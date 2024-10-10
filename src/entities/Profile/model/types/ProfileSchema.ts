import {ECountry, ECurrency} from '@/shared/const'

export type TProfile = {
    first: string,
    lastname: string,
    age: 22,
    currency: ECurrency,
    country: ECountry,
    city: string,
    username: string,
    avatar: string
}

export type TProfileSchema = {
    data?: TProfile
    error?: string;
    isLoading: boolean;
    readonly: boolean;
}