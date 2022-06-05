/**
 * A Module for loading `<link type='stylesheet'>` and `<script></script>`
 * @module useExternalModuleLoader
 * @category Composable(use)
 */

import { onMounted, onUnmounted, reactive } from 'vue';
import { loadScript, unloadScript } from 'vue-plugin-load-script';
import { $, createStyleTag, removeElement, teleportElement } from '@/utils/dom';

/**
 *
 * @param {string} src
 * @return { object }
 */
export function useStyleLoader(src) {
  const result = reactive({ loaded: false });

  onMounted(() => {
    const elementTag = createStyleTag(src);
    elementTag.setAttribute('data-loaded', 'false');

    teleportElement(elementTag, $('head'));

    elementTag.addEventListener('load', () => {
      elementTag.setAttribute('data-loaded', 'true');
      result.loaded = true;
    });
  });

  onUnmounted(() => {
    removeElement($(`link[href="${src}"]`));
  });

  return result;
}

/**
 *
 * @param {string} src
 * @return {void}
 */
export function useScriptLoader(src) {
  onMounted(() => {
    loadScript(src);
  });

  onUnmounted(() => {
    unloadScript(src);
  });
}
