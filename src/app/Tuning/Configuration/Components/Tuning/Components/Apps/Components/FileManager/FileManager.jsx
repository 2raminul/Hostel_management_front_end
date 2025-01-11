import React from 'react'

import FileManagerTable from './Components/FileManagerTable'
import Folder from './Components/Folder'
import NoData from './Components/NoData'

import profileImage from '../../../../../../../../assets/images/profile_av.png'

const FileManager = () => {
  return (
    <div className="px-xl-5 px-lg-4 px-3 py-3 page-body">
        <div className="card border border-primary bg-transparent">
            <div className="card-header pb-0 z-2">
                <h6 className="card-title mb-0">File manager</h6>
                <div className="w-100 mt-4">
                    <ul className="row g-lg-4 g-2 list-unstyled li_animate mb-4 mb-lg-5">
                        <li className="col-xl-4 col-lg-5 col-md-5 col-12">
                            <div className="d-flex align-items-center">
                                <img className="avatar lg rounded-circle border border-3" src={profileImage} alt="avatar"/>
                                <div className="ms-3">
                                    <h4 className="mb-0 text-gradient title-font">Michelle!</h4>
                                    <span className="text-muted small">michelle.bvite@gmail.com</span>
                                </div>
                            </div>
                        </li>
                        <li className="col-xl-8 col-lg-7 col-md-7 col-12">
                            <ul className="list-unstyled d-none d-lg-flex align-items-start justify-content-md-end p-0 mb-0 ps-5 ps-md-0 ms-4 ms-md-0">
                                <li className="px-lg-4 px-3 ps-0">
                                    <h6>Google drive</h6>
                                    <small className="text-muted">15 GB (Basic Plan)</small>
                                    <div className="progress mt-1" style={{height: "2px"}}>
                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                                <li className="px-lg-4 px-3 border-start">
                                    <h6>Dropbox</h6>
                                    <small className="text-muted">2 GB (Free Plan)</small>
                                    <div className="progress mt-1" style={{height: "2px"}}>
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                                <li className="ps-lg-4 ps-3 border-start">
                                    <h6>FTP Drive</h6>
                                    <small className="text-muted">30 GB (Regular plan)</small>
                                    <div className="progress mt-1" style={{height: "2px"}}>
                                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav nav-tabs tab-card border-0 li_animate px-1 mb-0" role="tablist">
                        <li className="nav-item btn-group me-xl-4 me-3 fs-6">
                            <a className="nav-link active px-0" data-bs-toggle="tab" href="#drive-my"><span>MY</span> Drive</a>
                            <div className="dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"><span className="visually-hidden">Toggle Dropdown</span></a>
                                <ul className="li_animate dropdown-menu shadow rounded-4 p-2">
                                    <li><a className="dropdown-item rounded-pill" href="#">Project's</a></li>
                                    <li><a className="dropdown-item rounded-pill" href="#">Documentation</a></li>
                                    <li><a className="dropdown-item rounded-pill" href="#">Bank Statment</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item rounded-pill" href="#">Gallery</a></li>
                                    <li><a className="dropdown-item rounded-pill" href="#">KYC</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item"><a className="nav-link px-0 me-xl-4 me-3 fs-6" data-bs-toggle="tab" href="#drive-starred"><i className="fa fa-star"></i><span className="d-none d-md-inline-flex ps-1">Starred</span></a></li>
                        <li className="nav-item"><a className="nav-link px-0 me-xl-4 me-3 fs-6" data-bs-toggle="tab" href="#drive-withme"><i className="fa fa-share-alt"></i> <span className="d-none d-md-inline-flex ps-1">Shared with me</span></a></li>
                        <li className="nav-item"><a className="nav-link px-0 me-xl-4 me-3 fs-6" data-bs-toggle="tab" href="#drive-trash"><i className="fa fa-trash"></i><span className="d-none d-sm-inline-flex ps-1">Trash</span></a></li>
                        <li className="nav-item dropdown ms-auto">
                            <a className="btn btn-primary fs-6" href="#" role="button" data-bs-toggle="dropdown"><i className="fa fa-plus-circle me-1"></i>Create</a>
                            <ul className="li_animate dropdown-menu dropdown-menu-end shadow rounded-4 p-2">
                                <li><a className="dropdown-item rounded-pill" href="#">New folder</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item rounded-pill" href="#">File upload</a></li>
                                <li><a className="dropdown-item rounded-pill" href="#">Folder upload</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item rounded-pill" href="#">Create Invoice</a></li>
                                <li><a className="dropdown-item rounded-pill" href="#">Create Project</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card-body z-1">
                <div className="tab-content py-3" id="myTabContent">
                    <div className="tab-pane fade show active" id="drive-my" role="tabpanel" tabIndex="0">
                        <ul className="row g-3 list-unstyled li_animate">
                            <li className="col-12">
                                <h5 className="mb-0">My Folder</h5>
                                <p className="text-muted small">Last Update your drive: 11 Jan 2023</p>
                                <Folder/>
                            </li>
                            <li className="col-12 mt-5">
                                <h5 className="mb-1">Recently Accessed Files</h5>
                                <FileManagerTable/>
                            </li>
                        </ul>
                        {/* <!--[ ul.row end ]--> */}
                    </div>
                    <div className="tab-pane fade" id="drive-starred" role="tabpanel" tabIndex="0">
                        <NoData/>
                    </div>
                    <div className="tab-pane fade" id="drive-withme" role="tabpanel" tabIndex="0">
                        <NoData/>
                    </div>
                    <div className="tab-pane fade" id="drive-trash" role="tabpanel" tabIndex="0">
                        <Folder/>
                        <p className="small text-danger mt-3">Items in trash are deleted forever after 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FileManager