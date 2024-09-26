import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildCssLoader, buildSvgloader} from './loaders'

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

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

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    babelLoader,
    typescriptLoader,
    cssLoader,
    svgLoader,
    fileLoader,
  ]
}