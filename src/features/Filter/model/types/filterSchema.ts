export enum EOrderFilter  {
    DESC = 'desc',
    ASC = 'asc'
}

export type TSort = {
    _order?: EOrderFilter,
    sort?: string;
}

export type TFilter = {
    filterQuery?: string;
    tagQuery?: string;
}

export type TFilterSchema = TSort & TFilter;
