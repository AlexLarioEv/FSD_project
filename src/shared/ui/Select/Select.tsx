import { memo, useMemo,ChangeEvent } from "react";

import { classNames } from "@/shared/lib";

import styles from "./Select.module.scss";

export type TOptionsType<T extends string> = {
    value: T,
    content: string,
}

type TSelectProps<T extends string> = {
    label?: string;
    options?: TOptionsType<T>[];
    className?: string;
    defaultValue?: string;
    readonly?: boolean;
    testId?: string;
    onChange?: (value:T) => void 
};


const Select = <T extends string>({ className, label , options, defaultValue, readonly, testId, onChange }: TSelectProps<T>) => {


    const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>{
        onChange && onChange(e.target.value as T);
    }

    const  optionList = useMemo(
        () => options?.map(({value, content}, index) => <option 
            disabled = {readonly}
            className={styles.option} 
            key={value || index} 
            value={value}>
            {content}
        </option>), [options, readonly]);

    return (
        <div data-testid={testId} className={classNames(styles.Select, {}, [className])}>
            <label className={styles.label}>{label}</label >
            <select onChange={handleChange} className={styles.select} value={defaultValue}>
                {optionList}
            </select>
        </div>
    );
}

export default memo(Select) as typeof Select ;