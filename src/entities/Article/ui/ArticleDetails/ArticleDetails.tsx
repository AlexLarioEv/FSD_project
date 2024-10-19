import { FC, ReactNode, useCallback, useEffect } from "react";

import { classNames } from "@/shared/lib";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import {Skeleton} from '@/shared/ui/Skeleton'
import { Avatar } from "@/shared/ui/Avatar";
import {Text, ETypeText, ESizeText } from '@/shared/ui/Text'
import { Icon } from "@/shared/ui/Icon";

import styles from './ArticleDetails.module.scss';
import { fetchArticleById } from "../../model/services/fetchArticleById";
import { getArticleData, getArticleError, isArticleLoading } from "../../model/selector/getArticle";
import { EArticleBlockType } from "../../model/types/ArticleSchema";

import Eye from "@/shared/assets/icons/eye-20-20.svg"
import Calendar from "@/shared/assets/icons/calendar-20-20.svg"
import { ArticleTextBlock } from "../ArticleTextBlock/ArticleTextBlock";
import { ArticleCodeBlock } from "../ArticleCodeBlock/ArticleCodeBlock";
import { ArticleImageBlock } from "../ArticleImageBlock/ArticleImageBlock";

type TArticleDetailsProps = {
    className?: string;
    id: string;
};

export const ArticleDetails: FC<TArticleDetailsProps> = ({ className, id }) => {

    const dispatch = useAppDispatch()
    const {isLoading, error, dataArtical} = useAppSelector((state)=> ({
        isLoading: isArticleLoading(state),
        error: getArticleError(state),
        dataArtical: getArticleData(state)
    }))
    const {title, subtitle, img, views, blocks, createdAt} = dataArtical || {}
    
    const renderBlocksArticle  = useCallback(()=> {
        return blocks?.map((block)=> {

            switch (block.type) {
            
            case EArticleBlockType.TEXT:
                return <ArticleTextBlock title={block.title} paragraphs={block.paragraphs}   />

            case EArticleBlockType.CODE:
                return <ArticleCodeBlock code={block.code} key={block.id} />
    
            case EArticleBlockType.IMAGE:
                return <ArticleImageBlock src={block.src} title={block.title} key={block.id}/>
            } 
        })
    },[blocks])
    
    let content:ReactNode = null;

    useEffect(()=> {
        if(__PROJECT__ !== 'storybook'){
            dispatch(fetchArticleById(id))
        }
    }, [id, dispatch])

    if(isLoading){
        content = (
            <>
                <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
                <Skeleton className={styles.title} width={300} height={32} />
                <Skeleton className={styles.skeleton} width={600} height={24} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
            </>
        )
    } else if(error){
        content = (
            <Text title={error} type={ETypeText.ERROR}/>
        )
    } else {
        content = (
            <>
                <Avatar size={200} className={styles.avatar} src={img} alt={title}/>
                <Text size={ESizeText.L} title={title} description={subtitle}/>
                <div className={styles.info}>
                    <Icon Svg={Eye}/>
                    <Text title={String(views)}/>
                </div>
                <div className={styles.info}>
                    <Icon Svg={Calendar}/>
                    <Text title={createdAt}/>
                </div>
                {renderBlocksArticle()}
            </>
        )
    }

    return (
        <div className={classNames(styles.ArticleDetails, {}, [className])}>
            {content}
        </div>
    );
};