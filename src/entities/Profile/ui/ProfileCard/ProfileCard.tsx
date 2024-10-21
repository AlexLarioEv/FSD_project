import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames, TMods } from "@/shared/lib";
import { Loader} from "@/shared/ui/Loader";
import { Input } from "@/shared/ui/Input";
import { Avatar } from '@/shared/ui/Avatar'
import { Text, ETypeText,  ETextAlign} from "@/shared/ui/Text";

import styles from './ProfileCard.module.scss';
import { SelectCountry } from "@/entities/Country";
import { SelectCurrency } from "@/entities/Currency";
import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';

import {TProfile} from "../../model/types/ProfileSchema";

type TProfileCardProps = {
    className?: string;
    isLoading?: boolean;
    error?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: ECurrency) => void;
    onChangeCountry?: (value: ECountry) => void;
} & Partial<TProfile>;

export const ProfileCard: FC<TProfileCardProps> = ({ 
    className, 
    first, 
    lastname, 
    age,
    currency,
    country,
    city,
    username,
    avatar,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
}) => {
    const {t} = useTranslation('profile')

    const mods: TMods = {
        [styles.edit]: !readonly
    }

    if (isLoading) {
        return (
            <div className={classNames(styles.ProfileCard, {}, [className, styles.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(styles.ProfileCard, {}, [className, styles.error])}>
                <Text
                    type={ETypeText.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    description={t('Попробуйте обновить страницу')}
                    align={ETextAlign.CENTER}
                />
            </div>
        );
    }
    
    return (
        <div className={classNames(styles.ProfileCard, mods, [className])}>
            <Avatar className={styles.avatar} size={100} src={avatar ?? ''} alt={username ?? ''}/>
            <Input disabled={readonly} onChange={onChangeFirstname} placeholder={t('firstName')} value={first} />
            <Input disabled={readonly} onChange={onChangeLastname} placeholder={t('lastName')} value={lastname} />
            <Input disabled={readonly} onChange={onChangeAge} placeholder={t('age')} value={age} />
            <Input disabled={readonly} onChange={onChangeCity} placeholder={t('city')} value={city} />
            <Input disabled={readonly} onChange={onChangeUsername} placeholder={t('username')} value={username} />
            <Input disabled={readonly} onChange={onChangeAvatar} placeholder={t('avatar')} value={avatar} />
            <SelectCurrency readonly={readonly} onChange={onChangeCurrency} defaultValue={currency}/>
            <SelectCountry readonly={readonly} onChange={onChangeCountry} defaultValue={country}/>
        </div>
    );
};