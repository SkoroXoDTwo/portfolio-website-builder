import Header from "../Header";
import {render} from "@testing-library/react";

test("render Header", () => {
  const {getByText} = render(<Header  logoTitle={"test"}/>)
})
