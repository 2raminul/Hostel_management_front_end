import React from 'react'
import { membersData } from './AccountSettingsData'

const Members = () => {
  return (
    <div className="tab-pane fade" id="setting-members" role="tabpanel">
        <div className="d-flex justify-content-between p-3">
            <h5 className="card-title fw-normal mb-0">Members</h5>
            {/* <!--[ Dropdown ]--> */}
            <div className="dropdown">
                <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="dropdown">Invite member</button>
                <form className="dropdown-menu dropdown-menu-end border-0 rounded-4 shadow" style={{width: "300px"}}>
                    <div className="card-header">
                        <h6 className="card-title mb-0">Invite a member</h6>
                        <span className="badge bg-primary">2 seats left</span>
                    </div>
                    <div className="card-body">
                        <div className="row g-0 align-items-center mb-2">
                            <div className="col-3">
                                <label className="mb-0">Name</label>
                            </div>
                            <div className="col">
                                <input className="form-control form-control-flush" type="text" placeholder="Full name"/>
                            </div>
                        </div> 
                        <div className="row g-0 align-items-center mb-2">
                            <div className="col-3">
                                <label className="mb-0">Email</label>
                            </div>
                            <div className="col">
                                <input className="form-control form-control-flush" type="text" placeholder="Email address"/>
                            </div>
                        </div> 
                        <div className="row g-0 align-items-center">
                            <div className="col-3">
                                
                            </div>
                            <div className="col">
                                <a className="btn btn-block btn-primary" href='#'>Invite member</a>
                            </div>
                        </div> 
                    </div>
                </form>
            </div>
        </div>
        <div className="list-group list-group-flush mb-0">
            {membersData.map((data, index) => {
                return(
                <div className="list-group-item py-3" key={index}>
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <a href="#" className="avatar"><img src={data.memberImg} alt="..." className="avatar rounded-circle"/></a>
                        </div>
                        <div className="col-5 ms-2">
                            <h5 className="mb-0 fw-light"><a href="#">{data.memberName}</a></h5>
                            <span className="text-muted">{data.memberEmail}</span>
                        </div>
                        <div className="col-auto ms-auto mr-md-3">
                            <select className="form-control custom-select" data-bs-toggle="select">
                                <option value="1">Admin</option>
                                <option value="2">Staff</option>
                                <option value="3">Custom</option>
                            </select>
                        </div>
                        <div className="col-auto">
                            <a href="#" className="dropdown-toggle after-none" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots"></i></a>
                            <ul className="dropdown-menu dropdown-menu-end shadow border-0 p-2 rounded-4">
                                <li><a className="dropdown-item" href="#">File Info</a></li>
                                <li><a className="dropdown-item" href="#">Copy to</a></li>
                                <li><a className="dropdown-item" href="#">Move to</a></li>
                                <li><a className="dropdown-item" href="#">Rename</a></li>
                                <li><a className="dropdown-item" href="#">Block</a></li>
                                <li><a className="dropdown-item" href="#">Delete</a></li>
                            </ul>
                        </div>
                    </div> 
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Members