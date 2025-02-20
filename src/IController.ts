export default interface IController {
    defineGet(): void;
    definePost(): void;
    definePut(): void;
    defineDelete(): void;
}