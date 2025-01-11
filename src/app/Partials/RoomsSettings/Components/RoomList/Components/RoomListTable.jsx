import React, { Component } from 'react';
import { roomListColumn, roomListTableData } from './RoomListTableData';
import DataTable from '../../../../../Common/DataTable/DataTable';
import DataTableHeader from '../../../../../Common/DataTableHeader/DataTableHeader';
import DataTableFooter from '../../../../../Common/DataTableFooter/DataTableFooter';

class RoomListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataT: roomListTableData.map(data => ({
        id: data.id,
        roomType: data.roomType,
        roomPrice: data.roomPrice,
        bedCharge: data.bedCharge,
        capacity: data.capacity,
        roomSize: data.roomSize,
        bedNo: data.bedNo,
        bedType: data.bedType,
        actions: (
          <>
            <button type="button" className="btn" data-bs-toggle="offcanvas" data-bs-target="#edit-room" aria-controls="edit-room">
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
        <DataTable columns={roomListColumn} data={dataT} />
        <DataTableFooter dataT={dataT} />
      </>
    );
  }
}

export default RoomListTable;
