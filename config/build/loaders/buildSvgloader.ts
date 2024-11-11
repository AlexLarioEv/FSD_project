export const buildSvgloader = () => ({
    test: /\.svg$/,
    exclude: /node_modules/,
    use: ['@svgr/webpack'],
})
