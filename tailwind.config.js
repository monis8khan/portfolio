module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            textColor: {
                skin: {
                    base: 'var(--color-text-base)',
                    muted: 'var(--color-text-muted)',
                    inverted: 'var(--color-text-inverted)',
                }
            },
            backgroundColor: {
                skin: {
                    fill: 'var(--color-fill)',
                    "button-accent": 'var(--color-button-accent)',
                    "button-accent-hover": 'var(--color-button-accent-hover)',
                    "button-accent-muted": 'var(--color-button-accent-muted)',
                }
            }
        }
    }
}