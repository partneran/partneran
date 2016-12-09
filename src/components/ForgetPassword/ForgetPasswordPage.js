import React from 'react';
import ForgetPasswordForm from './ForgetPasswordForm';
import Footer from '../Footer/Footer';

const ForgetPasswordPage = () => {
    return (
        <div className="signup-page">
            <div className="header header-filter" style={{backgroundImage: 'url(../assets/img/city.jpg)', backgroundSize: 'cover', backgroundPosition: 'top center'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
                            <div className="card card-signup">
                                <ForgetPasswordForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ForgetPasswordPage
