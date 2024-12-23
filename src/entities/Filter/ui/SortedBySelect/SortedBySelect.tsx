import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { Select, TOptionsType } from '@/shared/ui/Select';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

import { filterActions } from '../../model/slice/filterSlice';
import { EOrderFilter } from '../../model/types/filterSchema';

import { getOrder, getSort } from '../../model/selectors/getFilter';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/Text';
import { ListBox } from '@/shared/ui/Popups';

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
    const { t } = useTranslation('articles');

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
        <ToggleFeatures
            feature="enableAppRedesigned"
            on={
                <VStack gap={8} className={classNames('', {}, [className])}>
                    <Text description="Соритировать по:" />
                    <ListBox
                        value={sort ? t(sort) : undefined}
                        defaultValue={t('categories')}
                        onChange={handleChangeField}
                        items={fieldOptions}
                        direction="bottom right"
                    />
                    <ListBox
                        value={t(order)}
                        onChange={handleChangeOrder}
                        items={orderOptions}
                        direction="bottom right"
                    />
                </VStack>
            }
            off={
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
            }
        />
    );
};
