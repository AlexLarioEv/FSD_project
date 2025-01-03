import { FC, useState } from 'react';

import { classNames } from '@/shared/lib';

import { Icon } from '../Icon';
import Star from '../../assets/icons/star.svg';
import styles from './StarRating.module.scss';
import { HStack } from '../Stack';
import { ToggleFeatures } from '@/shared/lib/features';

type TStarRatingProps = {
    className?: string;
    size?: number;
    selectedStars?: number;
    onSelected?: (starCount: number) => void;
};

const stars = [1, 2, 3, 4, 5];

export const StarRating: FC<TStarRatingProps> = ({
    className,
    size,
    selectedStars = 0,
    onSelected,
}) => {
    const [currentStar, setCurrentStar] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const handleHover = (starCount: number) => () => {
        if (!isSelected) {
            setCurrentStar(starCount);
        }
    };

    const handleLeave = () => {
        if (!isSelected) {
            setCurrentStar(0);
        }
    };

    const handleClick = (starCount: number) => () => {
        if (!isSelected) {
            onSelected?.(starCount);
            setCurrentStar(starCount);
            setIsSelected(true);
        }
    };

    return (
        <ToggleFeatures
            feature="enableAppRedesigned"
            on={
                <HStack gap={8}>
                    {stars.map((starNumber) => (
                        <Icon
                            testId={`StarRating.${starNumber}`}
                            data-selected={isSelected}
                            className={classNames(
                                styles.starRatingRedesigned,
                                {
                                    [styles.hoveredRedesigned]:
                                        currentStar >= starNumber,
                                    [styles.selected]: isSelected,
                                },
                                [className],
                            )}
                            Svg={Star}
                            key={starNumber}
                            width={size}
                            height={size}
                            onMouseLeave={handleLeave}
                            onMouseEnter={handleHover(starNumber)}
                            onClick={handleClick(starNumber)}
                        />
                    ))}
                </HStack>
            }
            off={
                <HStack gap={8}>
                    {stars.map((starNumber) => (
                        <Icon
                            testId={`StarRating.${starNumber}`}
                            data-selected={isSelected}
                            className={classNames(
                                styles.starRating,
                                {
                                    [styles.hovered]: currentStar >= starNumber,
                                    [styles.selected]: isSelected,
                                },
                                [className],
                            )}
                            Svg={Star}
                            key={starNumber}
                            width={size}
                            height={size}
                            onMouseLeave={handleLeave}
                            onMouseEnter={handleHover(starNumber)}
                            onClick={handleClick(starNumber)}
                        />
                    ))}
                </HStack>
            }
        />
    );
};
