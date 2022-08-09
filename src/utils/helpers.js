/**
 * @param {Function} fun
 * @returns {String?}
 */
export function funcType(fun) {
  if (typeof fun === 'function') {
    if (fun.prototype) {
      return Object.getOwnPropertyDescriptor(fun, 'prototype').writable
        ? 'function'
        : 'class';
    }

    return fun.constructor.name === 'AsyncFunction' ? 'async' : 'arrow';
  }

  return null;
}

export function isFunction(fun) {
  return ['function', 'arrow', 'async'].includes(funcType(fun));
}

export function isClass(fun) {
  return funcType(fun) === 'class';
}
