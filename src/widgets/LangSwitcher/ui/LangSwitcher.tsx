import { FC } from "react";

import { Button } from "shared/ui";
import { classNames } from "shared/lib";
import { useTranslation } from 'react-i18next';

type TLangSwitcherProps = {
  className?: string;
};

export const LangSwitcher: FC<TLangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation() 

  const handleClick = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
    <Button onClick={handleClick} className={classNames('', {}, [className])}>
      {t('language')}
    </Button>
  );
};