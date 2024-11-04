module.exports = (componentName) => `import { FC } from "react";
import { useTranslation } from 'react-i18next';

import { classNames } from "@/shared/lib";

import styles from './${componentName}.module.scss';

type T${componentName}Props = {
    className?: string;
};

export const ${componentName}: FC<T${componentName}Props> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.${componentName}, {}, [className])}>

        </div>
    );
};
`;
