tailwind.config = {
  theme: {
    screens: {
      'sm': '540px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
        clifford: '#da373d',
      },
      width: {
        '128': '645px',
        '100': '456px',
      }
    }
  }
}