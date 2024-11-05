import { FC } from "react";

import { classNames } from "@/shared/lib";
import { Page } from "@/widgets/Page";
import { useTranslation } from "react-i18next";

type TAdminPageProps = {
    className?: string;
};

export const ForbiddenPage: FC<TAdminPageProps> = ({ className }) => {
    const {t} = useTranslation()

    return (
        <Page className={classNames('', {}, [className])}>
            {t('access_denied')}
        </Page>
    );
};
