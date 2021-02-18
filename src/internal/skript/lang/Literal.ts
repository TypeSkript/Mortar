export default abstract class Literal<T> {
    private type: LiteralType;
    private value: T;

    constructor(type: LiteralType, value: T) {
        this.type = type;
        this.value = value;
    }

    getRaw = (): T => this.value;
    getType = (): LiteralType => this.type;

    abstract getValue(): string;
}

export enum LiteralType {
    NUMBER,
    STRING,
    BOOLEAN,
    MATERIAL
}

