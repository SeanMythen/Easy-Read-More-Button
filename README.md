# Easy Read More Button

Truncate text after a certain amount of lines. Give the user the option to read more if they would like.

[View example on CodePen](https://codepen.io/seanmythen/pen/VwgjrVb)

## Getting Started

Add the minified library to your project:

```javascript
<script src="https://cdn.jsdelivr.net/npm/easy-read-more-button@1.0.9/index.min.js" defer></script>
```

## Add data-attributes to elements that you would like to be truncated

```html
<p data-easy-read-more-lines-to-show="2" data-easy-read-more-button-text="Click to read more..." data-easy-read-less-button-text="Click to read less...">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida dignissim felis sit amet accumsan. Nullam rhoncus elementum augue, ut laoreet lacus pellentesque vitae. Mauris pellentesque mattis cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla quis urna vitae dolor auctor lobortis ac at sem. Ut ipsum arcu, molestie quis fermentum ultricies, tincidunt nec metus. Nam non nisi sollicitudin, rutrum ipsum quis, porta sapien. Aliquam eget rhoncus magna, in
  fringilla nisi. Morbi mollis porta urna ut consectetur. Nulla suscipit ligula quis tortor varius, id feugiat nibh aliquet.
</p>
```

## Style buttons

```css
.easyReadMoreButton {
  padding: 10px 20px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  transition: color 0.3s, background-color 0.3s;
}

.easyReadMoreButton:hover {
  background-color: #000;
  color: #fff;
}
```
