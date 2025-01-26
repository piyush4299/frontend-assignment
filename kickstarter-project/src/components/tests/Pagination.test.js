import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../Pagination';

describe('Pagination Component unit tests', () => {
  const mockPaginate = jest.fn();

  it('renders the correct page numbers with ellipsis', () => {
    render(
      <Pagination
        recordsPerPage={5}
        totalRecords={100}
        paginate={mockPaginate}
        currentPage={10}
      />
    );

    const ellipsisElements = screen.getAllByText('...');
    expect(ellipsisElements).toHaveLength(2);

    // Check if the first page, ellipsis, current page range, and last page are displayed
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('9')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('11')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
  });

  it('disables the "Prev" button on the first page', () => {
    render(
      <Pagination
        recordsPerPage={5}
        totalRecords={50}
        paginate={mockPaginate}
        currentPage={1}
      />
    );

    const previousButton = screen.getByText('Prev');
    expect(previousButton).toBeDisabled();
  });

  it('disables the "Next" button on the last page', () => {
    render(
      <Pagination
        recordsPerPage={5}
        totalRecords={50}
        paginate={mockPaginate}
        currentPage={10}
      />
    );

    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeDisabled();
  });

  it('calls the paginate function when a page number is clicked', () => {
    render(
      <Pagination
        recordsPerPage={5}
        totalRecords={50}
        paginate={mockPaginate}
        currentPage={5}
      />
    );

    const pageButton = screen.getByText('6');
    fireEvent.click(pageButton);
    expect(mockPaginate).toHaveBeenCalledWith(6);
  });

  it('calls the paginate function when "Prev" or "Next" is clicked', () => {
    render(
      <Pagination
        recordsPerPage={5}
        totalRecords={50}
        paginate={mockPaginate}
        currentPage={5}
      />
    );

    const previousButton = screen.getByText('Prev');
    fireEvent.click(previousButton);
    expect(mockPaginate).toHaveBeenCalledWith(4);

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    expect(mockPaginate).toHaveBeenCalledWith(6);
  });
});