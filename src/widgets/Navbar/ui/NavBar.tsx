import { FC } from "react"

import { AppLink, EApplinkTypes } from "shared/ui"
import { classNames} from 'shared/lib'
import { useTranslation } from 'react-i18next';

import styles from './NavBar.module.scss'

type TNavBarProps = {
    className?: string
}

export const NavBar: FC<TNavBarProps> = ({className}) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink type={EApplinkTypes.SECONDARY} className={styles.mainLink} to={'/'}> 
                    {t('mainLink')} 
                </AppLink>
                <AppLink type={EApplinkTypes.SECONDARY} to={'/about'}> {t('aboutLink')} </AppLink>
            </div>
        </div>
    );
}