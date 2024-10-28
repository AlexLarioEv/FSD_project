import { useTranslation } from 'react-i18next';

import {Input} from '@/shared/ui/Input';
import { Page } from '@/shared/ui/Page';

const MainPage = () => {
    const {t} = useTranslation('mainPage')

    return (
        <Page>
            {t('title')}
            <Input placeholder='Ввод'/>
        </Page>
    )
};

export default MainPage;