import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders a CircularProgress spinner', () => {
    render(<LoadingSpinner />);
    
    const spinner = screen.getByRole('progressbar'); // MUI CircularProgress uses role="progressbar"
    expect(spinner).toBeInTheDocument();
  });
});
