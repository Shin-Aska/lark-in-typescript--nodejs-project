// @ts-ignore
import { get_parser } from './parser_sample_grammar.js';

// Get the parser instance. No need to pass the grammar; it's already built-in.
const parser = get_parser();

function parseExpression(expression: string): void {
    try {
        // Now parser.parse() will work correctly
        const tree = parser.parse(expression);
        console.log("Input Expression:", expression);
        console.log("Parse Tree:", JSON.stringify(tree, null, 2));
    } catch (e: any) {
        console.error(`Failed to parse expression '${expression}':`, e.message);
    }
}

// Example usage
parseExpression("10 * (2 + 3) / 5");