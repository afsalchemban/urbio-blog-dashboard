import React from 'react';
import { render, screen } from '@testing-library/react';
import PostCard from '@/components/post/PostCard'; // Adjust if located elsewhere
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Post } from '@/types/Post';
import '@testing-library/jest-dom';
import { CssBaseline } from '@mui/material';

const renderWithTheme = (ui: React.ReactElement) => {
  const theme = createTheme();
  return render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>
  );
};

const mockPost: Post = {
  id: 1,
  title: 'Test Post Title',
  body: 'This is the body of the test post. It is meant to be long enough to test truncation and layout.',
  author: 'Test Author',
};

describe('PostCard', () => {
  it('renders post title, body, author, and link', () => {
    renderWithTheme(<PostCard post={mockPost} />);

    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(screen.getByText(/This is the body of the test post/i)).toBeInTheDocument();
    expect(screen.getByText(mockPost.author)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /read more/i })).toBeInTheDocument();
  });

  it('truncates the body text to 100 characters + ellipsis', () => {
    renderWithTheme(<PostCard post={mockPost} />);
    const bodyText = screen.getByText(/This is the body of the test post/i);
    expect(bodyText.textContent?.endsWith('...')).toBe(true);
  });

  it('contains the correct link to the post', () => {
    renderWithTheme(<PostCard post={mockPost} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/posts/${mockPost.id}`);
  });
});
