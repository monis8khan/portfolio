module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      extend: {
        textColor:{
            skin:{
                base: 'var(--color-text-base)',
                muted: 'var(--color-text-muted)',      
                inverted: 'var(--color-text-inverted)',     
            }
        }
      }
    }
  }