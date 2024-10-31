import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Select, TOptionsType } from "@/shared/ui/Select";

import {ECountry} from '../../model/types'

type TSelectCountryProps = {
  className?: string;
  defaultValue?: string;
  readonly?: boolean;
  onChange?: (e: ECountry) => void;
};

const optionList: TOptionsType<ECountry>[] = [
    {value: ECountry.ARMENIA, content: ECountry.ARMENIA  },
    {value: ECountry.BELARUS, content: ECountry.BELARUS  },
    {value: ECountry.KAZAKHSTAN, content: ECountry.RUSSIA  },
    {value: ECountry.UKRAINE, content: ECountry.UKRAINE  }]

export const SelectCountry: FC<TSelectCountryProps> = ({ className,defaultValue,readonly, onChange }) => {
    const {t} = useTranslation();
    
    const handleChange = (e: ECountry) => {
        onChange && onChange(e);
    }

    return (
        <Select 
            testId="selectCountry"
            readonly={readonly}
            onChange={handleChange}
            className={className} 
            label={t('country')} 
            options={optionList}  
            defaultValue={defaultValue}
        />
    );
};