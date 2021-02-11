import Primitive from "./Primitive";

/**
 * Primitive booleans, true or false.
 */

export default class BooleanPrimitive extends Primitive<boolean> {
    constructor(value: boolean) {
        super(value);
    }

    generate(): string {
        return (this.getValue()) ? 'true' : 'false';
    }
}
