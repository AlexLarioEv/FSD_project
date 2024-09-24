import { FC, useState } from "react";
import { useTranslation } from 'react-i18next';

import {classNames} from "shared/lib";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import styles from './Sidebar.module.scss';
import { Button } from "shared/ui";
import { LangSwitcher } from "widgets/LangSwitcher/ui/LangSwitcher";

type TSidebarProps = {
  className?: string;
};

export const Sidebar: FC<TSidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {t} = useTranslation()

  const handleToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
      <Button onClick={handleToggle}> {t(collapsed ? 'open' : 'close')} </Button>
      <div className={styles.switcher}>
        <ThemeSwitcher />
        <LangSwitcher/>
      </div>
    </div>
  );
};