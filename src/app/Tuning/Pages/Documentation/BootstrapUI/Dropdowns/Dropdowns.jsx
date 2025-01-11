import React from 'react'

const Dropdowns = () => {

	const dropdownCode = `<div className="dropdown d-inline-flex m-1">
  <button className="btn btn-primary dropdown-toggle" type="button"  data-bs-toggle="dropdown" aria-expanded="false">
    Primary Dropdown
  </button>
  <ul className="dropdown-menu border-0 shadow p-3">
    <li><a className="dropdown-item py-2 rounded" href="#">Action</a></li>
    <li><a className="dropdown-item py-2 rounded" href="#">Another action</a></li>
    <li><a className="dropdown-item py-2 rounded" href="#">Something else here</a></li>
  </ul>
</div>`;

  return (
        <div className="content px-xl-5 px-lg-4 px-3 py-3 page-body bg-card">
			<div className="card-body p-0">
				<h4 className="mb-4">Dropdowns</h4>
				<p className="lead">Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.</p>
				<p>Any single <code>.btn</code> can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either <code>&lt;button&gt;</code> elements:</p>
				<div className="row g-4">
					<div className="col-12">							
						<div className="rounded-4" data-lang="html">
							<pre className='h6 language-html text-primary'><code>{dropdownCode}</code></pre>
						</div>
					</div>
					<div className="col-12">
						{/* <!--[ dropdown: primary ]--> */}
						<div className="dropdown d-inline-flex m-1">
							<button className="btn btn-primary dropdown-toggle" type="button"  data-bs-toggle="dropdown" aria-expanded="false">
								Primary Dropdown
							</button>
							<ul className="dropdown-menu border-0 shadow p-3">
								<li><a className="dropdown-item py-2 rounded" href="#">Action</a></li>
								<li><a className="dropdown-item py-2 rounded" href="#">Another action</a></li>
								<li><a className="dropdown-item py-2 rounded" href="#">Something else here</a></li>
							</ul>
						</div>
						{/* <!--[ dropdown: primary ]--> */}
						<div className="dropdown d-inline-flex m-1">
							<button className="btn btn-primary dropdown-toggle" type="button"  data-bs-toggle="dropdown" aria-expanded="false">
								Dropdown Animation
							</button>
							<ul className="dropdown-menu shadow border-0 p-2">
								<li><a className="dropdown-item" href="#">File Info</a></li>
								<li><a className="dropdown-item" href="#">Copy to</a></li>
								<li><a className="dropdown-item" href="#">Move to</a></li>
								<li><a className="dropdown-item" href="#">Rename</a></li>
								<li><a className="dropdown-item" href="#">Block</a></li>
								<li><a className="dropdown-item" href="#">Delete</a></li>
							</ul>
						</div>
						{/* <!--[ dropdown: outline primary ]--> */}
						<div className="dropdown d-inline-flex m-1">
							<button className="btn btn-outline-primary dropdown-toggle" type="button"  data-bs-toggle="dropdown" aria-expanded="false">
								Primary Outline Dropdown
							</button>
							<ul className="dropdown-menu border-0 shadow p-3">
								<li><a className="dropdown-item py-2 rounded" href="#">Action</a></li>
								<li><a className="dropdown-item py-2 rounded" href="#">Another action</a></li>
								<li><a className="dropdown-item py-2 rounded" href="#">Something else here</a></li>
							</ul>
						</div>
						{/* <!--[ dropdown: dark ]--> */}
						<div className="dropdown d-inline-flex m-1">
							<button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
								Dark Dropdown
							</button>
							<ul className="dropdown-menu dropdown-menu-dark shadow p-3">
								<li><a className="dropdown-item py-2 rounded active" href="#">Action</a></li>
								<li><a className="dropdown-item py-2 rounded" href="#">Another action</a></li>
								<li><a className="dropdown-item py-2 rounded" href="#">Something else here</a></li>
								<li><hr className="dropdown-divider"/></li>
								<li><a className="dropdown-item py-2 rounded" href="#">Separated link</a></li>
							</ul>
						</div>
						<div className="mb-3 pb-3 border-bottom">
							<p>And with <code>&lt;a&gt;</code> elements:</p>
							{/* <!--[ dropdown: primary ]--> */}
							<div className="dropdown d-inline-flex m-1">
								<a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
									Primary Dropdown
								</a>
								<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</div>
							{/* <!--[ dropdown: outline primary ]--> */}
							<div className="dropdown d-inline-flex m-1">
								<a className="btn btn-outline-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
									Primary Outline Dropdown
								</a>
								<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</div>
							{/* <!--[ dropdown: dark ]--> */}
							<div className="dropdown d-inline-flex m-1">
								<a className="btn btn-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
									Dark Dropdown
								</a>
								<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
									<li><a className="dropdown-item active" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
									<li><hr className="dropdown-divider"/></li>
									<li><a className="dropdown-item" href="#">Separated link</a></li>
								</ul>
							</div>
						</div>
						<div className="mb-3 pb-3 border-bottom">
							<p>The best part is you can do this with any button variant, too:</p>
							<div className="btn-group">
								<button type="button" className="btn btn-primary dropdown-toggle me-1" data-bs-toggle="dropdown" aria-expanded="false">Primary</button>
								<ul className="dropdown-menu border-0 shadow bg-primary">
									<li><a className="dropdown-item text-light" href="#">Action</a></li>
									<li><a className="dropdown-item text-light" href="#">Another action</a></li>
									<li><a className="dropdown-item text-light" href="#">Something else here</a></li>
									<li><hr className="dropdown-divider"/></li>
									<li><a className="dropdown-item text-light" href="#">Separated link</a></li>
								</ul>
							</div>
							{/* <!--[ /btn-group ]--> */}
							<div className="btn-group">
								<button type="button" className="btn btn-secondary dropdown-toggle me-1" data-bs-toggle="dropdown" aria-expanded="false">Secondary</button>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
									<li><hr className="dropdown-divider"/></li>
									<li><a className="dropdown-item" href="#">Separated link</a></li>
								</ul>
							</div>
							{/* <!--[ /btn-group ]--> */}
							<div className="btn-group">
								<button type="button" className="btn btn-success dropdown-toggle me-1" data-bs-toggle="dropdown" aria-expanded="false">Success</button>
								<ul className="dropdown-menu border-0 shadow bg-success">
									<li><a className="dropdown-item text-light" href="#">Action</a></li>
									<li><a className="dropdown-item text-light" href="#">Another action</a></li>
									<li><a className="dropdown-item text-light" href="#">Something else here</a></li>
									<li><hr className="dropdown-divider"/></li>
									<li><a className="dropdown-item text-light" href="#">Separated link</a></li>
								</ul>
							</div>
							{/* <!--[ /btn-group ]--> */}
							<div className="btn-group">
								<button type="button" className="btn btn-info dropdown-toggle me-1" data-bs-toggle="dropdown" aria-expanded="false">Info</button>
								<ul className="dropdown-menu border-0 shadow bg-info">
									<li><a className="dropdown-item text-light" href="#">Action</a></li>
									<li><a className="dropdown-item text-light" href="#">Another action</a></li>
									<li><a className="dropdown-item text-light" href="#">Something else here</a></li>
									<li><hr className="dropdown-divider"/></li>
									<li><a className="dropdown-item text-light" href="#">Separated link</a></li>
								</ul>
							</div>
							{/* <!--[ /btn-group ]--> */}
							<div className="btn-group">
								<button type="button" className="btn btn-warning dropdown-toggle me-1" data-bs-toggle="dropdown" aria-expanded="false">Warning</button>
								<ul className="dropdown-menu border-0 shadow bg-warning">
									<li><a className="dropdown-item text-light" href="#">Action</a></li>
									<li><a className="dropdown-item text-light" href="#">Another action</a></li>
									<li><a className="dropdown-item text-light" href="#">Something else here</a></li>
									<li><hr className="dropdown-divider"/></li>
									<li><a className="dropdown-item text-light" href="#">Separated link</a></li>
								</ul>
							</div>
							{/* <!--[ /btn-group ]--> */}
							<div className="btn-group">
								<button type="button" className="btn btn-danger dropdown-toggle me-1" data-bs-toggle="dropdown" aria-expanded="false">Danger</button>
								<ul className="dropdown-menu border-0 shadow bg-danger">
									<li><a className="dropdown-item text-light" href="#">Action</a></li>
									<li><a className="dropdown-item text-light" href="#">Another action</a></li>
									<li><a className="dropdown-item text-light" href="#">Something else here</a></li>
									<li><hr className="dropdown-divider"/></li>
									<li><a className="dropdown-item text-light" href="#">Separated link</a></li>
								</ul>
							</div>
							{/* <!--[ /btn-group ]--> */}
						</div>
						<div className="mb-3 pb-3 border-bottom">
							<h5>Sizing</h5>
							<p>Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.</p>
							<div className="btn-toolbar" role="toolbar">
								<div className="btn-group">
									<button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
										Large button
									</button>
									<ul className="dropdown-menu">
										<li><a className="dropdown-item" href="#">Action</a></li>
										<li><a className="dropdown-item" href="#">Another action</a></li>
										<li><a className="dropdown-item" href="#">Something else here</a></li>
										<li><hr className="dropdown-divider"/></li>
										<li><a className="dropdown-item" href="#">Separated link</a></li>
									</ul>
								</div>
								{/* <!--[ /btn-group ]--> */}
								<div className="btn-group ms-2">
									<button type="button" className="btn btn-lg btn-secondary">Large split button</button>
									<button type="button" className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
										<span className="visually-hidden">Toggle Dropdown</span>
									</button>
									<ul className="dropdown-menu">
										<li><a className="dropdown-item" href="#">Action</a></li>
										<li><a className="dropdown-item" href="#">Another action</a></li>
										<li><a className="dropdown-item" href="#">Something else here</a></li>
										<li><hr className="dropdown-divider"/></li>
										<li><a className="dropdown-item" href="#">Separated link</a></li>
									</ul>
								</div>
								{/* <!--[ /btn-group ]--> */}
							</div>
							{/* <!--[ /btn-toolbar ]--> */}
							<div className="btn-toolbar py-2" role="toolbar">
								<div className="btn-group">
									<button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
										Small button
									</button>
									<ul className="dropdown-menu">
										<li><a className="dropdown-item" href="#">Action</a></li>
										<li><a className="dropdown-item" href="#">Another action</a></li>
										<li><a className="dropdown-item" href="#">Something else here</a></li>
										<li><hr className="dropdown-divider"/></li>
										<li><a className="dropdown-item" href="#">Separated link</a></li>
									</ul>
								</div>
								{/* <!--[ /btn-group ]--> */}
								<div className="btn-group ms-2">
									<button type="button" className="btn btn-sm btn-secondary">Small split button</button>
									<button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
										<span className="visually-hidden">Toggle Dropdown</span>
									</button>
									<ul className="dropdown-menu">
										<li><a className="dropdown-item" href="#">Action</a></li>
										<li><a className="dropdown-item" href="#">Another action</a></li>
										<li><a className="dropdown-item" href="#">Something else here</a></li>
										<li><hr className="dropdown-divider"/></li>
										<li><a className="dropdown-item" href="#">Separated link</a></li>
									</ul>
								</div>
								{/* <!--[ /btn-group ]--> */}
							</div>
							{/* <!--[ /btn-toolbar ]--> */}
						</div>
						<div className="mb-3 pb-3 border-bottom">
							<h5>Split button</h5>
							<p>Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of <code>.dropdown-toggle-split</code> for proper spacing around the dropdown caret.</p>
							<p>We use this extra class to reduce the horizontal <code>padding</code> on either side of the caret by 25% and remove the <code>margin-left</code> that’s added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button.</p>
							<div className="btn-group">
								<button type="button" className="btn btn-primary">Primary</button>
								<button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split me-1" data-bs-toggle="dropdown" aria-expanded="false">
									<span className="visually-hidden">Toggle Dropdown</span>
								</button>
								<ul className="dropdown-menu border-0 shadow py-3 px-2">
									<li><a className="dropdown-item py-2 rounded" href="#">Action</a></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Another action</a></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Something else here</a></li>
									<li><hr className="dropdown-divider"/></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Separated link</a></li>
								</ul>
							</div>
							{/* <!--[ /btn-group ]--> */}
							<div className="btn-group">
								<button type="button" className="btn btn-secondary">Secondary</button>
								<button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split me-1" data-bs-toggle="dropdown" aria-expanded="false">
									<span className="visually-hidden">Toggle Dropdown</span>
								</button>
								<ul className="dropdown-menu border-0 shadow py-3 px-2">
									<li><a className="dropdown-item py-2 rounded" href="#">Action</a></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Another action</a></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Something else here</a></li>
									<li><hr className="dropdown-divider"/></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Separated link</a></li>
								</ul>
							</div>
							{/* <!--[ /btn-group ]--> */}
							<div className="btn-group">
								<button type="button" className="btn btn-success">Success</button>
								<button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split me-1" data-bs-toggle="dropdown" aria-expanded="false">
									<span className="visually-hidden">Toggle Dropdown</span>
								</button>
								<ul className="dropdown-menu border-0 shadow py-3 px-2">
									<li><a className="dropdown-item py-2 rounded" href="#">Action</a></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Another action</a></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Something else here</a></li>
									<li><hr className="dropdown-divider"/></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Separated link</a></li>
								</ul>
							</div>
							{/* <!--[ /btn-group ]--> */}
							<div className="btn-group">
								<button type="button" className="btn btn-info">Info</button>
								<button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split me-1" data-bs-toggle="dropdown" aria-expanded="false">
									<span className="visually-hidden">Toggle Dropdown</span>
								</button>
								<ul className="dropdown-menu border-0 shadow py-3 px-2">
									<li><a className="dropdown-item py-2 rounded" href="#">Action</a></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Another action</a></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Something else here</a></li>
									<li><hr className="dropdown-divider"/></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Separated link</a></li>
								</ul>
							</div>
							{/* <!--[ /btn-group ]--> */}
							<div className="btn-group">
								<button type="button" className="btn btn-warning">Warning</button>
								<button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split me-1" data-bs-toggle="dropdown" aria-expanded="false">
									<span className="visually-hidden">Toggle Dropdown</span>
								</button>
								<ul className="dropdown-menu border-0 shadow py-3 px-2">
									<li><a className="dropdown-item py-2 rounded" href="#">Action</a></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Another action</a></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Something else here</a></li>
									<li><hr className="dropdown-divider"/></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Separated link</a></li>
								</ul>
							</div>
							{/* <!--[ /btn-group ]--> */}
							<div className="btn-group">
								<button type="button" className="btn btn-danger">Danger</button>
								<button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split me-1" data-bs-toggle="dropdown" aria-expanded="false">
									<span className="visually-hidden">Toggle Dropdown</span>
								</button>
								<ul className="dropdown-menu border-0 shadow py-3 px-2">
									<li><a className="dropdown-item py-2 rounded" href="#">Action</a></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Another action</a></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Something else here</a></li>
									<li><hr className="dropdown-divider"/></li>
									<li><a className="dropdown-item py-2 rounded" href="#">Separated link</a></li>
								</ul>
							</div>
							{/* <!--[ /btn-group ]--> */}
						</div>
					</div>
					<div className="col-12">
						<h5>Alignment options</h5>
						<p>Taking most of the options shown above, here’s a small kitchen sink demo of various dropdown alignment options in one place.</p>
						<div className="btn-group">
							<button className="btn btn-secondary dropdown-toggle me-1" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
								Dropdown
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<li><a className="dropdown-item" href="#">Menu item</a></li>
								<li><a className="dropdown-item" href="#">Menu item</a></li>
								<li><a className="dropdown-item" href="#">Menu item</a></li>
							</ul>
						</div>
						<div className="btn-group">
						<button type="button" className="btn btn-secondary dropdown-toggle me-1" data-bs-toggle="dropdown" aria-expanded="false">
							Right-aligned menu
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
						</ul>
						</div>
						<div className="btn-group">
						<button type="button" className="btn btn-secondary dropdown-toggle me-1" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
							Left-aligned, right-aligned lg
						</button>
						<ul className="dropdown-menu dropdown-menu-lg-end">
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
						</ul>
						</div>
						<div className="btn-group">
						<button type="button" className="btn btn-secondary dropdown-toggle me-1" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
							Right-aligned, left-aligned lg
						</button>
						<ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
						</ul>
						</div>
						<div className="btn-group dropstart">
						<button type="button" className="btn btn-secondary dropdown-toggle me-1" data-bs-toggle="dropdown" aria-expanded="false">
							Dropstart
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
						</ul>
						</div>
						<div className="btn-group dropend mt-2">
						<button type="button" className="btn btn-secondary dropdown-toggle me-1" data-bs-toggle="dropdown" aria-expanded="false">
							Dropend
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
						</ul>
						</div>
						<div className="btn-group dropup mt-2">
							<button type="button" className="btn btn-secondary dropdown-toggle me-1" data-bs-toggle="dropdown" aria-expanded="false">
								Dropup
							</button>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">Menu item</a></li>
								<li><a className="dropdown-item" href="#">Menu item</a></li>
								<li><a className="dropdown-item" href="#">Menu item</a></li>
							</ul>
						</div>
					</div>
					<div className="col-12">
						<h5>Dropdown options</h5>
						<p>Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change the location of the dropdown.</p>
						<div className="dropdown me-1">
							<button type="button" className="btn btn-secondary dropdown-toggle me-1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
							Offset
							</button>
							<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</div>
						<div className="btn-group mt-2">
							<button type="button" className="btn btn-secondary">Reference</button>
							<button type="button" className="btn btn-secondary dropdown-toggle me-1 dropdown-toggle-split" id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
							<span className="visually-hidden">Toggle Dropdown</span>
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuReference">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
							<li><hr className="dropdown-divider"/></li>
							<li><a className="dropdown-item" href="#">Separated link</a></li>
							</ul>
						</div>
					</div>
					<div className="col-12">
						<h5>Auto close behavior</h5>
						<p>By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the <code>autoClose</code> option to change this behavior of the dropdown.</p>
						<div className="btn-group">
							<button className="btn btn-secondary dropdown-toggle me-1" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
								Default dropdown
							</button>
							<ul className="dropdown-menu" aria-labelledby="defaultDropdown">
								<li><a className="dropdown-item" href="#">Menu item</a></li>
								<li><a className="dropdown-item" href="#">Menu item</a></li>
								<li><a className="dropdown-item" href="#">Menu item</a></li>
							</ul>
						</div>
						<div className="btn-group">
						<button className="btn btn-secondary dropdown-toggle me-1" type="button" id="dropdownMenuClickableOutside" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
							Clickable outside
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
						</ul>
						</div>
						<div className="btn-group">
						<button className="btn btn-secondary dropdown-toggle me-1" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
							Clickable inside
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
						</ul>
						</div>
						<div className="btn-group">
							<button className="btn btn-secondary dropdown-toggle me-1" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
								Manual close
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuClickable">
								<li><a className="dropdown-item" href="#">Menu item</a></li>
								<li><a className="dropdown-item" href="#">Menu item</a></li>
								<li><a className="dropdown-item" href="#">Menu item</a></li>
							</ul>
						</div>
					</div>
					<div className="col-12">
						<h5>Responsive alignment</h5>
						<p>If you want to use responsive alignment, disable dynamic positioning by adding the <code>data-bs-display="static"</code> attribute and use the responsive variation classes.</p>
						<p>To align <strong>right</strong> the dropdown menu with the given breakpoint or larger, add <code>.dropdown-menu{'-sm|-md|-lg|-xl|-xxl'}-end</code>.</p>
						<div className="btn-group">
							<button type="button" className="btn btn-secondary dropdown-toggle me-1" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
								Left-aligned but right aligned when large screen
							</button>
							<ul className="dropdown-menu dropdown-menu-lg-end">
								<li><button className="dropdown-item" type="button">Action</button></li>
								<li><button className="dropdown-item" type="button">Another action</button></li>
								<li><button className="dropdown-item" type="button">Something else here</button></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Dropdowns