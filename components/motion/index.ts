
export const dummyVariant = {
  hidden: {
    opacity:1
  },
  visible: {
    opacity: 1
  },
  exit: {
    opacity:1
  }
}

export const swipeBaseVariant = {
  hidden: {
    x: 25,
    opacity: 0,
    transition: {
      duration: .5
    }
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  },
  exit: {
    x: 25,
    opacity: 0,
    transition: {
      duration: .5
    }
  }
}

export const customSwipeVariant = (axisVal: number, delay=0) =>{

  return {
    hidden: {
      ...swipeBaseVariant.hidden,
      x: axisVal,
    },
    visible : {
      ...swipeBaseVariant.visible,
      transition: {
        duration: 1,
        delay: .2*delay
      }
    },
    exit: {
      x: axisVal,
      opacity: 0,
      transition: {
        duration: .5,
        delay: .1*delay
      }
    }
  }
}

export const opacityVariant = {
  hidden: {
    ...swipeBaseVariant.hidden,
    x: 0
  },
  visible: {
    ...swipeBaseVariant.visible
  },
  exit: {
    ...swipeBaseVariant.exit,
    x: 0
  }
}