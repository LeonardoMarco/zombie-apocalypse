import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Card from '../index';


describe("Counter Component", () => {
  test("deve iniciar o titulo com o valor 0", () => {
    render(<Card />);

    const counterTitle = screen.getByText("0");

    expect(counterTitle).toBeInTheDocument();
  });
});
