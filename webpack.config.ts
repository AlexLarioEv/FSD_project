import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths, BuildEnv, BuildMode } from './config/build/types/config';
import { EProject } from './config/build/types/config';

const getApiUrl = (mode: BuildMode, envApi?: string) => {
    if (envApi) {
        return envApi;
    }

    if (mode === 'production') {
        return '/api';
    }

    return 'http://localhost:8000';
};

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        icons: path.resolve(__dirname, 'public', 'icons'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
        buildIcons: path.resolve(__dirname, 'build', 'icons'),
    };

    const mode = env?.mode || 'development';
    const port = env?.port || 3000;
    const api = getApiUrl(env?.mode, env?.api);
    const project = env?.project || EProject.FRONTED;

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        api,
        project,
    });

    return config;
};
