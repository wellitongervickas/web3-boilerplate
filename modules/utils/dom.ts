const windowIsAvailable = (): Promise<boolean> =>
  new Promise((resolve: Function): boolean =>
    resolve(typeof window !== 'undefined')
  )

const dom = {
  windowIsAvailable
}

export default dom
