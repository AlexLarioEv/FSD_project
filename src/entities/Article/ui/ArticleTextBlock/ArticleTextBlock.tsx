import { FC } from "react";

import { classNames } from "@/shared/lib";

import {IArticleTextBlock} from '../../model/types/ArticleSchema'

import styles from './ArticleTextBlock.module.scss';
import { Text } from "@/shared/ui/Text";

type TArticleTextBlockProps = {
  className?: string;
} & Pick<IArticleTextBlock, 'title' | 'paragraphs'>;

export const ArticleTextBlock: FC<TArticleTextBlockProps> = ({ className, title, paragraphs }) => {
    return (
        <div className={classNames(styles.ArticleTextBlock, {}, [className])}>
            {title && (
                <Text title={title} className={styles.title} />
            )}
            {paragraphs.map((paragraph, index) => (
                <Text key={index} description={paragraph} className={styles.paragraph} />
            ))}
        </div>
    );
};
