import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Adapter from './adapter';

export default class SelfUpload extends Plugin {
  static get requires() {
    return [FileRepository];
  }

  static get pluginName() {
    return 'SelfUpload';
  }

  init() {
    const url = this.editor.config.get('selfUpload.uploadUrl');
    if (!url) {
      console.warn('selfUpload.uploadUrl is not configured')
      return;
    }
    this.editor.plugins.get('FileRepository').createUploadAdapter = loader => new Adapter(loader, url, this.editor.t);
  }
}
