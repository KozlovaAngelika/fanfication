const CracoAlias = require('craco-alias');

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'options',
                baseUrl: './',
                aliases: {
                    '@routes': './src/routes.jsx',
                    '@media': './src/media',
                    '@context': './src/context',
                    '@hooks': './src/hooks',
                    '@loader': './src/components/Loader',
                    '@error': './src/components/ErrorMessage'
                }
            }
        }
    ]
};