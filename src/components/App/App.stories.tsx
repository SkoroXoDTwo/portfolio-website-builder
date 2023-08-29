import type { Meta, StoryObj } from '@storybook/react';

import App from './App';
import { withRouter } from '../../utils/decorators';

const meta: Meta<typeof App> = {
  component: App,
  decorators: [withRouter],
  title: 'Components/App',
};

export default meta;
type Story = StoryObj<typeof App>;

export const Default: Story = {
  render: () => <App />,
};
