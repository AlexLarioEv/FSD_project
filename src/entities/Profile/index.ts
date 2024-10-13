export {TProfile,TProfileSchema} from './model/types/ProfileSchema';
export {profileActions, profileReducer} from './model/slice/profileSlice';
export {fetchProfile, updateProfile} from './model/services';
export {ProfileCard} from './ui';

export * as selectorProfile from './model/selector'