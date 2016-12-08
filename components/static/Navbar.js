import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-transparent navbar-fixed-top navbar-color-on-scroll">
            <div class="container">
                        <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-index">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                        </button>
                        <a href="http://www.creative-tim.com">
                            <div class="logo-container">
                                <div class="brand">
                                        Partneran
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="collapse navbar-collapse" id="navigation-index">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a href="#" target="_blank">
                                    <i class="material-icons">explore</i> Explore
                                </a>
                            </li>

                            <!-- only visible when user hasn't been loged in -->
                            <li>
                                <a href="#" target="_blank">
                                    Sign In <!-- Belum nemu icon -->
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    Sign Up <!-- Belum nemu icon -->
                                </a>
                            </li>
                            <!-- only visible when user hasn't been loged in -->

                            <!-- only visible when user has been loged in -->
                            <li>
                                <a href="#" target="_blank">
                                    <i class="material-icons">account_circle</i> My Profile
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i class="material-icons">add_circle</i> Share Idea <!-- Belum nemu icon -->
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    Sign Out <!-- Belum nemu icon -->
                                </a>
                            </li>
                            <!-- only visible when user has been loged in -->

                        </ul>
                    </div>
            </div>
        </nav>
    )
}