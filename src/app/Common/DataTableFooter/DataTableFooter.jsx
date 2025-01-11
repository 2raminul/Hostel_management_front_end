import React from 'react'

const DataTableFooter = ( {dataT} ) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
        <div>
          Showing 1 to{' '} {dataT.length} of {dataT.length} entries
        </div>
        <div className="dataTables_paginate paging_simple_numbers" id="timetracker-table_paginate">
          <ul className="pagination">
            <li className="paginate_button page-item previous disabled" id="timetracker-table_previous">
              <a href="#" aria-controls="timetracker-table" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
            </li>
            <li className="paginate_button page-item active">
              <a href="#" aria-controls="timetracker-table" data-dt-idx="1" tabIndex="0" className="page-link text-white">1</a>
            </li>
            <li className="paginate_button page-item next disabled" id="timetracker-table_next">
              <a href="#" aria-controls="timetracker-table" data-dt-idx="2" tabIndex="0" className="page-link">Next</a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default DataTableFooter