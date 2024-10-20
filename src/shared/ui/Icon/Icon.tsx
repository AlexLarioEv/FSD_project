import { memo } from "react";

import { classNames } from "@/shared/lib";

import styles from './Icon.module.scss';

type TIconProps = {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
};

const Icon= memo(({ className,Svg }: TIconProps) => {
    return (
        <Svg className={classNames(styles.Icon, {}, [className])}/>
    );
});

Icon.displayName = 'Icon';

export {Icon}