import { FC, useCallback,useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"

import {AuthModal} from '@/features/AuthByUserName/ui'
import {getUser, userActions} from '@/entities/User'

import { useAppSelector } from "@/shared/hooks"
import { Text,ETypeText } from "@/shared/ui/Text"
import { Button } from "@/shared/ui/Button"
import { classNames} from '@/shared/lib'

import styles from './NavBar.module.scss'
import { useNavigate } from "react-router-dom"
import { RoutePath } from "@/shared/config/routeConfig"

type TNavBarProps = {
    className?: string
}

export const NavBar: FC<TNavBarProps> = ({className}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {t} = useTranslation();
    const navigate = useNavigate()
    const {auth} = useAppSelector(getUser)
    const dispatch = useDispatch();
    
    const handleCreateArticle = () => {
        navigate(RoutePath.article_create)
    }

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
            <Text className={styles.mainTitle} type={ETypeText.INVERTED} title={t('main_title')}/>
            <Button onClick={handleCreateArticle} inverted>{t('create_article')}</Button>
            <div className={styles.auth}>
                {auth ? <Button inverted onClick={handleLogout}>{t('exit')}</Button>
                    : <Button inverted onClick={handleOpenLoginModal}>{t('sign_in')}</Button>}
            </div>
            <AuthModal isOpen={isOpen} onClose={handleCloseLoginModal} />
        </div>
    );
}