import { render, screen } from '@testing-library/react';
import Navbar from './Navbar'; 

describe('Navbar', () => {
 

  it('has correct styling for AppBar', () => {
    render(<Navbar />);

    const appBar = screen.getByRole('banner');
    expect(appBar).toHaveStyle('box-shadow: none');
    expect(appBar).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
  });

});
