/**
 * Some types of data in Skript can be represented exactly as typed.
 * These data types are called literals, because they literally mean
 * what they were typed as.
 * 
 * Some types of data which can be represented as a literal are as
 * follows:
 *      Strings without references, eg. "Hello, World!", "%% wow %%"
 *      Numbers, eg. 12, 65, 5.7
 *      Booleans, eg. true, false
 *      Materials, eg. dirt block, air, cobblestone
 * 
 * @template T The JS/JSON equivalent of the literal, as it would be
 * represented in the AST.
 */
export default abstract class Literal<T> {
    private type: LiteralType;
    private value: T;

    /**
     * @param type The type of literal. (Number, String, Boolean, or Material)
     * @param value The value of the literal.
     */
    constructor(type: LiteralType, value: T) {
        this.type = type;
        this.value = value;
    }

    /**
     * @method getRaw Returns the JS-Equivalent of the literal value.
     */
    getRaw = (): T => this.value;

    /**
     * @method getType Returns the type of the literal (Number, String, Boolean, or Material).
     */
    getType = (): LiteralType => this.type;

    /**
     * @method getValue Generates the Skript equivalent code.
     */
    public abstract generate(): string;
}

export enum LiteralType {
    NUMBER,
    STRING,
    BOOLEAN,
    MATERIAL
}

