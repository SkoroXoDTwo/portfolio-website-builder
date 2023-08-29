import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';
import { withRouter } from '../../utils/RouterDecorator';

const meta: Meta<typeof Header> = {
  component: Header,
  decorators: [withRouter],
  title: 'Components/Header',
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => <Header logoTitle="Testing" />,
};

export const LongTitle: Story = {
  render: () => <Header logoTitle="TestingTestingTestingTestingTesting" />,
};
