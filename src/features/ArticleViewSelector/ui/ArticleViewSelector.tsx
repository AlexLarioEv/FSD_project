import { FC, useCallback, useMemo } from 'react';

import { classNames } from '@/shared/lib';

import styles from './ArticleViewSelector.module.scss';
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { EArticleView } from '@/entities/Article';

type TArticleViewSelectorProps = {
    className?: string;
    view?: EArticleView;
    onViewClick: (view: EArticleView) => void;
};

const viewTypes = [
    {
        view: EArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: EArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector: FC<TArticleViewSelectorProps> = ({
    className,
    view = EArticleView.SMALL,
    onViewClick,
}) => {
    const handleClickView = useCallback(
        (event: EArticleView) => () => {
            onViewClick(event);
        },
        [onViewClick],
    );

    const views = useMemo(
        () =>
            viewTypes.map((element, index) => (
                <Button
                    key={index}
                    theme={EButtonTheme.CLEAR}
                    onClick={handleClickView(element.view)}
                >
                    <Icon
                        className={classNames('', {
                            [styles.notSelected]: view !== element.view,
                        })}
                        Svg={element.icon}
                    />
                </Button>
            )),
        [handleClickView, view],
    );

    return (
        <div
            className={classNames(styles.ArticleViewSelector, {}, [className])}
        >
            {views}
        </div>
    );
};
