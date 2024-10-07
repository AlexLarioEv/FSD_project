import { FC,FunctionComponent, SVGAttributes } from "react";
import { useTranslation } from "react-i18next";
import { AppLink, EApplinkTypes } from "@/shared/ui"
import { classNames } from "@/shared/lib";

import styles from "./SidebarItem.module.scss";

type TSidebarItemProps = {
    className?: string;
    text: string;
    path: string;
    collapsed: boolean;
    Icon: FunctionComponent<SVGAttributes<SVGElement>>;
};

export const SidebarItem: FC<TSidebarItemProps> = ({ className, path, collapsed,text, Icon }) => {
    const {t} = useTranslation()

    return (
        <div className={classNames(styles.SidebarItem, {}, [className])}>
            <AppLink className={styles.link} type={EApplinkTypes.SECONDARY} to={path}> 
                <div>
                    <Icon className={styles.icon}/>
                </div>
                <span>
                    {!collapsed && t(text)} 
                </span>
            </AppLink>
        </div>
    );
};
