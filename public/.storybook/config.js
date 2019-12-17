import { configure } from '@storybook/angular';
import './styles.css';

// automatically import all files ending in *.stories.ts
configure(require.context('../src', true, /\.stories\.ts$/), module);
