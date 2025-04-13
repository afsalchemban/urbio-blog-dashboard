import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PostForm from './PostForm';
import { describe, it, expect, vi } from 'vitest';

describe('PostForm', () => {
  it('renders form fields correctly', () => {
    render(<PostForm isLoading={false} />);

    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/author/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/body/i)).toBeInTheDocument();
    expect(screen.getByText(/submit post/i)).toBeInTheDocument();
  });

  it('shows validation errors when fields are empty', async () => {
    render(<PostForm isLoading={false} />);

    fireEvent.click(screen.getByText(/submit post/i));

    await waitFor(() => {
      expect(screen.getByText(/title is required/i)).toBeInTheDocument();
      expect(screen.getByText(/author is required/i)).toBeInTheDocument();
      expect(screen.getByText(/body is required/i)).toBeInTheDocument();
    });
  });

  it('calls onSubmit with valid data', async () => {
    const handleSubmit = vi.fn();
    render(<PostForm isLoading={false} onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: 'Test Title' },
    });
    fireEvent.change(screen.getByLabelText(/author/i), {
      target: { value: 'Jane Doe' },
    });
    fireEvent.change(screen.getByLabelText(/body/i), {
      target: { value: 'This is a test body of the post.' },
    });

    fireEvent.click(screen.getByText(/submit post/i));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        title: 'Test Title',
        author: 'Jane Doe',
        body: 'This is a test body of the post.',
      });
    });
  });
});
