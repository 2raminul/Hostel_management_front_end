import React from 'react'
import { Link } from 'react-router-dom'
import BookingTable from './BookingTable'

const BookingList = () => {
  return (
    <div className="px-xl-5 px-lg-4 px-3 py-3 page-body">
        <div className="row g-3">
            <div className="col-sm-12">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <h3 className="fw-bold mb-0">Room Booking List</h3>
                    <div className="col-auto d-flex w-sm-100">
                        <Link to="/room-booking" className="btn btn-dark btn-set-task w-sm-100">Room Book</Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <BookingTable/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingList