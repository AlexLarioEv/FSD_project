import { useCallback, memo } from 'react';

import { classNames } from '@/shared/lib';
import { Button, EButtonTheme } from '../Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';

import styles from './Code.module.scss';
import { toggleFeatures } from '@/shared/lib/features';

type TCodeProps = {
    className?: string;
    code: string;
};

const Code = memo(({ className, code }: TCodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(code);
    }, [code]);

    const classCode = toggleFeatures({
        name: 'enableAppRedesigned',
        on: () => styles.CodeRedesigned,
        off: () => styles.Code,
    });

    const classCopyIcon = toggleFeatures({
        name: 'enableAppRedesigned',
        on: () => styles.copyIconRedesigned,
        off: () => styles.copyIcon,
    });

    return (
        <div className={styles.wrapperCode}>
            <Button
                onClick={onCopy}
                className={styles.copyBtn}
                theme={EButtonTheme.CLEAR}
            >
                <CopyIcon className={classCopyIcon} />
            </Button>
            <pre className={classNames(classCode, {}, [className])}>
                <code>{code}</code>
            </pre>
        </div>
    );
});

Code.displayName = 'Code';

export { Code };
