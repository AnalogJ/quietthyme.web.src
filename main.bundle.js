webpackJsonp([1,5],{

/***/ 1000:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1001:
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar class=\"navbar-fixed-top\" [color]=\"'#128950'\" [height]=\"'3px'\"></ng2-slim-loading-bar>\n\n<!-- Content\n============================================= -->\n<section id=\"content\" style=\"margin-bottom: 0px;\">\n\n    <div class=\"content-wrap nopadding\">\n\n        <div class=\"section nopadding nomargin\" style=\"width: 100%; height: 100%; position: absolute; left: 0; top: 0; background: url('assets/images/bg/login_splash.jpg') center center no-repeat; background-size: cover;\"></div>\n\n        <div class=\"section nobg full-screen nopadding nomargin\" style=\"height:100vh;\">\n            <div class=\"container vertical-middle divcenter clearfix\" style=\"position: absolute; top: 50%; width: 100%; padding-top: 0px; padding-bottom: 0px; margin-top: -330px;\">\n\n                <div class=\"row center\">\n                    <a href=\"/\"><img style=\"max-width:200px\" src=\"assets/images/logo/logo-white-large.png.svg\" alt=\"QuietThyme Logo\"></a>\n                </div>\n\n                <div class=\"panel panel-default divcenter noradius noborder\" style=\"max-width: 400px; background-color: rgba(255,255,255,0.93);\">\n                    <div class=\"panel-body\" style=\"padding: 40px;\">\n                        <form id=\"login-form\" name=\"login-form\" class=\"nobottommargin\" (ngSubmit)=\"login()\">\n                            <h3>Login to your Account</h3>\n\n                            <div class=\"col_full\">\n                                <label for=\"login-form-email\">Email:</label>\n                                <input [(ngModel)]=\"loginEmail\" type=\"email\" id=\"login-form-email\" name=\"login-form-email\" class=\"form-control not-dark\" required/>\n                            </div>\n\n                            <div class=\"col_full\">\n                                <label for=\"login-form-password\">Password:</label>\n                                <input [(ngModel)]=\"loginPassword\" type=\"password\" id=\"login-form-password\" name=\"login-form-password\" class=\"form-control not-dark\" required/>\n                            </div>\n\n                            <div class=\"col_full nobottommargin\">\n                                <button type=\"submit\" class=\"button button-3d button-black nomargin\" id=\"login-form-submit\" name=\"login-form-submit\" [disabled]=\"loading.login\">\n                                    <span>Login</span>\n                                </button>\n                                <a href=\"#\" class=\"fright\">Forgot Password?</a>\n                            </div>\n                        </form>\n\n                        <div class=\"line line-sm\"></div>\n\n                        <div class=\"center\">\n                            <h4 style=\"margin-bottom: 15px;\">or Login with:</h4>\n                            <a href=\"#\" class=\"button button-rounded si-facebook si-colored\">Facebook</a>\n                            <span class=\"hidden-xs\">or</span>\n                            <a href=\"#\" class=\"button button-rounded si-twitter si-colored\">Twitter</a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row center dark\"><small>Copyrights &copy; All Rights Reserved by QuietThyme Inc.</small></div>\n\n            </div>\n        </div>\n\n    </div>\n\n</section><!-- #content end -->\n"

/***/ }),

/***/ 1002:
/***/ (function(module, exports) {

module.exports = "<quietthyme-header></quietthyme-header>\n<quietthyme-page-title></quietthyme-page-title>\n\n<!-- Content\n============================================= -->\n<section id=\"content\" class=\"footer-padding\">\n\n    <div class=\"content-wrap\">\n\n        <div class=\"container clearfix\">\n\n            <div class=\"col_one_third nobottommargin\">\n\n                <div class=\"well well-lg nobottommargin\">\n                    <form id=\"login-form\" name=\"login-form\" class=\"nobottommargin\" action=\"#\" method=\"post\">\n\n                        <h3>Login to your Account</h3>\n\n                        <div class=\"col_full\">\n                            <label for=\"login-form-username\">Email:</label>\n                            <input [(ngModel)]=\"loginEmail\" type=\"text\" id=\"login-form-email\" name=\"login-form-email\" class=\"form-control\" />\n                        </div>\n\n                        <div class=\"col_full\">\n                            <label for=\"login-form-password\">Password:</label>\n                            <input [(ngModel)]=\"loginPassword\" type=\"password\" id=\"login-form-password\" name=\"login-form-password\" class=\"form-control\" />\n                        </div>\n\n                        <div class=\"col_full nobottommargin\">\n                            <button (click)=\"login()\" class=\"button button-3d nomargin\" id=\"login-form-submit\" name=\"login-form-submit\" value=\"login\">Login</button>\n                        </div>\n\n                    </form>\n                </div>\n\n            </div>\n\n            <div class=\"col_two_third col_last nobottommargin\">\n\n\n                <h3>Don't have an Account? Register Now.</h3>\n\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vel odio non dicta provident sint ex autem mollitia dolorem illum repellat ipsum aliquid illo similique sapiente fugiat minus ratione.</p>\n\n                <form id=\"register-form\" name=\"register-form\" class=\"nobottommargin\" action=\"#\" method=\"post\">\n\n                    <div class=\"col_half\">\n                        <label for=\"register-form-name\">Name:</label>\n                        <input [(ngModel)]=\"regName\" type=\"text\" id=\"register-form-name\" name=\"register-form-name\" class=\"form-control\" />\n                    </div>\n\n                    <div class=\"col_half col_last\">\n                        <label for=\"register-form-email\">Email Address:</label>\n                        <input [(ngModel)]=\"regEmail\" type=\"text\" id=\"register-form-email\" name=\"register-form-email\" class=\"form-control\" />\n                    </div>\n\n\n                    <div class=\"clear\"></div>\n\n                    <div class=\"col_half\">\n                        <label for=\"register-form-password\">Choose Password:</label>\n                        <input [(ngModel)]=\"regPassword\" type=\"password\" id=\"register-form-password\" name=\"register-form-password\" class=\"form-control\" />\n                    </div>\n\n                    <div class=\"col_half col_last\">\n                        <label for=\"register-form-repassword\">Re-enter Password:</label>\n                        <input [(ngModel)]=\"regConfirmPassword\" type=\"password\" id=\"register-form-repassword\" name=\"register-form-repassword\" class=\"form-control\" />\n                    </div>\n\n                    <div class=\"clear\"></div>\n\n                    <div class=\"col_full nobottommargin\">\n                        <button (click)=\"register()\" class=\"button button-3d button-black nomargin\" id=\"register-form-submit\" name=\"register-form-submit\" value=\"register\">Register Now</button>\n                    </div>\n\n                </form>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</section><!-- #content end -->\n\n<quietthyme-footer class=\"navbar-fixed-bottom\"></quietthyme-footer>"

/***/ }),

/***/ 1003:
/***/ (function(module, exports) {

module.exports = "<div scrollSpy id=\"wrapper\" class=\"clearfix\" style=\"opacity: 1;\">\n    <!-- Routed views go here -->\n    <router-outlet></router-outlet>\n\n</div>\n\n\n<!-- Go To Top\n============================================= -->\n<div id=\"gotoTop\" class=\"icon-angle-up\"></div>"

/***/ }),

/***/ 1004:
/***/ (function(module, exports) {

module.exports = "<quietthyme-header></quietthyme-header>\n<quietthyme-page-title *ngIf=\"book\" title=\"Book Details\"></quietthyme-page-title>\n\n<!-- Content\n\t\t============================================= -->\n<section id=\"content\" class=\"footer-padding\">\n\n    <div class=\"content-wrap\">\n\n        <div class=\"container clearfix\">\n\n            <div class=\"row\">\n                <div class=\"col-md-offset-2 col-md-8\">\n                    <div class=\"single-post nobottommargin\">\n\n                        <!-- Single Post\n\t\t\t\t\t\t============================================= -->\n                        <div class=\"entry clearfix\" *ngIf=\"book\">\n\n                            <!-- Entry Title\n\t\t\t\t\t\t\t============================================= -->\n                            <div class=\"entry-title\">\n                                <h2>{{ book.title }}</h2>\n                            </div><!-- .entry-title end -->\n\n                            <!-- Entry Meta\n\t\t\t\t\t\t\t============================================= -->\n                            <ul class=\"entry-meta clearfix\">\n                                <li><i class=\"icon-calendar3\"></i> {{ book.created_at }}</li>\n                                <li><a href=\"#\"><i class=\"icon-user\"></i> {{ book.authors }}</a></li>\n                                <li *ngIf=\"book.series_name\"><i class=\"icon-folder-open\"></i> <a href=\"#\">{{ book.series_name }}</a> #{{ book.series_number }}</li>\n                                <li *ngIf=\"book.isbn || book.isbn10\"><i class=\"icon-bookmark2\"></i> <a href=\"#\">{{ book.isbn || book.isbn10 }}</a></li>\n                            </ul><!-- .entry-meta end -->\n\n                            <!-- Entry Content\n\t\t\t\t\t\t\t============================================= -->\n                            <div class=\"entry-content notopmargin\">\n\n                                <!-- Entry Image\n\t\t\t\t\t\t\t\t============================================= -->\n                                <div class=\"entry-image alignleft\">\n                                    <a href=\"#\">\n                                        <img *ngIf=\"book.cover\" src=\"https://s3.amazonaws.com/{{ book.cover }}\" alt=\"{{ book.title }}\">\n                                        <img *ngIf=\"!book.cover\" src=\"assets/images/noart.png\" alt=\"{{ book.title }}\">\n                                    </a>\n                                </div><!-- .entry-image end -->\n\n                                <markdown [data]=\"book.short_summary\"></markdown>\n                                <!-- Post Single - Content End -->\n\n                                <!-- Tag Cloud\n\t\t\t\t\t\t\t\t============================================= -->\n                                <div class=\"tagcloud clearfix bottommargin\">\n                                    <a href=\"#\" *ngFor=\"let tag of book.tags; let myIndex = index\">{{ tag }}</a>\n                                </div><!-- .tagcloud end -->\n\n                                <div class=\"clear\"></div>\n\n                                <!-- Post Single - Share\n\t\t\t\t\t\t\t\t============================================= -->\n                                <div class=\"si-share noborder clearfix\">\n                                    <span>Find on:</span>\n                                    <div>\n                                        <a *ngIf=\"book.amazon_id\" href=\"http://www.amazon.com/exec/obidos/ASIN/{{ book.amazon_id }}\" class=\"social-icon si-borderless si-amazon\">\n                                            <i class=\"icon-amazon\"></i>\n                                            <i class=\"icon-amazon\"></i>\n                                        </a>\n                                        <a *ngIf=\"book.google_id\" href=\"https://books.google.com/books?id={{ book.google_id }}\" class=\"social-icon si-borderless si-google\">\n                                            <i class=\"icon-google\"></i>\n                                            <i class=\"icon-google\"></i>\n                                        </a>\n                                        <a *ngIf=\"book.goodreads_id\" href=\"https://www.goodreads.com/book/show/{{ book.goodreads_id }}\" class=\"social-icon si-borderless si-goodreads\">\n                                            <i>g</i>\n                                            <i>g</i>\n                                        </a>\n                                    </div>\n                                </div><!-- Post Single - Share End -->\n\n                            </div>\n                        </div><!-- .entry end -->\n\n                    </div>\n                </div>\n            </div>\n\n\n        </div>\n\n    </div>\n\n</section><!-- #content end -->\n\n<quietthyme-footer class=\"navbar-fixed-bottom\"></quietthyme-footer>"

/***/ }),

/***/ 1005:
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar class=\"navbar-fixed-top\" [color]=\"'#128950'\" [height]=\"'3px'\"></ng2-slim-loading-bar>\n<quietthyme-header></quietthyme-header>\n<quietthyme-page-title title=\"Library\" subtitle=\"Your library is accessible anytime, anywhere, on any device\"></quietthyme-page-title>\n\n<!-- Content\n============================================= -->\n<section id=\"content\" class=\"footer-padding\" >\n\n    <div class=\"content-wrap\">\n\n        <div class=\"container clearfix\" >\n\n            <div class=\"row\" >\n\n                <!-- Sidebar\n\t            ============================================= -->\n                <div class=\"col-md-3\">\n                    <div class=\"sidebar-widgets-wrap\" [scrollSpyAffix]=\"{topMargin: 330}\">\n\n                        <div class=\"widget widget-filter-links clearfix\">\n\n                            <h4>Sort By</h4>\n                            <ul class=\"shop-sorting\">\n                                <li [ngClass]=\"{'active-filter': !filter.sort}\"><a class=\"cursor-pointer\" (click)=\"setSort(null)\">Title</a></li>\n                                <li [ngClass]=\"{'active-filter': filter.sort == 'authors'}\"><a class=\"cursor-pointer\" (click)=\"setSort('authors')\">Author</a></li>\n                                <li [ngClass]=\"{'active-filter': filter.sort == 'series_name'}\"><a class=\"cursor-pointer\" (click)=\"setSort('series_name')\">Series</a></li>\n                                <li [ngClass]=\"{'active-filter': filter.sort == 'created_at'}\"><a class=\"cursor-pointer\" (click)=\"setSort('created_at')\">Added Date</a></li>\n                            </ul>\n\n                        </div>\n\n                        <div class=\"widget widget-filter-links clearfix\">\n\n                            <h4>Storage</h4>\n                            <ul class=\"custom-filter\">\n                                <li [ngClass]=\"{'active-filter': !filter.storage}\"><a class=\"cursor-pointer\" (click)=\"setStorage(null)\">All</a></li>\n                                <li [ngClass]=\"{'active-filter': filter.storage == 'quietthyme'}\"><a class=\"cursor-pointer\" (click)=\"setStorage('quietthyme')\">QuietThyme</a></li>\n                                <li *ngIf=\"connected.box\" [ngClass]=\"{'active-filter': filter.storage == 'box'}\"><a class=\"cursor-pointer\" (click)=\"setStorage('box')\">Box</a></li>\n                                <li *ngIf=\"connected.dropbox\" [ngClass]=\"{'active-filter': filter.storage == 'dropbox'}\"><a class=\"cursor-pointer\" (click)=\"setStorage('dropbox')\">Dropbox</a></li>\n                                <li *ngIf=\"connected.gdrive\" [ngClass]=\"{'active-filter': filter.storage == 'gdrive'}\"><a class=\"cursor-pointer\" (click)=\"setStorage('gdrive')\">Google Drive</a></li>\n                                <li *ngIf=\"connected.skydrive\" [ngClass]=\"{'active-filter': filter.storage == 'skydrive'}\"><a class=\"cursor-pointer\" (click)=\"setStorage('skydrive')\">OneDrive</a></li>\n                            </ul>\n\n                        </div>\n\n\n\n                    </div>\n                </div><!-- .sidebar end -->\n\n                <div class=\"col-md-9\">\n                    <!-- Shop\n\t\t\t\t============================================= -->\n                    <masonry [useImagesLoaded]=\"true\" id=\"shop\" class=\"shop product-4 grid-container clearfix\" >\n\n                        <masonry-brick *ngFor=\"let book of bookList; let myIndex = index\" class=\"product brick\">\n                            <div class=\"product-image\">\n                                <a routerLink=\"/book/{{ book.id }}\" >\n                                    <img *ngIf=\"book.cover\" src=\"https://s3.amazonaws.com/{{ book.cover }}\" alt=\"{{ book.title }}\">\n                                    <img *ngIf=\"!book.cover\" src=\"assets/images/noart.png\" alt=\"{{ book.title }}\">\n                                </a>\n                                <div class=\"book-tag\" *ngIf=\"book.series_name\">{{ book.series_name }}</div>\n\n                                <div class=\"product-overlay\">\n                                    <a (click)=\"downloadBook(book)\" class=\"add-to-cart cursor-pointer\"><i class=\"icon-cloud-download\"></i><span> Download</span></a>\n                                    <a routerLink=\"/book/{{ book.id }}\" class=\"item-quick-view cursor-pointer\" data-lightbox=\"ajax\"><i class=\"icon-info-sign\"></i><span> Details</span></a>\n\n                                </div>\n                            </div>\n                            <div class=\"product-desc center\">\n                                <div class=\"product-title cursor-pointer\"><h3><a routerLink=\"/book/{{ book.id }}\">{{ book.title }}</a></h3></div>\n                                <div class=\"product-price\">{{ book.authors }}</div>\n                            </div>\n                        </masonry-brick>\n\n                    </masonry><!-- #shop end -->\n\n                </div>\n\n            </div>\n\n\n        </div>\n\n    </div>\n\n</section><!-- #content end -->\n\n<quietthyme-footer class=\"navbar-fixed-bottom\"></quietthyme-footer>"

/***/ }),

/***/ 1006:
/***/ (function(module, exports) {

module.exports = "<!-- Footer\n============================================= -->\n<footer id=\"footer\" class=\"dark\">\n\n    <!-- Copyrights\n\t============================================= -->\n    <div id=\"copyrights\">\n\n        <div class=\"container clearfix\">\n\n            <div class=\"col_half\">\n                <img src=\"assets/images/logo/logo_2x.png\" style=\"max-width:150px\" class=\"footer-logo\">\n\n                Copyrights &copy; 2014 All Rights Reserved by QuietThyme Inc.\n            </div>\n\n            <div class=\"col_half col_last tright\">\n                <div class=\"copyrights-menu copyright-links fright clearfix\">\n                    <a href=\"#\">Home</a>/<a href=\"#\">About</a>/<a href=\"#\">Features</a>/<a href=\"#\">Portfolio</a>/<a href=\"#\">FAQs</a>/<a href=\"#\">Contact</a>\n                </div>\n                <div class=\"fright clearfix\">\n                    <a href=\"#\" class=\"social-icon si-small si-borderless nobottommargin si-facebook\">\n                        <i class=\"icon-facebook\"></i>\n                        <i class=\"icon-facebook\"></i>\n                    </a>\n\n                    <a href=\"#\" class=\"social-icon si-small si-borderless nobottommargin si-twitter\">\n                        <i class=\"icon-twitter\"></i>\n                        <i class=\"icon-twitter\"></i>\n                    </a>\n\n                    <a href=\"#\" class=\"social-icon si-small si-borderless nobottommargin si-gplus\">\n                        <i class=\"icon-gplus\"></i>\n                        <i class=\"icon-gplus\"></i>\n                    </a>\n\n                    <a href=\"#\" class=\"social-icon si-small si-borderless nobottommargin si-pinterest\">\n                        <i class=\"icon-pinterest\"></i>\n                        <i class=\"icon-pinterest\"></i>\n                    </a>\n\n                    <a href=\"#\" class=\"social-icon si-small si-borderless nobottommargin si-vimeo\">\n                        <i class=\"icon-vimeo\"></i>\n                        <i class=\"icon-vimeo\"></i>\n                    </a>\n\n                    <a href=\"#\" class=\"social-icon si-small si-borderless nobottommargin si-github\">\n                        <i class=\"icon-github\"></i>\n                        <i class=\"icon-github\"></i>\n                    </a>\n\n                    <a href=\"#\" class=\"social-icon si-small si-borderless nobottommargin si-yahoo\">\n                        <i class=\"icon-yahoo\"></i>\n                        <i class=\"icon-yahoo\"></i>\n                    </a>\n\n                    <a href=\"#\" class=\"social-icon si-small si-borderless nobottommargin si-linkedin\">\n                        <i class=\"icon-linkedin\"></i>\n                        <i class=\"icon-linkedin\"></i>\n                    </a>\n                </div>\n            </div>\n\n        </div>\n\n    </div><!-- #copyrights end -->\n\n</footer><!-- #footer end -->\n"

/***/ }),

/***/ 1007:
/***/ (function(module, exports) {

module.exports = "<!-- Header\n\t\t============================================= -->\n<header id=\"header\" class=\"full-header\">\n\n    <div id=\"header-wrap\">\n\n        <div class=\"container clearfix\">\n\n            <div id=\"primary-menu-trigger\"><i class=\"icon-reorder\"></i></div>\n\n            <!-- Logo\n\t\t\t\t============================================= -->\n            <div id=\"logo\">\n                <a href=\"/\" class=\"standard-logo\" data-dark-logo=\"assets/images/logo/logo_condensed.png\"><img style=\"padding: 7%;\" src=\"assets/images/logo/logo-large.png.svg\" alt=\"Canvas Logo\"></a>\n                <a href=\"/\" class=\"retina-logo\" data-dark-logo=\"assets/images/logo/logo_condensed.png\"><img style=\"padding: 7%;\" src=\"assets/images/logo/logo-large.png.svg\" alt=\"Canvas Logo\"></a>\n            </div><!-- #logo end -->\n\n            <!-- Primary Navigation\n\t\t\t============================================= -->\n            <nav id=\"primary-menu\">\n\n                <ul>\n                    <li><a href=\"/storage\"><div>Storage</div></a></li>\n                    <li><a href=\"/library\"><div>Library</div></a></li>\n                    <li><a href=\"/settings\"><div>Settings</div></a></li>\n                </ul>\n\n                <!-- Top Cart\n\t\t\t\t============================================= -->\n                <div id=\"top-cart\">\n                    <a href=\"#\" id=\"top-cart-trigger\"><i class=\"icon-shopping-cart\"></i><span>5</span></a>\n                    <div class=\"top-cart-content\">\n                        <div class=\"top-cart-title\">\n                            <h4>Shopping Cart</h4>\n                        </div>\n                        <div class=\"top-cart-items\">\n                            <div class=\"top-cart-item clearfix\">\n                                <div class=\"top-cart-item-image\">\n                                    <a href=\"#\"><img src=\"images/shop/small/1.jpg\" alt=\"Blue Round-Neck Tshirt\" /></a>\n                                </div>\n                                <div class=\"top-cart-item-desc\">\n                                    <a href=\"#\">Blue Round-Neck Tshirt</a>\n                                    <span class=\"top-cart-item-price\">$19.99</span>\n                                    <span class=\"top-cart-item-quantity\">x 2</span>\n                                </div>\n                            </div>\n                            <div class=\"top-cart-item clearfix\">\n                                <div class=\"top-cart-item-image\">\n                                    <a href=\"#\"><img src=\"images/shop/small/6.jpg\" alt=\"Light Blue Denim Dress\" /></a>\n                                </div>\n                                <div class=\"top-cart-item-desc\">\n                                    <a href=\"#\">Light Blue Denim Dress</a>\n                                    <span class=\"top-cart-item-price\">$24.99</span>\n                                    <span class=\"top-cart-item-quantity\">x 3</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"top-cart-action clearfix\">\n                            <span class=\"fleft top-checkout-price\">$114.95</span>\n                            <button class=\"button button-3d button-small nomargin fright\">View Cart</button>\n                        </div>\n                    </div>\n                </div><!-- #top-cart end -->\n\n                <!-- Top Search\n\t\t\t\t============================================= -->\n                <div id=\"top-search\">\n                    <a href=\"#\" id=\"top-search-trigger\"><i class=\"icon-search3\"></i><i class=\"icon-line-cross\"></i></a>\n                    <form action=\"search.html\" method=\"get\">\n                        <input type=\"text\" name=\"q\" class=\"form-control\" value=\"\" placeholder=\"Type &amp; Hit Enter..\">\n                    </form>\n                </div><!-- #top-search end -->\n\n            </nav><!-- #primary-menu end -->\n\n        </div>\n\n    </div>\n\n</header><!-- #header end -->"

/***/ }),

/***/ 1008:
/***/ (function(module, exports) {

module.exports = "<!-- Page Title\n============================================= -->\n<section id=\"page-title\">\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h1>{{ title }}</h1>\n                <span>{{ subtitle }}</span>\n            </div>\n            <div class=\"col-md-6 valign\">\n                <div class=\"text-center\">\n                    <i class=\"icon-question-sign\"></i>Your <strong>personal OPDS catalog</strong> is available at: <br/> http://catalog.quietthyme.com/beta/<strong>{{ catalogToken }}</strong></div>\n            </div>\n        </div>\n\n    </div>\n\n</section><!-- #page-title end -->\n\n"

/***/ }),

/***/ 1009:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-bottom: 50px\">\n    <div class=\"col-md-6 col-sm-6\">\n        <div class=\"storage_container\">\n            <!-- populated doughnut chart -->\n            <canvas *ngIf=\"storageData\" class=\"graph\"\n                    baseChart\n                    [data]=\"chartData\"\n                    [chartType]=\"'doughnut'\"\n                    [options]=\"chartOptions\"\n                    [colors]=\"chartColors\"\n                    [legend]=\"false\"\n                    (chartHover)=\"chartHovered($event)\"\n                    (chartClick)=\"chartClicked($event)\"></canvas>\n\n            <!-- disconnected doughnut chart -->\n            <canvas *ngIf=\"!storageData\" class=\"graph\"\n                    baseChart\n                    [data]=\"disconnectedData\"\n                    [chartType]=\"'doughnut'\"\n                    [options]=\"chartOptions\"\n                    [colors]=\"disconnectedChartColors\"\n                    [legend]=\"false\"\n                    (chartHover)=\"chartHovered($event)\"\n                    (chartClick)=\"chartClicked($event)\"></canvas>\n\n            <img class=\"logo\" [ngClass]=\"{'disconnected': !storageData}\" [src]=\"storageLogo\">\n\n        </div>\n    </div>\n    <div class=\"col-md-6 col-sm-6\">\n        <h3>{{ storageType }}</h3>\n        <p *ngIf=\"storageData\">{{ storageData.free_space |  fileSize}} free</p>\n        <div *ngIf=\"storageData\" class=\"btn-group\" dropdown>\n            <button [ngClass]=\"{'button-border': !storageData.location_code}\" type=\"button\" class=\"button button-mini button-rounded\" dropdownToggle>\n                {{ storageData.location_code ? storageData.location_code : 'Calibre' }}\n            </button>\n            <ul dropdownMenu role=\"menu\" aria-labelledby=\"single-button\">\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Main Drive</a></li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">A Drive</a></li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">B Drive</a></li>\n                <li class=\"divider dropdown-divider\"></li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Clear</a></li>\n            </ul>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 1010:
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar class=\"navbar-fixed-top\" [color]=\"'#128950'\" [height]=\"'3px'\"></ng2-slim-loading-bar>\n\n<quietthyme-header></quietthyme-header>\n<!-- Content\n============================================= -->\n<section id=\"content\">\n\n    <div class=\"content-wrap\">\n\n        <div class=\"container clearfix\">\n\n            <div class=\"row clearfix\">\n\n                <div class=\"col-md-offset-2 col-md-8\">\n                    <h1 class=\"text-center\">Privacy Policy</h1>\n\n\n                    <p>At QuietThyme, we collect and manage user data according to the following Privacy Policy, with the goal of incorporating our company values: transparency, accessibility, sanity, usability. This document is part of QuietThyme's Terms of Service, and by using QuietThyme.com (the \"Website\"), you agree to the terms of this Privacy Policy and the Terms of Service. Please read the Terms of Service in their entirety, and refer to those for definitions and contacts.</p>\n                    <p><strong>Data Collected</strong></p>\n                    <p>We collect anonymous data from every visitor of the Website to monitor traffic and fix bugs. For example, we collect information like web requests, the data sent in response to such requests, the Internet Protocol address, the browser type, the browser language, and a timestamp for the request.</p>\n                    <p>We ask you to log in and provide certain personal information (such as your email address and/or full name) in order to be able to save your profile and the ebooks, catalog, invoices, and other data associated with it.  In order to enable these or any other login based features, we use cookies to store session information for your convenience. Cookies are required to use the Website.</p>\n                    <p>You are able to view, change and remove your data associated with your profile. Should you choose to delete your account, please contact us at support@QuietThyme.com and we will follow up with such request as soon as possible. </p>\n                    <p><strong>Use of the Data</strong></p>\n                    <p>We only use your personal information to provide you the QuietThyme services or to communicate with you about the services or the Website.</p>\n                    <p>With respect to any data you may upload to QuietThyme, we take the privacy and confidentiality of such data seriously.</p>\n                    <p>We employ industry standard security techniques to protect against unauthorized access of data about you that we store, including personal information.</p>\n                    <p><strong>We do not share personal information you have provided to us without your consent</strong>, unless:</p>\n                    <ul>\n                        <li>doing so is appropriate to carry out a user’s request;</li>\n                        <li>we believe it's needed to enforce our Terms of Service, or that is legally required;</li>\n                        <li>we believe it's needed to detect, prevent or address fraud, security or technical issues;</li>\n                        <li>otherwise protect our property, legal rights, or that of others.</li>\n                    </ul>\n                    <p>QuietThyme is operated from Canada. If you are visiting the Website from outside Canada, you agree to any processing of any personal information you provide us according to this policy.</p>\n                    <p>QuietThyme may contact you, by email or other means. For example, QuietThyme may send you promotional emails relating to QuietThyme that we feel you would be interested in, or communicate with you about your use of the QuietThyme website. QuietThyme may also use technology to alert us via a confirmation email when you open an email from us. If you do not want to receive email from QuietThyme, please opt out of receiving emails at the bottom of any QuietThyme emails or by editing you profile preferences.</p>\n                    <p><strong>Sharing of Data</strong></p>\n                    <p>We don't sell your personal information to third parties. Aggregated, anonymized data is periodically transmitted to external services to help us improve the QuietThyme Website and service, and in some cases your user identifiers (your username or email address) may be transmitted to external services for the same reason. We currently use Google Analytics (traffic analysis, SEO optimization) but we reserve the right to include other third party analytics services in the future. We listed below what data these third parties extract exactly. Feel free to check out their own Privacy Policies to find out more.</p>\n                    <ul>\n                        <li>Google Analytics: anonymous (ad serving domains, browser type, demographics, language settings, page views, time/date), pseudonymous (IP address)</li>\n                    </ul>\n                    <p>We may also use social buttons provided by services like Twitter, Google+ and Facebook. Your use of these third party services is entirely optional. We are not responsible for the privacy policies and/or practices of these third party services, and you are responsible for reading and understanding those third party services’ privacy policies.</p>\n                    <p><strong>Changes to the Privacy Policy</strong></p>\n                    <p>We may amend this Privacy Policy from time to time. Use of information we collect now is subject to the Privacy Policy in effect at the time such information is used. If we make changes in the way we collect or use information, we will notify you by posting an announcement on the Website or sending you an email. A user is bound by any changes to the Privacy Policy when he or she uses the Services after such changes have been first posted.</p>\n                    <p>Should you have any question or concern, please write to support@QuietThyme.com</p>\n\n\n\n\n                </div>\n\n\n            </div>\n\n        </div>\n\n    </div>\n\n</section><!-- #content end -->\n\n<quietthyme-footer class=\"navbar-fixed-bottom\"></quietthyme-footer>\n"

/***/ }),

/***/ 1011:
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar class=\"navbar-fixed-top\" [color]=\"'#128950'\" [height]=\"'3px'\"></ng2-slim-loading-bar>\n\n<quietthyme-header></quietthyme-header>\n<!-- Content\n============================================= -->\n<section id=\"content\">\n\n    <div class=\"content-wrap\">\n\n        <div class=\"container clearfix\">\n\n            <div class=\"row clearfix\">\n\n                <div class=\"col-md-offset-2 col-md-8\">\n\n                    <img gravatar [email]=\"userData.email\"  [size]=\"84\" class=\"alignleft img-circle img-thumbnail notopmargin nobottommargin\" alt=\"Avatar\" style=\"max-width: 84px;\">\n\n                    <div class=\"heading-block noborder\">\n                        <h3>{{ userData.name }}</h3>\n                        <span>Settings</span>\n                    </div>\n\n                    <div class=\"clear\"></div>\n\n                    <div class=\"row clearfix\">\n\n                        <div class=\"col-md-12\">\n                            <tabset #settingsTabs>\n                                <tab>\n                                    <template tabHeading>\n                                        <i class=\"icon-bookmark2\"></i> Catalog\n                                    </template>\n\n                                    <p class=\"\">The Open Publication Distribution System (OPDS) catalog format is a syndication\n                                        format for electronic publications based on Atom and HTTP. Every QuietThyme user\n                                        gets their own unique Catalog url. When paired with a OPDS compatible ebook reader,\n                                        like Marvin (iOS), Aldiko (Android), Bluefire (Both), you can access your ebook\n                                        library anytime, anywhere, on any device.\n\n                                    </p>\n\n                                    <div class=\"well\">http://catalog.quietthyme.com/beta/<strong>{{ userData.catalog_token }}</strong></div>\n\n                                </tab>\n                                <tab>\n                                    <template tabHeading>\n                                        <i class=\"icon-credit\"></i> Plans\n                                    </template>\n                                    <div class=\"pricing bottommargin clearfix\">\n                                        <div class=\"col-sm-4\">\n\n                                            <div class=\"pricing-box\">\n                                                <div class=\"pricing-title\">\n                                                    <h3>Basic</h3>\n                                                </div>\n                                                <div class=\"pricing-price\">\n                                                    <span class=\"price-unit\">$</span>5<span class=\"price-tenure\">/mo</span>\n                                                </div>\n                                                <div class=\"pricing-features\">\n                                                    <ul>\n                                                        <li>Personal <strong>OPDS</strong> Catalog</li>\n                                                        <li><strong>1</strong> Cloud Connector <br><small>Dropbox, GDrive, OneDrive, Box</small></li>\n                                                        <li><strong>Drag & Drop</strong> Book Uploads<br/><small>Using Blackhole folders</small></li>\n                                                        <li>Chat &amp; Email Support</li>\n                                                    </ul>\n                                                </div>\n                                                <div class=\"pricing-action\">\n\n                                                    <button *ngIf=\"userData.plan == 'basic'\" class=\"button button-large button-rounded disabled\" >Current</button>\n                                                    <button *ngIf=\"userData.plan != 'basic'\"\n                                                            stripeCheckoutButton\n                                                            [planId]=\"'basic_1'\"\n                                                            [planName]=\"'Basic Plan'\"\n                                                            [planCost]=\"500\"\n                                                            (onCheckout)=\"stripeCheckoutCompleted($event)\"\n                                                            class=\"button button-large button-rounded button-border button-dark noleftmargin\">Subscribe</button>\n                                                </div>\n                                            </div>\n\n                                        </div>\n                                        <div class=\"col-sm-4\">\n\n                                            <div class=\"pricing-box best-price\">\n                                                <div class=\"pricing-title\">\n                                                    <h3>Reader</h3>\n                                                    <span>Most Popular</span>\n                                                </div>\n                                                <div class=\"pricing-price\">\n                                                    <span class=\"price-unit\">$</span>10<span class=\"price-tenure\">/mo</span>\n                                                </div>\n                                                <div class=\"pricing-features\">\n                                                    <ul>\n                                                        <li>Personal <strong>OPDS</strong> Catalog</li>\n                                                        <li><strong>2</strong> Cloud Connectors <br><small>Dropbox, GDrive, OneDrive, Box</small></li>\n                                                        <li><strong>Drag & Drop</strong> Book Uploads<br/><small>Using Blackhole folders</small></li>\n                                                        <li><strong>Calibre</strong> Integration</li>\n\n                                                        <li><strong>100mb</strong> QuietThyme Storage</li>\n                                                        <li>Chat &amp; Email Support</li>\n                                                        <li><i class=\"icon-star3\"></i>\n                                                            <i class=\"icon-star3\"></i>\n                                                            <i class=\"icon-star3\"></i>\n                                                            <i class=\"icon-star3\"></i>\n                                                            <i class=\"icon-star3\"></i></li>\n                                                    </ul>\n                                                </div>\n                                                <div class=\"pricing-action\">\n                                                    <button *ngIf=\"userData.plan == 'reader'\" class=\"button button-large button-rounded disabled\" >Current</button>\n\n                                                    <button *ngIf=\"userData.plan != 'reader'\"\n                                                            stripeCheckoutButton\n                                                            [planId]=\"'reader_1'\"\n                                                            [planName]=\"'Reader Plan'\"\n                                                            [planCost]=\"1000\"\n                                                            (onCheckout)=\"stripeCheckoutCompleted($event)\"\n                                                            [ngClass]=\"{'button-border button-dark noleftmargin' : userData.plan == 'none'}\"\n                                                            class=\"button button-large button-rounded\">Subscribe</button>\n                                                </div>\n                                            </div>\n\n                                        </div>\n\n                                        <div class=\"col-sm-4\">\n\n                                            <div class=\"pricing-box\">\n                                                <div class=\"pricing-title\">\n                                                    <h3>Library</h3>\n                                                </div>\n                                                <div class=\"pricing-price\">\n                                                    <span class=\"price-unit\">$</span>30<span class=\"price-tenure\">/mo</span>\n                                                </div>\n                                                <div class=\"pricing-features\">\n                                                    <ul>\n                                                        <li>Personal <strong>OPDS</strong> Catalog</li>\n                                                        <li><strong>All</strong> Cloud Connectors <br><small>Dropbox, GDrive, OneDrive, Box</small></li>\n                                                        <li><strong>Drag & Drop</strong> Book Uploads<br/><small>Using Blackhole folders</small></li>\n\n                                                        <li><strong>Calibre</strong> Integration</li>\n\n                                                        <li><strong>Unlimited!</strong> QuietThyme Storage</li>\n                                                        <li>Chat &amp; Email Support</li>\n                                                    </ul>\n                                                </div>\n                                                <div class=\"pricing-action\">\n                                                    <button *ngIf=\"userData.plan == 'library'\" class=\"button button-large button-rounded disabled\" >Current</button>\n\n                                                    <button *ngIf=\"userData.plan != 'library'\"\n                                                            stripeCheckoutButton\n                                                            [planId]=\"'library_1'\"\n                                                            [planName]=\"'Library Plan'\"\n                                                            [planCost]=\"2000\"\n                                                            (onCheckout)=\"stripeCheckoutCompleted($event)\"\n                                                            class=\"button button-border button-rounded button-large button-dark noleftmargin\">Subscribe</button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </tab>\n                            </tabset>\n                        </div>\n\n                    </div>\n\n                </div>\n\n\n            </div>\n\n        </div>\n\n    </div>\n\n</section><!-- #content end -->\n\n<quietthyme-footer></quietthyme-footer>\n"

/***/ }),

/***/ 1012:
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar class=\"navbar-fixed-top\" [color]=\"'#128950'\" [height]=\"'3px'\"></ng2-slim-loading-bar>\n\n<quietthyme-header></quietthyme-header>\n<quietthyme-page-title title=\"Storage\" subtitle=\"Connect your cloud storage accounts\"></quietthyme-page-title>\n\n<!-- Content\n\t\t============================================= -->\n<section id=\"content\" class=\"footer-padding\">\n\n    <div class=\"content-wrap\">\n\n        <div class=\"container clearfix\">\n\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"sidebar-widgets-wrap\">\n\n                        <div class=\"widget subscribe-widget clearfix\">\n                            <div class=\"dark\" style=\"padding: 25px; background-color: #383838; border-radius: 2px;\">\n                                <div class=\"fancy-title title-border\">\n                                    <h4>Connect</h4>\n                                </div>\n\n                                <p style=\"font-size: 15px; line-height: 1.5; color: #999;\">Before using QuietThyme, you should connect your personal cloud storage providers.</p>\n                                <div class=\"widget-subscribe-form-result\"></div>\n                                <form id=\"widget-subscribe-form2\" action=\"include/subscribe.php\" role=\"form\" method=\"post\" class=\"nobottommargin\">\n                                    <button class=\"button button-3d btn-block button-small nomargin\" style=\"margin-top: 15px !important;\"\n                                            [disabled]=\"loading.link\"\n                                            kloudlessAuthenticator\n                                            [clientId]=\"'mddXeszdchTlRQEFN3LGhxLzqaTjgYwbXGLHCeXOqJdrzRyd'\"\n                                            [scope]=\"'gdrive box dropbox skydrive'\"\n                                            (onAuthenticated)=\"kloudlessAuthenticatedStorage($event)\"\n                                    >\n                                        Add Storage\n                                    </button>\n\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-9\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4\" *ngFor=\"let storageType of allNames; let myIndex = index\">\n                            <quietthyme-storage-panel [storageType]=\"storageType\" [storageData]=\"connected[storageType]\"></quietthyme-storage-panel>\n                        </div>\n                    </div>\n                </div>\n\n\n\n            </div>\n\n        </div>\n\n    </div>\n\n</section><!-- #content end -->\n\n\n\n\n\n<quietthyme-footer class=\"navbar-fixed-bottom\"></quietthyme-footer>"

/***/ }),

/***/ 1065:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(626);


/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    apiVersion: 'beta',
    stripeAccount: 'pk_test_uApReS8yYqD5v6CajPSuXj3Z'
};
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/environment.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Designed around http://stackoverflow.com/a/36413003/1157633
var CacheService = (function () {
    function CacheService() {
        this._cache = {};
    }
    CacheService.prototype.get = function (cacheKey) {
        return this._cache[cacheKey];
    };
    CacheService.prototype.put = function (cacheKey, observable) {
        var currentSubject = this.get(cacheKey);
        if (!currentSubject) {
            this._cache[cacheKey] = new __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__["ReplaySubject"](1);
            currentSubject = this._cache[cacheKey]; //if the current cacheKey doesn't exist in the cache, lets ensure that we create it.
        }
        observable.subscribe(function (data) { return currentSubject.next(data); }, function (error) { return currentSubject.error(error); }, function () { return currentSubject.complete(); });
        return currentSubject;
    };
    CacheService.prototype.delete = function (cacheKey) {
        delete this._cache[cacheKey];
    };
    CacheService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], CacheService);
    return CacheService;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/cache.service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cache_service__ = __webpack_require__(383);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = (function () {
    function ApiService(authHttp, http, cacheService) {
        this.authHttp = authHttp;
        this.http = http;
        this.cacheService = cacheService;
    }
    /////////////////////////////////////////////////////////////////////////////
    //Helper functions
    /////////////////////////////////////////////////////////////////////////////
    ApiService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("RAW BODY", body);
        return body.data || {};
    };
    ApiService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return errMsg;
    };
    ApiService.prototype.cacheKey = function (method, url, query) {
        return '[' + method + ']' + url + '?' + (query || {}).toString();
    };
    ApiService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])();
    };
    ApiService.prototype.tokenPayload = function () {
        var token = localStorage.getItem('id_token');
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["JwtHelper"]();
        var payload = jwtHelper.decodeToken(token);
        return payload;
    };
    /////////////////////////////////////////////////////////////////////////////
    // Unauthenticated functions
    /////////////////////////////////////////////////////////////////////////////
    ApiService.prototype.authRegister = function (name, email, password) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/auth/register", {
            "name": name,
            "email": email,
            "password": password
        })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.authLogin = function (email, password) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/auth/login", {
            "email": email,
            "password": password
        })
            .map(this.extractData)
            .catch(this.handleError);
    };
    /////////////////////////////////////////////////////////////////////////////
    // Authenticated functions
    /////////////////////////////////////////////////////////////////////////////
    ApiService.prototype.userPlan = function (stripePlanData) {
        var url = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/user/plan";
        return this.authHttp.post(url, stripePlanData)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.storageStatus = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/storage/status";
        var cacheKey = this.cacheKey('GET', url);
        return this.cacheService.get(cacheKey) || this.cacheService.put(cacheKey, this.authHttp.get(url)
            .map(this.extractData)
            .catch(this.handleError));
    };
    ApiService.prototype.storageLink = function (kloudlessData) {
        //TODO: this should bust the /storage/status cache
        return this.authHttp.post(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/storage/link", kloudlessData)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.bookList = function (filter) {
        var url = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/book";
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        if (filter.sort)
            params.set('sort', filter.sort.toString());
        if (filter.storage)
            params.set('storage', filter.storage.toString());
        if (filter.page)
            params.set('page', filter.page.toString());
        var cacheKey = this.cacheKey('GET', url, params);
        return this.cacheService.get(cacheKey) || this.cacheService.put(cacheKey, this.authHttp.get(url, { search: params })
            .map(this.extractData)
            .catch(this.handleError));
    };
    ApiService.prototype.book = function (bookId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/book";
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        params.set('id', bookId.toString());
        var cacheKey = this.cacheKey('GET', url, params);
        return this.cacheService.get(cacheKey) || this.cacheService.put(cacheKey, this.authHttp.get(url, { search: params })
            .map(this.extractData)
            .catch(this.handleError));
    };
    ApiService.prototype.download = function (bookId) {
        var _this = this;
        //http://stackoverflow.com/a/41252342
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Accept': '*' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        options.responseType = __WEBPACK_IMPORTED_MODULE_2__angular_http__["ResponseContentType"].Blob;
        return this.authHttp.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/storage/" + bookId)
            .map(this.extractData)
            .flatMap(function (resp) { return _this.http.get(resp.url, options); })
            .catch(this.handleError);
    };
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_cache_service__["a" /* CacheService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_cache_service__["a" /* CacheService */]) === 'function' && _c) || Object])
    ], ApiService);
    return ApiService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/api.service.js.map

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 625;


/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(758);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/main.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountLoginComponent = (function () {
    function AccountLoginComponent(slimLoadingBarService, apiService, router, activatedRoute) {
        this.slimLoadingBarService = slimLoadingBarService;
        this.apiService = apiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loading = {
            login: false,
            oauth: true
        };
    }
    AccountLoginComponent.prototype.ngOnInit = function () {
    };
    AccountLoginComponent.prototype.login = function () {
        var _this = this;
        if (this.loading.login)
            return;
        this.loading.login = true;
        this.slimLoadingBarService.start(function () {
            console.log('Loading complete');
        });
        this.apiService.authLogin(this.loginEmail, this.loginPassword)
            .subscribe(function (data) {
            localStorage.setItem('id_token', data.token); //set the JWT token
            if (_this.activatedRoute.snapshot.params['requested']) {
                _this.router.navigate([_this.activatedRoute.snapshot.params['requested']]);
            }
            else {
                _this.router.navigate(['/storage']);
            }
        }, function (error) { console.log(error); }, function () {
            _this.loading.login = false;
            _this.slimLoadingBarService.complete();
        });
    };
    AccountLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-login',
            template: __webpack_require__(1001),
            styles: [__webpack_require__(989)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], AccountLoginComponent);
    return AccountLoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/account-login.component.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountRegisterComponent = (function () {
    function AccountRegisterComponent(apiService, router, activatedRoute) {
        this.apiService = apiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    AccountRegisterComponent.prototype.ngOnInit = function () {
    };
    AccountRegisterComponent.prototype.register = function () {
        var _this = this;
        // this.loading.saveSettings = true;
        this.apiService.authRegister(this.regName, this.regEmail, this.regPassword)
            .subscribe(function (data) {
            console.log(data);
            localStorage.setItem('id_token', data.token); //set the JWT token
            _this.router.navigate(['/settings', { 'tab': "plans" }]);
        }, function (error) { console.log(error); });
    };
    AccountRegisterComponent.prototype.login = function () {
        var _this = this;
        // this.loading.saveSettings = true;
        this.apiService.authLogin(this.loginEmail, this.loginPassword)
            .subscribe(function (data) {
            console.log(data);
            localStorage.setItem('id_token', data.token); //set the JWT token
            _this.router.navigate(['/storage']);
        }, function (error) { console.log(error); });
    };
    AccountRegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-register',
            template: __webpack_require__(1002),
            styles: [__webpack_require__(990)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], AccountRegisterComponent);
    return AccountRegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/account-register.component.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(241);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });

var AppSettings = (function () {
    function AppSettings() {
    }
    Object.defineProperty(AppSettings, "API_ENDPOINT", {
        get: function () { return 'https://api.quietthyme.com/' + __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiVersion; },
        enumerable: true,
        configurable: true
    });
    return AppSettings;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/app-settings.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rxjs_operators__ = __webpack_require__(767);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(viewContainerRef) {
        this.title = 'app works!';
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(1003),
            styles: [__webpack_require__(1000)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/app.component.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_login_account_login_component__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_register_account_register_component__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_kloudless_authenticator_directive__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__partials_footer_footer_component__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__partials_page_title_page_title_component__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__partials_header_header_component__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__storage_storage_component__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__library_library_component__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__book_details_book_details_component__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__partials_storage_panel_storage_panel_component__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__settings_settings_component__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__privacy_privacy_component__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_stripe_checkout_button_directive__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_file_size_pipe__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_api_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_cache_service__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_jwt__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_bootstrap__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_slim_loading_bar__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_markdown__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_masonry__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng2_scrollspy__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng2_scrollspy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_ng2_scrollspy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_scrollspy_dist_plugin_affix_directive__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_scrollspy_dist_plugin_affix_directive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_ng2_scrollspy_dist_plugin_affix_directive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_charts_ng2_charts__ = __webpack_require__(972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng2_gravatar_directive__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng2_gravatar_directive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_ng2_gravatar_directive__);
/* unused harmony export getAuthHttp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
































function getAuthHttp(http) {
    return new __WEBPACK_IMPORTED_MODULE_23_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_23_angular2_jwt__["AuthConfig"]({
        noJwtError: true,
        headerPrefix: 'JWT',
        tokenGetter: (function () { return localStorage.getItem('id_token'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }]
    }), http);
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__account_login_account_login_component__["a" /* AccountLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__account_register_account_register_component__["a" /* AccountRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_kloudless_authenticator_directive__["a" /* KloudlessAuthenticatorDirective */],
                __WEBPACK_IMPORTED_MODULE_9__partials_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__partials_page_title_page_title_component__["a" /* PageTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__partials_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__storage_storage_component__["a" /* StorageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__library_library_component__["a" /* LibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_14__book_details_book_details_component__["a" /* BookDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_29_ng2_scrollspy_dist_plugin_affix_directive__["ScrollSpyAffixDirective"],
                __WEBPACK_IMPORTED_MODULE_15__partials_storage_panel_storage_panel_component__["a" /* StoragePanelComponent */],
                __WEBPACK_IMPORTED_MODULE_19__shared_file_size_pipe__["a" /* FileSizePipe */],
                __WEBPACK_IMPORTED_MODULE_16__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__privacy_privacy_component__["a" /* PrivacyComponent */],
                __WEBPACK_IMPORTED_MODULE_18__shared_stripe_checkout_button_directive__["a" /* StripeCheckoutButtonDirective */],
                __WEBPACK_IMPORTED_MODULE_31_ng2_gravatar_directive__["Gravatar"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_24_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_26_angular2_markdown__["a" /* MarkdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_27_angular2_masonry__["a" /* MasonryModule */],
                __WEBPACK_IMPORTED_MODULE_28_ng2_scrollspy__["ScrollSpyModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_30_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    //Public Endpoints
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__account_login_account_login_component__["a" /* AccountLoginComponent */] },
                    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__account_register_account_register_component__["a" /* AccountRegisterComponent */] },
                    { path: 'privacy', component: __WEBPACK_IMPORTED_MODULE_17__privacy_privacy_component__["a" /* PrivacyComponent */] },
                    //Auth Endpoints
                    { path: 'storage', component: __WEBPACK_IMPORTED_MODULE_12__storage_storage_component__["a" /* StorageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
                    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_16__settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
                    { path: 'storage/:source', component: __WEBPACK_IMPORTED_MODULE_12__storage_storage_component__["a" /* StorageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
                    { path: 'library', component: __WEBPACK_IMPORTED_MODULE_13__library_library_component__["a" /* LibraryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
                    { path: 'book/:bookId', component: __WEBPACK_IMPORTED_MODULE_14__book_details_book_details_component__["a" /* BookDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
                    // { path: 'project/create', component: ProjectCreateComponent, canActivate: [AuthGuard] },
                    // { path: 'project/:serviceType/:orgId/:repoId/edit', component: ProjectEditComponent, canActivate: [AuthGuard] },
                    // { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber', component: ProjectDeployComponent, canActivate: [AuthGuard] },
                    // { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber/logs', component: ProjectDeployLogsComponent, canActivate: [AuthGuard] },
                    { path: '', pathMatch: 'full', redirectTo: 'storage' },
                    // { path: '**', component: PageNotFoundComponent }
                    { path: '**', redirectTo: 'login' }
                ])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_21__services_cache_service__["a" /* CacheService */],
                __WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_23_angular2_jwt__["AuthHttp"],
                    useFactory: getAuthHttp,
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]]
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/app.module.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookDetailsComponent = (function () {
    function BookDetailsComponent(apiService, router, activatedRoute) {
        this.apiService = apiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.book(this.activatedRoute.snapshot.params['bookId'])
            .subscribe(function (book) {
            console.log(book);
            _this.book = book;
        }, function (error) { console.log(error); });
    };
    BookDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-details',
            template: __webpack_require__(1004),
            styles: [__webpack_require__(991)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], BookDetailsComponent);
    return BookDetailsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/book-details.component.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_scrollspy__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_scrollspy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_scrollspy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver__ = __webpack_require__(939);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LibraryComponent = (function () {
    function LibraryComponent(slimLoadingBarService, apiService, scrollSpyService) {
        this.slimLoadingBarService = slimLoadingBarService;
        this.apiService = apiService;
        this.scrollSpyService = scrollSpyService;
        this.bookList = [];
        this.loading = {
            list: false,
            download: false,
            status: false
        };
        this.filter = {
            sort: null,
            storage: null,
            storage_id: null,
            page: '0'
        };
        this.connected = {
            quietthyme: false,
            dropbox: false,
            gdrive: false,
            skydrive: false,
            box: false
        };
        this.storages = {};
    }
    LibraryComponent.prototype.ngAfterViewInit = function () {
        this.getBookList();
        this.getStorage();
        // this.scrollSpyService.getObservable('sidebar').subscribe((e: any) => {
        //     console.log('ScrollSpy::sidebar: ', e);
        // });
    };
    LibraryComponent.prototype.getStorage = function () {
        var _this = this;
        var self = this;
        this.loading.list = true;
        this.slimLoadingBarService.start();
        this.apiService.storageStatus()
            .subscribe(function (response) {
            console.log(response);
            response.forEach(function (status) {
                self.connected[status.storage_type] = true;
                self.storages[status.storage_type] = status;
            });
        }, function (error) { console.log(error); }, function () {
            _this.loading.status = false;
            _this.slimLoadingBarService.complete();
        });
    };
    LibraryComponent.prototype.getBookList = function () {
        var _this = this;
        this.loading.list = true;
        this.slimLoadingBarService.start();
        this.apiService.bookList(this.filter)
            .subscribe(function (books) {
            console.log(books);
            _this.bookList = books;
            // .map(function(book){
            //     book.cover = encodeURI(book.cover).replace(/%20/g, '+')
            //     return book
            // })
        }, function (error) { console.log(error); }, function () {
            _this.loading.list = false;
            _this.slimLoadingBarService.complete();
        });
    };
    LibraryComponent.prototype.downloadBook = function (book) {
        var _this = this;
        console.log(book.id);
        this.loading.download = true;
        this.slimLoadingBarService.start();
        this.apiService.download(book.id)
            .subscribe(function (response) {
            var filename = book.storage_filename + book.storage_format;
            var file = response.blob();
            console.log(file.size + " bytes file downloaded. File type: ", file.type);
            __WEBPACK_IMPORTED_MODULE_4_file_saver__["saveAs"](file, filename);
        }, function (error) { console.log(error); }, function () {
            _this.loading.download = false;
            _this.slimLoadingBarService.complete();
        });
    };
    LibraryComponent.prototype.setStorage = function (storage) {
        if (storage == this.filter.storage)
            return; //user clicked an active filter
        this.filter.storage = storage || null;
        this.filter.storage_id = this.storages[storage] ? this.storages[storage].storage_id : null;
        this.filter.page = '0';
        console.log("CHANGED STORAGE FILTER", this.filter.storage);
        this.bookList = [];
        this.getBookList();
    };
    LibraryComponent.prototype.setSort = function (sort) {
        if (sort == this.filter.sort)
            return; //user clicked an active filter
        this.filter.sort = sort || null;
        this.filter.page = '0';
        console.log("CHANGED SORT FILTER", this.filter.sort);
        this.bookList = [];
        this.getBookList();
    };
    LibraryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(1005),
            styles: [__webpack_require__(992)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_scrollspy__["ScrollSpyService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_scrollspy__["ScrollSpyService"]) === 'function' && _c) || Object])
    ], LibraryComponent);
    return LibraryComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/library.component.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageStatus; });
var StorageStatus = (function () {
    function StorageStatus() {
    }
    return StorageStatus;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/storage-status.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quietthyme-footer',
            template: __webpack_require__(1006),
            styles: [__webpack_require__(993)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/footer.component.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quietthyme-header',
            template: __webpack_require__(1007),
            styles: [__webpack_require__(994)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/header.component.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTitleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageTitleComponent = (function () {
    function PageTitleComponent() {
        this.breadcrumbs = [];
        this.catalogToken = '';
    }
    PageTitleComponent.prototype.ngOnInit = function () {
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["JwtHelper"]();
        this.catalogToken = jwtHelper.decodeToken(localStorage.getItem('id_token')).catalog_token;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PageTitleComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PageTitleComponent.prototype, "subtitle", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PageTitleComponent.prototype, "breadcrumbs", void 0);
    PageTitleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quietthyme-page-title',
            template: __webpack_require__(1008),
            styles: [__webpack_require__(995)]
        }), 
        __metadata('design:paramtypes', [])
    ], PageTitleComponent);
    return PageTitleComponent;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/page-title.component.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_storage_status__ = __webpack_require__(761);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoragePanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoragePanelComponent = (function () {
    function StoragePanelComponent() {
        this.chartColors = [
            {
                backgroundColor: ['#128950', 'lightgrey'],
                hoverBackgroundColor: ['#18b66a', 'red']
            }
        ];
        //disconnected component settings
        this.disconnectedData = [1];
        this.disconnectedChartColors = [{
                backgroundColor: ['lightgrey']
            }];
    }
    StoragePanelComponent.prototype.ngOnInit = function () {
        console.log(this.storageData);
        this.resetComp();
    };
    StoragePanelComponent.prototype.ngOnChanges = function () {
        console.log("StorageDta changed!", this.storageData);
        this.resetComp();
    };
    StoragePanelComponent.prototype.resetComp = function () {
        if (this.storageData) {
            this.chartData = [this.storageData.free_space, this.storageData.total_space - this.storageData.free_space];
        }
        this.chartOptions = {
            cutoutPercentage: this.storageData ? 83 : 87,
            tooltips: { enabled: false }
        };
        this.storageLogo = 'assets/images/services/' + this.storageType + '.png';
    };
    // events
    StoragePanelComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    StoragePanelComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_storage_status__["a" /* StorageStatus */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_storage_status__["a" /* StorageStatus */]) === 'function' && _a) || Object)
    ], StoragePanelComponent.prototype, "storageData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], StoragePanelComponent.prototype, "storageType", void 0);
    StoragePanelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quietthyme-storage-panel',
            template: __webpack_require__(1009),
            styles: [__webpack_require__(996)]
        }), 
        __metadata('design:paramtypes', [])
    ], StoragePanelComponent);
    return StoragePanelComponent;
    var _a;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/storage-panel.component.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyComponent = (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(1010),
            styles: [__webpack_require__(997)]
        }), 
        __metadata('design:paramtypes', [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/privacy.component.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(1018);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(1022);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_TimerObservable__ = __webpack_require__(1027);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_TimerObservable__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable








//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/rxjs-operators.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.apiService.loggedIn()) {
            //if the user is logged in, always let them go to the settings page if requested.
            if (state.url == '/settings;tab=plans') {
                return true;
            }
            else if (this.apiService.tokenPayload().plan == 'none') {
                //user doesnt have a plan, redirec them to the settings page.
                this.router.navigate(['/settings', { 'tab': 'plans' }]);
                return false;
            }
            else {
                return true;
            }
        }
        else {
            console.log(route, state);
            this.router.navigate(['/login', { 'requested': state.url }]);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/auth-guard.service.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = (function () {
    function SettingsComponent(slimLoadingBarService, apiService, activatedRoute) {
        this.slimLoadingBarService = slimLoadingBarService;
        this.apiService = apiService;
        this.activatedRoute = activatedRoute;
        this.userData = {};
        this.loading = {
            setPlan: false,
        };
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.userData = this.apiService.tokenPayload();
    };
    SettingsComponent.prototype.ngAfterViewInit = function () {
        if (this.activatedRoute.snapshot.params['tab'] == 'plans') {
            this.settingsTabs.tabs[1].active = true;
        }
    };
    SettingsComponent.prototype.stripeCheckoutCompleted = function (stripeCheckoutData) {
        var _this = this;
        console.log(stripeCheckoutData);
        if (this.loading.setPlan)
            return;
        this.slimLoadingBarService.start();
        this.apiService.userPlan(stripeCheckoutData)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { console.log(error); }, function () {
            _this.loading.setPlan = false;
            _this.slimLoadingBarService.complete();
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('settingsTabs'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["b" /* TabsetComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["b" /* TabsetComponent */]) === 'function' && _a) || Object)
    ], SettingsComponent.prototype, "settingsTabs", void 0);
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(1011),
            styles: [__webpack_require__(998)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/settings.component.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSizePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//https://gist.github.com/JonCatmull/ecdf9441aaa37336d9ae2c7f9cb7289a
/*
 * Convert bytes into largest possible unit.
 * Takes an precision argument that defaults to 2.
 * Usage:
 *   bytes | fileSize:precision
 * Example:
 *   {{ 1024 |  fileSize}}
 *   formats to: 1 KB
 */
var FileSizePipe = (function () {
    function FileSizePipe() {
        this.units = [
            'bytes',
            'KB',
            'MB',
            'GB',
            'TB',
            'PB'
        ];
    }
    FileSizePipe.prototype.transform = function (bytes, precision) {
        if (bytes === void 0) { bytes = 0; }
        if (precision === void 0) { precision = 2; }
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes))
            return '?';
        var unit = 0;
        while (bytes >= 1024) {
            bytes /= 1024;
            unit++;
        }
        return bytes.toFixed(+precision) + ' ' + this.units[unit];
    };
    FileSizePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'fileSize' }), 
        __metadata('design:paramtypes', [])
    ], FileSizePipe);
    return FileSizePipe;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/file-size.pipe.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KloudlessAuthenticatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KloudlessAuthenticatorDirective = (function () {
    function KloudlessAuthenticatorDirective(_elt) {
        this.onAuthenticated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.elt = _elt;
    }
    KloudlessAuthenticatorDirective.prototype.ngAfterViewInit = function () {
        console.log(this.scope);
        console.log(this.clientId);
        var self = this;
        Kloudless.authenticator(this.elt.nativeElement, {
            scope: this.scope,
            client_id: this.clientId
        }, function (auth_result) {
            self.onAuthenticated.emit(auth_result);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], KloudlessAuthenticatorDirective.prototype, "scope", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], KloudlessAuthenticatorDirective.prototype, "clientId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], KloudlessAuthenticatorDirective.prototype, "onAuthenticated", void 0);
    KloudlessAuthenticatorDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[kloudlessAuthenticator]',
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object])
    ], KloudlessAuthenticatorDirective);
    return KloudlessAuthenticatorDirective;
    var _a, _b;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/kloudless-authenticator.directive.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeCheckoutButtonDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StripeCheckoutButtonDirective = (function () {
    function StripeCheckoutButtonDirective(_elt, apiService) {
        this.apiService = apiService;
        this.onCheckout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.elt = _elt;
    }
    StripeCheckoutButtonDirective.prototype.ngAfterViewInit = function () {
        var self = this;
        this.handler = StripeCheckout.configure({
            key: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].stripeAccount,
            // image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
            image: 'assets/images/services/quietthyme.png',
            locale: 'auto',
            zipCode: true,
            token: function (token) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                self.onCheckout.emit({ token: token, planId: self.planId });
            }
        });
    };
    StripeCheckoutButtonDirective.prototype.onClick = function (event) {
        this.handler.open({
            name: 'QuietThyme',
            description: this.planName,
            amount: this.planCost,
            panelLabel: 'Subscribe',
            email: this.apiService.tokenPayload().email
        });
        event.preventDefault();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], StripeCheckoutButtonDirective.prototype, "onCheckout", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], StripeCheckoutButtonDirective.prototype, "planName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], StripeCheckoutButtonDirective.prototype, "planId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], StripeCheckoutButtonDirective.prototype, "planCost", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], StripeCheckoutButtonDirective.prototype, "onClick", null);
    StripeCheckoutButtonDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[stripeCheckoutButton]'
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === 'function' && _c) || Object])
    ], StripeCheckoutButtonDirective);
    return StripeCheckoutButtonDirective;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/stripe-checkout-button.directive.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StorageComponent = (function () {
    function StorageComponent(slimLoadingBarService, apiService) {
        this.slimLoadingBarService = slimLoadingBarService;
        this.apiService = apiService;
        this.allNames = ['quietthyme', 'box', 'dropbox', 'skydrive', 'gdrive'];
        this.connected = {};
        this.loading = {
            status: false,
            link: false
        };
    }
    StorageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading.status = true;
        this.slimLoadingBarService.start();
        var self = this;
        this.apiService.storageStatus()
            .subscribe(function (response) {
            console.log(response);
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var storage = response_1[_i];
                _this.connected[storage.storage_type] = storage;
            }
            console.log("connected:", _this.connected);
        }, function (error) { console.log(error); }, function () {
            _this.loading.status = false;
            _this.slimLoadingBarService.complete();
        });
    };
    StorageComponent.prototype.kloudlessAuthenticatedStorage = function (kloudlessData) {
        var _this = this;
        console.log(kloudlessData);
        if (this.loading.link)
            return;
        this.slimLoadingBarService.start();
        this.apiService.storageLink(kloudlessData)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { console.log(error); }, function () {
            _this.loading.status = false;
            _this.slimLoadingBarService.complete();
        });
    };
    StorageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-storage',
            template: __webpack_require__(1012),
            styles: [__webpack_require__(999)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object])
    ], StorageComponent);
    return StorageComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/ubuntu/quietthyme.web.src/src/storage.component.js.map

/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 427,
	"./af.js": 427,
	"./ar": 433,
	"./ar-dz": 428,
	"./ar-dz.js": 428,
	"./ar-ly": 429,
	"./ar-ly.js": 429,
	"./ar-ma": 430,
	"./ar-ma.js": 430,
	"./ar-sa": 431,
	"./ar-sa.js": 431,
	"./ar-tn": 432,
	"./ar-tn.js": 432,
	"./ar.js": 433,
	"./az": 434,
	"./az.js": 434,
	"./be": 435,
	"./be.js": 435,
	"./bg": 436,
	"./bg.js": 436,
	"./bn": 437,
	"./bn.js": 437,
	"./bo": 438,
	"./bo.js": 438,
	"./br": 439,
	"./br.js": 439,
	"./bs": 440,
	"./bs.js": 440,
	"./ca": 441,
	"./ca.js": 441,
	"./cs": 442,
	"./cs.js": 442,
	"./cv": 443,
	"./cv.js": 443,
	"./cy": 444,
	"./cy.js": 444,
	"./da": 445,
	"./da.js": 445,
	"./de": 447,
	"./de-at": 446,
	"./de-at.js": 446,
	"./de.js": 447,
	"./dv": 448,
	"./dv.js": 448,
	"./el": 449,
	"./el.js": 449,
	"./en-au": 450,
	"./en-au.js": 450,
	"./en-ca": 451,
	"./en-ca.js": 451,
	"./en-gb": 452,
	"./en-gb.js": 452,
	"./en-ie": 453,
	"./en-ie.js": 453,
	"./en-nz": 454,
	"./en-nz.js": 454,
	"./eo": 455,
	"./eo.js": 455,
	"./es": 457,
	"./es-do": 456,
	"./es-do.js": 456,
	"./es.js": 457,
	"./et": 458,
	"./et.js": 458,
	"./eu": 459,
	"./eu.js": 459,
	"./fa": 460,
	"./fa.js": 460,
	"./fi": 461,
	"./fi.js": 461,
	"./fo": 462,
	"./fo.js": 462,
	"./fr": 465,
	"./fr-ca": 463,
	"./fr-ca.js": 463,
	"./fr-ch": 464,
	"./fr-ch.js": 464,
	"./fr.js": 465,
	"./fy": 466,
	"./fy.js": 466,
	"./gd": 467,
	"./gd.js": 467,
	"./gl": 468,
	"./gl.js": 468,
	"./he": 469,
	"./he.js": 469,
	"./hi": 470,
	"./hi.js": 470,
	"./hr": 471,
	"./hr.js": 471,
	"./hu": 472,
	"./hu.js": 472,
	"./hy-am": 473,
	"./hy-am.js": 473,
	"./id": 474,
	"./id.js": 474,
	"./is": 475,
	"./is.js": 475,
	"./it": 476,
	"./it.js": 476,
	"./ja": 477,
	"./ja.js": 477,
	"./jv": 478,
	"./jv.js": 478,
	"./ka": 479,
	"./ka.js": 479,
	"./kk": 480,
	"./kk.js": 480,
	"./km": 481,
	"./km.js": 481,
	"./ko": 482,
	"./ko.js": 482,
	"./ky": 483,
	"./ky.js": 483,
	"./lb": 484,
	"./lb.js": 484,
	"./lo": 485,
	"./lo.js": 485,
	"./lt": 486,
	"./lt.js": 486,
	"./lv": 487,
	"./lv.js": 487,
	"./me": 488,
	"./me.js": 488,
	"./mi": 489,
	"./mi.js": 489,
	"./mk": 490,
	"./mk.js": 490,
	"./ml": 491,
	"./ml.js": 491,
	"./mr": 492,
	"./mr.js": 492,
	"./ms": 494,
	"./ms-my": 493,
	"./ms-my.js": 493,
	"./ms.js": 494,
	"./my": 495,
	"./my.js": 495,
	"./nb": 496,
	"./nb.js": 496,
	"./ne": 497,
	"./ne.js": 497,
	"./nl": 499,
	"./nl-be": 498,
	"./nl-be.js": 498,
	"./nl.js": 499,
	"./nn": 500,
	"./nn.js": 500,
	"./pa-in": 501,
	"./pa-in.js": 501,
	"./pl": 502,
	"./pl.js": 502,
	"./pt": 504,
	"./pt-br": 503,
	"./pt-br.js": 503,
	"./pt.js": 504,
	"./ro": 505,
	"./ro.js": 505,
	"./ru": 506,
	"./ru.js": 506,
	"./se": 507,
	"./se.js": 507,
	"./si": 508,
	"./si.js": 508,
	"./sk": 509,
	"./sk.js": 509,
	"./sl": 510,
	"./sl.js": 510,
	"./sq": 511,
	"./sq.js": 511,
	"./sr": 513,
	"./sr-cyrl": 512,
	"./sr-cyrl.js": 512,
	"./sr.js": 513,
	"./ss": 514,
	"./ss.js": 514,
	"./sv": 515,
	"./sv.js": 515,
	"./sw": 516,
	"./sw.js": 516,
	"./ta": 517,
	"./ta.js": 517,
	"./te": 518,
	"./te.js": 518,
	"./tet": 519,
	"./tet.js": 519,
	"./th": 520,
	"./th.js": 520,
	"./tl-ph": 521,
	"./tl-ph.js": 521,
	"./tlh": 522,
	"./tlh.js": 522,
	"./tr": 523,
	"./tr.js": 523,
	"./tzl": 524,
	"./tzl.js": 524,
	"./tzm": 526,
	"./tzm-latn": 525,
	"./tzm-latn.js": 525,
	"./tzm.js": 526,
	"./uk": 527,
	"./uk.js": 527,
	"./uz": 528,
	"./uz.js": 528,
	"./vi": 529,
	"./vi.js": 529,
	"./x-pseudo": 530,
	"./x-pseudo.js": 530,
	"./yo": 531,
	"./yo.js": 531,
	"./zh-cn": 532,
	"./zh-cn.js": 532,
	"./zh-hk": 533,
	"./zh-hk.js": 533,
	"./zh-tw": 534,
	"./zh-tw.js": 534
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 947;


/***/ }),

/***/ 989:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 990:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 991:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 992:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 993:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 994:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 995:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 996:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 997:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 998:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 999:
/***/ (function(module, exports) {

module.exports = ""

/***/ })

},[1065]);
//# sourceMappingURL=main.bundle.map