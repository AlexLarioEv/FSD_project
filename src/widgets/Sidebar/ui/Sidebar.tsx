import { FC, useState } from "react";
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui";
import { LangSwitcher } from "widgets/LangSwitcher/ui";

import { Button } from "shared/ui";
import { classNames } from "shared/lib";

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
      <Button 
        testId="toggleSidebar"  
        onClick={handleToggle}
      > 
        {t(collapsed ? 'open' : 'close')} 
      </Button>
      <div className={styles.switcher}>
        <ThemeSwitcher />
        <LangSwitcher/>
      </div>
    </div>
  );
};