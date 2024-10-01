import { FC, useState } from "react"

import { classNames} from '@/shared/lib'

import styles from './NavBar.module.scss'
import { Button } from "@/shared/ui/Button"
import { Modal } from "@/shared/ui/Modal"
import { useTranslation } from "react-i18next"

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
            <Modal isOpen={isOpen} onClose={handleClose}></Modal>
        </div>
    );
}