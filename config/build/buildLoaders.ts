import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader, buildSvgloader, buildbabelLoader } from './loaders'

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const babelLoader = buildbabelLoader({isTsx: false});
    const babelLoaderTsx = buildbabelLoader({isTsx: true});

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const svgLoader = buildSvgloader();

    const cssLoader = buildCssLoader(isDev);

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        babelLoaderTsx,
        cssLoader,
    ]
}