import { FC, useState } from "react";
import { useTranslation } from 'react-i18next';

import { AppLink, EApplinkTypes } from "@/shared/ui"
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher/ui";
import { LangSwitcher } from "@/widgets/LangSwitcher/ui";
import MainImage from '@/shared/assets/icons/main-20-20.svg'
import AboutImage from '@/shared/assets/icons/about-20-20.svg'

import { RoutePath } from "@/shared/config/routeConfig";

import { Button, EButtonSize} from "@/shared/ui/Button";
import { classNames } from "@/shared/lib";

import styles from './Sidebar.module.scss';

type TSidebarProps = {
  className?: string;
  testId?: string;
};

export const Sidebar: FC<TSidebarProps> = ({ className,testId }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation()

    const handleToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div data-testid={testId}
            className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])
            }>
            <div className={styles.links}>
                <AppLink className={styles.link} type={EApplinkTypes.SECONDARY} to={RoutePath.main}> 
                    <div>
                        <MainImage className={styles.icon}/>
                    </div>
                    <span className={styles.text_link}>
                        {!collapsed && t('mainLink')} 
                    </span>
                </AppLink>
                <AppLink className={styles.link} type={EApplinkTypes.SECONDARY} to={RoutePath.about}> 
                    <AboutImage className={styles.icon}/>
                    <span className={styles.text_link}>
                        {!collapsed && t('aboutLink')} 
                    </span>
                </AppLink>
            </div>
            <Button 
                size={EButtonSize.L}
                className={styles.button}
                testId="toggleSidebar"  
                onClick={handleToggle}
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