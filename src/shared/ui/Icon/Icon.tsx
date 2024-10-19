import { FC } from "react";

import { classNames } from "@/shared/lib";

import styles from './Icon.module.scss';

type TIconProps = {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
};

export const Icon: FC<TIconProps> = ({ className,Svg }) => {
    return (
        <Svg className={classNames(styles.Icon, {}, [className])}/>
    );
};