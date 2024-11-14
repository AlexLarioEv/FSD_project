import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';
import { EditProfile } from '@/features/EditProfile';
import { ProfileRating } from '@/features/ProfileRating';
import { Text } from '@/shared/ui/Text';

import styles from './ProfilePage.module.scss'

type TProfilePageProps = {
  className?: string;
};

const ProfilePage: FC<TProfilePageProps> = () => {
    const {t}  = useTranslation('profile')
    const {id} = useParams();

    if(!id){
        return <Text description={t('not_fund_profile')} />
    }

    return (
        <Page data-testid='ProfilePage' className={styles.ProfilePage}>
            <EditProfile id={id}/>
            <ProfileRating id={id} />
        </Page>
    );
};

export default ProfilePage;