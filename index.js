/**
 * looking up a value in an object using a keypath string
 * @param  object query object
 * @param  path query path
 * @param  defaultBack optional return, if query failed, default null
 */
export default function keypath(object, path = '', defaultBack = null) {
  const keys = path.split('.');

  let key = '';

  while (object && keys.length) {
    key = keys.shift();

    if (object[key] !== undefined) {
      object = object[key];

      if (keys.length === 0 && object !== undefined) {
        return object;
      }
    } else {
      break;
    }
  }
  return defaultBack;
}
