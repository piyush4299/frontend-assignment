import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../Table';

describe('Table Component Unit Tests', () => {
  const mockData = [
    { "percentage.funded": 186, "amt.pledged": 15283 },
    { "percentage.funded": 120, "amt.pledged": 10000 },
  ];

  it('renders the correct number of rows', () => {
    render(<Table data={mockData} currentPage={1} />);
    const rows = screen.getAllByRole('row');
    // 1 additional row is for header
    expect(rows.length).toBe(3);
  });

  it('displays the correct data', () => {
    render(<Table data={mockData} currentPage={1} />);
    expect(screen.getByText('186')).toBeInTheDocument();
    expect(screen.getByText('15283')).toBeInTheDocument();
    expect(screen.getByText('120')).toBeInTheDocument();
    expect(screen.getByText('10000')).toBeInTheDocument();
  });

  it('displays the correct serial numbers on changed page', () => {
    render(<Table data={mockData} currentPage={2} />);
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
  });
});