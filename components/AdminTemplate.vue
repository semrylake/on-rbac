<template>
     <div class="my-template">
          <!-- <div class="admin-template">
               <div class="loader-bg">
                    <div class="loader-track">
                         <div class="loader-fill"></div>
                    </div>
               </div>
          </div> -->
          <!-- [ Sidebar Menu ] start -->
          <nav class="pc-sidebar" v-if="showSidebar">
               <div class="navbar-wrapper">
                    <div class="m-header">
                         <a href="#" class="b-brand text-primary">
                              <!-- ========   Change your logo from here   ============ -->
                              <img src="~/assets/images/logo.png" alt="" class="logo logo-lg"
                                   width="40px"><strong>ONRBAC</strong>
                         </a>
                    </div>
                    <div class="navbar-content">
                         <ul class="pc-navbar">
                              <li class="pc-item">
                                   <a href="#" class="pc-link"><span class="pc-micon"><i
                                                  class="ti ti-home"></i></span><span
                                             class="pc-mtext">Dashboard</span></a>
                              </li>

                              <li class="pc-item pc-hasmenu">
                                   <a href="#!" class="pc-link"><span class="pc-micon"><i
                                                  class="ti ti-folder"></i></span><span class="pc-mtext">Menu
                                             levels</span><span class="pc-arrow"><i
                                                  data-feather="chevron-right"></i></span></a>
                                   <ul class="pc-submenu">
                                        <li class="pc-item"><a class="pc-link" href="#!">Level 2.1</a></li>
                                        <li class="pc-item"><a class="pc-link" href="#!">Level 2.2</a></li>

                                   </ul>
                              </li>

                         </ul>

                    </div>
               </div>
          </nav>
          <!-- [ Sidebar Menu ] end -->
          <!-- [ Header Topbar ] start -->
          <header class="pc-header" style="margin-left: 0;">
               <div class="header-wrapper"> <!-- [Mobile Media Block] start -->
                    <div class="me-auto pc-mob-drp">
                         <ul class="list-unstyled">
                              <li class="pc-h-item header-mobile-collapse">
                                   <a @click="toggleSidebar" class="pc-head-link head-link-secondary ms-0" id="sidebar-hide.show">
                                        <i class="ti ti-menu-2"></i>
                                   </a>
                              </li>
                              <li class="pc-h-item pc-sidebar-popup">
                                   <a @click="toggleSidebar" class="pc-head-link head-link-secondary ms-0" id="mobile-collapse.show">
                                        <i class="ti ti-menu-2"></i>
                              </a> 
                              </li>
                         </ul>
                    </div>
                    <!-- [Mobile Media Block end] -->
                    <div class="ms-auto">
                         <ul class="list-unstyled">
                              <li class="dropdown pc-h-item bg-white">
                                   <a class="pc-head-link head-link-primary dropdown-toggle arrow-none me-0"
                                        data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false"
                                        aria-expanded="false">
                                        <i class="ti ti-settings"></i>
                                   </a>
                                   <div class="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown">
                                        <div class="dropdown-header">
                                             <div class="profile-notification-scroll position-relative">
                                                  <a href="" class="dropdown-item">
                                                       <i class="ti ti-settings"></i>
                                                       <span>Account Settings</span>
                                                  </a>
                                                  <a href="" class="dropdown-item">
                                                       <i class="ti ti-logout"></i>
                                                       <span>Logout</span>
                                                  </a>

                                             </div>
                                        </div>
                                   </div>
                              </li>
                         </ul>
                    </div>
               </div>
          </header>
          <!-- [ Header ] end -->

          <!-- [ Main Content ] start -->
          <div class="pc-container left-0">
               <div class="pc-content">

                    <!-- [ Main Content ] start -->
                    <div class="row">
                         <!-- [ sample-page ] start -->
                         <div class="col-sm-12">
                              <div class="card">
                                   <div class="card-header">
                                        <h5>Hello card</h5>
                                   </div>
                                   <div class="card-body">

                                   </div>
                              </div>
                         </div>
                         <!-- [ sample-page ] end -->
                    </div>
                    <!-- [ Main Content ] end -->
               </div>
          </div>
          <!-- [ Main Content ] end -->
     </div>
</template>
<script setup lang="ts">

// import "~/assets/berry/css/style.css"
import { ref } from 'vue'

const showSidebar = ref(true)

function toggleSidebar() {
  showSidebar.value = !showSidebar.value
}


</script>