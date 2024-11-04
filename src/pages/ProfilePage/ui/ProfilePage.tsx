import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Page } from '@/widgets/Page';


import { EditProfile } from '@/features/EditProfile';
import { Text } from '@/shared/ui/Text';

type TProfilePageProps = {
  className?: string;
};

const ProfilePage: FC<TProfilePageProps> = () => {
    const {id} = useParams();

    return (
        <Page>
            { id ? <EditProfile id={id}/> : <Text description='' /> }
        </Page>
    );
};

export default ProfilePage;