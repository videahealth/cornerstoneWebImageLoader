import base64ToImage from './base64ToImage';
import createImage from './createImage.js';
import { loadImage, configure } from './loadImage.js';
import { external } from './externalModules.js';

const cornerstoneWebImageLoader = {
  base64ToImage,
  createImage,
  loadImage,
  configure,
  external
};

export {
  arrayBufferToImage,
  createImage,
  loadImage,
  configure,
  external
};

export default cornerstoneWebImageLoader;
