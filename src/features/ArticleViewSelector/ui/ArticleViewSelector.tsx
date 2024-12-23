import { FC, useCallback, useMemo } from 'react';

import { classNames } from '@/shared/lib';

import styles from './ArticleViewSelector.module.scss';
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { EArticleView } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';

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
                <ToggleFeatures
                    key={index}
                    feature="enableAppRedesigned"
                    on={
                        <Button
                            key={index}
                            theme={EButtonTheme.CLEAR}
                            onClick={handleClickView(element.view)}
                            className={classNames(styles.button, {
                                [styles.buttonSelected]: view === element.view,
                            })}
                        >
                            <Icon
                                className={classNames('', {
                                    [styles.notSelectedRedesigned]:
                                        view !== element.view,
                                })}
                                Svg={element.icon}
                            />
                        </Button>
                    }
                    off={
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
                    }
                />
            )),
        [handleClickView, view],
    );

    return (
        <ToggleFeatures
            feature="enableAppRedesigned"
            on={
                <div
                    className={classNames(styles.ArticleViewSelector, {}, [
                        className,
                    ])}
                >
                    {views}
                </div>
            }
            off={<div className={classNames('', {}, [className])}>{views}</div>}
        />
    );
};
