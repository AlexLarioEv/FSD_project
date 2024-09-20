import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = { 
        test: /\.css$/,
        use: 'css-loader', 
        exclude: /node_modules/
    }

    return [
        cssLoader,
        typescriptLoader,
    ]
}
