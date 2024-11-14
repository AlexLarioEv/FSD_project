import { memo } from "react";

import { Button } from "@/shared/ui/Button";
import { classNames } from "@/shared/lib";
import { useTranslation } from 'react-i18next';

type TLangSwitcherProps = {
  className?: string;
};

const LangSwitcher = memo(({ className }:TLangSwitcherProps) => {
    const { t, i18n } = useTranslation() 

    const handleClick = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button inverted onClick={handleClick} className={classNames('', {}, [className])}>
            {t('language')}
        </Button>
    );
});

LangSwitcher.displayName = 'LangSwitcher';

export {LangSwitcher};