import { FC, useCallback,useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import {AuthModal} from '@/features/AuthByUserName/ui'
import {getUser, isManager, isAdmin, userActions} from '@/entities/User'
import { useAppSelector } from "@/shared/hooks"
import { Text,ETypeText } from "@/shared/ui/Text"
import { Button } from "@/shared/ui/Button"
import { classNames} from '@/shared/lib'
import { RoutePath } from "@/shared/config/routeConfig"
import { HStack } from "@/shared/ui/Stack"
import { Avatar } from "@/shared/ui/Avatar"
import { Dropdown } from "@/shared/ui/Dropdown"
import { AppLink, EApplinkTypes } from "@/shared/ui/AppLink"

import styles from './NavBar.module.scss'



type TNavBarProps = {
    className?: string
}

export const NavBar: FC<TNavBarProps> = ({className}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {t} = useTranslation();
    const navigate = useNavigate()
    const {auth} = useAppSelector(getUser)
    const manager = useAppSelector(isManager)
    const admin = useAppSelector(isAdmin)
    const dispatch = useDispatch();

    const showAdmin = manager || admin;
    
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
    
    const itemsDropdown = useMemo(()=> [
        ...(showAdmin ? [
            <AppLink 
                type={EApplinkTypes.SECONDARY} 
                to={RoutePath.admin} key='1'>
                {t('admin')}
            </AppLink>]: []),
        <AppLink 
            type={EApplinkTypes.SECONDARY} 
            to={`${RoutePath.profile}${auth?.id}`} key='21'>
            {t('profile')}
        </AppLink>,
        <Button key='2' inverted onClick={handleLogout}>{t('exit')}</Button>,
    ],[auth?.id, handleLogout, t, showAdmin])

    useEffect(()=> {
        dispatch(userActions.initAuthData())
    },[dispatch])
    
    return (
        <HStack role='navigation' max align="center" className={classNames(styles.navbar, {}, [className])}>
            <Text className={styles.mainTitle} type={ETypeText.INVERTED} title={t('main_title')}/>
            <Button onClick={handleCreateArticle} inverted>{t('create_article')}</Button>
            <div className={styles.auth}>
                {auth ? <>
                    <Dropdown 
                        label={<Avatar src={auth.avatar}/>} 
                        items={itemsDropdown}
                        direction='bottom left'
                    />
                </>
                    : <Button inverted onClick={handleOpenLoginModal}>{t('sign_in')}</Button>}
            </div>
            <AuthModal isOpen={isOpen} onClose={handleCloseLoginModal} />
        </HStack>
    );
}