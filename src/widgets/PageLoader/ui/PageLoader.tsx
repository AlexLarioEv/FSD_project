import { FC } from "react";

import { Loader } from '@/shared/ui/Loader'
import { classNames } from "@/shared/lib";
import styles from './PageLoader.module.scss';
import { Flex } from "@/shared/ui/Stack";

type TPageLoaderProps = {
  className?: string;
};

export const PageLoader: FC<TPageLoaderProps> = ({ className }) => {
    return (
        <Flex justify="center" aling="center" className={classNames(styles.PageLoader, {}, [className])}>
            <Loader/>
        </Flex>
    );
};