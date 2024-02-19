import '../src/styles/styleGlobal.css';
import { FlipCardsProvider } from '../src/utils/Context/useFlipCards';

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <FlipCardsProvider>
        <Story />
      </FlipCardsProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
