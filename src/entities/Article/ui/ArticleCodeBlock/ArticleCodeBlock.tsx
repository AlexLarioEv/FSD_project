import { memo } from 'react';

import { classNames } from '@/shared/lib';
import { Code } from '@/shared/ui/Code';

import { IArticleCodeBlock } from '../../model/types/ArticleSchema';
import styles from './ArticleCodeBlock.module.scss';

type TArticleCodeBlockProps = {
    className?: string;
} & Pick<IArticleCodeBlock, 'code'>;

const ArticleCodeBlock = memo(({ className, code }: TArticleCodeBlockProps) => {
    return (
        <div className={classNames(styles.ArticleCodeBlock, {}, [className])}>
            <Code code={code} />
        </div>
    );
});

ArticleCodeBlock.displayName = 'ArticleCodeBlock';

export { ArticleCodeBlock };
