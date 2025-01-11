import React from 'react'
import { bankInfo, personalInfo } from './LeaveRequestTableData';
import profile_av from '../../../../../../assets/images/lg/avatar1.jpg';
import EditPersonalInfo from './EditPersonalInfo';
import EditBankInfo from './EditBankInfo';

const EmployeeProfile = () => {
  return (
    <div className="px-xl-5 px-lg-4 px-3 py-3 page-body">
        <div className="row g-3">
            <div className="col-12">
                <div className="py-3 px-0 d-flex align-items-center justify-content-between border-top">
                    <h3 className="flex-fill h4 mb-0 mt-sm-0">Employee Profile</h3>
                </div>
            </div>
            <div className="col-12">
                <div className="card p-lg-3">
                    <div className="card-body d-flex flex-column flex-sm-row text-center text-sm-start">
                        <div className="profile-av text-center">
                            <img className="rounded-circle img-thumbnail shadow avatar xxl" src={profile_av} alt="avatar1"/>
                        </div>
                        <div className="flex-grow-1 ms-0 ms-sm-4">
                            <h5 className="mb-1 mt-2">Luke Short</h5>
                            <p className="text-muted mb-0">Manager | <span>Employee Id : <strong>00001</strong></span></p>
                            <p>Check out our brand new bootstrap admin template! 🚀 The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy.</p>
                            <div className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-sm-start">
                                <div className="bg-light rounded-2 py-2 px-3 me-1 mt-1">
                                    <small className="text-muted">Mobile</small>
                                    <div className="fs-6">+1 202-555-0174</div>
                                </div>
                                <div className="bg-light rounded-2 py-2 px-3 me-1 mt-1">
                                    <small className="text-muted">Email</small>
                                    <div className="fs-6">LukeShortn@gmail.com</div>
                                </div>
                                <div className="bg-light rounded-2 py-2 px-3 me-1 mt-1">
                                    <small className="text-muted">Birth Date</small>
                                    <div className="fs-6">19/03/1980</div>
                                </div>
                                <div className="bg-light rounded-2 py-2 px-3 me-1 mt-1">
                                    <small className="text-muted">City</small>
                                    <div className="fs-6">New york</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="row g-3">
                    <div className="col-lg-6 col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0">Personal Informations</h5>
                                <button type="button" className="btn p-0" data-bs-toggle="modal" data-bs-target="#PersonalInfo"><i className="bi bi-pencil-square"></i></button>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled mb-0">
                                    {personalInfo.map((data, index) => (
                                        Object.keys(data).map((key, subIndex) => (
                                            <li className="row flex-wrap mb-2" key={index + "-" + subIndex}>
                                                <div className="col-lg-5 col-6">
                                                    <span>{key}</span>
                                                </div>
                                                <div className="col">
                                                    <span className="text-muted">{data[key]}</span>
                                                </div>
                                            </li>
                                        ))
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0">Bank information</h5>
                                <button type="button" className="btn p-0" data-bs-toggle="modal" data-bs-target="#BankInfo"><i className="bi bi-pencil-square"></i></button>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled mb-0">
                                    {bankInfo.map((data, index) => (
                                        Object.keys(data).map((key, subIndex) => (
                                            <li className="row flex-wrap mb-2" key={index + "-" + subIndex}>
                                                <div className="col-lg-5 col-6">
                                                    <span>{key}</span>
                                                </div>
                                                <div className="col">
                                                    <span className="text-muted">{data[key]}</span>
                                                </div>
                                            </li>
                                        ))
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <EditPersonalInfo/>
        <EditBankInfo/>
    </div>
  )
}

export default EmployeeProfile