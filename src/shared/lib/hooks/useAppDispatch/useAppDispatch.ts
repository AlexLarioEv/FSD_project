import { useDispatch } from 'react-redux';
import { createReduxStore } from '@/shared/config/storeConfig';

export type TAppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export const useAppDispatch = () => useDispatch<TAppDispatch>();
