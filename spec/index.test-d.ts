import { marked } from 'marked';
import inlineSpoilers from 'marked-inline-spoilers';

marked.use(inlineSpoilers());

marked('This is a ||spoiler||');
