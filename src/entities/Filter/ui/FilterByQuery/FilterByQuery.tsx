import { FC, useCallback } from 'react';

import { classNames } from '@/shared/lib';
import { Input, TInputProps } from '@/shared/ui/Input';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

import { filterActions } from '../../model/slice/filterSlice';
import { getFilterQuery } from '../../model/selectors/getFilter';

type TFilterByQueryProps = {
    className?: string;
    onChange: (value: string) => void;
} & Pick<TInputProps, 'placeholder'>;

export const FilterByQuery: FC<TFilterByQueryProps> = ({
    className,
    placeholder,
    onChange,
}) => {
    const dispatch = useAppDispatch();
    const filterQuery = useAppSelector(getFilterQuery);

    const handleChangeFilter = useCallback(
        (value: string) => {
            dispatch(filterActions.setFilterQuery(value));
            onChange(value);
        },
        [dispatch, onChange],
    );

    return (
        <Input
            value={filterQuery}
            placeholder={placeholder}
            onChange={handleChangeFilter}
            className={classNames('', {}, [className])}
        />
    );
};
