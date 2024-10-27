import {FC} from 'react'

import { EArticleView } from '../../model/types/ArticleSchema';

import styles from './ArticleItem.module.scss';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Card } from '@/shared/ui/Card';

import { classNames } from '@/shared/lib';

type TProps = {
    view: EArticleView;
}


export const ArticleItemLoading: FC<TProps> = ({ view }) => {
    const bigSkeleton = (
        <Card data-testid="loading-skeleton" className={classNames(styles.ArticleItem, {}, [styles[view]])}>
            <div className={styles.header}>
                <div className={styles.avatar}>
                    <Skeleton border='50%' height={30} width={30}/>
                    <Skeleton width={150} height={16}/>
                </div>
                <Skeleton width={100} height={16}/>
            </div>
            <Skeleton className={styles.title} width={250} height={24}/>
            <Skeleton className={styles.img} height={200}/>
            <div className={styles.bottom}>
                <Skeleton  width={200} height={36}/>
            </div>
        </Card>)

    const smallSkeleton = (
        <Card data-testid="loading-skeleton" className={classNames(styles.ArticleItem, {}, [styles[view]])}>
            <div className={styles.wrapperImg}>
                <Skeleton height={200} className={styles.img}/>
            </div>
            <div className={styles.info}>
                <Skeleton height={16}/>
                <Skeleton height={16}/>
            </div>
            <Skeleton height={16} className={styles.title} />
        </Card>)

    return view === EArticleView.BIG ? bigSkeleton : smallSkeleton
};