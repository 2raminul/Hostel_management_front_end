import React from 'react'

const AddRoom = () => {
  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="add-room" aria-labelledby="add-room">
		<div className="offcanvas-header">
			<h5 className="offcanvas-title">Add Room</h5>
			<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		</div>
		<div className="offcanvas-body">
			<form>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Room Type <span className="text-danger">*</span></label>
					<input type="text" className="form-control" placeholder="Add Room Type"/>
				</div>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Capacity <span className="text-danger">*</span></label>
					<input type="number" className="form-control" placeholder="Capacity"/>
				</div>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Extra Capability <span className="text-danger">*</span></label>
					<input type="number" className="form-control" placeholder="Extra Capability"/>
				</div>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Room Price <span className="text-danger">*</span></label>
					<input type="number" className="form-control" placeholder="Room Price"/>
				</div>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Bed Charge <span className="text-danger">*</span></label>
					<input type="number" className="form-control" placeholder="Bed Charge"/>
				</div>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Room Size <span className="text-danger">*</span></label>
					<select className="form-select">
						<option defaultValue='selected'>Choose Room Size</option>
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
					<input type="number" className="form-control" placeholder="Bed Number"/>
				</div>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Bed Type <span className="text-danger">*</span></label>
					<select className="form-select">
						<option defaultValue='selected'>Choose Room Size</option>
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
					<textarea className="form-control"></textarea>
				</div>
				<div className="form-group mb-3">
					<label className="form-label text-muted">Reserve Condition <span className="text-danger">*</span></label>
					<textarea className="form-control"></textarea>
				</div>
			</form>
			<div className="d-flex">
				<button type="button" className="btn w-100 me-1 py-2 btn-primary">Clear</button>
				<button type="button" className="btn w-100 ms-1 py-2 btn-dark">Save</button>
			</div>
		</div>
	</div>
  )
}

export default AddRoom