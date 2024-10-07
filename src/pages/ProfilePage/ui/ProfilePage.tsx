import { profileReducer } from "@/entities/Profile";
import { DynamicModuleLoader, TReducerList } from "@/shared/lib/components";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const reducers:TReducerList = {
    profile: profileReducer
} 

type TProfilePageProps = {
  className?: string;
};

const ProfilePage: FC<TProfilePageProps> = () => {
    const {t} = useTranslation()

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div >
                {t('profile_page')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;