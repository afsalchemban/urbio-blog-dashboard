import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ButtonWithLoading from './ButtonWithLoading';

describe('ButtonWithLoading', () => {
  it('renders button with text when not loading', () => {
    render(<ButtonWithLoading isLoading={false} text="Submit" />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('renders loader and disables button when loading', () => {
    render(<ButtonWithLoading isLoading={true} text="Submit" />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(screen.queryByText('Submit')).not.toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toBeInTheDocument(); 
  });
});
