import { useDispatch } from "react-redux";
import {createReduxStore} from '@/app/providers/StoreProvider'

export type TAppDispatch = ReturnType<typeof createReduxStore>['dispatch'];


export const useAppDispatch = () => useDispatch<TAppDispatch>();
