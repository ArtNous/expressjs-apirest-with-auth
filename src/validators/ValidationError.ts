export class ValidationError<T> {
    public get messages(): string[] {
        return this._messages;
    }
    public set messages(value: string[]) {
        this._messages = value;
    }
    public get name(): keyof T {
        return this._name;
    }
    public set name(value: keyof T) {
        this._name = value;
    }
    constructor(private _name: keyof T, private _messages: string[]) {}
}