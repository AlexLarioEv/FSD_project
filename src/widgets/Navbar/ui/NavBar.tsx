import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { AuthModal } from '@/features/AuthByUserName';
import { getUser } from '@/entities/User';
import { useAppSelector } from '@/shared/lib/hooks';
import { Text, ETypeText } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib';
import { getRouteArticleCreate } from '@/shared/config/routeConfig';
import { HStack } from '@/shared/ui/Stack';

import { AvatarDropdown } from '@/features/AvatarDropdown';

import styles from './NavBar.module.scss';
import { NotificationButton } from '@/features/NotificationButton';
import { ToggleFeatures } from '@/shared/lib/features';

type TNavBarProps = {
    className?: string;
};

export const NavBar: FC<TNavBarProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { auth } = useAppSelector(getUser);

    const handleCreateArticle = () => {
        navigate(getRouteArticleCreate());
    };

    const handleOpenLoginModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    const handleCloseLoginModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <ToggleFeatures
            feature="enableAppRedesigned"
            on={
                <HStack
                    role="navigation"
                    max
                    align="center"
                    className={classNames(styles.navbarRedesigned, {}, [
                        className,
                    ])}
                >
                    {auth ? (
                        <HStack align="center" gap={16} className={styles.auth}>
                            <NotificationButton />
                            <AvatarDropdown avatar={auth.avatar} id={auth.id} />
                        </HStack>
                    ) : (
                        <Button
                            className={styles.auth}
                            inverted
                            onClick={handleOpenLoginModal}
                        >
                            {t('sign_in')}
                        </Button>
                    )}
                    <AuthModal
                        isOpen={isOpen}
                        onClose={handleCloseLoginModal}
                    />
                </HStack>
            }
            off={
                <HStack
                    role="navigation"
                    max
                    align="center"
                    className={classNames(styles.navbar, {}, [className])}
                >
                    <Text
                        className={styles.mainTitle}
                        type={ETypeText.INVERTED}
                        title={t('main_title')}
                    />
                    <Button onClick={handleCreateArticle} inverted>
                        {t('create_article')}
                    </Button>
                    {auth ? (
                        <HStack align="center" gap={16} className={styles.auth}>
                            <NotificationButton />
                            <AvatarDropdown avatar={auth.avatar} id={auth.id} />
                        </HStack>
                    ) : (
                        <Button
                            className={styles.auth}
                            inverted
                            onClick={handleOpenLoginModal}
                        >
                            {t('sign_in')}
                        </Button>
                    )}
                    <AuthModal
                        isOpen={isOpen}
                        onClose={handleCloseLoginModal}
                    />
                </HStack>
            }
        />
    );
};
