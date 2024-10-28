import { Page } from '@/shared/ui/Page';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const {t} = useTranslation('aboutPage')
    
    return <Page>{t('title')}</Page>
}

export default AboutPage