import { memo } from "react";

import { classNames } from "@/shared/lib";
import { Text } from "@/shared/ui/Text";

import styles from './ArticleImageBlock.module.scss';
import {IArticleImageBlock} from '../../model/types/ArticleSchema'

type TArticleImageBlockProps = {
  className?: string;
} & Pick<IArticleImageBlock, 'src' | 'title'>;

const ArticleImageBlock = memo(({ className, title, src }: TArticleImageBlockProps) => {
    return (
        <>
            <div className={classNames(styles.ArticleImageBlock, {}, [className])}>
                <img className={styles.img} src={src} />
                <Text title={title}/>
            </div>
        </>
    );
});

ArticleImageBlock.displayName = 'ArticleImageBlock';

export {ArticleImageBlock};