import React, { Component } from 'react';
import { rosterListColumns, rosterListTableData } from './RosterListTableData';
import DataTable from '../../../../../../Common/DataTable/DataTable';
import DataTableHeader from '../../../../../../Common/DataTableHeader/DataTableHeader';
import DataTableFooter from '../../../../../../Common/DataTableFooter/DataTableFooter';

class RosterListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataT: rosterListTableData.map(data => ({
        id: data.id,
        shift: data.shift,
        rosterStart: data.rosterStart,
        rosterEnd: data.rosterEnd,
        rosterDays: data.rosterDays,
        action: (
          <>
            <button type="button" className="btn" onClick={() => this.handleDelete(data.id)}>
              <i className="bi bi-trash text-danger"></i>
            </button>
          </>
        ),
      })),
    };
  }

  handleDelete = (id) => {
    this.setState(prevState => ({
      dataT: prevState.dataT.filter(data => data.id !== id),
    }));
  };

  render() {
    const { dataT } = this.state;

    return (
      <>
        <DataTableHeader />
        <DataTable columns={rosterListColumns} data={dataT} />
        <DataTableFooter dataT={dataT} />
      </>
    );
  }
}

export default RosterListTable;
