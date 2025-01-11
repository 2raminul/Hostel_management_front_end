import React from 'react'
import { bookingColumns, bookingTableData } from './BookingTableData';

import DataTable from '../../../../../Common/DataTable/DataTable';
import DataTableHeader from '../../../../../Common/DataTableHeader/DataTableHeader';
import DataTableFooter from '../../../../../Common/DataTableFooter/DataTableFooter';

const BookingTable = () => {
    const dataT = bookingTableData.map((data) => {
        return {
            name: data.name,
            roomType: data.roomType,
            checkIn: data.checkIn,
            checkOut: data.checkOut,
            paidAmount: data.paidAmount,
            dueAmount: data.dueAmount,
            paymentStatus: (<><span className={`badge ${data.statusColor}`}>{data.status}</span></>),
        };
    });

  return (
    <>
      <DataTableHeader />
      <DataTable columns={bookingColumns} data={dataT} />
      <DataTableFooter dataT={dataT}/>
    </>
  )
}

export default BookingTable