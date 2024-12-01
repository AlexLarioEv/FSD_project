export { userReducer, userActions } from './model/slice';
export {
    getUser,
    isAuth,
    isInit,
    getAuthData,
    getRoles,
    isAdmin,
    isManager,
} from './model/selector/getUser';

export type { TUserSchema, TUser } from './model/types';
export { ERoleUser } from './model/types/UserSchema';
