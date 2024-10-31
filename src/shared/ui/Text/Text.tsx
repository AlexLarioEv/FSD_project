import { memo } from "react";
import { classNames } from "@/shared/lib";

import styles from './Text.module.scss';

export enum ETypeText {
    PRIMARY = 'primary',
    INVERTED = "inverted",
    ERROR = 'error',
} 

export enum ETextAlign {
    START = 'start',
    CENTER = 'center',
    END ='end'
}

export enum ESizeText {
    M = 'size_m',
    L = 'size_l',
}

type TTextProps = {
    title?: string;
    description?: string;
    type?: ETypeText;
    size?: ESizeText;
    align?: ETextAlign;
    testId?: string;
    className?: string;
};

const Text = memo(({ 
    className, 
    title, 
    description, 
    size = ESizeText.M,
    type = ETypeText.PRIMARY,
    testId, 
    align=ETextAlign.START }:TTextProps) => {

    return (
        <div data-testid={testId} className={classNames(
            styles.Text, 
            {}, 
            [className, styles[type], styles[align], styles[size]])}>
            {title && <span className={classNames(styles.title)}>{title}</span>}
            {description && <span className={classNames(styles.description)}>{description}</span>}
        </div>
    );
});

Text.displayName = 'Text';

export {Text};