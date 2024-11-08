import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib";
import { Button, EButtonTheme } from "@/shared/ui/Button";
import { RoutePath } from "@/shared/config/routeConfig";

import { HStack } from "@/shared/ui/Stack";

type TArticleDetailsHeaderProps = {
    className?: string;
    id: string;
};

export const ArticleDetailsHeader: FC<TArticleDetailsHeaderProps> = ({ className, id }) => {
    const {t} = useTranslation('articleDetails');
    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate(RoutePath.article);
    }
    
    const handleClickEdit = () => {
        navigate(`${RoutePath.article_edit}${id}/edit`);
    }

    return (
        <HStack justify='between' gap={8} className={classNames('', {}, [className])}>
            <Button theme={EButtonTheme.BORDER} onClick={handleClickBack}>
                {t("back_to_articles")}
            </Button>
            <Button theme={EButtonTheme.BORDER} onClick={handleClickEdit}>
                {t("edit_page")}
            </Button>
        </HStack>
    );
};