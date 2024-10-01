<template>
     <div>
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
                                   <input v-model="fieldinput.kode" type="text" name="kode" id="kode">
                              </td>
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
                                   <input v-model="fieldinput.kecamatan" type="text" name="kecamatan" id="kecamatan">
                              </td>
                         </tr>
                         <tr>
                              <td>
                                   <label for="kode_pos">Kode Pos</label>
                              </td>
                              <td>
                                   <input readonly disabled v-model="fieldinput.kode_pos" type="text" name="kode_pos"
                                        id="kode_pos">
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
                                   <input readonly disabled v-model="fieldinput.no_tlp_rs" type="text" name="no_tlp_rs"
                                        id="no_tlp_rs">
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
                                   <input v-model="fieldinput.password" type="password" name="password" id="password">
                              </td>
                         </tr>
                         <tr>
                              <td>
                                   <label for="">Konfirmasi Pasword</label>
                              </td>
                              <td>
                                   <input v-model="fieldinput.confirm_password" type="password" name="confirm_password"
                                        id="confirm_password">
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
     </div>
</template>
<script setup lang="ts">
useHead({ title: 'Register' });
definePageMeta({
     middleware: 'unauth'
});
const form = reactive({
     kode: '',
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
const getCaptcha = async () => {
     const datacp = await $fetch('/api/captcha');
     mydata.captcha = datacp.svg
};
onMounted(() => {
     getCaptcha();
});
</script>