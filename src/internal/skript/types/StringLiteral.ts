import Literal, { LiteralType } from "../lang/Literal";

/**
 * String literal tye.
 */
export default class StringLiteral extends Literal<string> {
    /**
     * @param text The value of the string literal.
     */
    constructor(text: string) {
        super(LiteralType.STRING, text);
    }

    public generate = (): string => this.getRaw();
}