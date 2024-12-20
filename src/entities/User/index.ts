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
export {
    useJsonSettings,
    getJsonSettings,
} from './model/selector/getJsonSettings';
export { saveJsonServer } from './model/services/saveJsonServer';
export { initAuthData } from './model/services/initAuthData';

export type { TUserSchema, TUser } from './model/types';
export { ERoleUser } from './model/types/UserSchema';
