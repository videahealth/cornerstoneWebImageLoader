/**
 * Convert array buffer to image. Returns a promise that resolves to an Image object for the bytes in arrayBuffer
 *
 * @param arrayBuffer - arrayBuffer with bytes for a web image (e.g. JPEG, PNG, etc)
 * @returns {Promise} Promise that resolves to an Image object
 */
export default function (base64) {
  var image = new Image();
  image.src = base64;
}
