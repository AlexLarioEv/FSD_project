import { FC } from "react";

import { classNames } from "@/shared/lib";
import { Page } from "@/widgets/Page";
import { useTranslation } from "react-i18next";

type TAdminPageProps = {
    className?: string;
};

const AdminPage: FC<TAdminPageProps> = ({ className }) => {
    const {t} = useTranslation('admin')

    return (
        <Page className={classNames('', {}, [className])}>
            {t('admin')}
        </Page>
    );
};

export default AdminPage;