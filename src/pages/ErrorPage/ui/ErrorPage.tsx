import { FC } from "react";

import { classNames } from "@/shared/lib";

import styles from './ErrorPage.module.scss';
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button";
import { Page } from "@/widgets/Page";

type TErrorPageProps = {
  className?: string;
};

export const ErrorPage: FC<TErrorPageProps> = ({ className }) => {
    const {t} =  useTranslation();

    const handleRefresh = () => {
        location.reload()
    }

    return (
        <Page className={classNames(styles.ErrorPage, {}, [className])}>
            {t('error')}
            <Button onClick={handleRefresh}>{t('please_try_again')}</Button>
        </Page>
    );
};