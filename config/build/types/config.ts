
export type BuildMode = 'production' | 'development';

export enum EProject {
    FRONTED = 'frontend',
    STORYBOOK = 'storybook',
    JEST = 'jest'
}

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
    locales: string;
    buildLocales: string;
    icons: string;
    buildIcons: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    api: string;
    port?: number;
    project: EProject;
}


export interface BuildEnv {
    mode: BuildMode;
    api: string;
    port: number;
    project: EProject;
}