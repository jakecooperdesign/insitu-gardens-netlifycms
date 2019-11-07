// tailwind.config.js
module.exports = {
    theme: {
        fontFamily: {
            sans: [
                'transat',
                'mr-eaves-xl-modern',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            serif: [
                'trajan-pro-3',
                'Georgia',
                'Cambria',
                '"Times New Roman"',
                'Times',
                'serif',
            ],
            mono: [
                'Menlo',
                'Monaco',
                'Consolas',
                '"Liberation Mono"',
                '"Courier New"',
                'monospace',
            ],
        },
        extend: {
            height: {
                '96': '24rem',
                '128': '32rem'
            },
            width: {
                '96': '24rem',
                '128': '32rem'
            },
            zIndex: {
                '-10': '-10',
            }
        }
    },
    variants: {
        opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    plugins: [],
}