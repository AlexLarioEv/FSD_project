import {useCallback, FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Page } from '@/widgets/Page';
import { 
    ProfileCard, 
    fetchProfile, 
    selectorProfile,
    profileActions,
    profileReducer,
    EErrorValidateForm 
} from "@/entities/Profile";
import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';
import { DynamicModuleLoader, TReducerList } from "@/shared/lib/components";
import { Text , ETypeText} from '@/shared/ui/Text';
import { useAppDispatch,useAppSelector, useInitEffect } from "@/shared/hooks";

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

import styles from './ProfilePage.module.scss';
import { createSelector } from '@reduxjs/toolkit';

const reducers:TReducerList = {
    profile: profileReducer
} 

type TProfilePageProps = {
  className?: string;
};

const selectProfileData = createSelector(
    [
        selectorProfile.isLoadingProfileData,
        selectorProfile.isErrorProfileData,
        selectorProfile.getFirstName,
        selectorProfile.getLastName,
        selectorProfile.getUsername,
        selectorProfile.getAge,
        selectorProfile.getCountry,
        selectorProfile.getCurrency,
        selectorProfile.getCity,
        selectorProfile.getAvatar,
        selectorProfile.isReadOnly
    ],
    (
        isLoading,
        error,
        firstName,
        lastName,
        userName,
        age,
        country,
        currency,
        city,
        avatar,
        readonly
    ) => ({
        isLoading,
        error,
        firstName,
        lastName,
        userName,
        age,
        country,
        currency,
        city,
        avatar,
        readonly
    })
);

const ProfilePage: FC<TProfilePageProps> = () => {
    const {t} = useTranslation('profile');
    const {id} = useParams()

    const {
        firstName, lastName,userName, age, country, currency, avatar, city, isLoading, error, readonly 
    } = useAppSelector(selectProfileData);

    const isServerError = error?.includes(EErrorValidateForm.SERVER_ERROR);
    
    const dispatch = useAppDispatch();

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value: ECurrency) => {
        dispatch(profileActions.updateProfile({currency: value }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value: ECountry) => {
        dispatch(profileActions.updateProfile({country: value }));
    }, [dispatch]);

    useInitEffect(()=>{
        if(id){
            dispatch(fetchProfile(id));
        }
    })

    const textError = useMemo(()=> !isServerError ? 
        error?.map((errorName) => <Text
            key={errorName} 
            type={ETypeText.ERROR} 
            title={t('error')} 
            description={t(errorName)}
        />) 
        : null , [isServerError, error, t])

    return (
        <DynamicModuleLoader reducers={reducers} >
            <Page>
                <ProfilePageHeader className={styles.header} readonly={readonly}/>
                {textError}
                <ProfileCard
                    isLoading={isLoading}
                    error={error?.includes(EErrorValidateForm.SERVER_ERROR)}
                    readonly={readonly}
                    first={firstName} 
                    lastname={lastName} 
                    username={userName} 
                    age={age} 
                    country={country} 
                    currency={currency}
                    city={city} 
                    avatar={avatar}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;