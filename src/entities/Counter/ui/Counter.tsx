import { FC } from "react";
import { Button, EButtonTheme } from "@/shared/ui/Button";
import { useDispatch, useSelector } from 'react-redux'

import {counterActions} from '../model/slice'
import {getCounterValue} from '../model/selector'
import { useTranslation } from "react-i18next";

export const Counter: FC= () => {
    const {t} = useTranslation();
    const counter = useSelector(getCounterValue);

    const dispatch = useDispatch();

    const increment = () => {
        dispatch(counterActions.incremented())
    }

    const decrement = () => {
        dispatch(counterActions.decremented())
    }

    return (
        <div>
            <h2 data-testid='counter'>{counter}</h2>
            <Button testId="increment" theme={EButtonTheme.BORDER} onClick={increment}>{t('increment')}</Button>
            <Button testId="decrement" theme={EButtonTheme.BORDER} onClick={decrement}>{t('decrement')}</Button>
        </div>
    );
};