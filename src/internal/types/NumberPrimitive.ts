import Primitive from "./Primitive";

/**
 * Primitive number values.
 */

export default class StringPrimitive extends Primitive<number> {
    constructor(value: number) {
        super(value);
    }

    generate(): string {
        return this.getValue().toString();
    }
}
