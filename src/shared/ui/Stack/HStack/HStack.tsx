import { FC, PropsWithChildren } from "react";

import { classNames } from "@/shared/lib";

import { Flex, TFlexProps } from "../Flex/Flex";

type THStackProps = Omit<TFlexProps, 'direction'>

export const HStack: FC<PropsWithChildren<THStackProps>> = ({ className, children, ...rest }) => {
    return (
        <Flex {...rest} direction="row" className={classNames('', {}, [className])}>
            {children}
        </Flex>
    );
};