import { rtkApi } from '@/shared/api';

type TRatingArticleApi = {
    id: string;
    rate: number;
    feedback: string;
    userId: string;
    profileId: string;
};

type TGetArticleRatingArg = {
    userId: string;
    articleId: string;
};

type TRateArticleArg = {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
};

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<
            TRatingArticleApi[],
            TGetArticleRatingArg
        >({
            query: ({ articleId, userId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: build.mutation<void, TRateArticleArg>({
            query: (arg) => ({
                url: '/article-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const { useGetArticleRatingQuery, useRateArticleMutation } =
    articleRatingApi;
