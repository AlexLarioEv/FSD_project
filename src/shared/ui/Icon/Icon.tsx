import { memo } from "react";

import { classNames } from "@/shared/lib";

import styles from './Icon.module.scss';

type TIconProps = {
    className?: string;
    inverted?: boolean;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    testId?: string
} & React.SVGProps<SVGAElement>;

const Icon= memo(({ className, Svg, inverted, testId,...otherProps }: TIconProps) => {
    return (
        <Svg 
            data-testid={testId}
            {...otherProps} 
            className={classNames(styles.Icon, {[styles.inverted]: inverted}, [className])}
        />
    );
});

Icon.displayName = 'Icon';

export {Icon}