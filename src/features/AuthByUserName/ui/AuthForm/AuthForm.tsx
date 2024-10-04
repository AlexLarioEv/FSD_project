import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import {getLogin} from '../../model/selector'
import {loginByUserName} from '../../model/services'

import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input/Input";
import { classNames } from "@/shared/lib";
import {useAppDispatch} from '@/shared/hooks'
import { ETypeText, Text } from "@/shared/ui/Text";

import {loginActions} from '../../model/slice'

import styles from "./AuthForm.module.scss";
import { Loader } from "@/shared/ui";

type TAuthFormProps = {
    className?: string;
};


export const AuthForm: FC<TAuthFormProps> = ({ className }) => {
    const {t} = useTranslation()
    const {password, username, isLoading, error} = useSelector(getLogin)
    const dispatch = useAppDispatch()
        
    
    const handleAuth = () => {
        dispatch(loginByUserName({username, password}));
    }

    const changeUsername = (value: string) => {
        dispatch(loginActions.setUsername(value));
    }

    const changePassword = (value: string) => {
        dispatch(loginActions.setPassword(value));
    }

    return (
        <div className={classNames(styles.AuthForm, {}, [className])}>
            <Input onChange={changeUsername} placeholder="Login" autoFocus/>
            <Input onChange={changePassword} placeholder="Password"/>
            {error && <Text title="Error" description={error} type={ETypeText.ERROR}/>}
            {isLoading ? <Loader /> : <Button onClick={handleAuth}>{t('sign_in')}</Button>}
        </div>
    );
};