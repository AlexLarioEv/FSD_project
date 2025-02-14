import { memo } from 'react';
import { classNames } from '@/shared/lib';

import styles from './Text.module.scss';
import { toggleFeatures } from '@/shared/lib/features';

export enum ETypeText {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum ETextAlign {
    START = 'start',
    CENTER = 'center',
    END = 'end',
}

export enum ESizeText {
    S = 'size_s',
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

type TElementTitle = 'h1' | 'h2' | 'h3';

const mapSizeToComponent: Record<ESizeText, TElementTitle> = {
    [ESizeText.L]: 'h1',
    [ESizeText.M]: 'h2',
    [ESizeText.S]: 'h3',
};

const Text = memo(
    ({
        className,
        title,
        description,
        size = ESizeText.M,
        type = ETypeText.PRIMARY,
        testId,
        align = ETextAlign.START,
    }: TTextProps) => {
        const TitleComponent = mapSizeToComponent[size];

        const classTitle = toggleFeatures({
            name: 'enableAppRedesigned',
            on: () => styles.titleRedesigned,
            off: () => styles.title,
        });

        const classDescription = toggleFeatures({
            name: 'enableAppRedesigned',
            on: () => styles.descriptionRedesigned,
            off: () => styles.description,
        });

        return (
            <div
                data-testid={testId}
                className={classNames(styles.Text, {}, [
                    className,
                    styles[type],
                    styles[align],
                    styles[size],
                ])}
            >
                {title && (
                    <TitleComponent
                        data-testid={testId && `${testId}.Header`}
                        className={classNames(classTitle)}
                    >
                        {title}
                    </TitleComponent>
                )}
                {description && (
                    <span
                        data-testid={testId && `${testId}.Paragraph`}
                        className={classNames(classDescription)}
                    >
                        {description}
                    </span>
                )}
            </div>
        );
    },
);

Text.displayName = 'Text';

export { Text };
