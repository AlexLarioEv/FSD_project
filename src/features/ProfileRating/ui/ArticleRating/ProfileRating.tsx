import { FC, useCallback } from 'react';

import { classNames } from '@/shared/lib';

import { Rating } from '@/entities/Rating';
import {
    useRateProfileMutation,
    useGetProfileRatingQuery,
} from '../../api/profileRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useTranslation } from 'react-i18next';

type TProfileRatingProps = {
    className?: string;
    id: string;
};

export const ProfileRating: FC<TProfileRatingProps> = ({ className, id }) => {
    const { t } = useTranslation('profile');

    const { data, isLoading } = useGetProfileRatingQuery({
        userId: id,
        profileId: id,
    });
    const [updatePost] = useRateProfileMutation();

    const rating = data?.[0];

    const handleAccept = useCallback(
        (starCount: number) => {
            updatePost({
                userId: id,
                profileId: id,
                rate: starCount,
            });
        },
        [id, updatePost],
    );

    const handleCancel = useCallback(
        (starCount: number) => {
            updatePost({
                userId: id,
                profileId: id,
                rate: starCount,
            });
        },
        [id, updatePost],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={150} />;
    }

    return (
        <Rating
            className={classNames('', {}, [className])}
            title={t('rating_question')}
            defaultRate={rating?.rate}
            onAccept={handleAccept}
            onCancel={handleCancel}
        />
    );
};
