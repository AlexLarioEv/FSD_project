import { FC, useCallback } from "react";

import { classNames } from "@/shared/lib";
import { Button , EButtonTheme} from "@/shared/ui/Button";
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg'

import styles from './Code.module.scss';

type TCodeProps = {
    className?: string;
    code: string;
};

export const Code: FC<TCodeProps> = ({ className, code }) => {

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(code);
    }, [code]);

    return (
        <div className={styles.wrapperCode}>
            <Button onClick={onCopy} className={styles.copyBtn} theme={EButtonTheme.CLEAR}>
                <CopyIcon className={styles.copyIcon} />
            </Button>
            <pre className={classNames(styles.Code, {}, [className])}>
                <code>
                    {code}
                </code>
            </pre>
        </div>
    );
};