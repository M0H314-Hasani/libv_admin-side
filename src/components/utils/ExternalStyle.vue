<script>
import { useStyleLoader } from '@/composable/useExternalModuleLoader';
import { watch } from 'vue';

/**
 * @category components
 * @subcategory Base
 * @vue-prop {String} src
 * @vue-event {void} onLoaded
 */
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  emits: ['onLoaded'],
  setup(props, { emit }) {
    const styleLoader = useStyleLoader(props.src);
    watch(
      () => styleLoader.loaded,
      (newValue) => {
        if (newValue) {
          emit('onLoaded');
        }
      }
    );

    return () => {};
  },
};
</script>
