import { TStateSchema } from "@/app/providers/StoreProvider";

export const getCommentText = (state: TStateSchema) => state.addCommentForm?.error;