import { TStateSchema } from '@/shared/config/storeConfig';

export const isReadOnly = (state: TStateSchema) => !!state.profile?.readonly;
