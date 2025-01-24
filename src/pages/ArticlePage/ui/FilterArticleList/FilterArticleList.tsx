import { FC, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';

import { FilterByQuery, FindByTab, SortedBySelect } from '@/entities/Filter';
import { EArticleType, TArticleKey } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';
import { TOptionsType } from '@/shared/ui/Select';

import { useAppDispatch, useDebounce } from '@/shared/lib/hooks';
import { articleListAction } from '../../model/slices/articleListSlice';
import { fetchArticleList } from '../../model/services/fetchArticleList';
import { tabsArray } from '../../model/constants/constants';
import { VStack } from '@/shared/ui/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';

import styles from './FilterArticleList.module.scss';

type TFilterArticleListProps = {
    className?: string;
};

export const FilterArticleList: FC<TFilterArticleListProps> = ({
    className,
}) => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();

    const fetchArticleByFilter = useCallback(() => {
        dispatch(articleListAction.setPage(1));
        dispatch(fetchArticleList({ replace: true }));
    }, [dispatch]);

    const fetchArticleByFilterDebounced = useDebounce(
        fetchArticleByFilter,
        500,
    );

    const handleChangeOrder = useCallback(() => {
        fetchArticleByFilter();
    }, [fetchArticleByFilter]);

    const handleChangeField = useCallback(() => {
        fetchArticleByFilter();
    }, [fetchArticleByFilter]);

    const handleClickTab = useCallback(() => {
        fetchArticleByFilter();
    }, [fetchArticleByFilter]);

    const handleChangeQuerySearch = useCallback(() => {
        fetchArticleByFilterDebounced();
    }, [fetchArticleByFilterDebounced]);

    const selectSortParams: TOptionsType<TArticleKey>[] = useMemo(
        () => [
            {
                value: 'views',
                content: t('views'),
            },
            {
                value: 'createdAt',
                content: t('date'),
            },
            {
                value: 'title',
                content: t('title'),
            },
        ],
        [t],
    );

    return (
        <ToggleFeatures
            feature="enableAppRedesigned"
            on={
                <Card className={styles.FilterArticleList}>
                    <VStack gap={32}>
                        <FilterByQuery
                            className={styles.FilterByQuery}
                            placeholder={t('find')}
                            onChange={handleChangeQuerySearch}
                        />
                        <FindByTab
                            defaultValue={EArticleType.ALL}
                            tabs={tabsArray.map((select) => t(select))}
                            onClick={handleClickTab}
                        />
                        <SortedBySelect
                            label={t('by')}
                            labelOrder={t('by')}
                            fieldOptions={selectSortParams}
                            onChangeOrder={handleChangeOrder}
                            onChangeField={handleChangeField}
                        />
                    </VStack>
                </Card>
            }
            off={
                <VStack gap={8} className={classNames('', {}, [className])}>
                    <Text title={t('sort')} />
                    <SortedBySelect
                        label={t('by')}
                        labelOrder={t('by')}
                        fieldOptions={selectSortParams}
                        onChangeOrder={handleChangeOrder}
                        onChangeField={handleChangeField}
                    />
                    <FilterByQuery
                        placeholder={t('find')}
                        onChange={handleChangeQuerySearch}
                    />
                    <FindByTab
                        defaultValue={EArticleType.ALL}
                        tabs={tabsArray.map((select) => t(select))}
                        onClick={handleClickTab}
                    />
                </VStack>
            }
        />
    );
};
