import { TStateSchema } from "@/app/providers/StoreProvider";

export const getCommentError = (state: TStateSchema) => state.addCommentForm?.error;
export const getCommentText = (state: TStateSchema) => state.addCommentForm?.text