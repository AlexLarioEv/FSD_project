import { FC, useCallback,useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"

import {AuthModal} from '@/features/AuthByUserName/ui'
import {getUser, userActions} from '@/entities/User'

import { useAppSelector } from "@/shared/hooks"
import { Button } from "@/shared/ui/Button"
import { classNames} from '@/shared/lib'

import styles from './NavBar.module.scss'

type TNavBarProps = {
    className?: string
}

export const NavBar: FC<TNavBarProps> = ({className}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {t} = useTranslation();
    const {auth} = useAppSelector(getUser)
    const dispatch = useDispatch();

    const handleOpenLoginModal = useCallback(() => {
        setIsOpen(true)
    },[])

    const handleCloseLoginModal = useCallback(() => {
        setIsOpen(false)
    },[])

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout())
    },[dispatch])

    useEffect(()=> {
        dispatch(userActions.initAuthData())
    },[dispatch])

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.auth}>
                {auth ? <Button inverted onClick={handleLogout}>{t('exit')}</Button>
                    : <Button inverted onClick={handleOpenLoginModal}>{t('sign_in')}</Button>}
            </div>
            <AuthModal isOpen={isOpen} onClose={handleCloseLoginModal} />
        </div>
    );
}