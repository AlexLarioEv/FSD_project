import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths, EProject } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.preferAbsolute = true;
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = { '@': paths.src, ...config.resolve.alias };

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module.rules.push(buildCssLoader(true));

    config.plugins.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify(EProject.STORYBOOK),
        }),
    );

    return config;
};
