import Literal, { LiteralType } from "../lang/Literal";

/**
 * Boolean literal type.
 */
export default class BooleanLiteral extends Literal<boolean> {
    /**
     * @param bool Boolean, true of false.
     */
    constructor(bool: boolean) {
        super(LiteralType.BOOLEAN, bool);
    }

    public generate = (): string => (this.getRaw()) ? 'true' : 'false';
}