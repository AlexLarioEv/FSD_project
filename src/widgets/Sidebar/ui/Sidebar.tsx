import { FC, useState, useMemo } from "react";
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from "@/widgets/ThemeSwitcher/ui";
import { LangSwitcher } from "@/widgets/LangSwitcher/ui";

import {  Button, EButtonSize } from "@/shared/ui"
import { classNames } from "@/shared/lib";
import {SidebarItem} from '../../SidebarItem/'


import { sidebarItems} from '../model/items'

import styles from './Sidebar.module.scss';

type TSidebarProps = {
  className?: string;
  testId?: string;
};

export const Sidebar: FC<TSidebarProps> = ({ className,testId }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [toggle, setToggle]  = useState(false)
    const {t} = useTranslation()

    const handleToggle = () => {
        setCollapsed(prev => !prev)
    }

    const sidebarLinks = useMemo(()=> sidebarItems.map(({path, Icon, text}, index)=> {
        return <SidebarItem path={path} Icon={Icon} text={text} collapsed={collapsed} key={index}/>
    }),[collapsed])
    


    return (
        <div data-testid={testId}
            className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])
            }>
            <div className={styles.links}>
                {sidebarLinks}
            </div>
            <Button inverted onClick={()=>setToggle((prev)=>!prev)}>{`value ${toggle}`}</Button>
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