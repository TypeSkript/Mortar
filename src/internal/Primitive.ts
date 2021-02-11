/**
 * While Skript doesn't explicitly contain "primitive" values, this serves
 * as a base class for data which is defined as static with no references.
 * 
 * Ex. hard-coded numbers (1, 5, 65.2)
 *     hard-coded strings ("Hello, World!", "%% kek %%")
 *     hard-coded booleans (true, false)
 * 
 * All special characters in primitive data must be escaped, and contain no
 * external references.
 * 
 * @template T The JS/TS equivalent of the raw Skript value, used internally.
 */

 export default abstract class Primitive<T> {
    /** @param value The raw value, as represented in the provided AST. */
     constructor(private value: T) {}

     /** @method generate Method dedicated to generating the string which will be embedded into the compiled script. Comparable to JS .toString() */
    abstract generate(): string;

    /** @method getValue Returns the JS/TS equivelant of the raw Skript value- same as template T. */
    getValue = (): T => this.value;
 }
