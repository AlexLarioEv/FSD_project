import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { Select, TOptionsType } from '@/shared/ui/Select';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

import { filterActions } from '../../model/slice/filterSlice';
import { EOrderFilter } from '../../model/types/filterSchema';

import { getOrder, getSort } from '../../model/selectors/getFilter';
import { HStack } from '@/shared/ui/Stack';

type TFilterBySelectProps = {
    fieldOptions: TOptionsType<string>[];
    className?: string;
    label?: string;
    labelOrder?: string;
    onChangeOrder: (order: string) => void;
    onChangeField: (order: string) => void;
};

export const SortedBySelect: FC<TFilterBySelectProps> = ({
    className,
    fieldOptions,
    label,
    labelOrder,
    onChangeOrder,
    onChangeField,
}) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const order = useAppSelector(getOrder);
    const sort = useAppSelector(getSort);

    const handleChangeOrder = useCallback(
        (value: EOrderFilter) => {
            dispatch(filterActions.setOrder(value));
            onChangeOrder(value);
        },
        [dispatch, onChangeOrder],
    );

    const handleChangeField = useCallback(
        (value: string) => {
            dispatch(filterActions.setSort(value));
            onChangeField(value);
        },
        [dispatch, onChangeField],
    );

    const orderOptions: TOptionsType<EOrderFilter>[] = useMemo<
        { value: EOrderFilter; content: string }[]
    >(
        () => [
            {
                value: EOrderFilter.ASC,
                content: t('asc'),
            },
            {
                value: EOrderFilter.DESC,
                content: t('desc'),
            },
        ],
        [t],
    );

    return (
        <HStack gap={8} className={classNames('', {}, [className])}>
            <Select
                defaultValue={sort}
                label={label}
                options={fieldOptions}
                onChange={handleChangeField}
            />
            <Select
                defaultValue={order}
                label={labelOrder}
                options={orderOptions}
                onChange={handleChangeOrder}
            />
        </HStack>
    );
};
