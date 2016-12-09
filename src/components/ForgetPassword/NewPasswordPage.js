import React from 'react';
import NewPasswordForm from './NewPasswordForm';
import Footer from '../Footer/Footer';

const NewPasswordPage = () => {
    return (
    <div className="signup-page">
        <div className="wrapper">
            <div className="header header-filter" style={{backgroundImage: 'url(../assets/img/city.jpg)', backgroundSize: 'cover', backgroundPosition: 'top center'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
                            <div className="card card-signup">
                                <NewPasswordForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default NewPasswordPage
