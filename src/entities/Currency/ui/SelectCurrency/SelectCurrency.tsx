import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { Select, TOptionsType } from "@/shared/ui/Select";

import {ECurrency} from '../../model/types'

type TSelectCountryProps = {
  className?: string;
  defaultValue?: ECurrency;
  onChange?: (e: ECurrency)=> void;
  readonly?: boolean;
};

const optionList: TOptionsType<ECurrency>[] = [
    {value: ECurrency.EUR, content: ECurrency.EUR  },
    {value: ECurrency.RUB, content: ECurrency.RUB  }, 
    {value: ECurrency.USD, content: ECurrency.USD  }
];

const SelectCurrency: FC<TSelectCountryProps> = ({ className, defaultValue, onChange, readonly}) => {
    const {t} = useTranslation()

    const handleChange = (e: ECurrency) => {
        
        onChange && onChange(e);
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

export default memo(SelectCurrency);