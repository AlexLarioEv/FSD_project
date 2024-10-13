import { memo, useMemo,ChangeEvent } from "react";

import { classNames } from "@/shared/lib";

import styles from "./Select.module.scss";

type TSelectProps = {
    label?: string;
    options?: string[]
    className?: string;
    defaultValue?: string;
    readonly?: boolean;
    onChange?: (value:string) => void 
};


const Select = memo(({ className, label , options,defaultValue,readonly, onChange }: TSelectProps) => {


    const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>{
        onChange && onChange(e.target.value);
    }

    const  optionList = useMemo(
        () => options?.map((name, index) => <option 
            disabled = {readonly}
            className={styles.option} 
            key={name || index} 
            value={name}>
            {name}
        </option>), [options, readonly]);

    return (
        <div className={classNames(styles.Select, {}, [className])}>
            <label className={styles.label}>{label}</label >
            <select onChange={handleChange} className={styles.select} value={defaultValue}>
                {optionList}
            </select>
        </div>
    );
});

Select.displayName = 'Select'

export { Select };