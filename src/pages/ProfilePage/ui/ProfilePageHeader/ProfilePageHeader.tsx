import { FC } from "react";
import { useTranslation } from "react-i18next";

import { profileActions, selectorProfile, updateProfile } from '@/entities/Profile'
import { } from "@/entities/Profile";
import { getAuthData } from "@/entities/User";
import { classNames } from "@/shared/lib";
import { Text } from '@/shared/ui/Text'
import { Button, EButtonTheme } from "@/shared/ui/Button";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";

import styles from "./ProfilePageHeader.module.scss";

type TProfilePageHeaderProps = {
  className?: string;
  readonly?: boolean;
};

export const ProfilePageHeader: FC<TProfilePageHeaderProps> = ({ className, readonly }) => {
    const {t} = useTranslation('profile');
    const dispatch = useAppDispatch();

    const {authData, idProfile} = useAppSelector( state =>  ({
        idProfile: selectorProfile.getId(state),
        authData: getAuthData(state)
    }))
    const canEdit = authData?.id === idProfile

    const handleEditProfile = () => {
        dispatch(profileActions.setReadOnly(false))
    }

    const handleSaveProfile = () => {
        dispatch(updateProfile())
    }

    const handleCancelProfile = () => {
        dispatch(profileActions.cancelEdit())
    }


    const buttonMenu = readonly ? 
        <Button onClick={handleEditProfile} theme={EButtonTheme.BORDER}>{t('edit')}</Button> : 
        <>
            <Button 
                className={styles.buttonCancel} 
                onClick={handleSaveProfile} 
                theme={EButtonTheme.BORDER}>{t('save')}</Button>
            <Button onClick={handleCancelProfile} danger theme={EButtonTheme.BORDER}>{t('cancel')}</Button>
        </>

    return (
        <div className={classNames(styles.ProfilePageHeader, {}, [className])}>

            <Text title={t('profile')}/>

            {canEdit && <div>{buttonMenu}</div>}
        </div>
    );
};