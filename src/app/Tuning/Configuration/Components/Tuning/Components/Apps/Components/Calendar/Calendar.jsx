import React from 'react'

import avatar1 from '../../../../../../../../assets/images/xs/avatar1.jpg';
import avatar2 from '../../../../../../../../assets/images/xs/avatar2.jpg';
import avatar3 from '../../../../../../../../assets/images/xs/avatar3.jpg';
import avatar7 from '../../../../../../../../assets/images/xs/avatar7.jpg';
import avatar8 from '../../../../../../../../assets/images/xs/avatar8.jpg';
import avatar9 from '../../../../../../../../assets/images/xs/avatar9.jpg';

import profileImage from '../../../../../../../../assets/images/profile_av.png';
import CalendarData from './Components/CalendarData';

const Calendar = () => {
  return (
        <div className="px-xl-5 px-lg-4 px-3 py-3 page-body">
            <div className="body-layout d-xl-flex align-items-stretch">
                <div className="body-sidebar card p-xl-4 p-3 border">
                    <div className="mb-xl-4 mb-0 d-flex justify-content-between align-items-center">
                        <h6 className="mb-0">My Calendar</h6>
                        <button className="d-inline-flex d-xl-none navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#body_layout_offcanvas" aria-controls="body_layout_offcanvas" aria-label="Toggle navigation">
                            <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 6l16 0"></path>
                                <path d="M4 12l16 0"></path>
                                <path d="M4 18l16 0"></path>
                            </svg>
                        </button>
                    </div>
                    <nav className="navbar navbar-expand-xl py-0">
                        <div className="offcanvas offcanvas-end p-xl-0 p-4" tabIndex="-1" id="body_layout_offcanvas">
                            <div className="d-flex align-items-center mb-3">
                                <img className="avatar lg rounded-circle border border-3" src={profileImage} alt="avatar"/>
                                <div className="ms-3">
                                    <h4 className="mb-0 text-gradient title-font">Michelle!</h4>
                                    <span className="text-muted small">michelle@gmail.com</span>
                                </div>
                            </div>
                            <ul className="list-unstyled d-flex align-items-start justify-content-between rounded border p-2">
                                <li className="px-2 py-1">
                                    <p className="text-muted mb-0">Meeting</p>
                                    <h5 className="mb-0">07</h5>
                                </li>
                                <li className="px-2 py-1">
                                    <p className="text-muted mb-0">Zoom call</p>
                                    <h5 className="mb-0">13</h5>
                                </li>
                                <li className="px-2 py-1">
                                    <p className="text-muted mb-0">Event's</p>
                                    <h5 className="mb-0">04</h5>
                                </li>
                            </ul>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex align-items-start px-0 pb-2">
                                    <span className="text-muted">Today Schedule</span>
                                </li>
                                <li className="list-group-item d-flex align-items-start px-0 py-3">
                                    <div className="avatar rounded-circle no-thumbnail mt-1"><i className="fa fa-bell"></i></div>
                                    <div className="ms-3">
                                        <span className="text-muted small">10:45 - 11:30 AM</span>
                                        <h6 className="mb-0">Team Meeting with Designer</h6>
                                        <div className="d-flex align-items-center mt-2">
                                            <a href="#" data-bs-toggle="tooltip" title="Avatar" data-bs-placement="top" aria-label="Avatar"><img className="avatar sm rounded-circle" src={avatar3} alt="avatar"/></a>
                                            <a href="#" data-bs-toggle="tooltip" title="Avatar" data-bs-placement="top" aria-label="Avatar"><img className="avatar sm rounded-circle" src={avatar1} alt="avatar"/></a>
                                            <a href="#" data-bs-toggle="tooltip" title="Avatar" data-bs-placement="top" aria-label="Avatar"><img className="avatar sm rounded-circle" src={avatar7} alt="avatar"/></a>
                                            <a href="#" data-bs-toggle="tooltip" title="Avatar" data-bs-placement="top" aria-label="Avatar"><img className="avatar sm rounded-circle" src={avatar9} alt="avatar"/></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex align-items-start px-0 py-3">
                                    <div className="avatar rounded-circle no-thumbnail mt-1"><i className="fa fa-phone"></i></div>
                                    <div className="ms-3">
                                        <span className="text-muted small">11:45 - 12:30 AM</span>
                                        <h6 className="mb-0">Clients Call Update</h6>
                                        <div className="d-flex align-items-center mt-2">
                                            <a href="#" data-bs-toggle="tooltip" title="Avatar" data-bs-placement="top" aria-label="Avatar"><img className="avatar sm rounded-circle" src={avatar2} alt="avatar"/></a>
                                            <a href="#" data-bs-toggle="tooltip" title="Avatar" data-bs-placement="top" aria-label="Avatar"><img className="avatar sm rounded-circle" src={avatar8} alt="avatar"/></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex align-items-start px-0 py-3">
                                    <div className="avatar rounded-circle no-thumbnail mt-1"><i className="fa fa-code"></i></div>
                                    <div className="ms-3">
                                        <span className="text-muted small">04:45 - 05:30 PM</span>
                                        <h6 className="mb-0">Weekly review</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="body-content bg-card border ms-lg-4 p-lg-4 p-1 rounded">
                    <div className="tab-pane fade show active" id="Calendar-month" role="tabpanel" tabIndex="0">
                        <CalendarData/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar