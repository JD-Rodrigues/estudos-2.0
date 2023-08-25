export enum StatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404
}

export interface HttpResponse<T> {
  status: number
  body?: T
}
