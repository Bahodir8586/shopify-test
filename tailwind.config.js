module.exports = {
    purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primaryGray': '#f1f1f1',
                'secondaryGray': '#c4c4c4',
                'darkGray': '#353535',
                "lightGray": '#7e7e7e',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
