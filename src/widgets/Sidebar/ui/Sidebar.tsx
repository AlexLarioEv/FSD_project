import { FC, useState, useMemo } from "react";
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from "@/widgets/ThemeSwitcher/ui";
import { LangSwitcher } from "@/widgets/LangSwitcher/ui";

import {  Button, EButtonSize } from "@/shared/ui"
import { classNames } from "@/shared/lib";
import {SidebarItem} from '../../SidebarItem/'


import { sidebarItems} from '../model/items'

import styles from './Sidebar.module.scss';
import { useSelector } from "react-redux";
import { getUser } from "@/entities/User";

type TSidebarProps = {
  className?: string;
  testId?: string;
};

export const Sidebar: FC<TSidebarProps> = ({ className,testId }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation()
    const {auth} = useSelector(getUser);

    const handleToggle = () => {
        setCollapsed(prev => !prev)
    }

    const sidebarLinks = useMemo(()=> sidebarItems.filter(
        ({authOnly})=> {
            if(authOnly && !auth){
                return false
            }
            return true
        }).map(({path, Icon, text}, index)=> {
        return <SidebarItem path={path} Icon={Icon} text={text} collapsed={collapsed} key={index}/>
    }),[collapsed,auth])
    


    return (
        <div data-testid={testId}
            className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])
            }>
            <div className={styles.links}>
                {sidebarLinks}
            </div>
            <Button 
                size={EButtonSize.L}
                className={styles.button}
                testId="toggleSidebar"  
                onClick={handleToggle}
                inverted
            > 
                {t(collapsed ? '>' : '<')} 
            </Button>
            <div className={styles.switcher}>
                <ThemeSwitcher />
                <LangSwitcher/>
            </div>
        </div>
    );
};