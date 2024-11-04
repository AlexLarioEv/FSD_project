import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { profileActions, selectorProfile, updateProfile } from '@/entities/Profile'
import { } from "@/entities/Profile";
import { getAuthData } from "@/entities/User";
import { classNames } from "@/shared/lib";
import { Text } from '@/shared/ui/Text'
import { Button, EButtonTheme } from "@/shared/ui/Button";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";

import { HStack } from "@/shared/ui/Stack";
import { createSelector } from "@reduxjs/toolkit";

type TProfilePageHeaderProps = {
  className?: string;
  readonly?: boolean;
  canEdit?: boolean;
};

const selectAuthAndProfileData = createSelector(
    [
        selectorProfile.getId,
        getAuthData
    ],
    (idProfile, authData) => ({
        idProfile,
        authData
    })
);

const ProfilePageHeader: FC<TProfilePageHeaderProps> = ({ className, readonly }) => {
    const {t} = useTranslation('profile');
    const dispatch = useAppDispatch();

    const {authData, idProfile} = useAppSelector(selectAuthAndProfileData);

    const canEdit = authData?.id === idProfile;

    const handleEditProfile = () => {
        dispatch(profileActions.setReadOnly(false));
    }

    const handleSaveProfile = () => {
        dispatch(updateProfile());
    }

    const handleCancelProfile = () => {
        dispatch(profileActions.cancelEdit());
    }
    console.log(canEdit,  className, readonly)
    
    const buttonMenu = readonly ? 
        <Button onClick={handleEditProfile} theme={EButtonTheme.BORDER}>{t('edit')}</Button> : 
        <HStack gap={8}>
            <Button 
                onClick={handleSaveProfile} 
                theme={EButtonTheme.BORDER}>{t('save')}</Button>
            <Button onClick={handleCancelProfile} danger theme={EButtonTheme.BORDER}>{t('cancel')}</Button>
        </HStack>

    return (
        <HStack justify='between' className={classNames('', {}, [className])}>

            <Text title={t('profile')}/>

            {canEdit && <div>{buttonMenu}</div>}
        </HStack>
    );
};

export default memo(ProfilePageHeader); 