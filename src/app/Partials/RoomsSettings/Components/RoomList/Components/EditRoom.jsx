import React from 'react'

const EditRoom = () => {
  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="edit-room" aria-labelledby="edit-room">
		<div className="offcanvas-header">
			<h5 className="offcanvas-title">Edit Room</h5>
			<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		</div>
		<div className="offcanvas-body">
			<form>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Room Type <span className="text-danger">*</span></label>
					<input type="text" className="form-control" defaultValue="VIP-Guest"/>
				</div>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Capacity <span className="text-danger">*</span></label>
					<input type="number" className="form-control" defaultValue="3"/>
				</div>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Extra Capability <span className="text-danger">*</span></label>
					<input type="text" className="form-control" defaultValue="YES"/>
				</div>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Room Price <span className="text-danger">*</span></label>
					<input type="number" className="form-control" defaultValue="4000"/>
				</div>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Bed Charge <span className="text-danger">*</span></label>
					<input type="number" className="form-control" defaultValue="100"/>
				</div>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Room Size <span className="text-danger">*</span></label>
					<select className="form-select">
						<option defaultValue='selected'>King</option>
						<option value="1">Singal</option>
						<option value="2">Double</option>
						<option value="3">Tripal</option>
						<option value="4">Quad</option>
						<option value="6">Queen</option>
						<option value="7">King</option>
						<option value="8">Others</option>
					</select>
				</div>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Bed Number <span className="text-danger">*</span></label>
					<input type="number" className="form-control" defaultValue="2" />
				</div>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Bed Type <span className="text-danger">*</span></label>
					<select className="form-select">
						<option defaultValue='selected'>Standard Double</option>
						<option value="1">King Bed</option>
						<option value="2">Queen Bed</option>
						<option value="3">Electric Bed</option>
						<option value="4">Futon Bed</option>
						<option value="6">Mattress Bed</option>
						<option value="7">Air Bed</option>
					</select>
				</div>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Room Drescription <span className="text-danger">*</span></label>
					<textarea className="form-control">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </textarea>
				</div>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Reserve Condition <span className="text-danger">*</span></label>
					<textarea className="form-control">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </textarea>
				</div>
			</form>
			<div className="d-flex">
				<button type="button" className="btn w-100 ms-1 py-2 btn-primary">Update</button>
			</div>
		</div>
	</div>
  )
}

export default EditRoom