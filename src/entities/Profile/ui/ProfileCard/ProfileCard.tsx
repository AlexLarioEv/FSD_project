import { FC } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib";
import { Button, EButtonTheme, Input, Text } from "@/shared/ui";

import {getProfileData} from '../../model/selector';

type TProfileCardProps = {
  className?: string;
};

export const ProfileCard: FC<TProfileCardProps> = ({ className }) => {
    const {t} = useTranslation('profile')
    const {first, lastname} = useSelector(getProfileData) || {};

    return (
        <div className={classNames('', {}, [className])}>
            <div>
                <Text title={t('profile')}/>
                <Button theme={EButtonTheme.BORDER}>{t('edit')}</Button>
            </div>
            <div>
                <Input placeholder={t('firstName')} value={first} />
                <Input placeholder={t('lastName')} value={lastname} />
            </div>
        </div>
    );
};