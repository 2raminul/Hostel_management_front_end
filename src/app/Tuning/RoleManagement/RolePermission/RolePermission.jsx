import React from 'react'
import { dutyChanges, houseKeeping, paymentSetting, restaurant } from './RolePermissionData'

const RolePermission = () => {
  return (
        <div className="px-xl-5 px-lg-4 px-3 py-3 page-body">
            <div className="row g-3">
                <div className="col-sm-12">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <h3 className="fw-bold mb-0">Role Permission</h3>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label text-muted">Role Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-lg" placeholder="Role Name"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label text-muted">Description</label>
                                        <textarea className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <h5 className="theme-text-color2">Duty Changes</h5>
                                    <div className="table-responsive">
                                        <table className="table table-striped custom-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Project Permission</th>
                                                    <th className="text-center">Read</th>
                                                    <th className="text-center">Write</th>
                                                    <th className="text-center">Create</th>
                                                    <th className="text-center">Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dutyChanges.map((data, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td className="fw-bold">{data.projectName}</td>
                                                        <td className="text-center">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                                                        </td>
                                                        <td className="text-center">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                                                        </td>
                                                        <td className="text-center">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                                                        </td>
                                                        <td className="text-center">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                                                        </td>
                                                    </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <h5 className="theme-text-color2">House Keeping</h5>
                                    <div className="table-responsive">
                                        <table className="table table-striped custom-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Project Permission</th>
                                                    <th className="text-center">Read</th>
                                                    <th className="text-center">Write</th>
                                                    <th className="text-center">Create</th>
                                                    <th className="text-center">Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {houseKeeping.map((data, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td className="fw-bold">{data.projectName}</td>
                                                        <td className="text-center">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                                                        </td>
                                                        <td className="text-center">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                                                        </td>
                                                        <td className="text-center">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                                                        </td>
                                                        <td className="text-center">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                                                        </td>
                                                    </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <h5 className="theme-text-color2">Restaurant</h5>
                                    <div className="table-responsive">
                                        <table className="table table-striped custom-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Project Permission</th>
                                                    <th className="text-center">Read</th>
                                                    <th className="text-center">Write</th>
                                                    <th className="text-center">Create</th>
                                                    <th className="text-center">Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {restaurant.map((data, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td className="fw-bold">{data.projectName}</td>
                                                        <td className="text-center">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                                                        </td>
                                                        <td className="text-center">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                                                        </td>
                                                        <td className="text-center">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                                                        </td>
                                                        <td className="text-center">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                                                        </td>
                                                    </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <h5 className="theme-text-color2">Payment Setting</h5>
                                    <div className="table-responsive">
                                        <table className="table table-striped custom-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Project Permission</th>
                                                    <th className="text-center">Read</th>
                                                    <th className="text-center">Write</th>
                                                    <th className="text-center">Create</th>
                                                    <th className="text-center">Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {paymentSetting.map((data, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td className="fw-bold">{data.projectName}</td>
                                                        <td className="text-center">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                                                        </td>
                                                        <td className="text-center">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                                                        </td>
                                                        <td className="text-center">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                                                        </td>
                                                        <td className="text-center">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                                                        </td>
                                                    </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RolePermission