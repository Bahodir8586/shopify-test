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
                'lightWhite':"#fbfbfb",
                'gold':"#c2a578"
            }
        },
        fontSize: {
            xs: ['12px', {lineHeight: '14px', letterSpacing: "2px"}],
            "2xs": ['12px', {lineHeight: '20px', letterSpacing: "2px"}],
            "3xs": ['12px', {lineHeight: '16.8px', letterSpacing: "2.1px"}],
            sm: ['14px', '20px'],
            "2sm": ['14px', '23px'],
            base: ['16px', '24px'],
            "2base":['16px', '27px'],
            "3base":['18px',  {lineHeight: '23.4px', letterSpacing: "1.44px"}],
            lg: ['20px', '28px'],
            xl: ['24px', '32px'],
            "2xl": ['28px', {lineHeight: '36px', letterSpacing: "2.24px"}],
            "3xl": ['40px', {lineHeight: '57px', letterSpacing: "7.2px"}],
        },
        fontFamily: {
            oswald: ["Oswald", "serif"],
            openSans: ["Open Sans", "sans-serif"],
            workSans: ["Work Sans", "sans-serif"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
