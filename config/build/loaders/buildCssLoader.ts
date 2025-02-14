import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssLoader = (isDev: boolean) => ({
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    // css modules используется только на назавние '.module.'
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                },
            }
        },
        'sass-loader',
    ]
})
