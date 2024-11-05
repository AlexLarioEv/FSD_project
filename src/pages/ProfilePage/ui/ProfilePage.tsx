import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';


import { EditProfile } from '@/features/EditProfile';
import { Text } from '@/shared/ui/Text';

type TProfilePageProps = {
  className?: string;
};

const ProfilePage: FC<TProfilePageProps> = () => {
    const {t}  = useTranslation('profile')
    const {id} = useParams();

    return (
        <Page>
            { id ? <EditProfile id={id}/> : <Text description={t('not_fund_profile')} /> }
        </Page>
    );
};

export default ProfilePage;