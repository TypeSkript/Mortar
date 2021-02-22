import Literal, { LiteralType } from "../lang/Literal";

/**
 * Number literal type.
 */
export default class NumberLiteral extends Literal<number> {
    /**
     * @param num The value of the number literal.
     */
    constructor(num: number) {
        super(LiteralType.NUMBER, num);
    }

    public generate = (): string => this.getRaw().toString();
}