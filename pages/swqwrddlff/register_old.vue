<template>
     <div>
          <!-- <div class="container">
               <h1>Register Page</h1>
               <br>
               <nuxt-link to="/login">Go to login</nuxt-link>
               <br>
               <nuxt-link to="/">Go to home</nuxt-link>
               <hr>

               <fieldset>
                    <table>
                         <tbody>
                              <tr>
                                   <td>
                                        <label for="kode">Kode Fasyankes</label>
                                   </td>
                                   <td>
                                        <Combobox />
                                   </td>
                                   <div v-if="loading">Loading...</div>
                                   <div v-if="errors">{{ errors.message }}</div>
                                   <ul v-if="datars">
                                        <li v-for="item in datars" :key="item.kode">{{ item.kode }}-{{ item.nama }}</li>
                                   </ul>
                                   <td>
                                        <button>Cari</button>
                                   </td>
                              </tr>
                              <tr>
                                   <td>
                                        <label for="nama_rs">Nama Fasyankes</label>
                                   </td>
                                   <td>
                                        <input readonly disabled v-model="fieldinput.nama_rs" type="text" name="nama_rs"
                                             id="nama_rs">
                                   </td>
                              </tr>
                              <tr>
                                   <td>
                                        <label for="kelas">Kelas Fasyankes</label>
                                   </td>
                                   <td>
                                        <input readonly disabled v-model="fieldinput.kelas" type="text" name="kelas"
                                             id="kelas">
                                   </td>
                              </tr>
                              <tr>
                                   <td>
                                        <label for="jenis">Jenis Fasyankes</label>
                                   </td>
                                   <td>
                                        <input readonly disabled v-model="fieldinput.jenis" type="text" name="jenis"
                                             id="jenis">
                                   </td>
                              </tr>
                              <tr>
                                   <td>
                                        <label for="alamat">Alamat Fasyankes</label>
                                   </td>
                                   <td>
                                        <input v-model="fieldinput.alamat" type="text" name="alamat" id="alamat">
                                   </td>
                              </tr>
                              <tr>
                                   <td>
                                        <label for="provinsi">Provinsi</label>
                                   </td>
                                   <td>
                                        <input v-model="fieldinput.provinsi" type="text" name="provinsi" id="provinsi">
                                   </td>
                              </tr>
                              <tr>
                                   <td>
                                        <label for="kabkot">Kabupaten/Kota</label>
                                   </td>
                                   <td>
                                        <input v-model="fieldinput.kabkot" type="text" name="kabkot" id="kabkot">
                                   </td>
                              </tr>
                              <tr>
                                   <td>
                                        <label for="kecamatan">Kecamatan</label>
                                   </td>
                                   <td>
                                        <input v-model="fieldinput.kecamatan" type="text" name="kecamatan"
                                             id="kecamatan">
                                   </td>
                              </tr>
                              <tr>
                                   <td>
                                        <label for="kode_pos">Kode Pos</label>
                                   </td>
                                   <td>
                                        <input readonly disabled v-model="fieldinput.kode_pos" type="text"
                                             name="kode_pos" id="kode_pos">
                                   </td>
                              </tr>
                              <tr>
                                   <td>
                                        <label for="negara">Negara</label>
                                   </td>
                                   <td>
                                        <input v-model="fieldinput.negara" type="text" name="negara" id="negara">
                                   </td>
                              </tr>
                              <tr>
                                   <td>
                                        <label for="no_tlp_rs">No Telepon Fasyankes</label>
                                   </td>
                                   <td>
                                        <input readonly disabled v-model="fieldinput.no_tlp_rs" type="text"
                                             name="no_tlp_rs" id="no_tlp_rs">
                                   </td>
                              </tr>
                              <tr>
                                   <td>
                                        <label for="email">Email</label>
                                   </td>
                                   <td>
                                        <input v-model="fieldinput.email" type="email" name="email" id="email">
                                   </td>
                              </tr>
                              <tr>
                                   <td>
                                        <label for="nama">Nama PIC</label>
                                   </td>
                                   <td>
                                        <input v-model="fieldinput.nama_pic" type="text" name="nama" id="nama">
                                   </td>
                              </tr>
                              <tr>
                                   <td>
                                        <label for="telepon_pic">No. Handphone/WhatsApp PIC</label>
                                   </td>
                                   <td>
                                        <input v-model="fieldinput.telepon_pic" type="text" name="telepon_pic"
                                             id="telepon_pic">
                                   </td>
                              </tr>
                              <tr>
                                   <td>
                                        <label for="">Pasword</label>
                                   </td>
                                   <td>
                                        <input v-model="fieldinput.password" type="password" name="password"
                                             id="password">
                                   </td>
                              </tr>
                              <tr>
                                   <td>
                                        <label for="">Konfirmasi Pasword</label>
                                   </td>
                                   <td>
                                        <input v-model="fieldinput.confirm_password" type="password"
                                             name="confirm_password" id="confirm_password">
                                   </td>
                              </tr>
                              <tr>
                                   <td></td>
                                   <td>
                                        <div v-html="mydata.captcha"
                                             style="border: 1px solid gray; width: 200px; border-radius: 5px"></div>
                                        <button @click="getCaptcha">Refresh Captcha</button>
                                   </td>
                              </tr>
                              <tr>
                                   <td>Captcha</td>
                                   <td>
                                        <input v-model="formcaptcha.captcha" />
                                   </td>
                              </tr>
                              <tr>
                                   <td></td>
                                   <td>
                                        <button>Submit</button>
                                   </td>
                              </tr>
                         </tbody>
                    </table>
               </fieldset>
          </div> -->

          <div class="auth-main">
               <div class="auth-wrapper v3">
                    <div class="auth-form">
                         <div class="card my-5">
                              <div class="card-body">
                                   <div class="row">
                                        <div class="d-flex justify-content-center">
                                             <div class="auth-header">
                                                  <img src="/assets/images/logo.png" class="mb-3" width="100px"
                                                       alt="">
                                                  <h2 class="text-dark mt-3 mb-3"><b>Registrasi Akun PIC</b></h2>
                                             </div>
                                        </div>
                                   </div>

                                   <div>
                                        <Combobox @input-kode-changed="handleInputChange"
                                             @get-data-rs="updateSedangLoadData" />
                                   </div>
                                   <div v-if="onLoadGetDataRs.loading_status == true">
                                        <i class="fas fa-spin fa-spinner mb-2"></i><strong class="ms-2">Sedang mengambil
                                             data</strong>
                                   </div>
                                   <div v-else></div>
                                   <div v-if="onLoadGetDataRs.status == false" class="text-info">
                                   </div>
                                   <div v-else>
                                        <div class="form-floating mb-3">
                                             <input v-model="form.nama" type="text" disabled readonly
                                                  class="form-control">
                                             <label>Nama Fasyankes</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                             <input v-model="form.kelas" type="text" disabled readonly
                                                  class="form-control">
                                             <label>Kelas</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                             <input v-model="form.jenis" type="text" disabled readonly
                                                  class="form-control">
                                             <label>Jenis</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                             <input v-model="form.alamat" type="text" class="form-control">
                                             <label>Alamat</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                             <input v-model="form.kode_pos" type="text" disabled readonly
                                                  class="form-control">
                                             <label>Kode Pos</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                             <input v-model="form.email" type="email" class="form-control">
                                             <label>Email PIC</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                             <input v-model="form.telepon_pic" type="tel" class="form-control">
                                             <label>No. Handphone(WhatsApp) PIC</label>
                                        </div>
                                        <div class="form-floating mb-3 d-flex">
                                             <input id="password" v-model="form.password" type="password"
                                                  class="form-control">
                                             <button class="btn btn-info ms-1" @click="changeTipePassword">
                                                  <i :class="{ 'fas fa-eye-slash': showpassword, 'fas fa-eye': !showpassword }"></i>
                                             </button>
                                             <!-- <button class="btn btn-info ms-1" @click="changeTipePassword"><i class="ti ti-eye"></i></button> -->
                                             <label>Password</label>
                                        </div>
                                        <div class="form-group mb-3">
                                             <label>Surat Penugasan</label>
                                             <input type="file" class="form-control">
                                        </div>
                                        <div class="form-floating mb-3 d-flex">
                                             <div v-html="mydata.captcha"
                                                  style="border: 1px solid #ced4da; width: 200px; height: 100%; border-radius: 5px">
                                             </div>
                                             <button @click="getCaptcha" class="btn btn-md btn-dark ms-2">
                                                  <i id="icon-show-pass" class="ti ti-refresh"></i>
                                             </button>
                                        </div>
                                        <div class="form-floating mb-3">
                                             <input type="text" class="form-control" placeholder="Captcha">
                                             <label>Captcha</label>
                                        </div>

                                        <div class="d-grid mt-4">
                                             <button type="button" class="btn btn-info">Daftar</button>
                                        </div>
                                   </div>
                                   <div class="saprator mt-3">
                                        <span>Atau</span>
                                   </div>
                                   <h5 class="d-flex justify-content-center">Sudah punya akun? <nuxt-link class="ms-2"
                                             to="/login">Mulai login</nuxt-link></h5>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script setup lang="ts">
useHead({ title: 'Register' });
definePageMeta({
     middleware: 'unauth'
});
import Combobox from '~/components/Combobox_search_rs.vue';
import axios from 'axios';
import { ref } from 'vue';
// import '~/assets/berry/css/style.css';
// import $ from 'jquery';
const form = reactive({
     kode_rs: '',
     nama: '',
     kelas: '',
     jenis: '',
     alamat: '',
     provinsi: '',
     kota: '',
     kecamatan: '',
     kode_pos: '',
     negara: '',
     email: '',
     nama_pic: '',
     telepon_pic: '',
     surat_penugasan: '',
     password: ''
});
const fieldinput = reactive({
     kode: '',
     nama_rs: '',
     kelas: '',
     jenis: '',
     alamat: '',
     provinsi: '',
     kabkot: '',
     kecamatan: '',
     kode_pos: '',
     negara: '',
     no_tlp_rs: '',
     email: '',
     nama_pic: '',
     telepon_pic: '',
     password: '',
     confirm_password: '',
});
const mydata = reactive({
     captcha: '',
     lanjutlogin: false,
});
const formcaptcha = reactive({
     captcha: '',
});
const onLoadGetDataRs = reactive({
     status: false,
     loading_status: false,
})

const datars = ref(null);
const loading = ref(false);
const datadetail_rs = ref(null);
const errors = ref(null);
let showpassword = ref(false);
const selectedValue = ref(null);
const options = ref([]); // Ini untuk menyimpan opsi dari API
// function
type ResApiGetCaptcha = {
     svg: string;
}
type QueryGetKodeRs = {
     searchQueryKode: string;
}
const getCaptcha = async () => {
     const datacp = await $fetch<ResApiGetCaptcha>('/api/captcha');
     mydata.captcha = datacp.svg;
};

onMounted(() => {
     getCaptcha();
});

const handleInputChange = (value: string) => {
     form.kode_rs = value
};
const updateSedangLoadData = async (value: boolean) => {
     // onLoadGetDataRs.status = value;
     onLoadGetDataRs.loading_status = true;
     if (form.kode_rs.length == 0) {
          alert("Nama Fasyankes harus dipilih")
          onLoadGetDataRs.loading_status = false;
     } else {
          const response = await axios.post(`/api/register/getdetailfaskes`,
               {
                    keyword: form.kode_rs
               }
          )
          form.nama = response.data.faskes_detail[0].nama;
          form.kelas = response.data.faskes_detail[0].kelas;
          form.jenis = response.data.faskes_detail[0].jenis;
          form.alamat = response.data.faskes_detail[0].alamat;
          form.kode_pos = response.data.faskes_detail[0].kode_pos;
          if (response.data.success == true) {
               onLoadGetDataRs.status = true;
          } else {
               onLoadGetDataRs.status = false;
          }
          onLoadGetDataRs.loading_status = false;
     }

};
// get data fasyankes
const onInputKodeRS = () => {
     fetchDataRs(fieldinput.kode);
}
const fetchDataRs = async (searchQueryKode: string) => {
     if (!searchQueryKode) {
          datars.value = null
          return
     }
     loading.value = true
     try {
          const response = await axios.post(`/api/register/cekkoders`,
               {
                    keyword: searchQueryKode
               }
          )
          datars.value = response.data.faskes
     } catch (err) {
          datars.value = null
          return
     } finally {
          datars.value = null
          loading.value = false
          return
     }
}
const changeTipePassword = async () => {
     showpassword.value = !showpassword.value
     if (showpassword.value) {
          document.getElementById("password")!.setAttribute('type', 'text');
     } else {
          document.getElementById("password")!.setAttribute('type', 'password');

     }
}

// const clashIconEye = computed(() => ({
//      'fas fa-eye': showpassword,
//      'fas fa-eye-slash': !showpassword,
// }))

</script>