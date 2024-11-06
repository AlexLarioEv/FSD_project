import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'

type TProps = {
    isTsx?: boolean;
}

export const buildbabelLoader = ({isTsx}: TProps) => ({
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
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
                isTsx && [
                    babelRemovePropsPlugin,
                    {
                        props: ['data-testid'],
                    },
                ],
            ].filter(Boolean),
        },
    },
})