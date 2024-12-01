import { FC, PropsWithChildren } from 'react';

import { classNames } from '@/shared/lib';

import { Flex, TFlexProps } from '../Flex/Flex';

type THStackProps = Omit<TFlexProps, 'direction'>;

export const HStack: FC<PropsWithChildren<THStackProps>> = (props) => {
    const { className, children, ...rest } = props;

    return (
        <Flex
            data-testod={props['data-testid']}
            {...rest}
            direction="row"
            className={classNames('', {}, [className])}
        >
            {children}
        </Flex>
    );
};
