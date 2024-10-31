import { FC } from "react"
import { Tab, ETabType} from "./Tab"

type TTabsProps = {
    tabs: string[];
    value?: string;
    className?: string;
    onClick: (tab: string) => void;
}

export const Tabs: FC<TTabsProps> = ({tabs, value, onClick}) => {

    return (
        <>
            {tabs.map((tab)=> <Tab onClick={onClick} type={value === tab ? ETabType.ACTIVE: ETabType.DEFAULT} key={tab} tag={tab}/> )}
        </>
    )
}