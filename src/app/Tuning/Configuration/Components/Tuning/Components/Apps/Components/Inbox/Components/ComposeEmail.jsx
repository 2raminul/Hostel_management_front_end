import React from 'react'

const ComposeEmail = () => {
  return (
    <div className="offcanvas offcanvas-end xxl" tabIndex="-1" id="Compose">
		<div className="offcanvas-header">
			<h5 className="offcanvas-title">New Message</h5>
			<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		</div>
		<div className="offcanvas-body">
			<div className="form-floating mb-1">
				<input type="email" className="form-control" placeholder="Email To"/>
				<label>Email To</label>
			</div>
			<div className="form-floating mb-3">
				<input type="text" className="form-control" placeholder="Subject"/>
				<label>Subject</label>
			</div>
			<div className="summernote">
				Hello there,
				<br/>
				<p>The toolbar can be customized and it also supports various callbacks such as <code>oninit</code>, <code>onfocus</code>, <code>onpaste</code> and many more.</p>
				<p>Please try <b>paste some texts</b> here</p>
			</div>
			<div className="mt-3 d-flex">
				<ul className="navbar-nav flex-row me-auto">
					<li className="nav-item me-1"><a className="btn btn-light" href="#"><i className="fa fa-paperclip"></i></a></li>
					<li className="nav-item me-1"><a className="btn btn-light" href="#"><i className="fa fa-smile-o"></i></a></li>
					<li className="nav-item"><a className="btn btn-light" href="#"><i className="fa fa-photo"></i></a></li>
				</ul>
				<a href="#" className="btn btn-outline-secondary">Discard</a>
				<a href="#" className="btn ms-1 btn-outline-secondary">Schedule Send</a>
				<a href="#" className="btn ms-1 btn-primary">Send</a>
			</div>
		</div>
	</div>
  )
}

export default ComposeEmail