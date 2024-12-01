import { FC, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';

import { classNames } from '@/shared/lib';

import styles from './Rating.module.scss';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

type TRatingProps = {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    defaultRate?: number;
    onCancel?: (starCount: number) => void;
    onAccept?: (starCount: number, feedback?: string) => void;
};

export const Rating: FC<TRatingProps> = ({
    className,
    title,
    feedbackTitle,
    defaultRate = 0,
    hasFeedback,
    onAccept,
    onCancel,
}) => {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentStarCount, setCurrentStarCount] = useState(defaultRate);
    const [currentFeedback, setCurrentFeedback] = useState('');

    const handleSelectStar = useCallback(
        (starCount: number) => {
            setCurrentStarCount(starCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(starCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const handleCancel = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(currentStarCount);
    }, [currentStarCount, onCancel]);

    const handleAccept = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(currentStarCount, currentFeedback);
    }, [currentFeedback, currentStarCount, onAccept]);

    const handleChangeFeedback = useCallback((feedback: string) => {
        setCurrentFeedback(feedback);
    }, []);

    const modalContent = useMemo(() => {
        return (
            <VStack>
                <Text title={feedbackTitle} />
                <Input
                    testId="Rating.Input"
                    value={currentFeedback}
                    placeholder={t('feedback')}
                    onChange={handleChangeFeedback}
                />
            </VStack>
        );
    }, [currentFeedback, feedbackTitle, handleChangeFeedback, t]);

    return (
        <Card
            data-testid="Rating"
            className={classNames(styles.Rating, {}, [className])}
        >
            <VStack gap={8} align="center">
                <Text title={currentStarCount ? t('thanks') : title} />
                <StarRating
                    selectedStars={currentStarCount}
                    size={40}
                    onSelected={handleSelectStar}
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen}>
                    <VStack max gap={32}>
                        {modalContent}
                        <HStack gap={16} justify="end">
                            <Button
                                testId="Rating.Close"
                                theme={EButtonTheme.BORDER}
                                onClick={handleCancel}
                                danger
                            >
                                {t('close')}
                            </Button>
                            <Button
                                testId="Rating.Save"
                                theme={EButtonTheme.BORDER}
                                onClick={handleAccept}
                            >
                                {t('save')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={handleCancel}>
                    {modalContent}
                    <Button
                        className={styles.acceptButton}
                        theme={EButtonTheme.BORDER}
                        onClick={handleAccept}
                    >
                        {t('save')}
                    </Button>
                </Drawer>
            </MobileView>
        </Card>
    );
};
