import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'

type TProps = {
    isTsx?: boolean;
    isProd?: boolean;
}

export const buildbabelLoader = ({isTsx,isProd}: TProps) => ({
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
            cacheDirectory: true,
            presets: [
                '@babel/preset-env',
            ],
            plugins: [
                [
                    '@babel/plugin-transform-typescript',
                    {
                        isTsx,
                    },
                ],
                '@babel/plugin-transform-runtime',
                isTsx && isProd && [
                    babelRemovePropsPlugin,
                    {
                        props: ['data-testid'],
                    },
                ],
            ].filter(Boolean),
        },
    },
})
