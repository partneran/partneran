import React from 'react';
import SignupForm from './SignupForm';
import Footer from '../Footer/Footer';


const SignupPage = (props) => {
  return (
    <div className="signup-page">
     <div className="wrapper">
        <div className="header header-filter" style={{backgroundImage: 'url(../assets/img/city.jpg)', backgroundSize: 'cover', backgroundPosition: 'top center'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) 
}

// <!doctype html>
// <html lang="en">
// <head>
// 	<meta charset="utf-8" />
// 	<link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png">
// 	<link rel="icon" type="image/png" href="../assets/img/favicon.png">
// 	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

// 	<title>Sign Up Page - Material Kit by Creative Tim</title>

// 	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />

// 	<!--     Fonts and icons     -->
// 	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
//     <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
// 	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />

// 	<!-- CSS Files -->
//     <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
//     <link href="../assets/css/material-kit.css" rel="stylesheet"/>

// </head>


// <!-- CLASS FOR BODY SHOULD BE SIGNUP-PAGE -->
// <body class="signup-page">
//     <div class="wrapper">

//     <!-- IT's SIGN UP PAGE -->
// 		<div class="header header-filter" style="background-image: url('../assets/img/city.jpg'); background-size: cover; background-position: top center;">
// 			<div class="container">
// 				<div class="row">
// 					<div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
// 						<div class="card card-signup">
// 							<form class="form" method="" action="">
// 								<div class="header header-info text-center" style="height:auto">
// 									<h4>Sign In</h4>
// 									<div class="social-line">
// 										<a href="#pablo" class="btn btn-simple btn-just-icon">
// 											<i class="fa fa-facebook-square"></i>
// 										</a>
// 										<a href="#pablo" class="btn btn-simple btn-just-icon">
// 											<i class="fa fa-twitter"></i>
// 										</a>
// 										<a href="#pablo" class="btn btn-simple btn-just-icon">
// 											<i class="fa fa-google-plus"></i>
// 										</a>
// 									</div>
// 								</div>
// 								<p class="text-divider">Or Be Classical</p>
// 								<div class="content">

// 									<div class="input-group">
// 										<span class="input-group-addon">
// 											<i class="material-icons">email</i>
// 										</span>
// 										<input type="text" class="form-control" placeholder="Email...">
// 									</div>

// 									<div class="input-group">
// 										<span class="input-group-addon">
// 											<i class="material-icons">lock_outline</i>
// 										</span>
// 										<input type="password" placeholder="Password..." class="form-control" />
// 									</div>

// 								</div>
// 								<div class="footer text-center">
//                   <a href="#" class="btn btn-simple btm-sm btn-info">Need an account? Sign Un Here</a>
// 									<a href="#pablo" class="btn btn-info btn-lg">Sign In</a>
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

//       <!-- THIS IS FOOTER -->
//       <footer>
//         <div class="container">
//           <div class="copyright pull-right">
//             &copy; 2016 made with <i class="fa fa-heart heart"></i> by Partneran team
//           </div>
//           <nav class="pull-left">
//             <ul>
//               <li>
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#">Explore</a>
//               </li>
//               <li>
//                 <a href="#">About</a>
//               </li>
//               <li>
//                 <a href="#">Share Idea</a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </footer>
//       <!-- THIS IS THE END OF FOOTER -->

// 		</div>
//     <!-- IT's END OF SIGN UP PAGE -->

//     </div>

//     <!-- IT's NEEDED FOR THIS PAGE -->
//     <!--   Core JS Files   -->
//     <script src="../assets/js/jquery.min.js" type="text/javascript"></script>
//     <script src="../assets/js/bootstrap.min.js" type="text/javascript"></script>
//     <script src="../assets/js/material.min.js"></script>

//     <!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ -->
//     <script src="../assets/js/nouislider.min.js" type="text/javascript"></script>

//     <!--  Plugin for the Datepicker, full documentation here: http://www.eyecon.ro/bootstrap-datepicker/ -->
//     <script src="../assets/js/bootstrap-datepicker.js" type="text/javascript"></script>

//     <!-- Control Center for Material Kit: activating the ripples, parallax effects, scripts from the example pages etc -->
//     <script src="../assets/js/material-kit.js" type="text/javascript"></script>

// </body>


// </html>

export default SignupPage