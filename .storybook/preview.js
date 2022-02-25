export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
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
