import React from 'react'
import Link from 'next/link'

const HotelTabSidebar = ({ iconColor }) => {
  return (
    <div className="tab-pane fade active show" id="tab_hotels" role="tabpanel">
      <h6 className="fl-title title-font ps-2 small text-uppercase text-muted" style={{ "--dynamic-color": "var(--theme-color1)" }}>
        Universal
      </h6>
      <ul className={`list-unstyled mb-4 menu-list ${iconColor}`}>
        <li>
           <Link legacyBehavior href="/" passHref>
            <a aria-label="Hotel Dashboard">
              <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                <path d="M10 12h4v4h-4z"></path>
              </svg>
              <span className="mx-3">Dashboard</span>
            </a>
          </Link>
        </li>
        <li>
           <Link legacyBehavior href="/hotels" passHref>
            <a aria-label="Hotel Front">
              <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l18 0" />
                <path d="M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11" />
                <path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5" />
              </svg>
              <span className="mx-3">Hotels</span>
            </a>
          </Link>
        </li>
        <li>
           <Link legacyBehavior href="/transaction" passHref>
            <a aria-label="Transaction list">
              <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
              </svg>
              <span className="mx-3">Transaction</span>
            </a>
          </Link>
        </li>
        <li>
          <a href="#RoomMenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle" aria-label="Users">
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-stroke" width="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 12v.01" />
              <path d="M3 21h18" />
              <path d="M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16" />
            </svg>
            <span className="mx-3">Room Book</span>
          </a>
          <ul className="collapse list-unstyled" id="RoomMenu">
            <li>
               <Link legacyBehavior href="/room-booking-list" passHref>
                <a aria-label="Booking List">Booking List</a>
              </Link>
            </li>
            <li>
               <Link legacyBehavior href="/checkin-out" passHref>
                <a aria-label="Room Checkout">Room Checkout</a>
              </Link>
            </li>
            <li>
               <Link legacyBehavior href="/room-status" passHref>
                <a aria-label="Room Status">Room Status</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#RoomFacilitesMenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle" aria-label="Users">
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-stroke" width="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M7 3m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
              <path d="M12 3v2" />
              <path d="M10 15v.01" />
              <path d="M10 18v.01" />
              <path d="M14 18v.01" />
              <path d="M14 15v.01" />
            </svg>
            <span className="mx-3">Room Facilites</span>
          </a>
          <ul className="collapse list-unstyled" id="RoomFacilitesMenu">
            <li>
               <Link legacyBehavior href="/room-facilites-list" passHref>
                <a aria-label="Facilites List">Facilites List</a>
              </Link>
            </li>
            <li>
               <Link legacyBehavior href="/facilites-details" passHref>
                <a aria-label="Facilites Details">Facilites Details</a>
              </Link>
            </li>
            <li>
               <Link legacyBehavior href="/room-size" passHref>
                <a aria-label="Room Size">Room Size</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#HousekeepingMenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle" aria-label="Users">
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-stroke" width="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8.5 10a1.5 1.5 0 0 1 -1.5 -1.5a5.5 5.5 0 0 1 11 0v10.5a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2c0 -1.38 .71 -2.61 1.76 -3.29" />
              <path d="M6 14h8" />
              <path d="M12 6v.01" />
            </svg>
            <span className="mx-3">Housekeeping</span>
          </a>
          <ul className="collapse list-unstyled" id="HousekeepingMenu">
            <li>
               <Link legacyBehavior href="/housekeeping-list" passHref>
                <a aria-label="Housekeeping List">Housekeeping List</a>
              </Link>
            </li>
            <li>
               <Link legacyBehavior href="/housekeeping-assign" passHref>
                <a aria-label="Housekeeping Assign">Housekeeping Assign</a>
              </Link>
            </li>
            <li>
               <Link legacyBehavior href="/housekeeping-status" passHref>
                <a aria-label="Housekeeping Status">Housekeeping Status</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default HotelTabSidebar;
