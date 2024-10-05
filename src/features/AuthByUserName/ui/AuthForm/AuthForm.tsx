import {  useCallback, memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Loader,Text,ETypeText,Input,Button } from "@/shared/ui";
import { classNames } from "@/shared/lib/helpers";
import { DynamicModuleRender } from "@/shared/lib/components";
import { useAppDispatch } from '@/shared/hooks'

import {getLogin} from '../../model/selector'
import {loginByUserName} from '../../model/services'
import {loginActions, loginReducer} from '../../model/slice'

import styles from "./AuthForm.module.scss";

type TAuthFormProps = {
    className?: string;
};


const initialReducers = {
    login:loginReducer
};

const AuthForm = memo(({ className }:TAuthFormProps) => {
    const {t} = useTranslation()
    const {password, username, isLoading, error} = useSelector(getLogin) || {}
    const dispatch = useAppDispatch()
        
    const handleAuth = useCallback(() => {
        dispatch(loginByUserName({username, password}));
    },[username,password,dispatch])

    const changeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    },[dispatch])

    const changePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    },[dispatch])

    return (
        <DynamicModuleRender reducers={initialReducers}>
            <div className={classNames(styles.AuthForm, {}, [className])}>
                <Input onChange={changeUsername} value={username} placeholder={t("login")} autoFocus/>
                <Input onChange={changePassword} value={password}  placeholder={t("password")}/>
                {error && <Text title="Error" description={error} type={ETypeText.ERROR}/>}
                {isLoading ? <Loader /> : <Button onClick={handleAuth}>{t('sign_in')}</Button>}
            </div>
        </DynamicModuleRender>
    );
});

AuthForm.displayName= 'AuthForm'

export default AuthForm