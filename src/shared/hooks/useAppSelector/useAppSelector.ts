import { useSelector } from 'react-redux'

import {TStateSchema} from '@/app/providers/StoreProvider/config/types'

export const useAppSelector = useSelector.withTypes<TStateSchema>()