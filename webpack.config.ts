import path from "path";
import webpack from 'webpack';

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths,BuildEnv} from "./config/build/types/config";
import {EProject} from './config/build/types/config'


export default ({
    mode = 'development', 
    port = 3000, 
    api = 'http://localhost:8000', 
    project = EProject.FRONTED}: BuildEnv) => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales')
    }
    const isDev = mode === 'development';
    
    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        api,
        project,
    })
    
    return config
};
