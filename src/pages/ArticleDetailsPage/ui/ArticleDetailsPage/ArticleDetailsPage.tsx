import { FC, memo } from "react";
import { useParams } from "react-router-dom";

import {ArticleDetails, articleReducer} from '@/entities/Article'
import { classNames } from "@/shared/lib";
import { DynamicModuleLoader, TReducerList } from "@/shared/lib/components";

type TArticleDetailsPageProps = {
  className?: string;
};

const reducers:TReducerList = {
    article: articleReducer
} 

const ArticleDetailsPage: FC<TArticleDetailsPageProps> = ({ className }) => {

    const {id} =  useParams()
    

    return (
        <DynamicModuleLoader  reducers={reducers} removeAfterUnmount={false}>
            <div className={classNames('', {}, [className])}>
                {id ? <ArticleDetails id={id} /> : null}
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);