import { FC } from "react";

import { classNames } from "@/shared/lib";
import { Code } from "@/shared/ui/Code";


import {IArticleCodeBlock} from '../../model/types/ArticleSchema'
import styles from './ArticleCodeBlock.module.scss';

type TArticleCodeBlockProps = {
    className?: string;
} & Pick<IArticleCodeBlock, 'code'>;

export const ArticleCodeBlock: FC<TArticleCodeBlockProps> = ({ className, code }) => {
    return (
        <div className={classNames(styles.ArticleCodeBlock, {}, [className])}>
            <Code code={code}/>
        </div>
    );
};