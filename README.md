# marked-inline-spoilers

Specify a spoiler in Markdown using the syntax `||spoiler||`

The extension will output the spoiler in a `<span>` with a class of `spoiler` e.g.
```html
<span class="spoiler">spoiler</span>
```

You can then use this to hide the element with some JS or CSS (depending on your UX). A simple example could look like this:
```css
.spoiler {
	background-color: black;
}

.spoiler:hover {
	background-color: transparent;
}
```

# Usage

```js
import { marked } from "marked";
import inlineSpoilers from "marked-inline-spoilers";

// or UMD script
// <script src="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/marked-inline-spoilers/lib/index.umd.js"></script>

marked.use(inlineSpoilers());

marked("This is a ||great|| spoiler!");
// <p>This is a <span class="spoiler">great</span> spoiler!</p>
```
