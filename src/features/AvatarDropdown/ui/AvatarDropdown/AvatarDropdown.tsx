import { FC, memo, useCallback, useMemo } from "react";
import { useTranslation } from 'react-i18next';

import { classNames } from "@/shared/lib";

import { Button } from "@/shared/ui/Button";
import { Dropdown } from "@/shared/ui/Popups";
import { Avatar } from "@/shared/ui/Avatar";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { isAdmin, isManager, userActions } from "@/entities/User";
import { AppLink, EApplinkTypes } from "@/shared/ui/AppLink";
import { getRouteProfile, getRouteAdmin } from "@/shared/config/routeConfig";

type TAvatarDropdownProps = {
    className?: string;
    avatar?: string;
    id: string;
};

export const AvatarDropdown: FC<TAvatarDropdownProps> = ({ className, avatar, id }) => {
    const { t } = useTranslation();
    const manager = useAppSelector(isManager)
    const admin = useAppSelector(isAdmin)
    const dispatch = useAppDispatch();
    const showAdmin = manager || admin;

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout())
    },[dispatch])
    

    const itemsDropdown = useMemo(()=> [
        ...(showAdmin ? [
            <AppLink 
                type={EApplinkTypes.SECONDARY} 
                to={getRouteAdmin()} key='1'>
                {t('admin')}
            </AppLink>]
            : 
            []),
        <AppLink 
            type={EApplinkTypes.SECONDARY} 
            to={getRouteProfile(id)} key='2'>
            {t('profile')}
        </AppLink>,
        <Button key='3' inverted onClick={handleLogout}>{t('exit')}</Button>,
    ],[id, handleLogout, t, showAdmin])

    return ( 
        <Dropdown 
            className={classNames('', {}, [className])}
            label={<Avatar src={avatar}/>} 
            items={itemsDropdown}
            direction='bottom left'
        />
    );
};

export default memo(AvatarDropdown);
