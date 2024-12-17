import { FC, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

import { Button, EButtonSize } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib';
import { getSidebarItems } from '../model/selectors/getSidebarItems';

import { SidebarItem } from '../../SidebarItem/';
import { useSelector } from 'react-redux';
import { Flex, HStack, VStack } from '@/shared/ui/Stack';

import styles from './Sidebar.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/AppLogo';
import { useLocation } from 'react-router-dom';

type TSidebarProps = {
    className?: string;
    testId?: string;
};

export const Sidebar: FC<TSidebarProps> = ({ className, testId }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const { pathname } = useLocation();

    const sidebarItems = useSelector(getSidebarItems);

    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const sidebarLinks = useMemo(
        () =>
            sidebarItems.map(({ path, Icon, text }, index) => {
                const isSelected = pathname === path;
                return (
                    <SidebarItem
                        path={path}
                        IconSVG={Icon}
                        text={text}
                        collapsed={collapsed}
                        selected={isSelected}
                        key={index}
                    />
                );
            }),
        [collapsed, sidebarItems, pathname],
    );
    return (
        <ToggleFeatures
            feature="enableAppRedesigned"
            on={
                <aside
                    data-testid={testId}
                    className={classNames(
                        styles.SidebarRedesigned,
                        { [styles.collapsedRedesigned]: collapsed },
                        [className],
                    )}
                >
                    <VStack justify="between" className={styles.contentWrapper}>
                        <div>
                            <AppLogo
                                className={styles.appLogo}
                                size={collapsed ? 'small' : 'big'}
                            />
                            <VStack gap={8} className={styles.linksRedesigned}>
                                {sidebarLinks}
                            </VStack>
                        </div>
                        <Flex
                            justify="center"
                            max
                            gap={16}
                            className={styles.switcherRedesigned}
                            direction={collapsed ? 'column' : 'row'}
                        >
                            <ThemeSwitcher />
                            <LangSwitcher />
                        </Flex>
                    </VStack>
                    <Button
                        size={EButtonSize.L}
                        className={styles.buttonRedesigned}
                        testId="toggleSidebar"
                        onClick={handleToggle}
                        inverted
                    >
                        {t(collapsed ? '>' : '<')}
                    </Button>
                </aside>
            }
            off={
                <aside
                    data-testid={testId}
                    className={classNames(
                        styles.Sidebar,
                        { [styles.collapsed]: collapsed },
                        [className],
                    )}
                >
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
                    <HStack
                        justify="center"
                        max
                        gap={16}
                        className={styles.switcher}
                    >
                        <ThemeSwitcher />
                        <LangSwitcher />
                    </HStack>
                </aside>
            }
        />
    );
};
