import { FC } from "react";

import { classNames } from "shared/lib";

import styles from './NotFundPage.module.scss';
import { useTranslation } from "react-i18next";

type TNotFundPageProps = {
  className?: string;
};

export const NotFundPage: FC<TNotFundPageProps> = ({ className }) => {
  const {t} = useTranslation()
  return (
    <div className={classNames(styles.NotFundPage, {}, [className])}>
      {t('not_fund')}
    </div>
  );
};