import { RouterDecorator } from './RouterDecorator';

export const withRouter = (storyFn: () => any) => <RouterDecorator>{storyFn()}</RouterDecorator>;
