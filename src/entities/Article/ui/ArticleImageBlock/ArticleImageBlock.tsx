import { FC } from "react";

import { classNames } from "@/shared/lib";
import { Text } from "@/shared/ui/Text";

import styles from './ArticleImageBlock.module.scss';
import {IArticleImageBlock} from '../../model/types/ArticleSchema'

type TArticleImageBlockProps = {
  className?: string;
} & Pick<IArticleImageBlock, 'src' | 'title'>;

export const ArticleImageBlock: FC<TArticleImageBlockProps> = ({ className, title, src }) => {
    return (
        <>
            <div className={classNames(styles.ArticleImageBlock, {}, [className])}>
                <img className={styles.img} src={src} />
                <Text title={title}/>
            </div>
        </>
    );
};