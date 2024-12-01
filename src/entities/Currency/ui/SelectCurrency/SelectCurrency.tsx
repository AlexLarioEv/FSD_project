import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ECurrency } from '../../model/types';
import { ListBox, TListBoxItem } from '@/shared/ui/Popups';

export type TSelectCurrencyProps = {
    className?: string;
    value?: ECurrency;
    onChange?: (e: ECurrency) => void;
    readonly?: boolean;
};

const optionList: TListBoxItem<ECurrency>[] = [
    { value: ECurrency.EUR, content: ECurrency.EUR },
    { value: ECurrency.RUB, content: ECurrency.RUB },
    { value: ECurrency.USD, content: ECurrency.USD },
];

const SelectCurrency: FC<TSelectCurrencyProps> = ({
    className,
    value,
    onChange,
    readonly,
}) => {
    const { t } = useTranslation();

    const handleChange = (e: ECurrency) => {
        onChange && onChange(e);
    };

    return (
        <ListBox
            onChange={handleChange}
            readonly={readonly}
            className={className}
            label={t('currency')}
            testId="selectCurrency"
            items={optionList}
            value={value}
            defaultValue={t('enter_currency')}
            direction="top right"
        />
    );
};

export default memo(SelectCurrency);
