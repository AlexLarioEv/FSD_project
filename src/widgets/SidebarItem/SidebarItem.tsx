import { FC, FunctionComponent, SVGAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, EApplinkTypes } from '@/shared/ui/AppLink';
import { classNames } from '@/shared/lib';

import styles from './SidebarItem.module.scss';
import { Icon } from '@/shared/ui/Icon';
import { toggleFeatures } from '@/shared/lib/features';

type TSidebarItemProps = {
    className?: string;
    text: string;
    path: string;
    collapsed: boolean;
    selected?: boolean;
    IconSVG: FunctionComponent<SVGAttributes<SVGElement>>;
};

export const SidebarItem: FC<TSidebarItemProps> = ({
    className,
    path,
    collapsed,
    selected,
    text,
    IconSVG,
}) => {
    const { t } = useTranslation();

    const isInverted = toggleFeatures({
        name: 'enableAppRedesigned',
        on: () => false,
        off: () => true,
    });

    const classSelected = toggleFeatures({
        name: 'enableAppRedesigned',
        on: () => styles.selected,
        off: () => '',
    });

    return (
        <AppLink
            className={classNames(
                styles.link,
                {
                    [classSelected]: selected,
                },
                [className],
            )}
            type={EApplinkTypes.SECONDARY}
            to={path}
        >
            <Icon inverted={isInverted} Svg={IconSVG} />
            <span>{!collapsed && t(text)}</span>
        </AppLink>
    );
};
