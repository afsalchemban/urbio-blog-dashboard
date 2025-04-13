import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the copyright message', () => {
    render(<Footer />);
    
    const copyrightMessage = screen.getByText(/©/);
    expect(copyrightMessage).toBeInTheDocument();
    expect(copyrightMessage).toHaveTextContent(`© ${new Date().getFullYear()} Dashboard. All rights reserved.`);
  });

  it('has the correct background color', () => {
    render(<Footer />);
    
    const footer = screen.getByRole('contentinfo'); 
    expect(footer).toHaveStyle('background-color: rgba(0, 0, 0, 0)'); 
  });
});
