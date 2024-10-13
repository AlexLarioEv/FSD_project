import { FC } from "react";
import { classNames } from "@/shared/lib";

import styles from './Text.module.scss';

export enum ETypeText {
    PRIMARY = 'primary',
    ERROR = 'error',
} 

export enum ETextAlign {
    START = 'start',
    CENTER = 'center',
    END ='end'
}

type TTextProps = {
    title?: string;
    description?: string;
    className?: string;
    type?: ETypeText;
    testId?: string;
    align?: ETextAlign;
};

export const Text: FC<TTextProps> = ({ 
    className, 
    title, 
    description, 
    type = ETypeText.PRIMARY,
    testId, 
    align=ETextAlign.START }) => {

    return (
        <div data-testid={testId} className={classNames(styles.Text, {}, [className, styles[type], styles[align]])}>
            {title && <span className={classNames(styles.title)}>{title}</span>}
            {description && <span className={classNames(styles.description)}>{description}</span>}
        </div>
    );
};