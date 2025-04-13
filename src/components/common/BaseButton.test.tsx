import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BaseButton from './BaseButton';

describe('BaseButton', () => {
  it('renders children correctly', () => {
    render(<BaseButton>Click Me</BaseButton>);
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<BaseButton onClick={handleClick}>Click Me</BaseButton>);

    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant prop correctly', () => {
    render(<BaseButton variant="contained">Contained</BaseButton>);
    const button = screen.getByText(/contained/i);
    expect(button).toHaveClass('MuiButton-contained');
  });
});
