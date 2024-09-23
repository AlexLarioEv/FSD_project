import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const {t} = useTranslation('mainPage')

    return <div>{t('title')}</div>
};

export default MainPage;