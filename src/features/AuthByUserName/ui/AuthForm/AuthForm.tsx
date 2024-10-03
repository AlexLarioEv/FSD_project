import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/shared/ui/Button";
import { classNames } from "@/shared/lib";

import styles from "./AuthForm.module.scss";
import { Input } from "@/shared/ui/Input/Input";

type TAuthFormProps = {
  className?: string;
};

export const AuthForm: FC<TAuthFormProps> = ({ className }) => {
    const {t} = useTranslation()

    return (
        <div className={classNames(styles.AuthForm, {}, [className])}>
            <Input placeholder="Login" autoFocus/>
            <Input placeholder="Password"/>
            <Button >{t('sign_in')}</Button>
        </div>
    );
};