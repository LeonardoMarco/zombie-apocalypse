import { render, screen, fireEvent } from "@testing-library/react";

import SearchGroup from '../index';

const onChange = (value: string) => console.log(value)

const setup = () => {
  const utils = render(<SearchGroup onChangeInput={onChange} onChangeSelect={onChange} />)
  const input = utils.getByLabelText('Search')
  const select = utils.getByTestId('select')
  return {
    input,
    select,
    ...utils,
  }
}


describe("Component search Peronas", () => {
  test("Test input search", () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: 'Leonardo Marco'}})
    expect((input as HTMLInputElement).value).toBe('Leonardo Marco')
  });

  test("Test select search", () => {
    const {select} = setup()
    fireEvent.change(select, {target: {value: 'all'}})
    expect((select as HTMLInputElement).value).toBe('all')
  });
});
