import { FC, useCallback } from 'react';

import { classNames } from '@/shared/lib';
import { Tabs } from '@/shared/ui/Tabs';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

import { filterActions } from '../../model/slice/filterSlice';
import { getTagQuery } from '../../model/selectors/getFilter';

import { HStack, VStack } from '@/shared/ui/Stack';
import { ToggleFeatures } from '@/shared/lib/features';

type TFindByTabProps = {
    className?: string;
    defaultValue?: string;
    tabs: string[];
    onClick: (value: string) => void;
};

export const FindByTab: FC<TFindByTabProps> = ({
    className,
    defaultValue,
    tabs,
    onClick,
}) => {
    const dispatch = useAppDispatch();

    const tag = useAppSelector(getTagQuery);

    const handleClickTabFilter = useCallback(
        (tab: string) => {
            dispatch(filterActions.setTagQuery(tab));
            onClick(tab);
        },
        [dispatch, onClick],
    );

    return (
        <ToggleFeatures
            feature="enableAppRedesigned"
            on={
                <VStack gap={8} className={classNames('', {}, [className])}>
                    <Tabs
                        onClick={handleClickTabFilter}
                        value={tag ?? defaultValue}
                        tabs={tabs}
                    />
                </VStack>
            }
            off={
                <HStack gap={8} className={classNames('', {}, [className])}>
                    <Tabs
                        onClick={handleClickTabFilter}
                        value={tag ?? defaultValue}
                        tabs={tabs}
                    />
                </HStack>
            }
        />
    );
};
