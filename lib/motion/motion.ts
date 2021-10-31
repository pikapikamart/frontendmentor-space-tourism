

export const TabContentVariant = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: .5
    }
  }
}