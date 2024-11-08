import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FrontPage from '../../component/FrontPage';

test("checks if frontend page is documented", ()=>{
    render(<FrontPage/>)
    const mainContainer = screen.getByTestId("main-container");
    expect(mainContainer).toBeInTheDocument
});

test('renders the main container with correct classes', () => {
  render(<FrontPage/>);
  const mainContainer =  screen.getByTestId('main-container');
  expect(mainContainer).toHaveClass('mx-auto my-[3rem]', 'lg:my-[5rem]', 'w-[70%]', 'h-[40rem]', 'rounded-[2rem]', 'bg-white');
});

test("check if main container contains text Password Gen 🔑", () => {
    render(<FrontPage/>);
    const mainContainer = screen.getByTestId("main-container");
    expect(mainContainer).toHaveTextContent("Password Gen 🔑");
});
