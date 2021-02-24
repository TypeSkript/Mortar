import Literal, { LiteralType } from "../lang/Literal";
import SyntaxElement from "../lang/SyntaxElement";

/**
 * String literal type.
 */
export default class StringLiteral extends Literal<string> {
    /**
     * @param text The value of the string literal.
     */
    constructor(text: string, parent: SyntaxElement) {
        super(LiteralType.STRING, text, parent);
    }

    public generate = (): string => this.getRaw();
}