import { FC } from 'react';
import { Button, EButtonTheme } from '@/shared/ui/Button';

import { useCounterActions } from '../model/slice';
import { useCounterValue } from '../model/selector';
import { useTranslation } from 'react-i18next';

export const Counter: FC = () => {
    const { t } = useTranslation();
    const counter = useCounterValue();
    const { add, decremented, incremented } = useCounterActions();

    const handleIncrement = () => {
        incremented();
    };

    const handleDecrement = () => {
        decremented();
    };

    const handleAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h2 data-testid="counter">{counter}</h2>
            <Button
                testId="increment"
                theme={EButtonTheme.BORDER}
                onClick={handleIncrement}
            >
                {t('increment')}
            </Button>
            <Button
                testId="decrement"
                theme={EButtonTheme.BORDER}
                onClick={handleDecrement}
            >
                {t('decrement')}
            </Button>
            <Button theme={EButtonTheme.BORDER} onClick={handleAddFive}>
                {5}
            </Button>
        </div>
    );
};
