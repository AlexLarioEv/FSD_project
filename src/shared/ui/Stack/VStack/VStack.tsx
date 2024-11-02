import { FC, PropsWithChildren } from "react";

import { classNames } from "@/shared/lib";

import { Flex, TFlexProps } from "../Flex/Flex";

type TVStackProps = Omit<TFlexProps, 'direction'>


export const VStack: FC<PropsWithChildren<TVStackProps>> = ({ className, children, ...rest }) => {
    return (
        <Flex {...rest} direction="column" className={classNames('', {}, [className])}>
            {children}
        </Flex>
    );
};