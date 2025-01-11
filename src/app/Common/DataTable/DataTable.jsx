import React from 'react';
import { useTable, useFilters, useGlobalFilter, usePagination, useSortBy } from 'react-table';
// import { DefaultColumnFilter } from './DefaultColumnFilter'; // Custom filter component, you can define your own

const DataTable = ({ columns, data }) => {
   const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 }, // Initial pagination settings
    },
    useFilters, // Enables filtering
    useGlobalFilter, // Enables global search
    useSortBy, // Enables sorting
    usePagination // Enables pagination
  );

  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    } = tableInstance;

   return (
    <>
      <div className="table-responsive">
        <table {...getTableProps()} className="table align-middle table-hover dataTable table-body" style={{ width: '100%' }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className="small text-muted text-uppercase">
                {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {' '}
                    <span style={{ opacity: column.isSorted && column.isSortedDesc ? 0.5 : 1 }}>&#x2191;</span>
                    <span style={{ opacity: column.isSorted && !column.isSortedDesc ? 0.5 : 1 }}>&#x2193;</span>
                  </span>
                </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="row-selectable">
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataTable;