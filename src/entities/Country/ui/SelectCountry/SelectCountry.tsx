import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ListBox, TListBoxItem } from '@/shared/ui/Popups';

import { ECountry } from '../../model/types';

export type TSelectCountryProps = {
    className?: string;
    value?: string;
    readonly?: boolean;
    onChange?: (e: ECountry) => void;
};

const optionList: TListBoxItem<ECountry>[] = [
    { value: ECountry.ARMENIA, content: ECountry.ARMENIA },
    { value: ECountry.BELARUS, content: ECountry.BELARUS },
    { value: ECountry.KAZAKHSTAN, content: ECountry.RUSSIA },
    { value: ECountry.UKRAINE, content: ECountry.UKRAINE },
];

const SelectCountry: FC<TSelectCountryProps> = ({
    className,
    value,
    readonly,
    onChange,
}) => {
    const { t } = useTranslation();

    const handleChange = (e: ECountry) => {
        onChange && onChange(e);
    };

    return (
        <>
            <ListBox
                value={value}
                onChange={handleChange}
                readonly={readonly}
                className={className}
                label={t('country')}
                testId="selectCountry"
                items={optionList}
                defaultValue={t('enter_country')}
                direction="top right"
            />
        </>
    );
};

export default memo(SelectCountry);
