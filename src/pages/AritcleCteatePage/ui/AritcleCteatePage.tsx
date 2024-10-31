import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib";
import { Page } from "@/widgets/Page";


type TAritcleCteatePageProps = {
    className?: string;
};

const AritcleCteatePage: FC<TAritcleCteatePageProps> = ({ className }) => {
    const {t} = useTranslation();

    return (
        <Page className={classNames('', {}, [className])}>
            {t('create_article')}
        </Page>
    );
};

export default AritcleCteatePage;
