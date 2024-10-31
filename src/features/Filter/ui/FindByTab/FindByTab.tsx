import { FC, useCallback } from "react";

import { classNames } from "@/shared/lib";
import { Tabs } from "@/shared/ui/Tabs";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";

import { filterActions } from "../../model/slice/filterSlice";
import { getTagQuery } from "../../model/selectors/getFilter";

import styles from './FindByTav.module.scss';

type TFindByTabProps = {
    className?: string;
    defaultValue?: string;
    tabs: string[];
    onClick: (value: string) => void;
};

export const FindByTab: FC<TFindByTabProps> = ({ className, defaultValue, tabs, onClick }) => {
    const dispatch = useAppDispatch();

    const tag = useAppSelector(getTagQuery)

    const handleClickTabFilter = useCallback((tab: string) =>{
        dispatch(filterActions.setTagQuery(tab))
        onClick(tab)
    },[dispatch, onClick])

    return (
        <div className={classNames(styles.FindByTab, {}, [className])}>
            <Tabs onClick={handleClickTabFilter} value={tag ?? defaultValue} tabs={tabs}/>
        </div>
    );
};