import { render, screen } from '@testing-library/react';
import Layout from './Layout'; 

describe('Layout', () => {
  it('renders Navbar, Footer, and children correctly', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    expect(screen.getByText('Blogger')).toBeInTheDocument();

    expect(screen.getByText(/©/)).toBeInTheDocument();

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders children inside the Container component', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    // Check if the children are rendered
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
