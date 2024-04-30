export class WebResponse<T> {
    status?: Number
    success?: Boolean
    message?: any
    allRecord?: number
    data?: T
    errors?: any
}