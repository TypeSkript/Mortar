import Token, { TokenType } from "./Token";

export default class Lexer {

    private currentPosition = -1;
    private script: string;
    private currentChar: string = '';

    private static letters: string[] = [];

    constructor(syntax: string) {
        this.script = syntax;
        this.advance();
    }

    private advance() {
        this.currentPosition++;
        this.currentChar = this.script.charAt(this.currentPosition);
    }

    static isLetter(char: string, countWhitespace: boolean = true): boolean {
        if (countWhitespace && (char === ' ' || char === '  ')) return true;
        return (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 ||
        char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122);
    }

    generateTokens(): Token[] {
        const tokens: Token[] = [];

        while (true) {
            if (!this.currentChar) {
                tokens.push(new Token(TokenType.EOF));
                break;
            }
            else if (this.currentChar == '#') {
                // @ts-ignore
                while (this.currentChar != '\n') this.advance();
                continue;
            }
            else if (this.currentChar == '\n')
                tokens.push(new Token(TokenType.NEWLINE));
            else if (this.currentChar == '(')
                tokens.push(new Token(TokenType.LEFT_PAREN));
            else if (this.currentChar == ')')
                tokens.push(new Token(TokenType.RIGHT_PAREN));
            else if (this.currentChar == '[')
                tokens.push(new Token(TokenType.LEFT_BRACKET));
            else if (this.currentChar == ']')
                tokens.push(new Token(TokenType.RIGHT_PAREN));
            else if (this.currentChar == '{')
                tokens.push(new Token(TokenType.LEFT_CURLY));
            else if (this.currentChar == '}')
                tokens.push(new Token(TokenType.RIGHT_CURLY));
            else if (this.currentChar == ':')
                tokens.push(new Token(TokenType.COLON));
            else if (this.currentChar == '=')
                tokens.push(new Token(TokenType.EQUAL));
            else if (this.currentChar == '¦')
                tokens.push(new Token(TokenType.PLURAL_SYMBOL));
            else if (this.currentChar == '|')
                tokens.push(new Token(TokenType.OR));
            else if (Lexer.isLetter(this.currentChar, false)) {
                let text = this.currentChar;
                this.advance();
                while (Lexer.isLetter(this.currentChar, true)) {
                    text += this.currentChar;
                    this.advance();
                }
                tokens.push(new Token(TokenType.TEXT, text.trim()));
                continue;
            }
            else if (this.currentChar === '"') {
                let text = this.currentChar;
                this.advance();
                while (this.currentChar != '"') {
                    text += this.currentChar;
                    this.advance();
                }
                text += '"';
                tokens.push(new Token(TokenType.TEXT, text.trim()));
            }
            else if (parseFloat(this.currentChar) >= 0) {
                let num = this.currentChar;
                let dotCount = 0;
                this.advance()

                while (parseFloat(this.currentChar) >= 0 || this.currentChar === '.') {
                    num += this.currentChar;
                    if (this.currentChar === '.') dotCount++;
                    this.advance();
                }

                if (dotCount > 1) tokens.push(new Token(TokenType.TEXT, num));
                else tokens.push(new Token(TokenType.NUMBER, num));
                continue;
            }

            this.advance();
            continue;
        }
        
        return tokens;
    }

}