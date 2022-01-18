export default function Detail() {
    return (
        <>
        <section>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="60"
                                height="60">
                                <circle cx="30" cy="30" r="30" fill="#3546AB" />
                            </mask>
                            <g mask="url(#mask0)">
                                <circle cx="30" cy="30" r="30" fill="#00BAFF" />
                                <path
                                    d="M41.5001 35.0001C52.3001 38.2001 49.6668 48.0001 47.0001 52.5001L71.0001 60.5001L79.5001 -12.9999C63.6667 -13.8333 29.5001 -14.9999 19.5001 -12.9999C7.00007 -10.4999 13.5001 4.00006 12.0001 14.0001C10.5001 24.0001 28.0001 31.0001 41.5001 35.0001Z"
                                    fill="#4D17E2" />
                                <path
                                    d="M54.495 47.785C54.495 51.285 53.655 54.54 51.975 57.55C50.295 60.56 47.74 63.01 44.31 64.9C40.88 66.79 36.645 67.735 31.605 67.735C26.705 67.735 22.33 66.86 18.48 65.11C14.7 63.29 11.655 60.84 9.345 57.76C7.105 54.61 5.81 51.04 5.46 47.05H15.645C15.855 49.15 16.555 51.215 17.745 53.245C19.005 55.205 20.755 56.85 22.995 58.18C25.305 59.44 28.07 60.07 31.29 60.07C35.49 60.07 38.71 58.95 40.95 56.71C43.19 54.47 44.31 51.6 44.31 48.1C44.31 45.09 43.505 42.64 41.895 40.75C40.355 38.86 38.43 37.39 36.12 36.34C33.81 35.22 30.66 34.03 26.67 32.77C21.98 31.23 18.2 29.795 15.33 28.465C12.53 27.065 10.115 25 8.085 22.27C6.125 19.54 5.145 15.935 5.145 11.455C5.145 7.60499 6.055 4.20999 7.875 1.27C9.765 -1.67 12.425 -3.945 15.855 -5.555C19.355 -7.165 23.45 -7.97 28.14 -7.97C35.42 -7.97 41.195 -6.185 45.465 -2.615C49.735 0.884996 52.22 5.365 52.92 10.825H42.63C42.07 7.885 40.565 5.295 38.115 3.055C35.665 0.814997 32.34 -0.305003 28.14 -0.305003C24.29 -0.305003 21.21 0.709996 18.9 2.73999C16.59 4.69999 15.435 7.5 15.435 11.14C15.435 14.01 16.17 16.355 17.64 18.175C19.18 19.925 21.07 21.325 23.31 22.375C25.55 23.355 28.63 24.475 32.55 25.735C37.31 27.275 41.125 28.745 43.995 30.145C46.935 31.545 49.42 33.68 51.45 36.55C53.48 39.35 54.495 43.095 54.495 47.785Z"
                                    fill="white" />
                            </g>
                        </svg>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                            <li className="nav-item my-auto">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item my-auto">
                                <a className="nav-link" href="#">Games</a>
                            </li>
                            <li className="nav-item my-auto">
                                <a className="nav-link" href="#">Rewards</a>
                            </li>

                            <li className="nav-item my-auto">
                                <a className="nav-link" href="#">Discover</a>
                            </li>
                            <li className="nav-item my-auto me-lg-20">
                                <a className="nav-link" href="#">Global Rank</a>
                            </li>
                            <li className="nav-item my-auto">
                                <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                                    href="./src/sign-in.html" role="button">Sign
                                    In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>


        <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
            <div className="detail-header pb-50">
                <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
                <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
            </div>
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-4">
                            <img src="/img/Thumbnail-3.png" width="280" height="380" className="img-fluid" alt=""/>
                        </div>
                        
                        <div className="col-md-12 col-8 d-md-none d-block">
                            <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">Mobile Legends:<br/>
                                The New Battle 2021</h2>
                            <p className="text-sm color-palette-2 text-start mb-0">Category: Mobile</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                  
                    <div className="pb-50 d-md-block d-none">
                        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">Mobile Legends:<br/>
                            The New Battle 2021</h2>
                        <p className="text-lg color-palette-2 mb-0">Category: Mobile</p>
                    </div>
                    <hr/>
                    <form action="./checkout.html" method="POST">
                        <div className="pt-md-50 pt-30">
                            <div className="">
                                <label htmlfor="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">Verify
                                    ID</label>
                                <input type="text" className="form-control rounded-pill text-lg" id="ID" name="ID"
                                    aria-describedby="verifyID" placeholder="Enter your ID"/>
                            </div>
                        </div>
                        <div className="pt-md-50 pb-md-50 pt-30 pb-20">
                            <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
                            <div className="row justify-content-between">
                                <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                                    htmlfor="topup1">
                                    <input className="d-none" type="radio" id="topup1" name="topup" value="topup1"/>
                                    <div className="detail-card">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-3xl color-palette-1 m-0"><span className="fw-medium">125</span>
                                                Gold
                                            </p>
                                            <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                                <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-lg color-palette-1 m-0">Rp 3.250.000</p>
                                    </div>
                                </label>
                                <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                                    htmlfor="topup2">
                                    <input className="d-none" type="radio" id="topup2" name="topup" value="topup2"/>
                                    <div className="detail-card">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-3xl color-palette-1 m-0"><span className="fw-medium">225</span>
                                                Gold
                                            </p>
                                            <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                                <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-lg color-palette-1 m-0">Rp 3.250.000</p>
                                    </div>
                                </label>
                                <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                                    htmlfor="topup3">
                                    <input className="d-none" type="radio" id="topup3" name="topup" value="topup3"/>
                                    <div className="detail-card">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-3xl color-palette-1 m-0"><span className="fw-medium">350</span>
                                                Gold
                                            </p>
                                            <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                                <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-lg color-palette-1 m-0">Rp 3.250.000</p>
                                    </div>
                                </label>
                                <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                                    htmlfor="topup4">
                                    <input className="d-none" type="radio" id="topup4" name="topup" value="topup4"/>
                                    <div className="detail-card">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-3xl color-palette-1 m-0"><span className="fw-medium">550</span>
                                                Gold
                                            </p>
                                            <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                                <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-lg color-palette-1 m-0">Rp 3.250.000</p>
                                    </div>
                                </label>
                                <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                                    htmlfor="topup5">
                                    <input className="d-none" type="radio" id="topup5" name="topup" value="topup5"/>
                                    <div className="detail-card">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-3xl color-palette-1 m-0"><span className="fw-medium">750</span>
                                                Gold
                                            </p>
                                            <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                                <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-lg color-palette-1 m-0">Rp 3.250.000</p>
                                    </div>
                                </label>
                                <div className="col-lg-4 col-sm-6">
                                 
                                </div>
                            </div>
                        </div>
                        <div className="pb-md-50 pb-20">
                            <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
                            <fieldset id="paymentMethod">
                                <div className="row justify-content-between">
                                    <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                                        htmlfor="transfer">
                                        <input className="d-none" type="radio" id="transfer" name="paymentMethod"
                                            value="transfer"/>
                                        <div className="detail-card">
                                            <div className="d-flex justify-content-between">
                                                <p className="text-3xl color-palette-1 fw-medium m-0">Transfer</p>
                                                <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                                    <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                                        stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-lg color-palette-1 m-0">Worldwide Available</p>
                                        </div>
                                    </label>
                                    <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                                        htmlfor="visa">
                                        <input className="d-none" type="radio" id="visa" name="paymentMethod" value="visa"/>
                                        <div className="detail-card">
                                            <div className="d-flex justify-content-between">
                                                <p className="text-3xl color-palette-1 fw-medium m-0">VISA</p>
                                                <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                                    <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-lg color-palette-1 m-0">Credit Card</p>
                                        </div>
                                    </label>
                                    <div className="col-lg-4 col-sm-6">
                                       
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="pb-50">
                            <label htmlfor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">Bank
                                Account
                                Name</label>
                            <input type="text" className="form-control rounded-pill text-lg" id="bankAccount"
                                name="bankAccount" aria-describedby="bankAccount"
                                placeholder="Enter your Bank Account Name"/>
                        </div>
                        <div className="d-sm-block d-flex flex-column w-100">
                            <a href="./checkout.html" type="submit"
                                className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Continue</a>
                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
        </>
 
    );
}