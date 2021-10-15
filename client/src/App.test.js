import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EditProduct } from "./components/EditProduct.js";
import { AddProduct } from "./components/AddProduct.js";

describe("AddProduct attribute Test", () => {

  test('Renders Title  filed', () => {
    render(<AddProduct />);
    const title = screen.getByTestId("adTitle");
    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute("type", "text");
  });


  test('Renders Price filed', () => {
    render(<AddProduct />);
    const price = screen.getByTestId("adPrice");
    expect(price).toBeInTheDocument();
    expect(price).toHaveAttribute("type", "text");
  });

});


describe("EditProduct attribute Test", () => {

  test('Renders Title  filed', () => {
    render(<EditProduct />);
    const title = screen.getByTestId("adTitle");
    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute("type", "text");
  });


  test('Renders Price filed', () => {
    render(<EditProduct />);
    const price = screen.getByTestId("adPrice");
    expect(price).toBeInTheDocument();
    expect(price).toHaveAttribute("type", "text");
  });

});




