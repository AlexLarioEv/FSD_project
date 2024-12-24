import { memo } from 'react';

import { Button } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib';
import { useTranslation } from 'react-i18next';

import styles from './LangSwitcher.module.scss';
import { toggleFeatures } from '@/shared/lib/features';

type TLangSwitcherProps = {
    className?: string;
};

const LangSwitcher = memo(({ className }: TLangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const handleClick = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    const classLangSwitcher = toggleFeatures({
        name: 'enableAppRedesigned',
        on: () => styles.LangSwitcherRedesigned,
        off: () => styles.LangSwitcher,
    });

    return (
        <Button
            inverted
            onClick={handleClick}
            className={classNames(classLangSwitcher, {}, [className])}
        >
            {t('language')}
        </Button>
    );
});

LangSwitcher.displayName = 'LangSwitcher';

export { LangSwitcher };
