import { memo } from "react";

import { classNames } from "@/shared/lib";
import { Text } from "@/shared/ui/Text";

import {IArticleTextBlock} from '../../model/types/ArticleSchema'

import styles from './ArticleTextBlock.module.scss';

type TArticleTextBlockProps = {
  className?: string;
} & Pick<IArticleTextBlock, 'title' | 'paragraphs'>;

const ArticleTextBlock = memo(({ className, title, paragraphs }: TArticleTextBlockProps) => {
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
});


ArticleTextBlock.displayName = 'ArticleTextBlock';

export {ArticleTextBlock};
