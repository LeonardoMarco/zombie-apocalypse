import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Card from '../index';

const survivor = [
  {
    id: 0,
    fullName: 'Leonardo Marco',
    avatar: '/images/persona-one.svg',
    age: 24,
    description: 'One description',
    infected: false,
  }
]

const infected = [
  {
    id: 0,
    fullName: 'Leonardo Marco',
    avatar: '/images/persona-one.svg',
    age: 24,
    description: 'One description',
    infected: true,
  }
]

function testDetail(id: number) {
  return id
}

describe("Component Card with present personas", () => {
  test("must present a survivor", () => {
    render(<Card actionDetail={testDetail} dataPersonas={survivor} />);

    const personaStatus = screen.getByText("Survivor");

    expect(personaStatus).toBeInTheDocument();
  });

  test("must present a infected", () => {
    render(<Card actionDetail={testDetail} dataPersonas={infected} />);

    const personaStatus = screen.getByText("Infected");

    expect(personaStatus).toBeInTheDocument();
  });

  test("Infos persona", () => {
    render(<Card actionDetail={testDetail} dataPersonas={survivor} />);

    const personaName = screen.getByText('Leonardo Marco');
    const logo = screen.getByRole('img');
    const buttonIncrement = screen.getByRole("button");
    
    userEvent.click(buttonIncrement);
    expect(logo).toHaveAttribute('src', '/images/persona-one.svg');
    expect(personaName).toBeInTheDocument();
  });
});
