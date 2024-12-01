import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { AddCommentForm } from '@/features/AddCommentForm';
import { CommentList } from '@/entities/Comment';
import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib';
import {
    useAppDispatch,
    useAppSelector,
    useInitEffect,
} from '@/shared/lib/hooks';

import { getArticleComments } from '../../model/slices/articleDetailsCommentSlice';
import { isLoadingArticleDetailsComment } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentById } from '../../model/services/fetchCommentById';

import { VStack } from '@/shared/ui/Stack';

type TArticleDetailsCommentsProps = {
    className?: string;
    id: string;
};

const ArticleDetailsComments: FC<TArticleDetailsCommentsProps> = ({
    className,
    id,
}) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('articleDetails');

    const comments = useAppSelector(getArticleComments.selectAll);
    const isCommentLoading = useAppSelector(isLoadingArticleDetailsComment);

    const handleSendComment = (value: string) => {
        dispatch(addCommentForArticle(value));
    };

    useInitEffect(() => {
        dispatch(fetchCommentById(String(id)));
    });

    return (
        <VStack gap={16} className={classNames('', {}, [className])}>
            <Text title={t('comment')} />
            <AddCommentForm
                data-testid="Article.AddCommentForm"
                onSendComment={handleSendComment}
            />
            <CommentList isLoading={isCommentLoading} comments={comments} />
        </VStack>
    );
};

export default memo(ArticleDetailsComments);
