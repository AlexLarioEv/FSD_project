import {useCallback, FC, useEffect } from 'react'

import { profileReducer } from "@/entities/Profile";
import { DynamicModuleLoader, TReducerList } from "@/shared/lib/components";
import { ProfileCard, fetchProfile } from "@/entities/Profile";
import { useAppDispatch } from "@/shared/hooks";
import { selectorProfile,profileActions } from '@/entities/Profile'
import { useAppSelector } from "@/shared/hooks";
import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';

import {ProfilePageHeader} from './ProfilePageHeader/ProfilePageHeader';

const reducers:TReducerList = {
    profile: profileReducer
} 

type TProfilePageProps = {
  className?: string;
};

const ProfilePage: FC<TProfilePageProps> = () => {

    const {firstName, lastName,userName, age, country, currency, avatar, city, isLoading, error, readonly} = 
    useAppSelector( state =>  ({
        isLoading: selectorProfile.isLoadingProfileData(state),
        error: selectorProfile.isErrorProfileData(state),
        firstName: selectorProfile.getFirstName(state),
        lastName: selectorProfile.getLastName(state),
        userName: selectorProfile.getUsername(state),
        age: selectorProfile.getAge(state),
        country: selectorProfile.getCountry(state),
        currency: selectorProfile.getCurrency(state),
        city: selectorProfile.getCity(state),
        avatar : selectorProfile.getAvatar(state),
        readonly: selectorProfile.isReadOnly(state),
    }))

    const dispatch = useAppDispatch()

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

    useEffect(()=> {
        dispatch(fetchProfile())
    },[dispatch])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ProfilePageHeader readonly={readonly} avatarUrl={avatar} avatarName={userName}/>
            <ProfileCard
                isLoading={isLoading}
                error={error}
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
        </DynamicModuleLoader>
    );
};

export default ProfilePage;