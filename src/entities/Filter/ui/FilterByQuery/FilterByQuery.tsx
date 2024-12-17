import { FC, useCallback } from 'react';

import { classNames } from '@/shared/lib';
import { Input, TInputProps } from '@/shared/ui/Input';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

import { filterActions } from '../../model/slice/filterSlice';
import { getFilterQuery } from '../../model/selectors/getFilter';
import { ToggleFeatures } from '@/shared/lib/features';

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
        <ToggleFeatures
            feature="enableAppRedesigned"
            on={
                <Input
                    inputPlaceholder="Поиск"
                    value={filterQuery}
                    placeholder={placeholder}
                    onChange={handleChangeFilter}
                    className={classNames('', {}, [className])}
                />
            }
            off={
                <Input
                    value={filterQuery}
                    placeholder={placeholder}
                    onChange={handleChangeFilter}
                    className={classNames('', {}, [className])}
                />
            }
        />
    );
};
