import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Select } from "@/shared/ui/Select";

import {ECurrency} from '../../model/types'

type TSelectCountryProps = {
  className?: string;
  defaultValue?: ECurrency;
  onChange?: (e: ECurrency)=> void;
  readonly?: boolean;
};

const optionList = [ECurrency.EUR, ECurrency.RUB, ECurrency.USD];

export const SelectCurrency: FC<TSelectCountryProps> = ({ className, defaultValue, onChange, readonly}) => {
    const {t} = useTranslation()

    const handleChange = (e: string) => {
        
        onChange && onChange(e as ECurrency);
    }

    return (
        <Select
            testId="selectCurrency"
            readonly={readonly}
            className={className} 
            label={t('currency')} 
            defaultValue = {defaultValue}
            options={optionList}  
            onChange={handleChange}
        />
    );
};