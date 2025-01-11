import React from 'react'
import { inboxData } from './Components/InboxData'

import avatar1 from '../../../../../../../../assets/images/xs/avatar1.jpg'
import ComposeEmail from './Components/ComposeEmail'

const Inbox = () => {
  return (
        <div className="px-xl-5 px-lg-4 px-3 py-3 page-body">
            <div className="sub-layout d-flex flex-row align-items-stretch">
                {/* <!--[ Start:: user list ]--> */}
                <div className="order-1 overflow-hidden border bg-card rounded-3 sticky-lg-top">
                    <ul className="nav nav-tabs tab-card border-0 li_animate p-3 bg-dark z-2 position-relative" role="tablist" data-bs-theme="dark">
                        <li className="nav-item dropdown">
                            <a className="nav-link px-0 me-xl-4 me-3 dropdown-toggle fs-6" href="#" role="button" data-bs-toggle="dropdown">Inbox</a>
                            <ul className="li_animate dropdown-menu shadow rounded-4 p-2">
                                <li><a className="dropdown-item rounded-pill" href="#">Primary</a></li>
                                <li><a className="dropdown-item rounded-pill" href="#">Updates</a></li>
                                <li><a className="dropdown-item rounded-pill" href="#">Promotions</a></li>
                                <li><a className="dropdown-item rounded-pill" href="#">Social</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item rounded-pill" href="#">Create Label</a></li>
                            </ul>
                        </li>
                        <li className="nav-item"><a className="nav-link px-0 me-xl-4 me-3 fs-6" data-bs-toggle="tab" href="#inbox-trash">Trash</a></li>
                        <li className="nav-item ms-auto">
                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#Compose">Compose</button>
                        </li>
                    </ul>
                    <ul className="list-group list-group-flush user-list mb-0 custom_scroll z-1" role="tablist">
                        {inboxData.map((data, index) => {
                            return(
                            <li className="list-group-item py-3 d-flex" key={index}>
                                {data.avatar ? (
                                    <img className="avatar rounded-circle" src={data.avatar} alt=""/>
                                ) : (
                                    <span className={`avatar rounded-circle no-thumbnail ${data.themeColor}`}>{data.avatarText}</span>
                                )}
                                <div className="flex-grow-1 ms-3">
                                    <a href="#" className="d-flex justify-content-between">
                                        <small>{data.name}<i className={`fa fa-circle ms-1 status ${data.activeColor}`}></i></small>
                                        <small className="time">{data.time}</small>
                                    </a>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="text-truncate user-msg">{data.subject}</span>
                                        <div className="d-flex align-items-center">
                                            <i className="fa fa-star gray-3 me-2 text-primary"></i>
                                            <input className="form-check-input m-0" type="checkbox" defaultValue="option1"/>
                                        </div>
                                    </div>
                                    <span className="small text-muted">{data.text}</span>
                                </div>
                            </li>
                            )
                        })}
                    </ul>
                </div>
                {/* <!--[ Start:: email details ]--> */}
                <div className="order-2 flex-grow-1 ms-lg-4 border bg-card rounded">
                    <div className="px-xl-4 action-header">
                        <ul className="navbar-nav flex-row me-auto">
                            <li className="nav-item"><a className="btn btn-sm gray-6" href="#"><i className="fa fa-archive"></i></a></li>
                            <li className="nav-item"><a className="btn btn-sm gray-6" href="#"><i className="fa fa-trash"></i></a></li>
                            <li className="nav-item"><a className="btn btn-sm gray-6" href="#"><i className="fa fa-exclamation-circle"></i></a></li>
                            <li className="nav-item"><a className="btn btn-sm gray-6" href="#"><i className="fa fa-tasks"></i><span className="ms-2 d-none d-lg-inline-block">Add to tasks</span></a></li>
                            <li className="nav-item"><a className="btn btn-sm gray-6" href="#"><i className="fa fa-arrow-circle-right"></i><span className="ms-2 d-none d-lg-inline-block">Move to</span></a></li>
                        </ul>
                        <button type="button" className="btn btn-sm btn-outline-danger close-toggle"><i className="fe fe-settings mr-2"></i>Close</button>
                    </div>
                    <div className="px-xl-4 bg-body p-3">
                        <div className="row align-items-center">
                            <div className="col-auto pe-0">
                                <a href="#"><img src={avatar1} alt="..." className="avatar rounded-circle"/></a>
                            </div>
                            <div className="col ml-n2">
                                <div className="fw-bold">Andrew Patrick</div>
                                <div className="dropdown"> To: <a className="btn btn-link dropdown-toggle p-0" href="#" role="button" data-bs-toggle="dropdown">Me</a>
                                    <div className="dropdown-menu p-3 border-0 shadow w240 rounded-4">
                                        <div className="mb-2">
                                            <div className="mb-0">from:</div>
                                            <small className="text-muted">Info-tQ <a href="#">info@example.com</a></small>
                                        </div>
                                        <div className="mb-2">
                                            <div className="mb-0">to:</div>
                                            <small className="text-muted">Stephen McLean <a href="#">Chris.Fox@example.com</a></small>
                                        </div>
                                        <div className="mb-2">
                                            <div className="mb-0">cc:</div>
                                            <small className="text-muted"><a href="#">Joge.Lucky@example.com</a></small>
                                        </div>
                                        <div className="mb-2">
                                            <div className="mb-0">date:</div>
                                            <small className="text-muted">Aug 2, 2022, 11:27 AM</small>
                                        </div>
                                        <div className="mb-2">
                                            <div className="mb-0">subject:</div>
                                            <small className="text-muted">#1706254810 | Payment Request</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto d-none d-xl-inline-block"><span>Jul 29, 2019, 4:37 PM</span></div>
                            <div className="col-auto">
                                <a href="#" className="btn btn-sm btn-link d-none d-md-inline-block"><i className="fa fa-mail-reply"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="px-xl-4 action-body">
                        <p>Hello <strong>Frank Baker</strong>,</p><br/>
                        <h6>I am project outsourcer if need any type of project (website / apps any IT Project ) please read.</h6>
                        <p><strong>I will provide 2 Type of service.</strong></p>
                        <ul>
                            <li>standard dummy text ever when an unknown printer</li>
                            <li>Lorem Ipsum has been the industry's standard dummy</li>
                            <li>Ipsum has been the industry's standard dummy</li>
                            <li>Lorem Ipsum has been the standard dummy</li>
                            <li>Lorem has been the industry's standard dummy</li>
                        </ul>
                        <p><strong>I will provide 2 Type of service.</strong></p>
                        <ul>
                            <li>standard dummy text ever since the 1500s, when an unknown printer</li>
                            <li>Lorem Ipsum has been the industry's standard dummy</li>
                        </ul>
                        <div className="file_folder d-flex flex-wrap py-3 my-3">
                            <a className="py-2 px-3 m-1 rounded text-decoration-none bg-card" href="#">
                                <div className="avatar rounded-circle no-thumbnail bg-light">
                                    <i className="fa fa-bar-chart text-success fa-lg"></i>
                                </div>
                                <div className="ms-3">
                                    <p className="mb-0">Report2017.xls</p>
                                    <small className="text-muted">Size: 68KB</small>
                                </div>
                            </a>
                            <a className="py-2 px-3 m-1 rounded text-decoration-none bg-card" href="#">
                                <div className="avatar rounded-circle no-thumbnail bg-light">
                                    <i className="fa fa-file-text-o text-info fa-lg"></i>
                                </div>
                                <div className="ms-3">
                                    <p className="mb-0">Report2017.doc</p>
                                    <small className="text-muted">Size: 68KB</small>
                                </div>
                            </a>
                        </div>
                        <p>Thank you,<br/><strong>Wendy Abbott</strong></p>
                    </div>
                    <div className="px-xl-4 action-footer">
                        <a className="btn btn-outline-primary me-1" href="#">Reply</a>
                        <a className="btn btn-outline-secondary" href="#">Forward</a>
                    </div>
                </div>
            </div>
            <ComposeEmail/>
        </div>
    )
}

export default Inbox