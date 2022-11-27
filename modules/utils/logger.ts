class Logger {
  static error(error: string, code: number) {
    throw new Error(error, {
      cause: {
        code
      }
    })
  }
}

export default Logger
