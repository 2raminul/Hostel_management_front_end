import React from 'react'

const Pagination = () => {

	const paginationCode = `<ul className="pagination">
  <li className="page-item"><a className="page-link" href="#">Previous</a></li>
  <li className="page-item"><a className="page-link" href="#">1</a></li>
  <li className="page-item"><a className="page-link" href="#">2</a></li>
  <li className="page-item"><a className="page-link" href="#">3</a></li>
  <li className="page-item"><a className="page-link" href="#">Next</a></li>
</ul>`;

  return (
    	<div className="content px-xl-5 px-lg-4 px-3 py-3 page-body bg-card">
			<div className="card-body p-0">
				<h4 className="mb-4">Pagination</h4>
				<p className="lead">Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.</p>
				<div className="row g-4">
					<div className="col-12">							
						<div className="rounded-4" data-lang="html">
							<pre className='h6 language-html text-primary'><code>{paginationCode}</code></pre>
						</div>
					</div>
					<div className="col-12">
						<h6>Basic Example</h6>
						<nav aria-label="Page navigation">
							<ul className="pagination">
								<li className="page-item"><a className="page-link" href="#">Previous</a></li>
								<li className="page-item"><a className="page-link" href="#">1</a></li>
								<li className="page-item"><a className="page-link" href="#">2</a></li>
								<li className="page-item"><a className="page-link" href="#">3</a></li>
								<li className="page-item"><a className="page-link" href="#">Next</a></li>
							</ul>
						</nav>
					</div>
					<div className="col-12">
						<h5>Working with icons</h5>
						<p>Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with <code>aria</code> attributes.</p>
						<nav aria-label="Page navigation">
							<ul className="pagination">
								<li className="page-item">
								<a className="page-link" href="#" aria-label="Previous">
									<span aria-hidden="true">&laquo;</span>
								</a>
								</li>
								<li className="page-item"><a className="page-link" href="#">1</a></li>
								<li className="page-item"><a className="page-link" href="#">2</a></li>
								<li className="page-item"><a className="page-link" href="#">3</a></li>
								<li className="page-item">
								<a className="page-link" href="#" aria-label="Next">
									<span aria-hidden="true">&raquo;</span>
								</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col-12">
						<h5>Sizing</h5>
						<p>Fancy larger or smaller pagination? Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for additional sizes.</p>
						<nav aria-label="...">
							<ul className="pagination pagination-lg">
								<li className="page-item active" aria-current="page">
								<span className="page-link">1</span>
								</li>
								<li className="page-item"><a className="page-link" href="#">2</a></li>
								<li className="page-item"><a className="page-link" href="#">3</a></li>
							</ul>
						</nav>
						<nav aria-label="...">
							<ul className="pagination pagination-sm">
								<li className="page-item active" aria-current="page">
								<span className="page-link">1</span>
								</li>
								<li className="page-item"><a className="page-link" href="#">2</a></li>
								<li className="page-item"><a className="page-link" href="#">3</a></li>
							</ul>
						</nav>
					</div>
					<div className="col-12">
						<h5>Alignment</h5>
						<p>Change the alignment of pagination components with <a href="https://getbootstrap.com/docs/5.1/utilities/flex/">flexbox utilities</a>.</p>
						<div className="card">
							<div className="card-body">
								<nav aria-label="Page navigation">
									<ul className="pagination justify-content-center">
									<li className="page-item disabled">
										<a className="page-link">Previous</a>
									</li>
									<li className="page-item"><a className="page-link" href="#">1</a></li>
									<li className="page-item"><a className="page-link" href="#">2</a></li>
									<li className="page-item"><a className="page-link" href="#">3</a></li>
									<li className="page-item">
										<a className="page-link" href="#">Next</a>
									</li>
									</ul>
								</nav>
							</div>
							<div className="card-footer">
								<nav aria-label="Page navigation">
									<ul className="pagination justify-content-end">
									<li className="page-item disabled">
										<a className="page-link">Previous</a>
									</li>
									<li className="page-item"><a className="page-link" href="#">1</a></li>
									<li className="page-item"><a className="page-link" href="#">2</a></li>
									<li className="page-item"><a className="page-link" href="#">3</a></li>
									<li className="page-item">
										<a className="page-link" href="#">Next</a>
									</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Pagination