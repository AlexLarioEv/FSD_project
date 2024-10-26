import {  useCallback, memo } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/shared/hooks";

import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { Text,ETypeText } from '@/shared/ui/Text'
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

const AuthForm = memo(({ className, onSuccess }:TAuthFormProps) => {
    const {t} = useTranslation()
    const {password, username, isLoading, error} = useAppSelector(getLogin) || {}
    const dispatch = useAppDispatch()
        
    const handleAuth = useCallback( async () => {

        const result = await dispatch(loginByUserName({username: username ?? '', password: password ?? ''}));

        if(result.meta.requestStatus === 'fulfilled'){
            onSuccess && onSuccess() 
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
                <Input aria-label="login" onChange={changeUsername} value={username} placeholder={t("login")} autoFocus/>
                <Input aria-label="password" onChange={changePassword} value={password}  placeholder={t("password")}/>
                {error && <Text title="Error" description={error} type={ETypeText.ERROR}/>}
                <Button disabled={isLoading} onClick={handleAuth}>{t('sign_in')}</Button>
            </div>
        </DynamicModuleLoader>
    );
});

AuthForm.displayName = 'AuthForm';

export default AuthForm;