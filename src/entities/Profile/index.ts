export { EErrorValidateForm } from './model/types/ProfileSchema';
export { profileActions, profileReducer } from './model/slice/profileSlice';
export { fetchProfile, updateProfile } from './model/services';
export * as selectorProfile from './model/selector';
export { ProfileCard } from './ui';

export type {
    TProfile,
    TProfileSchema,
    TErrorList,
} from './model/types/ProfileSchema';
