declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    import React from 'react';
    const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default SVG;
}

declare module '*.png';
declare module '*.jpg';

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'frontend' | 'storybook' | 'jest';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
