import Literal, { LiteralType } from "../lang/Literal";

export default class NumberLiteral extends Literal<number> {
    constructor(num: number) {
        super(LiteralType.NUMBER, num);
    }

    getValue = (): string => this.getRaw().toString();
}