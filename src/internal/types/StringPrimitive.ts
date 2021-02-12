import Primitive from "./Primitive";

/**
 * Primitive string values, which contain no inline references or expressions.
 */

export default class StringPrimitive extends Primitive<string> {
    constructor(value: string) {
        super(value);
    }

    generate(): string {
        return this.getValue();
    }
}
