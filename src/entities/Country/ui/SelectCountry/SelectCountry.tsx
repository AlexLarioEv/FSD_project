import { FC,memo } from "react";
import { useTranslation } from "react-i18next";

import { ListBox, TListBoxItem } from '@/shared/ui/ListBox';

import {ECountry} from '../../model/types'

type TSelectCountryProps = {
  className?: string;
  defaultValue?: string;
  readonly?: boolean;
  onChange?: (e: ECountry) => void;
};

const optionList: TListBoxItem<ECountry>[] = [
    {value: ECountry.ARMENIA, content: ECountry.ARMENIA  },
    {value: ECountry.BELARUS, content: ECountry.BELARUS  },
    {value: ECountry.KAZAKHSTAN, content: ECountry.RUSSIA  },
    {value: ECountry.UKRAINE, content: ECountry.UKRAINE  }]

const SelectCountry: FC<TSelectCountryProps> = ({ className,defaultValue,readonly, onChange }) => {
    const {t} = useTranslation();
    
    const handleChange = (e: ECountry) => {
        onChange && onChange(e);
    }

    return (
        <>
            <ListBox 
                onChange={handleChange}
                readonly={readonly}
                className={className}
                label={t('country')}
                data-testid='selectCountry'
                items={optionList}
                defaultValue={defaultValue}
                direction='top'
            />
        </>
    );
};

export default memo(SelectCountry);
