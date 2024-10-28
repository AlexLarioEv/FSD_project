import { TStateSchema } from "@/app/providers/StoreProvider";
import { createSelector } from "@reduxjs/toolkit";

const getScroll = (state: TStateSchema) => state.scrollSave.scroll;

export const getScrollByPath = createSelector(
    getScroll, 
    (state:TStateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);