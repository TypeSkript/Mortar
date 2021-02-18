import Literal, { LiteralType } from "../lang/Literal";

export default class NumberLiteral extends Literal<boolean> {
    constructor(bool: boolean) {
        super(LiteralType.BOOLEAN, bool);
    }

    getValue = (): string => (this.getRaw()) ? 'true' : 'false';
}