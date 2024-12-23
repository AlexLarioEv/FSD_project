import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, TMods } from '@/shared/lib';
import { Loader } from '@/shared/ui/Loader';
import { Input } from '@/shared/ui/Input';
import { Avatar } from '@/shared/ui/Avatar';
import { Text, ETypeText, ETextAlign } from '@/shared/ui/Text';

import styles from './ProfileCard.module.scss';
import { SelectCountry } from '@/entities/Country';
import { SelectCurrency } from '@/entities/Currency';
import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';

import { TProfile } from '../../model/types/ProfileSchema';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ToggleFeatures } from '@/shared/lib/features';

export type TProfileCardProps = {
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
    const { t } = useTranslation('profile');

    const mods: TMods = {
        [styles.edit]: !readonly,
    };

    if (isLoading) {
        return (
            <div className={classNames(styles.loaderWrapper, {}, [className])}>
                <Loader className={styles.loader} testId="loader" />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(styles.ProfileCard, {}, [
                    className,
                    styles.error,
                ])}
            >
                <Text
                    type={ETypeText.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    description={t('Попробуйте обновить страницу')}
                    align={ETextAlign.CENTER}
                    testId="EditableProfileCard.Error"
                />
            </div>
        );
    }

    return (
        <ToggleFeatures
            feature="enableAppRedesigned"
            on={
                <HStack gap={16} className={className} justify="between">
                    <VStack gap={16} className={styles.profileCardColumn}>
                        <Input
                            testId={'ProfileCard.firstname'}
                            aria-label="firstName"
                            disabled={readonly}
                            onChange={onChangeFirstname}
                            placeholder={t('firstName')}
                            value={first}
                        />
                        <Input
                            testId={'ProfileCard.lastname'}
                            aria-label="lastName"
                            disabled={readonly}
                            onChange={onChangeLastname}
                            placeholder={t('lastName')}
                            value={lastname}
                        />
                        <Input
                            testId={'ProfileCard.age'}
                            aria-label="age"
                            disabled={readonly}
                            onChange={onChangeAge}
                            placeholder={t('age')}
                            value={age}
                        />
                        <Input
                            testId={'ProfileCard.city'}
                            aria-label="city"
                            disabled={readonly}
                            onChange={onChangeCity}
                            placeholder={t('city')}
                            value={city}
                        />
                    </VStack>
                    <VStack gap={16} className={styles.profileCardColumn}>
                        <Input
                            testId={'ProfileCard.username'}
                            aria-label="username"
                            disabled={readonly}
                            onChange={onChangeUsername}
                            placeholder={t('username')}
                            value={username}
                        />
                        <Input
                            testId={'ProfileCard.avatar'}
                            aria-label="avatar"
                            disabled={readonly}
                            onChange={onChangeAvatar}
                            placeholder={t('avatar')}
                            value={avatar}
                        />
                        <SelectCurrency
                            readonly={readonly}
                            onChange={onChangeCurrency}
                            value={currency}
                        />
                        <SelectCountry
                            readonly={readonly}
                            onChange={onChangeCountry}
                            value={country}
                        />
                    </VStack>
                </HStack>
            }
            off={
                <VStack
                    gap={8}
                    className={classNames(styles.ProfileCard, mods, [
                        className,
                    ])}
                >
                    <Avatar
                        className={styles.avatar}
                        size={100}
                        src={avatar ?? ''}
                        alt={username ?? ''}
                    />
                    <Input
                        testId={'ProfileCard.firstname'}
                        aria-label="firstName"
                        disabled={readonly}
                        onChange={onChangeFirstname}
                        placeholder={t('firstName')}
                        value={first}
                    />
                    <Input
                        testId={'ProfileCard.lastname'}
                        aria-label="lastName"
                        disabled={readonly}
                        onChange={onChangeLastname}
                        placeholder={t('lastName')}
                        value={lastname}
                    />
                    <Input
                        testId={'ProfileCard.age'}
                        aria-label="age"
                        disabled={readonly}
                        onChange={onChangeAge}
                        placeholder={t('age')}
                        value={age}
                    />
                    <Input
                        testId={'ProfileCard.city'}
                        aria-label="city"
                        disabled={readonly}
                        onChange={onChangeCity}
                        placeholder={t('city')}
                        value={city}
                    />
                    <Input
                        testId={'ProfileCard.username'}
                        aria-label="username"
                        disabled={readonly}
                        onChange={onChangeUsername}
                        placeholder={t('username')}
                        value={username}
                    />
                    <Input
                        testId={'ProfileCard.avatar'}
                        aria-label="avatar"
                        disabled={readonly}
                        onChange={onChangeAvatar}
                        placeholder={t('avatar')}
                        value={avatar}
                    />
                    <SelectCurrency
                        readonly={readonly}
                        onChange={onChangeCurrency}
                        value={currency}
                    />
                    <SelectCountry
                        readonly={readonly}
                        onChange={onChangeCountry}
                        value={country}
                    />
                </VStack>
            }
        />
    );
};
