import { memo } from 'react';

import { classNames } from '@/shared/lib';

import styles from './Icon.module.scss';
import { toggleFeatures } from '@/shared/lib/features';

type TIconProps = {
    className?: string;
    inverted?: boolean;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    testId?: string;
} & React.SVGProps<SVGAElement>;

const Icon = memo(
    ({ className, Svg, inverted, testId, ...otherProps }: TIconProps) => {
        const iconClass = toggleFeatures({
            name: 'enableAppRedesigned',
            on: () => styles.iconRedesigned,
            off: () => styles.Icon,
        });

        const invertedClass = toggleFeatures({
            name: 'enableAppRedesigned',
            on: () => styles.invertedRedesigned,
            off: () => styles.inverted,
        });

        return (
            <Svg
                data-testid={testId}
                {...otherProps}
                className={classNames(
                    iconClass,
                    { [invertedClass]: inverted },
                    [className],
                )}
            />
        );
    },
);

Icon.displayName = 'Icon';

export { Icon };
