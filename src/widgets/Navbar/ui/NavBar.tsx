import { FC, useState } from "react"
import { useTranslation } from "react-i18next"

import {AuthModal} from '@/features/AuthByUserName'

import { Button } from "@/shared/ui/Button"
import { classNames} from '@/shared/lib'

import styles from './NavBar.module.scss'

type TNavBarProps = {
    className?: string
}

export const NavBar: FC<TNavBarProps> = ({className}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {t} = useTranslation();

    const handleClick = () => {
        setIsOpen(true)
    } 
    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.auth}>
                <Button onClick={handleClick}>{t('sign_in')}</Button>
            </div>
            <AuthModal isOpen={isOpen} onClose={handleClose} />
        </div>
    );
}