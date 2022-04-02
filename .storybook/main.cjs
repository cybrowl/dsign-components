const path = require('path');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-svelte-csf',
        '@storybook/addon-storysource',
        '@storybook/addon-a11y',
        'storybook-dark-mode',
        {
            name: '@storybook/addon-postcss',
            options: {
                cssLoaderOptions: {
                    // When you have splitted your css over multiple files
                    // and use @import('./other-styles.css')
                    importLoaders: 1
                },
                postcssLoaderOptions: {
                    // When using postCSS 8
                    implementation: require('postcss')
                }
            }
        }
    ],
    staticDirs: ['../src/lib/assets'],
    framework: '@storybook/svelte',
    svelteOptions: {
        preprocess: require('svelte-preprocess')({postcss: true})
    },
    webpackFinal: async config => {
        // config.module.rules.push({
        //     test: [/\.stories\.js$/, /index\.js$/],
        //     use: [
        //         require.resolve('@storybook/source-loader'),
        //         'style-loader',
        //         'css-loader',
        //         'postcss-loader'
        //     ],
        //     include: [path.resolve(__dirname, '../src')],
        //     enforce: 'pre'
        // });

        config.module.rules.push({
            test: [/\.css$/],
            use: [
                {
                    loader: 'postcss-loader',
                    options: {
                        // HERE: OPTIONS
                        postcssOptions: {
                            plugins: [
                                require('tailwindcss'),
                                require('autoprefixer')
                            ]
                        }
                    }
                }
            ],
            include: path.resolve(__dirname, '../src')
        });

        config.resolve.alias = {
            ...config.resolve.alias,
            $lib: path.resolve(__dirname, '../src/lib'),
            $components: path.resolve(__dirname, '../src/lib/components')
        };
        return config;
    },
    core: {
        builder: 'webpack4'
    }
};
