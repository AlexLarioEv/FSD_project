import {  useCallback, memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Text,ETypeText,Input,Button } from "@/shared/ui";
import { classNames } from "@/shared/lib/helpers";
import { DynamicModuleLoader, TReducerList } from "@/shared/lib/components";
import { useAppDispatch } from '@/shared/hooks'

import {getLogin} from '../../model/selector'
import {loginByUserName} from '../../model/services'
import {loginActions, loginReducer} from '../../model/slice'

import styles from "./AuthForm.module.scss";

type TAuthFormProps = {
    className?: string;
    onSuccess?: VoidFunction
};


const initialReducers: TReducerList = {
    login:loginReducer
};

const AuthForm = memo(({ className,onSuccess }:TAuthFormProps) => {
    const {t} = useTranslation()
    const {password, username, isLoading, error} = useSelector(getLogin) || {}
    const dispatch = useAppDispatch()
        
    const handleAuth = useCallback(async () => {
        const result = await dispatch(loginByUserName({username, password}));
        if(result.meta.requestStatus === 'fulfilled'){
            onSuccess() 
        }
    },[username,password,dispatch,onSuccess])

    const changeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    },[dispatch])

    const changePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    },[dispatch])

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(styles.AuthForm, {}, [className])}>
                <Input onChange={changeUsername} value={username} placeholder={t("login")} autoFocus/>
                <Input onChange={changePassword} value={password}  placeholder={t("password")}/>
                {error && <Text title="Error" description={error} type={ETypeText.ERROR}/>}
                <Button disabled={isLoading} onClick={handleAuth}>{t('sign_in')}</Button>
            </div>
        </DynamicModuleLoader>
    );
});

AuthForm.displayName= 'AuthForm'

export default AuthForm