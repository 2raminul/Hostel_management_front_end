import React from 'react'

import { roomColumns, roomData } from './RoomStatusData';

import DataTable from '../../../../../../Common/DataTable/DataTable';
import DataTableHeader from '../../../../../../Common/DataTableHeader/DataTableHeader';
import DataTableFooter from '../../../../../../Common/DataTableFooter/DataTableFooter';

const RoomStatusTable = () => {
    const dataT = roomData.map((data) => {
        return {
            roomNumber: data.roomNumber,
            roomType: data.roomType,
            floor: data.floor,
            checkOut: data.checkOut,
            status: (<><span className={`badge ${data.statusColor}`}>{data.status}</span></>),
        };
    });

  return (
    <>
      <DataTableHeader />
      <DataTable columns={roomColumns} data={dataT} />
      <DataTableFooter dataT={dataT}/>
    </>
  )
}

export default RoomStatusTable