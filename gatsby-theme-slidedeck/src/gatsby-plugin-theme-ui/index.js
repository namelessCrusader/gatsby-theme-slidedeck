import { funk } from '@theme-ui/presets';
import prism from './prism';
import colors from './colors';

export default {
  ...funk,
  styles: {
    ...funk.styles,
    pre: {
      ...funk.styles.pre,
      ...prism,
    },
    button: {
      ...funk.styles.button,
      backgroundColor: 'green',
    },
  },
  sizes: {
    container: 920,
    slideHeight: 520,
  },
  colors: {
    ...funk.colors,
    ...colors,
  },
};
