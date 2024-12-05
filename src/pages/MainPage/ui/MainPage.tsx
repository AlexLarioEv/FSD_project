import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';
import { Rating } from '@/entities/Rating';
import { Counter } from '@/entities/Counter';
import { toggleFeatures } from '@/shared/lib/features';

const MainPage = () => {
    const { t } = useTranslation('mainPage');
    const counter = toggleFeatures({
        name: 'enableCounter',
        on: () => <Counter />,
        off: () => null,
    });

    return (
        <Page data-testid="MainPage">
            {t('title')}
            {counter}
            <Rating title="Как вам статья" feedbackTitle="Отзыв" />
        </Page>
    );
};

export default MainPage;
