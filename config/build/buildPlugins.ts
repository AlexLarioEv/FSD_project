import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import CircularDependencyPlugin from 'circular-dependency-plugin' 
import CopyPlugin  from "copy-webpack-plugin";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import {BuildOptions} from "./types/config";

export function buildPlugins({paths, isDev, api, project}: BuildOptions): webpack.WebpackPluginInstance[] {
    const isProd = !isDev

    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
            
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(api),
            __PROJECT__: JSON.stringify(project)
        }),
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /node_modules/,
            // add errors to webpack instead of warnings
            failOnError: true,
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        })
    ]

    if(isDev){
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        }))
        
    }

    if(isProd){
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
        plugins.push(new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.buildLocales },
                { from: paths.icons, to: paths.buildIcons },
            ],
        }))
    }
    return plugins;
}
