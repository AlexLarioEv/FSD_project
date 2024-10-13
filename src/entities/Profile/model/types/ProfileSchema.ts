import { ECountry } from '../../../Country'
import { ECurrency} from '../../../Currency'

export type TProfile = {
    first: string,
    lastname: string,
    age: number,
    currency: ECurrency,
    country: ECountry,
    city: string,
    username: string,
    avatar: string
}

export type TProfileSchema = {
    data?: TProfile;
    form?: Partial<TProfile>;
    error?: string;
    isLoading: boolean;
    readonly: boolean;
}