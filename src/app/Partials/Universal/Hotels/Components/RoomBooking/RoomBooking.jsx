import React from 'react'

const RoomBooking = () => {
  return (
    <div className="px-xl-5 px-lg-4 px-3 py-3 page-body">
        <div className="row g-3">
            <div className="col-sm-12">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <h3 className="fw-bold mb-0">Fill Out Booking Details</h3>
              </div>
            </div>
            <div className="col-sm-12">
                <div className="card mb-3">
                    <div className="card-header">
                        <h6 className="card-title">Reservation Details</h6>
                    </div>
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col-md-6 col-lg-4 col-xl-4">
                                <div className="form-group">
                                    <label className="form-label text-muted">Check In <span className="text-danger">*</span></label>
                                    <div className="input-group">
                                        <span className="input-group-text" ><i className="bi bi-calendar-plus"></i></span>
                                        <input type="date" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-4">
                                <div className="form-group">
                                    <label className="form-label text-muted">Check Out<span className="text-danger"> *</span></label>
                                    <div className="input-group">
                                        <span className="input-group-text" ><i className="bi bi-calendar-minus"></i></span>
                                        <input type="date" name="datefilter" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-4">
                                <div className="form-group">
                                    <label className="form-label text-muted">Arival From</label>
                                    <div className="input-group">
                                        <span className="input-group-text" ><i className="bi bi-stop-circle"></i></span>
                                        <input type="text" className="form-control" placeholder="Arival From"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-4">
                                <div className="form-group">
                                    <label className="form-label text-muted">Booking Type</label>
                                    <div className="input-group">
                                        <span className="input-group-text" ><i className="bi bi-house"></i></span>
                                        <select className="form-select">
                                            <option defaultValue='selected'>Choose Booking Reference</option>
                                            <option value="1">Advance</option>
                                            <option value="2">Instant</option>
                                            <option value="3">Groups</option>
                                            <option value="4">Allocation</option>
                                            <option value="5">Business Seminar</option>
                                            <option value="6">Wedding</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-4">
                                <div className="form-group">
                                    <label className="form-label text-muted">Booking Reference No</label>
                                    <div className="input-group">
                                        <span className="input-group-text" ><i className="bi bi-bookmark-heart"></i></span>
                                        <input type="text" className="form-control"  placeholder="Booking Reference No."/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-4">
                                <div className="form-group">
                                    <label className="form-label text-muted">Purpose of Visit</label>
                                    <div className="input-group">
                                        <span className="input-group-text" ><i className="bi bi-eyeglasses"></i></span>
                                        <input type="text" className="form-control" placeholder="Purpose of Visit"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-12 col-xl-12">
                                <div className="form-group">
                                    <label className="form-label text-muted">Remarks</label>
                                    <div className="input-group">
                                        <span className="input-group-text" ><i className="bi bi-bookmark-star"></i></span>
                                        <input type="text" className="form-control" placeholder="Remarks"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-header">
                        <h6 className="card-title">Room Details</h6>
                    </div>
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label text-muted">Room Type <span className="text-danger">*</span></label>
                                    <div className="input-group">
                                        <span className="input-group-text" ><i className="bi bi-house"></i></span>
                                        <select className="form-select">
                                            <option defaultValue='selected'>Choose Room Type</option>
                                            <option value="1">Single</option>
                                            <option value="2">Deluxe</option>
                                            <option value="3">Studio</option>
                                            <option value="4">Junior Suite</option>
                                            <option value="5">Queen</option>
                                            <option value="6">King</option>
                                            <option value="7">Connecting</option>
                                            <option value="8">Cabana</option>
                                            <option value="9">Quad</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label text-muted">Room No<span className="text-danger"> *</span></label>
                                    <div className="input-group">
                                        <span className="input-group-text" ><i className="bi bi-house"></i></span>
                                        <select className="form-select">
                                            <option defaultValue='selected'>Choose Room No</option>
                                            <option value="1">101</option>
                                            <option value="2">102</option>
                                            <option value="3">103</option>
                                            <option value="4">104</option>
                                            <option value="5">105</option>
                                            <option value="6">106</option>
                                            <option value="7">107</option>
                                            <option value="8">108</option>
                                            <option value="9">109</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label text-muted">Adults</label>
                                    <div className="input-group">
                                        <span className="input-group-text" ><i className="bi bi-people"></i></span>
                                        <input type="text" className="form-control" placeholder="0"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label text-muted">Children</label>
                                    <div className="input-group">
                                        <span className="input-group-text" ><i className="bi bi-person"></i></span>
                                        <input type="text" className="form-control" placeholder="0"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h6 className="card-title">Customer Details</h6>
                    </div>
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col-md-6 d-flex">
                                <div className="card flex-fill w-100 border">
                                    <div className="card-header py-3">
                                        <h6 className="card-title">Guest Details</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Country Code</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-geo-alt"></i></span>
                                                        <input type="text" className="form-control" placeholder="Country Code"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Mobile No.</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-phone"></i></span>
                                                        <input type="number" className="form-control" placeholder="Mobile No."/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Title</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-emoji-smile"></i></span>
                                                        <select className="form-select">
                                                            <option defaultValue='selected' value="Mr">Mr</option>
                                                            <option value="Ms">Ms</option>
                                                            <option value="Mrs">Mrs.</option>
                                                            <option value="Dr">Dr</option>
                                                            <option value="Engineer">Engineer</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">First Name <span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-person-circle"></i></span>
                                                        <input type="text" className="form-control" placeholder="First Name"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Last Name</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-person-circle"></i></span>
                                                        <input type="text" className="form-control" placeholder="Last Name"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Father Name</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-person-circle"></i></span>
                                                        <input type="text" className="form-control" id="fathername" placeholder="Father Name"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 align-self-center">
                                                <label className="form-label text-muted w-100">Gender</label>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1"/>
                                                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2"/>
                                                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Occupation</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-briefcase"></i></span>
                                                        <input type="text" className="form-control" placeholder="Occupation"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Date of Birth</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-calendar"></i></span>
                                                        <input type="date" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Anniversary</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-calendar"></i></span>
                                                        <input type="date" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Nationality</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-geo-alt"></i></span>
                                                        <input type="text" name="datefilter2" className="form-control" id="nationality" placeholder="Nationality" defaultValue=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 align-self-center mb-3">
                                                <label className="form-label text-muted">Guest</label>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1"/>
                                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                                    VIP?
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex">
                                <div className="card flex-fill w-100 border">
                                    <div className="card-header py-3">
                                        <h6 className="card-title">Contact Details</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Contact Type</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-journal"></i></span>
                                                        <select className="form-select">
                                                            <option defaultValue='selected' value="">Choose Contact Type</option>
                                                            <option value="Home">Home</option>
                                                            <option value="Personal">Personal</option>
                                                            <option value="Official">Official</option>
                                                            <option value="Business">Business</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Email</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                                                        <input type="email" className="form-control" placeholder="example@email.com"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Country</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-map"></i></span>
                                                        <input type="text" className="form-control" placeholder="Country"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">State</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-layers"></i></span>
                                                        <input type="text" className="form-control" placeholder="State"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">City</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-mailbox"></i></span>
                                                        <input type="text" className="form-control" placeholder="City"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Zipcode</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-file-zip"></i></span>
                                                        <input type="number" className="form-control" placeholder="Zipcode"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Address</label>
                                                    <textarea className="form-control" placeholder="Address"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex">
                                <div className="card flex-fill w-100 border">
                                    <div className="card-header py-3">
                                        <h6 className="card-title">Identity Details</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Identity Type</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-images"></i></span>
                                                        <input type="text" className="form-control" placeholder="Identity Type"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">ID # <span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-images"></i></span>
                                                        <input type="text" className="form-control" placeholder="ID"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <label>Identity Upload</label>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Front Side Document</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-images"></i></span>
                                                        <input type="file" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Back Side Document</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-images"></i></span>
                                                        <input type="file" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Comments</label>
                                                    <textarea className="form-control" placeholder="Remarks"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex">
                                <div className="card flex-fill w-100 border">
                                    <div className="card-header py-3">
                                        <h6 className="card-title">Guest Image</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-3">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="form-label text-muted">Customer Image</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="bi bi-images"></i></span>
                                                        <input type="file" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h6 className="card-title">Payment Details</h6>
                    </div>
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label text-muted">Discount Reason</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-tag"></i></span>
                                        <input type="text" className="form-control" placeholder="Discount Type"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label text-muted">Discount (Max-100%)</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-tag"></i></span>
                                        <input type="text" className="form-control" placeholder="Discount"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label text-muted">Commission (%)</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-percent"></i></span>
                                        <input type="text" className="form-control" placeholder="Commission"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label text-muted">Commission Amount</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-currency-dollar"></i></span>
                                        <input type="text" className="form-control" placeholder="40"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h6 className="card-title">Advance Details</h6>
                    </div>
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label text-muted">Payment Mode</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-credit-card"></i></span>
                                        <select className="form-select">
                                            <option defaultValue='selected' value="Card Payment">Card Payment</option>
                                            <option value="Paypal">Paypal</option>
                                            <option value="Cash Payment">Cash Payment</option>
                                            <option value="Bank Payment">Bank Payment</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label text-muted">Total Amount</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-currency-dollar"></i></span>
                                        <input type="text" className="form-control" placeholder="3580"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label text-muted">Advance Remarks</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-card-text"></i></span>
                                        <input type="text" className="form-control" placeholder="Remarks"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label text-muted">Advance Amount</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-currency-dollar"></i></span>
                                        <input type="text" className="form-control" placeholder="Advance Amount"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h6 className="card-title">Billing Details</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-sm table-bordered mb-0">
                                <tbody>
                                <tr>
                                    <th scope="row">Booking Charge</th>
                                    <td>$0.0</td>
                                </tr>
                                <tr>
                                    <th scope="row">Tax </th>
                                    <td>580</td>
                                </tr>
                                <tr>
                                    <th scope="row">Service Charge</th>
                                    <td>280</td>
                                </tr>
                                <tr>
                                    <th scope="row">Total</th>
                                    <td><span className="badge bg-primary">4860</span></td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 text-end">
                <button type="button" className="btn btn-primary">Save Details</button>
            </div>
        </div>
    </div>
  )
}

export default RoomBooking