import type { TCounterSchema } from '@/entities/Counter';
import type {TUserSchema} from '@/entities/User'
import type {TLoginSchema} from '@/features/AuthByUserName'

export type TStateSchema = {
    counter: TCounterSchema
    user: TUserSchema
    login:TLoginSchema
};