import { FunctionComponent, SVGAttributes } from "react";

export type TSidebarItem = {
    text: string,
    path: string,
    Icon: FunctionComponent<SVGAttributes<SVGElement>>,
    authOnly?: boolean;
}