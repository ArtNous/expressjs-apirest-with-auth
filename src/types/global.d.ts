interface ApiQueryParams {
    resource?: string
}

interface IValidator<T> {
    validate(req: import('express').Request): Promise<void>
    getErrors(): import('../validators/ValidationError').ValidationError<T> | null
}