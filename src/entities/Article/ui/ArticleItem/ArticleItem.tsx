import { FC, ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";



import {Card} from '@/shared/ui/Card';
import { Text } from "@/shared/ui/Text";
import { Icon } from "@/shared/ui/Icon";
import { Avatar } from "@/shared/ui/Avatar";
import { Button, EButtonTheme } from "@/shared/ui/Button";
import { getRouteArticleDetails } from "@/shared/config/routeConfig";
import { classNames } from "@/shared/lib";


import { ArticleTextBlock,TArticleTextBlockProps } from "../ArticleTextBlock/ArticleTextBlock";
import { EArticleBlockType, EArticleView, TArticle } from "../../model/types/ArticleSchema";

import styles from './ArticleItem.module.scss';

import Eye from "@/shared/assets/icons/eye-20-20.svg";
import { AppImage } from "@/shared/ui/AppImage";
import { Skeleton } from "@/shared/ui/Skeleton";

type TArticleItemProps = {
    className?: string;
    view: EArticleView;
    article: TArticle;
};

export const ArticleItem: FC<TArticleItemProps> = ({ className, view, article }) => {
    const navigate = useNavigate()
    const {t} = useTranslation();
    
    const { title, img, views, createdAt, type, user, blocks, id } =  article;

    let content: ReactNode = null; 

    const types = <Text className={styles.types} description={type.join(', ')} />;
    const viewComponent = (
        <div className={styles.viewsWrapper} >
            <Text description={String(views)} />
            <Icon Svg={Eye} />
        </div>
    );

    const handleClickCard = useCallback(() => {
        navigate(getRouteArticleDetails(id))
    },[id, navigate])

    if(view === EArticleView.BIG){
        const textBlock = blocks.find(
            (block) => block.type === EArticleBlockType.TEXT,
        ) as TArticleTextBlockProps;

        content = (
            <>
                <div className={styles.header}>
                    <div className={styles.avatar}>
                        <Avatar src={user.avatar} alt={user.username}/>
                        <Text description={user.username}/>
                    </div>
                    <Text description={createdAt}/>
                </div>
                <Text className={styles.title} title={title}/>
                {types}
                <AppImage className={styles.img} src={img} fallbackLoading= {<Skeleton height={200}/>}/>
                {textBlock && <ArticleTextBlock className={styles.textBlock} title={textBlock.title} paragraphs={textBlock.paragraphs} />}
                <div className={styles.bottom}>
                    <Button onClick={handleClickCard} theme={EButtonTheme.BORDER}>{t("read_more")}</Button>
                    {viewComponent}
                </div>
            </>
        )
    }

    if(view === EArticleView.SMALL){
        content = (
            <>
                <div className={styles.wrapperImg}>
                    <Text description={createdAt} className={styles.createAt}/>
                    <AppImage className={styles.img} src={img} fallbackLoading= {<Skeleton height={'100%'}/>} />
                </div>
                <div className={styles.info}>
                    {types}
                    {viewComponent}
                </div>
                <Text className={styles.title} description={title}/>
            </>
        )
    }

    return (
        <Card 
            onClick={view === EArticleView.SMALL? handleClickCard: undefined} 
            className={classNames(styles.ArticleItem, {}, [className, styles[view]])}>
            {content}
        </Card>
    );
};