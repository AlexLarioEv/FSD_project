import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/shared/lib/hooks';
import { classNames } from '@/shared/lib';
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { DynamicModuleLoader, TReducerList } from '@/shared/lib/components';

import {
    addCommentReducer,
    addCommentActions,
} from '../model/slice/addCommentSlice';
import { getCommentText } from '../model/selectors/getComment';
import styles from './AddCommentForm.module.scss';
import { TTestProps } from '@/shared/lib/types';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon';

import SubmitIcon from '@/shared/assets/icons/submit.svg';

type TAddCommentFormProps = {
    className?: string;
    onSendComment: (value: string) => void;
} & TTestProps;

const reducers: TReducerList = {
    addCommentForm: addCommentReducer,
};

const AddCommentForm = memo((props: TAddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const comment = useSelector(getCommentText);
    const dispatch = useAppDispatch();

    const handleChangeComment = useCallback(
        (value: string) => {
            dispatch(addCommentActions.setComment(value));
        },
        [dispatch],
    );

    const handleSendComment = useCallback(() => {
        if (comment) {
            onSendComment(comment);
            dispatch(addCommentActions.setComment(''));
        }
    }, [comment, dispatch, onSendComment]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature="enableAppRedesigned"
                on={
                    <div
                        data-testid={props['data-testid']}
                        className={classNames(
                            styles.AddCommentFormRedesigned,
                            {},
                            [className],
                        )}
                    >
                        <HStack max gap={16} align="center">
                            <Input
                                testId="add_comment"
                                value={comment}
                                onChange={handleChangeComment}
                                inputPlaceholder={t('add_comment')}
                            />
                            <Button
                                testId="AddCommentForm.Button"
                                onClick={handleSendComment}
                                theme={EButtonTheme.CLEAR}
                            >
                                <Icon Svg={SubmitIcon} />
                            </Button>
                        </HStack>
                    </div>
                }
                off={
                    <div
                        data-testid={props['data-testid']}
                        className={classNames(styles.AddCommentForm, {}, [
                            className,
                        ])}
                    >
                        <Input
                            testId="add_comment"
                            value={comment}
                            onChange={handleChangeComment}
                            placeholder={t('add_comment')}
                        />
                        <Button
                            testId="AddCommentForm.Button"
                            onClick={handleSendComment}
                            theme={EButtonTheme.BORDER}
                        >
                            {t('add')}
                        </Button>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});

AddCommentForm.displayName = 'AddCommentForm';

export default AddCommentForm;
