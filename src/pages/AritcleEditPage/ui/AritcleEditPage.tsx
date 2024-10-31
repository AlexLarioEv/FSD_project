import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib";
import { Page } from "@/widgets/Page";
import { useParams } from "react-router-dom";


type TAritcleEditPageProps = {
    className?: string;
};

type TParamsUtl = {
    id: string;
}

const AritcleEditPage: FC<TAritcleEditPageProps> = ({ className }) => {
    const {t} = useTranslation();
    const {id} = useParams<TParamsUtl>()

    return (
        <Page className={classNames('', {}, [className])}>
            {`${t('edit_article')} ${id}`}
        </Page>
    );
};

export default AritcleEditPage;