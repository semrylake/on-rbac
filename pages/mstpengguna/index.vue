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
          <CardTitle>List Pengguna</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Username</TableHead>
                <TableHead colspan="2" class="center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="(data_list, index) in data_list" :key="pagination.number">
                <TableCell class="font-medium">
                  {{ index + 1 }}
                </TableCell>
                <TableCell>
                  {{ data_list.nama }}
                </TableCell>
                <TableCell>
                  {{ data_list.email }}
                </TableCell>
                <TableCell>
                  {{ data_list.username }}
                </TableCell>
                <TableCell class="flex">
                  <Button variant="outline" @click="showDetail(data_list)"
                    class="bg-cyan-600 text-white hover:bg-cyan-500 hover:text-white">
                    Edit
                  </Button>

                  <AlertDialog>
                    <AlertDialogTrigger as-child>
                      <Button variant="outline" class="bg-red-600 text-white hover:bg-red-500 hover:text-white">
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
                        <AlertDialogAction @:click="handleDeleteData(data_list.kode_pengguna)">Ok
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
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
          <CardTitle>Form Edit Pengguna</CardTitle>
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
                <Label for="name">Nama</Label>
                <Input id="name" type="text" v-model="form_edit.nama" class="" />
                <p v-if="errors.nama" class="error text-red-400 font-bold">{{ errors.nama }}</p>
              </div>
              <div class="grid gap-2">
                <Label for="username">Username</Label>
                <Input type="text" id="username" v-model="form_edit.username" class="col-span-3" />
                <p v-if="errors.username" class="error text-red-400 font-bold">{{ errors.username }}</p>
              </div>
              <div class="grid gap-2">
                <Label for="email">Email</Label>
                <Input type="email" id="email" v-model="form_edit.email" class="col-span-3" />
                <p v-if="errors.email" class="error text-red-400 font-bold">{{ errors.email }}</p>
              </div>
              <div class="grid gap-2">
                <Label for="password">Password</Label>
                <Input id="password" type="password" v-model="form_edit.password" class="col-span-3" />

                <div class="flex items-center space-x-2">
                  <Checkbox id="terms" @click="changeTipePassword" />
                  <label for="terms"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Tampilkan Password
                  </label>
                </div>
              </div>
              <p v-if="errors.password" class="error text-red-400 font-bold">{{
                errors.password }}</p>
            </div>
            <DialogFooter class="float-start mt-7">
              <Button type="submit" v-if="onsubmitstatus == false">
                <Save class="mr-1" />
                Update
              </Button>
              <Button disabled v-else>
                <span>Loading......</span>
              </Button>
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
          <CardTitle>Form Tambah Pengguna</CardTitle>
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
                <Label for="name">Nama</Label>
                <Input id="name" type="text" v-model="form_add.nama" class="" />
                <p v-if="errors.nama" class="error text-red-400 font-bold">{{ errors.nama }}</p>
              </div>
              <div class="grid gap-2">
                <Label for="username">Username</Label>
                <Input id="username" type="text" v-model="form_add.username" class="col-span-3" />
                <p v-if="errors.username" class="error text-red-400 font-bold">{{
                  errors.username }}</p>
              </div>
              <div class="grid gap-2">
                <Label for="email">Email</Label>
                <Input type="email" id="email" v-model="form_add.email" class="col-span-3" />
                <p v-if="errors.email" class="error text-red-400 font-bold">{{ errors.email }}
                </p>
              </div>

              <div class="grid gap-2">
                <Label for="password">Password</Label>
                <Input id="password" type="password" v-model="form_add.password" class="col-span-3" />

                <div class="flex items-center space-x-2">
                  <Checkbox id="terms" @click="changeTipePassword" />
                  <label for="terms"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Tampilkan Password
                  </label>
                </div>
              </div>
              <p v-if="errors.password" class="error text-red-400 font-bold">{{
                errors.password }}</p>
            </div>
            <DialogFooter class="float-start mt-7">
              <Button type="submit" v-if="onsubmitstatus == false">
                <Save class="mr-1" />
                Simpan
              </Button>
              <Button disabled v-else>
                <span>Loading......</span>
              </Button>
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
useHead({ title: 'Master Pengguna' });
definePageMeta({
  layout: 'custom',
  middleware: 'auth'
});
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
import { onMounted } from 'vue';
onMounted(() => {
  startFrom = 0;
  fetchDataList();
})
// variabel
let startFrom = 0;
const data_list = ref(null);
const pagination = ref(null);
const showFormTambah = ref(false);
const showFormEdit = ref(false);
const errors_add = ref(null)
const response_submit = ref(null);
const response_delete = ref(null);
let statussubmitmenu = false;
let onsubmitstatus = false;
let showpassword = ref(false);
const form_edit = reactive({
  kode: '',
  nama: '',
  email: '',
  username: '',
  password: '',
});
const form_add = reactive({
  nama: '',
  email: '',
  username: '',
  password: '',
});
const errors = reactive({
  username: '',
  nama: '',
  password: '',
  email: '',
  total: 0
});

// method and function
const fetchDataList = async () => {
  try {
    const response = await $fetch(`/api/pengguna/getlist`,
      { method: 'post' }
    )
    if (response.success) {
      data_list.value = response.list_data;
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
    fetchDataList();

  } catch (error) {
    alert('failed to get request');
  }
};
const changeTipePassword = async () => {
  showpassword.value = !showpassword.value
  if (showpassword.value) {
    let elemetpassword = document.getElementById("password");
    elemetpassword.setAttribute('type', 'text');
  } else {
    let elementpassword = document.getElementById("password")
    elementpassword.setAttribute('type', 'password');
  }
}
function validateName() {
  const email = form_add.email;
  const nama = form_add.nama;
  const username = form_add.username;
  const password = form_add.password;
  errors.nama = '';
  errors.email = '';
  errors.username = '';
  errors.password = '';
  errors.total = 0;
  // Validasi required (tidak boleh kosong)
  errors.total = 0;
  if (!nama) {
    errors.total++;
    errors.nama = 'Nama harus diisi';
  }
  if (!username) {
    errors.total++;
    errors.username = 'Username harus diisi';
  }
  if (!email) {
    errors.total++;
    errors.email = 'Email harus diisi';
  }
  if (!password) {
    errors.total++;
    errors.password = 'Password harus diisi';
  }
  if (/\s/.test(email)) {
    errors.total++;
    errors.email = 'Email tidak boleh mengandung spasi';
  }
  if (/\s/.test(username)) {
    errors.total++;
    errors.username = 'Username tidak boleh mengandung spasi';
  }
  if (/\s/.test(password)) {
    errors.total++;
    errors.password = 'Password tidak boleh mengandung spasi';
  }
  onsubmitstatus = false;
  return errors.total
}
function validateNameEdit() {
  const email = form_edit.email;
  const nama = form_edit.nama;
  const username = form_edit.username;
  const password = form_edit.password;
  errors.nama = '';
  errors.email = '';
  errors.username = '';
  errors.password = '';
  errors.total = 0;
  // Validasi required (tidak boleh kosong)
  errors.total = 0;
  if (!nama) {
    errors.total++;
    errors.nama = 'Nama harus diisi';
  }
  if (!username) {
    errors.total++;
    errors.username = 'Username harus diisi';
  }
  if (!email) {
    errors.total++;
    errors.email = 'Email harus diisi';
  }
  if (/\s/.test(email)) {
    errors.total++;
    errors.email = 'Email tidak boleh mengandung spasi';
  }
  if (/\s/.test(username)) {
    errors.total++;
    errors.username = 'Username tidak boleh mengandung spasi';
  }
  onsubmitstatus = false;
  return errors.total
}
function resetFormAdd() {
  form_add.nama = '';
  form_add.email = '';
  form_add.username = '';
  form_add.password = '';

  form_edit.kode = '';
  form_edit.nama = '';
  form_edit.email = '';
  form_edit.username = '';
  form_edit.password = '';
  onsubmitstatus = false;
}
function resetErrors() {
  errors.nama = '';
  errors.username = '';
  errors.email = '';
  errors.password = '';
  errors.total = 0;
}
// Fungsi untuk menampilkan detail menu
function showDetail(menu) {
  form_edit.kode = menu.kode_pengguna;
  form_edit.nama = menu.nama;
  form_edit.username = menu.username;
  form_edit.email = menu.email;
  showFormTambah.value = 'edit';
}
const handleSubmitAdd = async () => {
  onsubmitstatus = true;
  statussubmitmenu = false;
  validateName();
  if (errors.total == 0) {
    response_submit.value = await $fetch('/api/pengguna/add', {
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
      errors.username = response_submit.value.error.username;
      errors.email = response_submit.value.error.email;
      errors.password = response_submit.value.error.password;
    }
  }

}
const handleDeleteData = async (kode_data) => {
  response_delete.value = await $fetch('/api/pengguna/delete', {
    method: 'POST',
    body: {
      kode: kode_data
    },
  });
  if (response_delete.value.status == true) {
    startFrom = 0;
    fetchDataList();
    alert("Data berhasil dihapus")
  } else {
    alert("Data Gagal dihapus")
  }
  kode_data = null;
};
const handleSubmitEdit = async () => {
  onsubmitstatus = true;
  statussubmitmenu = false;
  validateNameEdit();
  if (errors.total == 0) {
    response_submit.value = await $fetch('/api/pengguna/edit', {
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
      errors.username = response_submit.value.error.username;
      errors.password = response_submit.value.error.password;
      errors.email = response_submit.value.error.email;
    }
  }

}
</script>