import { FC } from "react";
import { classNames } from "@/shared/lib";

import styles from './Text.module.scss';

export enum ETypeText {
    PRIMARY = 'primary',
    ERROR = 'error',
} 

type TTextProps = {
    title?: string;
    description?: string;
    className?: string;
    type?: ETypeText;
    testId?: string;
};

export const Text: FC<TTextProps> = ({ className, title, description, type = ETypeText.PRIMARY,testId }) => {
    return (
        <div data-testid={testId} className={classNames(styles.Text, {}, [className, styles[type]])}>
            {title && <span className={classNames(styles.title)}>{title}</span>}
            {description && <span className={classNames(styles.description)}>{description}</span>}
        </div>
    );
};