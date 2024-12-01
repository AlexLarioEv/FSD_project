import { ECountry } from '../../../Country';
import { ECurrency } from '../../../Currency';

export enum EErrorValidateForm {
    FIRST_LAST_NAME_NOT_CORRECT = 'firstLastNameNotCorrect',
    AGE_NOT_CORRECT = 'ageNotCorrect',
    CURRENCY_NOT_CORRECT = 'currencyNotCorrect',
    COUNTRY_NOT_CORRECT = 'countryNotCorrect',
    NOT_DATA = 'notData',
    SERVER_ERROR = 'serverError',
}

export type TErrorList = EErrorValidateForm[];

export type TProfile = {
    id: string;
    first: string;
    lastname: string;
    age: number;
    currency: ECurrency;
    country: ECountry;
    city: string;
    username: string;
    avatar: string;
};

export type TProfileSchema = {
    data?: TProfile;
    form?: Partial<TProfile>;
    error?: TErrorList;
    isLoading: boolean;
    readonly: boolean;
};
