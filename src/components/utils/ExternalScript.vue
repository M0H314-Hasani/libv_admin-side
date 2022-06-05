<script>
import { useScriptLoader } from '@/composable/useExternalModuleLoader';

/**
 * @category components
 * @subcategory Base
 * @vue-prop {String} src
 */
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    useScriptLoader(props.src);

    return () => {};
  },
};
</script>
