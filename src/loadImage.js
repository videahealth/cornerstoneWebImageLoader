import { external } from './externalModules.js';
import base64ToImage from './base64ToImage.js';
import createImage from './createImage.js';

//
// This is a cornerstone image loader for web images such as PNG and JPEG
//
let options = {
  // callback allowing customization of the xhr (e.g. adding custom auth headers, cors, etc)
  beforeSend (/* xhr */) {}
};


// Loads an image given a url to an image
export function loadImage (base64image, imageId) {
  const cornerstone = external.cornerstone;

  const imagePromise = base64ToImage(base64image);

  const imageObject = createImage(imagePromise, imageId);

  return {
    imageObject,
    cancelFn
  };
}

export function configure (opts) {
  options = opts;
}
