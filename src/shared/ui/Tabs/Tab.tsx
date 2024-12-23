import { memo } from 'react';

import { classNames } from '@/shared/lib';

import { Card } from '../Card';

import styles from './Tab.module.scss';
import { Text } from '../Text';
import { toggleFeatures } from '@/shared/lib/features';

export enum ETabType {
    DEFAULT = 'default',
    ACTIVE = 'active',
}

type TTagProps = {
    onClick: (value: string) => void;
    tag: string;
    className?: string;
    type?: ETabType;
};

const activeToRedesignedMap = {
    [ETabType.ACTIVE]: styles.activeRedesigned,
    [ETabType.DEFAULT]: '',
};

const Tab = memo(
    ({ className, type = ETabType.DEFAULT, tag, onClick }: TTagProps) => {
        const handleClickTab = () => {
            onClick(tag);
        };

        const activeClass = toggleFeatures({
            name: 'enableAppRedesigned',
            on: () => activeToRedesignedMap[type],
            off: () => styles[type],
        });

        const tabClass = toggleFeatures({
            name: 'enableAppRedesigned',
            on: () => styles.TabRedesigned,
            off: () => styles.Tab,
        });

        return (
            <Card
                onClick={handleClickTab}
                className={classNames(tabClass, {}, [className, activeClass])}
            >
                <Text description={tag} />
            </Card>
        );
    },
);

Tab.displayName = 'Tab';

export { Tab };
