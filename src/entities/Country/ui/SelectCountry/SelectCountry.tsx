import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Select } from "@/shared/ui/Select";

import {ECountry} from '../../model/types'

type TSelectCountryProps = {
  className?: string;
  defaultValue?: string;
  readonly?: boolean;
  onChange?: (e: ECountry) => void;
};

const optionList = [ECountry.ARMENIA, ECountry.BELARUS, ECountry.KAZAKHSTAN, ECountry.RUSSIA, ECountry.UKRAINE]

export const SelectCountry: FC<TSelectCountryProps> = ({ className,defaultValue,readonly, onChange }) => {
    const {t} = useTranslation()

    
    const handleChange = (e: string) => {
        onChange && onChange(e as ECountry);
    }


    return (
        <Select 
            readonly={readonly}
            onChange={handleChange}
            className={className} 
            label={t('country')} 
            options={optionList}  
            defaultValue={defaultValue}
        />
    );
};