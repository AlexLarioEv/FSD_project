import { rtkApi } from '@/shared/api';

type TRatingProfileApi = {
    id: string;
    rate: number;
    feedback: string;
    userId: string;
    profileId: string;
};

type TGetProfileRatingArg = {
    userId: string;
    profileId: string;
};

type TRateProfileArg = {
    userId: string;
    profileId: string;
    rate: number;
    feedback?: string;
};

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<
            TRatingProfileApi[],
            TGetProfileRatingArg
        >({
            query: ({ profileId, userId }) => ({
                url: '/profile-ratings',
                params: {
                    userId,
                    profileId,
                },
            }),
        }),
        rateProfile: build.mutation<void, TRateProfileArg>({
            query: (arg) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const { useGetProfileRatingQuery, useRateProfileMutation } =
    profileRatingApi;
