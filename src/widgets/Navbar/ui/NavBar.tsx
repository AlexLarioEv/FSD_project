import { FC } from "react"

import { AppLink, EApplinkTypes } from "shared/ui"
import { classNames} from 'shared/lib'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'

import styles from './NavBar.module.scss'

type TNavBarProps = {
    className?: string
}

export const NavBar: FC<TNavBarProps> = ({className}) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={styles.links}>
                <AppLink type={EApplinkTypes.SECONDARY} className={styles.mainLink} to={'/'}> Главная </AppLink>
                <AppLink type={EApplinkTypes.SECONDARY} to={'/about'}> О сайте </AppLink>
            </div>
        </div>
    );
}