interface ApiQueryParams {
    resource?: string
}

interface IValidator<T> {
    validate(method: API.HttpMethod, data: any): Promise<void>
    getErrors(): import('../validators/ValidationError').ValidationError<T> | null
}