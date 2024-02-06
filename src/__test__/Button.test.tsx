import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/common/Button';

describe('Button Component', () => {
  test('renders button with label', () => {
    const { getByText } = render(<Button label="Login"/>);
    const buttonElement = getByText('Login');
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies variant classes based on variant prop', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button label="Login" variant="secondary" size="large" onClick={handleClick}/>);
    const buttonElement = getByText('Login');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(buttonElement).toHaveClass('bg-gray-300');
    expect(buttonElement).toHaveClass('text-gray-700');
    expect(buttonElement).toHaveClass('px-4');
    expect(buttonElement).toHaveClass('py-2');
    expect(buttonElement).toHaveClass('text-lg');
  });
});
