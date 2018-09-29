## CKEditor5 Self Image

Self Image replicates the API of EasyImage which makes it easier to switch to an upload solution you host yourself. Originally forked from [ckeditor5-simple-upload](https://github.com/pourquoi/ckeditor5-simple-upload).

```
npm install ckeditor5-self-image
```

Add this plugin and remove the ckfinder and easyimage plugins.

```javascript
// build-config.js

module.exports = {
  // ...
  plugins: [
    '@ckeditor/ckeditor5-essentials/src/essentials',
    // ...
    //'@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter',
    //'@ckeditor/ckeditor5-easy-image/src/easyimage',

    'ckeditor5-self-image/src/selfupload'
    // ...
  ],

  // ...

  config: {
    toolbar: {
      items: [
        'headings',
        'bold',
        'italic',
        'imageUpload',
        'link',
        'bulletedList',
        'numberedList',
        'blockQuote',
        'undo',
        'redo'
      ]
    },
    // ...
  }
}

```

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

The endpoint will receive a file named **file** and should return the image url with the key **default**.

success response :
```json
{
  "default": "http://127.0.0.1/uploaded-image.jpeg"
}
```

failure response :
```json
{
  "uploaded": false,
  "error": {
    "message": "Could not upload this image."
  }
}
```
