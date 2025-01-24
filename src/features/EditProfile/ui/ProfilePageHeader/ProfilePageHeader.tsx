import { FC, memo } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';

import {
    profileActions,
    selectorProfile,
    updateProfile,
} from '@/entities/Profile';
import { getAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib';
import { Text } from '@/shared/ui/Text';
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

import { HStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/Avatar';
import { ToggleFeatures } from '@/shared/lib/features';

import styles from './ProfilePageHeader.module.scss';

type TProfilePageHeaderProps = {
    className?: string;
    readonly?: boolean;
    canEdit?: boolean;
    avatar?: string;
};

const selectAuthAndProfileData = createSelector(
    [selectorProfile.getId, getAuthData],
    (idProfile, authData) => ({
        idProfile,
        authData,
    }),
);

const ProfilePageHeader: FC<TProfilePageHeaderProps> = ({
    className,
    readonly,
    avatar,
}) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const { authData, idProfile } = useAppSelector(selectAuthAndProfileData);
    const isLoading = useAppSelector(selectorProfile.isLoadingProfileData);

    const canEdit = authData?.id === idProfile;

    const handleEditProfile = () => {
        dispatch(profileActions.setReadOnly(false));
    };

    const handleSaveProfile = () => {
        dispatch(updateProfile());
    };

    const handleCancelProfile = () => {
        dispatch(profileActions.cancelEdit());
    };

    const buttonMenu = readonly ? (
        <Button
            testId="EditProfileHeader.EditButton"
            onClick={handleEditProfile}
            theme={EButtonTheme.BORDER}
        >
            {t('edit')}
        </Button>
    ) : (
        <HStack gap={8}>
            <Button
                testId="EditProfileHeader.SaveButton"
                onClick={handleSaveProfile}
                theme={EButtonTheme.BORDER}
            >
                {t('save')}
            </Button>
            <Button
                testId="EditProfileHeader.CancelButton"
                onClick={handleCancelProfile}
                danger
                theme={EButtonTheme.BORDER}
            >
                {t('cancel')}
            </Button>
        </HStack>
    );

    const readonlyButton = readonly ? (
        <Button
            className={styles.button}
            testId="EditProfileHeader.EditButton"
            onClick={handleEditProfile}
            theme={EButtonTheme.BORDER}
        >
            {t('edit')}
        </Button>
    ) : (
        <Button
            className={styles.button}
            testId="EditProfileHeader.SaveButton"
            onClick={handleSaveProfile}
            theme={EButtonTheme.BORDER}
        >
            {t('save')}
        </Button>
    );

    const buttonMenuRedesigned = (
        <HStack
            className={classNames('', {}, [className])}
            gap={8}
            align="center"
            justify="between"
            max
        >
            {readonly ? (
                <div className={styles.button} />
            ) : (
                <Button
                    className={styles.button}
                    testId="EditProfileHeader.CancelButton"
                    onClick={handleCancelProfile}
                    danger
                    theme={EButtonTheme.BORDER}
                >
                    {t('cancel')}
                </Button>
            )}
            <Avatar src={avatar} size={128} />
            {canEdit ? readonlyButton : <div className={styles.button} />}
        </HStack>
    );

    if (isLoading) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="enableAppRedesigned"
            on={buttonMenuRedesigned}
            off={
                <HStack
                    justify="between"
                    className={classNames('', {}, [className])}
                >
                    <Text title={t('profile')} />
                    {canEdit && <div>{buttonMenu}</div>}
                </HStack>
            }
        />
    );
};

export default memo(ProfilePageHeader);
