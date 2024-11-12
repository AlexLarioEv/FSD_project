import { FC, useCallback, useMemo } from "react";
import { useTranslation } from 'react-i18next';

import { classNames } from "@/shared/lib";

import { EErrorValidateForm, fetchProfile, profileActions, ProfileCard, profileReducer, selectorProfile } from "@/entities/Profile";
import { ETypeText, Text } from "@/shared/ui/Text";
import { DynamicModuleLoader, TReducerList } from "@/shared/lib/components";
import { useAppDispatch, useAppSelector, useInitEffect } from "@/shared/lib/hooks";
import { createSelector } from "@reduxjs/toolkit";
import { ECountry } from "@/entities/Country";
import { ECurrency } from "@/entities/Currency";
import  ProfilePageHeader  from "../ProfilePageHeader/ProfilePageHeader";
import { VStack } from "@/shared/ui/Stack";

type TEditProfileProps = {
    className?: string;
    id: string;
};

const reducers:TReducerList = {
    profile: profileReducer
} 

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


export const EditProfile: FC<TEditProfileProps> = ({ className, id }) => {
    const { t } = useTranslation('profile');

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
        dispatch(fetchProfile(id));
    })

    const textError = useMemo(()=> !isServerError ? 
        error?.map((errorName) => <Text
            key={errorName} 
            type={ETypeText.ERROR} 
            title={t('error')} 
            description={t(errorName)}
            testId="EditableProfileCard.Error"
        />) 
        : null , [isServerError, error, t])
    return (

        <DynamicModuleLoader reducers={reducers}  removeAfterUnmount={false} >
            <VStack gap={8} className={classNames('', {}, [className])}>

                <ProfilePageHeader readonly={readonly}/>
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

            </VStack>
        </DynamicModuleLoader>
    );
};
