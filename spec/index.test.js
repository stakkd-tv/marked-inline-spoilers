import { Marked } from 'marked';
import inlineSpoilers from '../src/index.js';

describe('inline-spoilers', () => {
  let marked;
  beforeEach(() => {
    marked = new Marked();
  });

  test('spoiler text specified', () => {
    marked.use({ extensions: [inlineSpoilers()] });
    expect(marked.parse('This is some text ||with a spoiler||...')).toBe('<p>This is some text <span class="spoiler">with a spoiler</span>...</p>\n');
  });

  test('no spoiler text specified', () => {
    marked.use({ extensions: [inlineSpoilers()] });
    expect(marked.parse('This is some text...')).toBe('<p>This is some text...</p>\n');
  });

  test('only spoiler specified', () => {
    marked.use({ extensions: [inlineSpoilers()] });
    expect(marked.parse('||BOO!||')).toBe('<p><span class="spoiler">BOO!</span></p>\n');
  });

  test('in heading', () => {
    marked.use({ extensions: [inlineSpoilers()] });
    expect(marked.parse('# my heading contains ||spoiler||')).toBe('<h1>my heading contains <span class="spoiler">spoiler</span></h1>\n');
  });
});
