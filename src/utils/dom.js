/**
 * DOM functionality related modules
 * @module DOM
 * @category Utils
 */

/**
 * Selecting DOM element(s) by query
 * @param {string} domQuery
 * @return {NodeListOf<Element>}
 */
export function $$(domQuery) {
  return document.querySelectorAll(domQuery);
}

/**
 * Selecting DOM element by query
 * Note: It's only for selecting exactly one element
 * @param {string} domQuery
 * @returns {undefined | Element}
 */
export function $(domQuery) {
  const result = $$(domQuery);
  switch (result.length) {
    case 0:
      return undefined;
    case 1:
      return result[0];
    default:
      throw new Error(
        'InvalidArgumentException: [domQuery] must result only one element. more then one Element expected.'
      );
  }
}

/**
 * Create link stylesheet tag
 * @param {string} href
 * @return {Element}
 * @example
 * <link type="stylesheet" href="cdn/link.css">
 */
export function createStyleTag(href) {
  const elementTag = document.createElement('link');
  elementTag.setAttribute('rel', 'stylesheet');
  elementTag.setAttribute('href', href);

  return elementTag;
}

/**
 * Remove an html element from dom
 * @param {Element} element
 */
export function removeElement(element) {
  element.parentNode.removeChild(element);
}

/**
 * Move an html element to specific place in the dom
 * @param {Element} element
 * @param {Element} targetTag
 * @param {boolean?} before
 * @return {void}
 */
export function teleportElement(element, targetTag, before = null) {
  switch (before) {
    case null:
      targetTag.appendChild(element);
      break;
    case true:
      targetTag.parentNode.insertBefore(element, targetTag);
      break;
    case false:
      targetTag.parentNode.insertBefore(element, targetTag.nextSibling);
      break;
    default:
      break;
  }
}
