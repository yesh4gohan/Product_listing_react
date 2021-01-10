const size = {
    mobileS: '320px',
    laptopL: '1440px',
    tablet: '768px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    laptopL: `(min-width: ${size.laptopL})`,
    tablet: `(min-width: ${size.tablet})`
};

export const throttle = (func, limit) => {
    let inThrottle
    return function() {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }