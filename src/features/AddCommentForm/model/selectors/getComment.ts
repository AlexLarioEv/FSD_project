import { TStateSchema } from '@/shared/config/storeConfig';

export const getCommentError = (state: TStateSchema) => state.addCommentForm?.error;
export const getCommentText = (state: TStateSchema) => state.addCommentForm?.text