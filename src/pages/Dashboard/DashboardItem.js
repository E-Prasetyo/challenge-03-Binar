/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import DataTable, { defaultThemes } from 'react-data-table-component';
import { Dashboard } from '../../assets/data/data';

const customStyles = {
  headRow: {
    style: {
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      borderTopColor: defaultThemes.default.divider.default,
      backgroundColor: 'rgba(187, 204, 221, 1)',
    },
  },
  headCells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: defaultThemes.default.divider.default,
      },
    },
  },
  cells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: defaultThemes.default.divider.default,
      },
    },
  },
};

const DashboardItem = () => {
  const columns = [
    {
      name: 'No',
      selector: (row, index) => index + 1,
      width: '60px',
    },
    {
      name: 'Username',
      selector: (row) => row.Username,
    },
    {
      name: 'Car',
      selector: (row) => row.Car,
      sortable: true,
    },
    {
      name: 'Star Rent',
      selector: (row) => row.starRent,
      sortable: true,
    },
    {
      name: 'Finish Rent',
      selector: (row) => row.finishRent,
      sortable: true,
    },
    {
      name: 'Price',
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
    },
  ];

  const paginationComponentOptions = {
    rowsPerPageText: 'Limit',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };
  return (
    <div>
      <p className="mt-3">
        <span className="bg-primary">&nbsp;</span>
        {' '}
        List Order
      </p>
      <DataTable
        columns={columns}
        data={Dashboard}
        customStyles={customStyles}
        pagination
        paginationComponentOptions={paginationComponentOptions}
      />
    </div>

  );
};

export default DashboardItem;
