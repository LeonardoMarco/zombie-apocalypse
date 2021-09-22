import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ModalDetail from '../index';

const survivor = {
    id: 0,
    fullName: 'Leonardo Marco',
    avatar: '/images/persona-one.svg',
    age: 24,
    description: 'One description',
    infected: false,
  }

function changePersona(id: number) {
  return id
}

function closeModal() {
  return true
}

describe("Component ModalDetail", () => {
  test("Check infos persona", () => {
    render(<ModalDetail open={true} closeModal={closeModal} persona={survivor} changePersona={changePersona} />);

    const personaFullName = screen.getByText("Leonardo Marco");
    const personaAge = screen.getByText("24 anos");
    const personaDescription = screen.getByText("One description");
    const logo = screen.getByRole('img');

    expect(personaFullName).toBeInTheDocument();
    expect(personaAge).toBeInTheDocument();
    expect(personaDescription).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/persona-one.svg');
  });

  test("change persona", () => {
    render(<ModalDetail open={true} closeModal={closeModal} persona={survivor} changePersona={changePersona} />);

    const buttonIncrement = screen.getByRole("button");

    userEvent.click(buttonIncrement);
  });

  test("close modal test", () => {
    render(<ModalDetail open={true} closeModal={closeModal} persona={survivor} changePersona={changePersona} />);

    const buttonIncrement = screen.getByTestId('close')

    userEvent.click(buttonIncrement);
  });
});
