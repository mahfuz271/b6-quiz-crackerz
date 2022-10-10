import React from 'react';

const Header = () => {
    return (
        <header id="masthead" class="site-header header">
            <div class="container">
                <div class="navbar row" role="navigation">
                    <div class="navbar-header col-xs-12 col-sm-12 col-md-3">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="fa fa-bars"></span>
                        </button>
                        <a href="https://learnplus.trendingtemplates.com/" class="logo">
                            <img alt="LearnPlus - Greate theme for Education" src="https://learnplus.trendingtemplates.com/wp-content/themes/learnplus/img/logo.png" />
                        </a>
                    </div>

                    <nav id="site-navigation" class="primary-nav nav col-xs-12 col-md-9">
                        <div class="main-nav">
                            <ul id="menu-primary-menu" class="menu"><li id="menu-item-8896" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1875 current_page_item current-menu-ancestor current_page_ancestor menu-item-has-children menu-item-8896 bg-menu-white menu-item-mega"><a href="https://learnplus.trendingtemplates.com/">Home</a></li></ul>				</div>

                    </nav>
                </div>
            </div>
        </header>

    );
};

export default Header;