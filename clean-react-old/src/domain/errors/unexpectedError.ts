export class UnexpectedError extends Error {
  constructor() {
    super('Something Wrong Happened')
    this.name = 'UnexpectedError'
  }
}
