import { FC } from "react";

import { classNames } from "@/shared/lib";

import styles from './NotFundPage.module.scss';
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

type TNotFundPageProps = {
  className?: string;
};

export const NotFundPage: FC<TNotFundPageProps> = ({ className }) => {
    const {t} = useTranslation()
    return (
        <Page data-testid="NotFundPage" className={classNames(styles.NotFundPage, {}, [className])}>
            {t("not_fund_page")}
        </Page>
    );
};