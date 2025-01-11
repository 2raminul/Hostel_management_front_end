import React, { Component } from 'react';
import { complementaryListColumn, complementaryListTableData } from './ComplementaryListTableData';
import DataTable from '../../../../../Common/DataTable/DataTable';
import DataTableHeader from '../../../../../Common/DataTableHeader/DataTableHeader';
import DataTableFooter from '../../../../../Common/DataTableFooter/DataTableFooter';

class ComplementaryListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataT: complementaryListTableData.map(data => ({
        id: data.id,
        roomName: data.roomName,
        complementary: data.complementary,
        complementaryRate: data.complementaryRate,
        actions: (
          <>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#edit-complementary">
              <i className="bi bi-pencil-square"></i>
            </button>
            <button type="button" className="btn deleterow" onClick={() => this.handleDelete(data.id)}>
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
        <DataTable columns={complementaryListColumn} data={dataT} />
        <DataTableFooter dataT={dataT} />
      </>
    );
  }
}

export default ComplementaryListTable;
