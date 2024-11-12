import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib";

import { Rating } from "@/entities/Rating";
import { useRateArticleMutation, useGetArticleRatingQuery } from "../../api/articleRatingApi";
import { useAppSelector } from "@/shared/lib/hooks";
import { Skeleton } from "@/shared/ui/Skeleton";
import { getAuthData } from "@/entities/User";

type TArticleRatingProps = {
    className?: string;
    id: string;
};

export const ArticleRating: FC<TArticleRatingProps> = ({ className, id }) => {
    const {t} = useTranslation('articleDetails')
    const userData = useAppSelector(getAuthData);

    const {data, isLoading} = useGetArticleRatingQuery({
        userId: userData?.id ?? '',
        articleId: id
    })
    const [updatePost] = useRateArticleMutation()

    const rating = data?.[0];

    const handleAccept = useCallback((starCount: number, feedback?: string)=> {
        updatePost({
            userId: userData?.id ?? '',
            articleId: id,
            rate: starCount,
            feedback: feedback ?? '',
        })
    },[id, updatePost, userData?.id])

    const handleCancel = useCallback((starCount: number)=> {
        updatePost({
            userId: userData?.id ?? '',
            articleId: id,
            rate: starCount,
        })
    },[id, updatePost, userData?.id])

    if(isLoading) {
        return <Skeleton width='100%' height={150}/>
    }

    return (
        <Rating 
            className={classNames('', {}, [className])} 
            title={t('rating_question')}
            defaultRate={rating?.rate}
            onAccept={handleAccept}
            onCancel={handleCancel}
            hasFeedback
        />
    );
};
