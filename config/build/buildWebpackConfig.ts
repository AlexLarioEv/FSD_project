import {BuildOptions} from "./types/config";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";


// const devServer: DevServerConfiguration = {};

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
            cssFilename: 'css'
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            compress: true,
            port: 3000,
            hot: true,  // Enable hot module replacement
            open: true, // Automatically open the browser
          },
        
    }
}
