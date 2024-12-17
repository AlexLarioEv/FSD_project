import { FC, PropsWithChildren } from 'react';

import { classNames } from '@/shared/lib';

import { Flex, TFlexProps } from '../Flex/Flex';

type TVStackProps = Omit<TFlexProps, 'direction'>;

export const VStack: FC<PropsWithChildren<TVStackProps>> = (props) => {
    const { className, children, ...rest } = props;
    return (
        <Flex
            data-testid={props['data-testid']}
            {...rest}
            direction="column"
            className={classNames('', {}, [className])}
        >
            {children}
        </Flex>
    );
};
