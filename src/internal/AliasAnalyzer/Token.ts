enum TokenType {
    TEXT,
    NUMBER,
    NEWLINE,
    COLON,
    EQUAL,
    EOF,
    OR,
    PLURAL_SYMBOL,

    LEFT_BRACKET,
    RIGHT_BRACKET,

    LEFT_PAREN,
    RIGHT_PAREN,

    LEFT_CURLY,
    RIGHT_CURLY
}

export default class Token {

    public readonly tokenType: TokenType;
    public readonly value?: string;

    constructor(token: TokenType, value?: string) {
        this.tokenType = token;
        this.value = value;
    }

    toString(): string {
        const value = + (this.value !== undefined) ? ':' + this.value : '';
        return TokenType[this.tokenType] + value;
    }
}

export { TokenType };