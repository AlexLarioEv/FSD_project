import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib";
import { profileActions, updateProfile } from '@/entities/Profile'
import { } from "@/entities/Profile";

import styles from "./ProfilePageHeader.module.scss";
import { Button, EButtonTheme } from "@/shared/ui";
import { useAppDispatch } from "@/shared/hooks";
import { Text } from '@/shared/ui/Text'

type TProfilePageHeaderProps = {
  className?: string;
  readonly?: boolean;
};

export const ProfilePageHeader: FC<TProfilePageHeaderProps> = ({ className, readonly }) => {
    const {t} = useTranslation('profile');
    const dispatch = useAppDispatch();

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

            <div>
                {buttonMenu}
            </div>
        </div>
    );
};