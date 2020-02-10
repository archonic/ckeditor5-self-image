## CKEditor5 Self Image

Self Image replicates the API of EasyImage which makes it easier to switch to an upload solution you host yourself. Originally forked from [ckeditor5-simple-upload](https://github.com/pourquoi/ckeditor5-simple-upload).

For CKEditor5 v11 use 0.0.1
For CKEditor5 v12 use 0.0.2
For CKEditor5 v16 use 0.0.3

```
npm install ckeditor5-self-image
```

Add this plugin and remove the ckfinder and easyimage plugins. The toolbar item entry stays as `imageUpload`.

```javascript
// src/ckeditor.js

import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
//import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
//import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import SelfImage from 'ckeditor5-self-image/src/selfimage';

// ...

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
  // CKFinder,
  // EasyImage,
	Heading,
  Image,
  SelfImage
  // ...
]

ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		]
  },

  // ...
}

### Configuration

```javascript
ClassicEditor.create(document.querySelector( '#editor' ), {
  selfUpload: {
    uploadUrl: 'http://127.0.0.1/my-upload-endpoint'
  }
})
```

```javascript
var cb = function() { return (new Date()).getTime() }
ClassicEditor.create(document.querySelector( '#editor' ), {
  selfUpload: {
    uploadUrl: { url:'http://127.0.0.1/my-upload-endpoint', headers:{ 'x-header':'myhead', 'x-header-cb': cb } }
  }
})
```

### Backend

The endpoint will receive a file named **file** and should return the image url with the key **url**.

success response :
```json
{
  "uploaded": true,
  "url": "http://127.0.0.1/uploaded-image.jpeg"
}
```

failure response :
```json
{
  "uploaded": false,
  "error": {
    "message": "could not upload this image"
  }
}
```
