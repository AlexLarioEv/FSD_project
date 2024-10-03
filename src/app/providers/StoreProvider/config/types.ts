import type { TCounterShema } from '@/entities/Counter';
import type {TUserShema} from '@/entities/User'

export type TStateShema = {
    counter: TCounterShema
    user: TUserShema
};