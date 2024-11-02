import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { ECurrency } from '../../model/types'
import { ListBox, TListBoxItem } from "@/shared/ui/ListBox";

type TSelectCountryProps = {
  className?: string;
  defaultValue?: ECurrency;
  onChange?: (e: ECurrency)=> void;
  readonly?: boolean;
};

const optionList: TListBoxItem<ECurrency>[] = [
    {value: ECurrency.EUR, content: ECurrency.RUB },
    {value: ECurrency.RUB, content: ECurrency.RUB }, 
    {value: ECurrency.USD, content: ECurrency.USD }
];

const SelectCurrency: FC<TSelectCountryProps> = ({ className, defaultValue, onChange, readonly}) => {
    const {t} = useTranslation()

    const handleChange = (e: ECurrency) => {
        
        onChange && onChange(e);
    }

    return (
        <ListBox 
            onChange={handleChange}
            readonly={readonly}
            className={className}
            label={t('currency')}
            data-testid='selectCountry'
            items={optionList}
            defaultValue={defaultValue}
            direction='top'
        />
    );
};

export default memo(SelectCurrency);