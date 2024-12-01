import { useSelector } from 'react-redux';

import { TStateSchema } from '@/shared/config/storeConfig/types';

export const useAppSelector = useSelector.withTypes<TStateSchema>();
