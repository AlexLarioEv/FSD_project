import { profileReducer } from "@/entities/Profile";
import { DynamicModuleLoader, TReducerList } from "@/shared/lib/components";
import { FC, useEffect } from "react";
import { ProfileCard, getProfile } from "@/entities/Profile";
import { useAppDispatch } from "@/shared/hooks";

const reducers:TReducerList = {
    profile: profileReducer
} 

type TProfilePageProps = {
  className?: string;
};

const ProfilePage: FC<TProfilePageProps> = () => {

    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(getProfile())
    },[dispatch])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ProfileCard/>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;