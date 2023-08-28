import { FC,ReactNode } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

interface RouterDecoratorProps {
  children: ReactNode
}
export const RouterDecorator: FC<RouterDecoratorProps> = ({ children }) => (
  <MemoryRouter>
    <Routes>
      <Route path="/" element={children} />
    </Routes>
  </MemoryRouter>
);

export const withRouter = (storyFn: () => any) => <RouterDecorator>{storyFn()}</RouterDecorator>;
