import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text';

const MainPage = () => {
    const { t } = useTranslation('mainPage');

    return (
        <Page data-testid="MainPage">
            <Text title={t('title')} />
        </Page>
    );
};

export default MainPage;
