import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');

    return <Page data-testid={'AboutPage'}>{t('title')}</Page>;
};

export default AboutPage;
