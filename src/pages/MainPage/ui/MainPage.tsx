import { useTranslation } from 'react-i18next';

import {Input} from '@/shared/ui/Input';

const MainPage = () => {
    const {t} = useTranslation('mainPage')

    return (<div>
        {t('title')}
        <Input placeholder='Ввод'/>
    </div>)
};

export default MainPage;