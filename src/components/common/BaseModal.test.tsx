import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BaseModal from './BaseModal';

describe('BaseModal', () => {
  it('renders when open is true', () => {
    render(
      <BaseModal open={true} onClose={() => {}} title="Test Modal">
        <p>Modal Content</p>
      </BaseModal>
    );

    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('does not render when open is false', () => {
    const { queryByText } = render(
      <BaseModal open={false} onClose={() => {}} title="Hidden Modal">
        <p>Hidden Content</p>
      </BaseModal>
    );

    expect(queryByText('Hidden Modal')).not.toBeInTheDocument();
    expect(queryByText('Hidden Content')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();

    render(
      <BaseModal open={true} onClose={handleClose} title="Closable Modal">
        <p>Modal with close</p>
      </BaseModal>
    );

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
