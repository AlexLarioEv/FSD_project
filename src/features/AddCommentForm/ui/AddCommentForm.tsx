import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { useAppDispatch } from "@/shared/hooks";
import { classNames } from "@/shared/lib";
import { Button, EButtonTheme } from "@/shared/ui/Button";
import { Input } from '@/shared/ui/Input';
import { DynamicModuleLoader, TReducerList } from "@/shared/lib/components";

import {addCommentReducer, addCommentActions} from '../model/slice/addCommentSlice';
import {getCommentText} from '../model/selectors/getComment';
import styles from './AddCommentForm.module.scss';

type TAddCommentFormProps = {
    className?: string;
    onSendComment: (value: string) => void;
};

const reducers: TReducerList = {
    addCommentForm:addCommentReducer
}

const AddCommentForm = memo(({ className, onSendComment }: TAddCommentFormProps) => {
    const {t} = useTranslation();
    const comment = useSelector(getCommentText)
    const dispatch = useAppDispatch();

    const handleChangeComment = useCallback((value: string) => {
        dispatch(addCommentActions.setComment(value))
    },[dispatch])

    const handleSendComment = useCallback(() => {
        if(comment){
            onSendComment(comment)
            dispatch(addCommentActions.setComment(''))
        }
    },[comment, dispatch, onSendComment])


    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(styles.AddCommentForm, {}, [className])}>
                <Input data-testid={'add_comment'} value={comment} onChange={handleChangeComment} placeholder={t('add_comment')}/>
                <Button onClick={handleSendComment} theme={EButtonTheme.BORDER}>{t('add')}</Button>
            </div>
        </DynamicModuleLoader>
    );
});

AddCommentForm.displayName = 'AddCommentForm';

export default AddCommentForm;
