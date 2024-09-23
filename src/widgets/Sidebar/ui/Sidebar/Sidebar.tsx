import { FC, useState } from "react";

import { classNames } from "shared/lib";

import styles from './Sidebar.module.scss';
import { Button } from "shared/ui";

type TSidebarProps = {
  className?: string;
};

export const Sidebar: FC<TSidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
      <Button onClick={handleToggle}> toggle </Button>
    </div>
  );
};