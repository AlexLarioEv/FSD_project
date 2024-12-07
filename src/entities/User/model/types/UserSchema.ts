import { TFeaturesFlag } from '@/shared/types/featuresFlag';
import { TJsonSettings } from './jsonSettings';

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
    features?: TFeaturesFlag;
    jsonSettings?: TJsonSettings;
};

export type TUserSchema = {
    auth?: TUser;
    _init: boolean;
};
