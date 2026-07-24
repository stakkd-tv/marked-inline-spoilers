import { marked } from 'marked';
import inlineSpoilers from '../src'; 'marked-inline-spoilers';

marked.use(inlineSpoilers());

marked('This is a ||spoiler||');
