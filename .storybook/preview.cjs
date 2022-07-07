import {themes} from '@storybook/theming';
import '../src/tailwind.css';

export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
    darkMode: {
        // Override the default dark theme
        dark: {
            ...themes.dark,
            appBg: '#32313D',
            brandImage:
                'https://bafybeif4za4ncyho45wv4pflqvlc45r5xjfo72njyd27sxswdjrreortky.ipfs.dweb.link/logo.png'
        },
        // Override the default light theme
        light: {...themes.normal, appBg: 'white'},
        stylePreview: true,
        current: 'dark'
    },
    backgrounds: {
        default: 'dsign',
        values: [
            {
                name: 'dsign',
                value: '#1B1A22'
            },
            {
                name: 'facebook',
                value: '#3b5998'
            }
        ]
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};
