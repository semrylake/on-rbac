<template>
     <div>
          <Button class="mb-1 bg-slate-800" @click="onShowFormAdd">
               <Plus v-if="showFormTambah == false" class="mr-1" />
               <ArrowLeft v-else class="mr-1" />
               {{ (showFormTambah == false) ? 'Tambah' : 'Kembali' }}
          </Button>
          <div v-if="showFormTambah == false">
               <Card class="shadow">
                    <CardHeader class="shadow">
                         <CardTitle>List Menu</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <Table>
                              <TableHeader>
                                   <TableRow>
                                        <TableHead>No</TableHead>
                                        <TableHead>Menu</TableHead>
                                        <TableHead>Path</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead colspan="2" class="center">Action</TableHead>
                                   </TableRow>
                              </TableHeader>
                              <TableBody>
                                   <TableRow v-for="(list_menus, index) in datamenu" :key="pagination.number">
                                        <TableCell class="font-medium">
                                             {{ index + 1 }}
                                        </TableCell>
                                        <TableCell>
                                             {{ list_menus.nama }}
                                        </TableCell>
                                        <TableCell>
                                             {{ list_menus.url }}
                                        </TableCell>
                                        <TableCell>
                                             <Badge v-if="list_menus.status == 1" class="bg-green-600">
                                                  Aktif
                                             </Badge>
                                             <Badge v-else class="bg-red-600">
                                                  Tidak Aktif
                                             </Badge>
                                        </TableCell>
                                        <TableCell class="flex">
                                             <Button variant="outline" @click="showDetail(list_menus)"
                                                  class="bg-cyan-600 text-white hover:bg-cyan-500 hover:text-white">
                                                  Edit
                                             </Button>

                                             <AlertDialog>
                                                  <AlertDialogTrigger as-child>
                                                       <Button variant="outline"
                                                            class="bg-red-600 text-white hover:bg-red-500 hover:text-white">
                                                            Delete
                                                       </Button>
                                                  </AlertDialogTrigger>
                                                  <AlertDialogContent>
                                                       <AlertDialogHeader>
                                                            <AlertDialogTitle>Yakin menghapus data?
                                                            </AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                 Pilih "<strong>Cancel</strong>" jika ingin membatalkan
                                                                 aksi ini. Atau klik "<strong>Ok</strong>" untuk
                                                                 menghapus data ini
                                                            </AlertDialogDescription>
                                                       </AlertDialogHeader>
                                                       <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                            <AlertDialogAction
                                                                 @:click="handleDeleteData(list_menus.kode_menu)">Ok
                                                            </AlertDialogAction>
                                                       </AlertDialogFooter>
                                                  </AlertDialogContent>
                                             </AlertDialog>
                                        </TableCell>
                                        <TableCell>
                                        </TableCell>
                                   </TableRow>
                              </TableBody>
                         </Table>
                    </CardContent>
                    <CardFooter>
                         <div class="text-xs text-muted-foreground">
                              Showing <strong>1-10</strong> of <strong>32</strong>
                              products
                         </div>
                    </CardFooter>
               </Card>
          </div>
          <div v-else-if="showFormTambah == 'edit'">
               <Card class="shadow">
                    <CardHeader class="shadow">
                         <CardTitle>Form Edit Menu</CardTitle>
                    </CardHeader>
                    <CardContent class="grid gap-4">
                         <form @submit.prevent="handleSubmitEdit">
                              <Alert class="mt-3 border-green-500 bg-green-300" v-if="statussubmitmenu == true">
                                   <AlertTitle>Success</AlertTitle>
                                   <AlertDescription>
                                        Data berhasil disimpan
                                   </AlertDescription>
                              </Alert>
                              <div class="grid gap-4 py-4">
                                   <div class="grid gap-2">
                                        <Label for="name">Nama Menu</Label>
                                        <Input id="name" type="text" v-model="form_edit.nama" class="" />
                                        <p v-if="errors.nama" class="error text-red-400 font-bold">{{ errors.nama }}</p>
                                   </div>
                                   <div class="grid gap-2">
                                        <Label for="path">Path atau Module</Label>
                                        <Input type="text" id="path" v-model="form_edit.path" class="col-span-3" />
                                        <p v-if="errors.path" class="error text-red-400 font-bold">{{ errors.path }}</p>
                                   </div>
                                   <div class="grid gap-2">
                                        <Label for="desc">
                                             Deskripsi
                                        </Label>
                                        <Input id="desc" type="text" v-model="form_edit.desc" class="col-span-3" />
                                   </div>
                                   <div class="grid gap-2">
                                        <Label for="desc">
                                             Status
                                        </Label>
                                        <Select v-model="form_edit.status">
                                             <SelectTrigger class="w-full col-span-3">
                                                  <SelectValue placeholder="Pilih Status" />
                                             </SelectTrigger>
                                             <SelectContent>
                                                  <SelectGroup>
                                                       <SelectItem v-for="option in optionsStatus" :key="option.value"
                                                            :value="option.value">
                                                            {{ option.label }}
                                                       </SelectItem>
                                                  </SelectGroup>
                                             </SelectContent>
                                        </Select>
                                        <p v-if="errors.status" class="error text-red-400 font-bold">{{ errors.status }}
                                        </p>
                                   </div>
                                   <div class="grid gap-2">
                                        <Label for="desc">

                                        </Label>
                                        <div class="col-span-1">
                                             <Button type="submit" v-if="onsubmitstatus == false">
                                                  <Save class="mr-1" />
                                                  Update
                                             </Button>
                                             <Button disabled v-else>
                                                  <span>Loading......</span>
                                             </Button>

                                        </div>
                                   </div>
                              </div>
                              <DialogFooter>
                              </DialogFooter>
                         </form>
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
               </Card>
          </div>
          <div v-else>
               <Card class="shadow">
                    <CardHeader class="shadow">
                         <CardTitle>Form Tambah Menu</CardTitle>
                    </CardHeader>
                    <CardContent class="grid gap-4">
                         <form @submit.prevent="handleSubmitAdd">
                              <Alert class="mt-3 border-green-500 bg-green-300" v-if="statussubmitmenu == true">
                                   <AlertTitle>Success</AlertTitle>
                                   <AlertDescription>
                                        Data berhasil disimpan
                                   </AlertDescription>
                              </Alert>
                              <div class="grid gap-4 py-4">
                                   <div class="grid gap-2">
                                        <Label for="name">Nama Menu</Label>
                                        <Input id="name" type="text" v-model="form_add.nama" class="" />
                                        <p v-if="errors.nama" class="error text-red-400 font-bold">{{ errors.nama }}</p>
                                   </div>
                                   <div class="grid gap-2">
                                        <Label for="path">Path atau Module</Label>
                                        <Input type="text" id="path" v-model="form_add.path" class="col-span-3" />
                                        <p v-if="errors.path" class="error text-red-400 font-bold">{{ errors.path }}</p>
                                   </div>
                                   <div class="grid gap-2">
                                        <Label for="desc">
                                             Deskripsi
                                        </Label>
                                        <Input id="desc" type="text" v-model="form_add.desc" class="col-span-3" />
                                   </div>
                                   <div class="grid gap-2">
                                        <Label for="desc">
                                             Status
                                        </Label>
                                        <Select v-model="form_add.status">
                                             <SelectTrigger class="w-full col-span-3">
                                                  <SelectValue placeholder="Pilih Status" />
                                             </SelectTrigger>
                                             <SelectContent>
                                                  <SelectGroup>
                                                       <SelectItem v-for="option in optionsStatus" :key="option.value"
                                                            :value="option.value">
                                                            {{ option.label }}
                                                       </SelectItem>
                                                  </SelectGroup>
                                             </SelectContent>
                                        </Select>
                                        <p v-if="errors.status" class="error text-red-400 font-bold">{{ errors.status }}
                                        </p>
                                   </div>
                                   <div class="grid gap-2">
                                        <Label for="desc">

                                        </Label>
                                        <div class="col-span-1">
                                             <Button type="submit" v-if="onsubmitstatus == false">
                                                  <Save class="mr-1" />
                                                  Simpan
                                             </Button>
                                             <Button disabled v-else>
                                                  <span>Loading......</span>
                                             </Button>

                                        </div>
                                        <!-- <div v-else-if="onsubmitstatus == true" >
                                        </div> -->
                                   </div>
                              </div>
                              <DialogFooter>
                              </DialogFooter>
                         </form>
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
               </Card>
          </div>


     </div>
</template>

<script setup>
useHead({ title: 'Master Menu' });
definePageMeta({
     layout: 'custom',
     middleware: 'auth'
});
import { onMounted } from 'vue';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
     AlertDialog,
     AlertDialogAction,
     AlertDialogCancel,
     AlertDialogContent,
     AlertDialogDescription,
     AlertDialogFooter,
     AlertDialogHeader,
     AlertDialogTitle,
     AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
     Table,
     TableBody,
     TableCell,
     TableHead,
     TableHeader,
     TableRow,
} from '@/components/ui/table'
import {
     MoreHorizontal,
     Plus,
     ArrowLeft,
     Save
} from 'lucide-vue-next'

onMounted(() => {
     startFrom = 0;
     fetchDataMenu();
})
const datamenu = ref(null);
const pagination = ref(null);
let startFrom = 0;
const showFormTambah = ref(false);
const showFormEdit = ref(false);
const optionsStatus = ref([
     { value: '1', label: 'Aktif' },
     { value: '0', label: 'Tidak Aktif' },
])
const form_edit = reactive({
     kode: '',
     nama: '',
     path: '',
     desc: '',
     status: '',
});
const form_add = reactive({
     nama: '',
     path: '',
     desc: '',
     status: '',
});

// Fungsi untuk menampilkan detail menu
function showDetail(menu) {
     form_edit.kode = menu.kode_menu;
     form_edit.nama = menu.nama;
     form_edit.path = menu.url;
     form_edit.desc = menu.desc;
     form_edit.status = menu.status;
     showFormTambah.value = 'edit';
}
// Data error untuk validasi
const errors = reactive({
     path: '',
     nama: '',
     status: '',
     total: 0
});
function resetFormAdd() {
     form_add.nama = '';
     form_add.path = '';
     form_add.desc = '';
     form_add.status = '';

     form_edit.kode = '';
     form_edit.nama = '';
     form_edit.path = '';
     form_edit.desc = '';
     form_edit.status = '';
     onsubmitstatus = false;
}
function resetErrors() {
     errors.nama = '';
     errors.path = '';
     errors.desc = '';
     errors.status = '';
     errors.total = 0;
}
const errors_add = ref(null)

const response_submit = ref(null);
const response_delete = ref(null);
let statussubmitmenu = false;

const fetchDataMenu = async () => {
     try {
          const response = await $fetch(`/api/menu/getlist`,
               { method: 'post' }
          )
          if (response.success) {
               // startFrom = 0;
               datamenu.value = response.list_menu;
               pagination.value = response.pagination;
               startFrom = pagination.value.number;
          }
     } catch (err) {
          alert("gagal mengambil data")
     } finally {
     }
}
function onShowFormAdd() {
     try {
          statussubmitmenu = false;
          showFormTambah.value = !showFormTambah.value;
          resetErrors();
          resetFormAdd();
          startFrom = 0;
          fetchDataMenu();

     } catch (error) {
          alert('failed to get request');
     }
};
let onsubmitstatus = false;

function validateName() {
     const path = form_add.path;
     const nama = form_add.nama;
     const status = form_add.status;
     errors.nama = '';
     errors.path = '';
     errors.status = '';
     errors.total = 0;
     // Validasi required (tidak boleh kosong)
     errors.total = 0;
     if (!nama) {
          errors.total++;
          errors.nama = 'Nama menu harus diisi';
     }
     if (!status) {
          errors.total++;
          errors.status = 'Status harus diisi';
     }
     if (!path) {
          errors.total++;
          errors.path = 'Path harus diisi';
     }
     // Validasi tidak boleh mengandung angka atau spasi
     else if (/\d/.test(path)) {
          errors.total++;
          errors.path = 'Path tidak boleh mengandung angka';
     }
     else if (/\s/.test(path)) {
          errors.total++;
          errors.path = 'Path tidak boleh mengandung spasi';
     }
     else {
          errors.path = ''; // Tidak ada error
     }
     onsubmitstatus = false;
     return errors.total
}
function validateNameEdit() {
     const path = form_edit.path;
     const nama = form_edit.nama;
     const status = form_edit.status;
     errors.nama = '';
     errors.path = '';
     errors.status = '';
     errors.total = 0;
     // Validasi required (tidak boleh kosong)
     errors.total = 0;
     if (!nama) {
          errors.total++;
          errors.nama = 'Name is required';
     }
     if (!status) {
          errors.total++;
          errors.status = 'Status is required';
     }
     if (!path) {
          errors.total++;
          errors.path = 'Path is required';
     }
     // Validasi tidak boleh mengandung angka atau spasi
     else if (/\d/.test(path)) {
          errors.total++;
          errors.path = 'Path cannot contain numbers';
     }
     else if (/\s/.test(path)) {
          errors.total++;
          errors.path = 'Path cannot contain spaces';
     }
     else {
          errors.path = ''; // Tidak ada error
     }
     onsubmitstatus = false;
     return errors.total
}
const openDeleteDialog = ref(false);
const handleDeleteData = async (kode_menu) => {
     response_delete.value = await $fetch('/api/menu/delete', {
          method: 'POST',
          body: {
               kode: kode_menu
          },
     });
     if (response_delete.value.status == true) {
          alert("Data berhasil dihapus")
          startFrom = 0;
          fetchDataMenu();
     } else {
          alert("Data Gagal dihapus")
     }
     kode_menu = null;
};
const handleSubmitAdd = async () => {
     onsubmitstatus = true;
     statussubmitmenu = false;
     validateName();
     if (errors.total == 0) {
          response_submit.value = await $fetch('/api/menu/submit', {
               method: 'POST',
               body: form_add
          });
          if (response_submit.value.status == true) {
               statussubmitmenu = true;
               resetFormAdd();
               // resetErrors();
          } else {
               statussubmitmenu = false;
               // errors = response_submit.value.error;
               errors.nama = response_submit.value.error.nama;
               errors.path = response_submit.value.error.path;
               errors.status = response_submit.value.error.status;
          }
     }

}
const handleSubmitEdit = async () => {
     onsubmitstatus = true;
     statussubmitmenu = false;
     validateNameEdit();
     if (errors.total == 0) {
          response_submit.value = await $fetch('/api/menu/update_menu', {
               method: 'POST',
               body: form_edit
          });
          if (response_submit.value.status == true) {
               statussubmitmenu = true;
               resetFormAdd();
               resetErrors();
          } else {
               statussubmitmenu = false;
               errors.nama = response_submit.value.error.nama;
               errors.path = response_submit.value.error.path;
               errors.status = response_submit.value.error.status;
          }
     }

}
</script>