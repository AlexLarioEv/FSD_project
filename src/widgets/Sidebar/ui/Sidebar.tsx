import { FC, useState, useMemo } from "react";
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from "@/widgets/ThemeSwitcher/ui";
import { LangSwitcher } from "@/widgets/LangSwitcher/ui";

import {  Button, EButtonSize } from "@/shared/ui/Button"
import { classNames } from "@/shared/lib";
import {getSidebarItems} from '../model/selectors/getSidebarItems'


import {SidebarItem} from '../../SidebarItem/'
import styles from './Sidebar.module.scss';
import { useSelector } from "react-redux";
import { HStack, VStack } from "@/shared/ui/Stack";

type TSidebarProps = {
  className?: string;
  testId?: string;
};

export const Sidebar: FC<TSidebarProps> = ({ className,testId }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation()

    const sidebarItems = useSelector(getSidebarItems)

    const handleToggle = () => {
        setCollapsed(prev => !prev)
    }

    const sidebarLinks = useMemo(()=> sidebarItems.map(({path, Icon, text}, index)=> {
        return <SidebarItem path={path} Icon={Icon} text={text} collapsed={collapsed} key={index}/>
    }),[collapsed, sidebarItems])
    


    return (
        <div data-testid={testId}
            className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])
            }>
            <VStack gap={8} className={styles.links}>
                {sidebarLinks}
            </VStack>
            <Button 
                size={EButtonSize.L}
                className={styles.button}
                testId="toggleSidebar"  
                onClick={handleToggle}
                inverted
            > 
                {t(collapsed ? '>' : '<')} 
            </Button>
            <HStack justify="center" max gap={16} className={styles.switcher}>
                <ThemeSwitcher />
                <LangSwitcher/>
            </HStack>
        </div>
    );
};