<template>
     <div>
          <div class="auth-main">
               <div class="auth-wrapper v3">
                    <div class="auth-form">
                         <div class="card my-5">
                              <div class="card-body">
                                   
                                   <div class="row">
                                        <div class="d-flex justify-content-center">
                                             <div class="auth-header">
                                                  <h2 class="text-secondary mt-5 mb-5"><b>Registrasi Akun PIC Fasyankes</b></h2>
                                             </div>
                                        </div>
                                   </div>
                                   <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput"
                                             placeholder="Email address / Username">
                                        <label for="floatingInput">Email address / Username</label>
                                   </div>
                                   <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput1"
                                             placeholder="Password">
                                        <label for="floatingInput1">Password</label>
                                   </div>
                                  
                                   <div class="d-grid mt-4">
                                        <button type="button" class="btn btn-success">Submit</button>
                                   </div>
                                   <hr>
                                   <nuxt-link class="ms-3"o="/login">Go to login</nuxt-link>
                                   <h5 class="d-flex justify-content-center">Sudah punya akun? <nuxt-link class="ms-3"o="/login">Go to login</nuxt-link></h5>
                              </div>
                         </div>
                    </div>
               </div>
          </div>

     </div>
</template>