import Literal, { LiteralType } from "../lang/Literal";

export default class StringLiteral extends Literal<string> {
    constructor(text: string) {
        super(LiteralType.STRING, text);
    }

    getValue = (): string => this.getRaw();
}