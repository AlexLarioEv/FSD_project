import { TStateSchema } from '@/shared/config/storeConfig';
import { EOrderFilter } from '../types/filterSchema';

export const getFilterQuery = (state: TStateSchema) =>
    state.filter?.filterQuery;
export const getTagQuery = (state: TStateSchema) => state.filter?.tagQuery;
export const getSort = (state: TStateSchema) => state.filter?.sort;
export const getOrder = (state: TStateSchema) =>
    state.filter?._order || EOrderFilter.DESC;
