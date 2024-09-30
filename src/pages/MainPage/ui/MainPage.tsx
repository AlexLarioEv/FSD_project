import { useTranslation } from 'react-i18next';

import {Counter} from '../../../entities/Counter';

const MainPage = () => {
    const {t} = useTranslation('mainPage')

    return (<div>
        <Counter/>
        {t('title')}
    </div>)
};

export default MainPage;