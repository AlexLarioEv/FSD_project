import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';
import { Rating } from '@/entities/Rating';
import { Counter } from '@/entities/Counter';

const MainPage = () => {
    const {t} = useTranslation('mainPage')

    return (
        <Page>
            {t('title')}
            <Counter />
            <Rating title='Как вам статья' feedbackTitle='Отзыв'/>
        </Page>
    )
};

export default MainPage;