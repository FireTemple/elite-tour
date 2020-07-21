<template>
  <header>
    <div id="top_line">
      <div class="container">
        <div class="row">
          <div class="col-6"><i class="icon-phone"></i><strong>+1-888-303-4880</strong></div>
          <div class="col-6">
            <ul id="top_links">
              <li><a href="#sign-in-dialog" id="access_link">Sign in</a></li>
              <li><a href="wishlist.html" id="wishlist_link">Wishlist</a></li>
            </ul>
          </div>
        </div><!-- End row -->
      </div><!-- End container-->
    </div><!-- End top line-->
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div id="logo_home">
            <h1><a href="index.html" title="City tours travel template">Zoom Ride</a></h1>
          </div>
        </div>
        <nav class="col-9">
          <a class="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="javascript:void(0);"><span>Menu mobile</span></a>
          <div class="main-menu">
            <div id="header_menu">
              <img src="img/logo-1124x278.png" width="160" height="34" alt="City tours" data-retina="true">
            </div>
            <a href="#" class="open_close" id="close_in"><i class="icon_set_1_icon-77"></i></a>
            <ul>
              <li class="submenu">
                <a href="../../main-test/index.html" class="show-submenu">Home</a>
              </li>
              <li class="submenu">
                <a href="index.html" class="show-submenu">Tours</a>
              </li>
              <li class="submenu">
                <a href="all_hotels_list.html" class="show-submenu">Hotels</a>
              </li>
              <li class="submenu">
                <a href="all_restaurants_list.html" class="show-submenu">Restaurants</a>
              </li>
              <li class="submenu">
                <a href="javascript:void(0);" class="show-submenu">helps <i class="icon-down-open-mini"></i></a>
                <ul>
                  <li><a href="faq.html">FAQ</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </li>
            </ul>
          </div><!-- End main-menu -->
          <ul id="top_tools">
            <li>
              <a href="javascript:void(0);" class="search-overlay-menu-btn"><i class="icon_search"></i></a>
            </li>
            <li>
              <div class="dropdown dropdown-cart">
                <a href="#" data-toggle="dropdown" class="cart_bt"><i
                  class="icon_bag_alt"></i><strong>3</strong></a>
                <ul class="dropdown-menu" id="cart_items">
                  <li>
                    <div class="image"><img src="img/thumb_cart_1.jpg" alt="image"></div>
                    <strong><a href="#">Louvre museum</a>1x $36.00 </strong>
                    <a href="#" class="action"><i class="icon-trash"></i></a>
                  </li>
                  <li>
                    <div class="image"><img src="img/thumb_cart_2.jpg" alt="image"></div>
                    <strong><a href="#">Versailles tour</a>2x $36.00 </strong>
                    <a href="#" class="action"><i class="icon-trash"></i></a>
                  </li>
                  <li>
                    <div class="image"><img src="img/thumb_cart_3.jpg" alt="image"></div>
                    <strong><a href="#">Versailles tour</a>1x $36.00 </strong>
                    <a href="#" class="action"><i class="icon-trash"></i></a>
                  </li>
                  <li>
                    <div>Total: <span>$120.00</span></div>
                    <a href="cart.html" class="button_drop">Go to cart</a>
                    <a href="payment.html" class="button_drop outline">Check out</a>
                  </li>
                </ul>
              </div><!-- End dropdown-cart-->
            </li>
          </ul>
        </nav>
      </div>
    </div><!-- container -->
  </header><!-- End Header -->
</template>

<script>
    export default {
        name: "NarBar"
    }
</script>

<style scoped>

</style>
