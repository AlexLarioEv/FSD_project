import { memo } from "react";

import { classNames } from "@/shared/lib";

import { Card } from "../Card";

import styles from './Tab.module.scss';
import { Text } from "../Text";

export enum ETabType {
    DEFAULT= 'default',
    ACTIVE = 'active'
}

type TTagProps = {
    onClick: ( value: string ) => void;
    tag: string;
    className?: string;
    type?: ETabType;
};

const Tab = memo(({ className, type=ETabType.DEFAULT, tag, onClick }:TTagProps) => {

    const handleClickTab = () => {
        onClick(tag)
    }

    return (
        <Card onClick={handleClickTab} className={classNames(styles.Tab, {}, [className, styles[type]])}><Text description={tag}/></Card>
    );
});

Tab.displayName = 'Tab';

export { Tab };