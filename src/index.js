export default function inlineSpoilers() {
  return {
    name: 'spoiler',
    level: 'inline',

    start(src) {
      return src.indexOf('||');
    },

    tokenizer(src) {
      const match = /^\|\|([\s\S]+?)\|\|/.exec(src);

      if (!match) return false;

      return {
        type: 'spoiler',
        raw: match[0],
        tokens: this.lexer.inlineTokens(match[1]),
      };
    },

    renderer(token) {
      return `<span class="spoiler">${this.parser.parseInline(token.tokens)}</span>`;
    },
  };
}
