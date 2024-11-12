<template>
     <div>
          <Dialog>
               <DialogTrigger as-child>
                    <Button class="mb-1">
                         <Plus class="mr-1" /> Tambah
                    </Button>
               </DialogTrigger>
               <DialogContent class="sm:max-w-[640px]">
                    <DialogHeader class="mb-6">
                         <DialogTitle>Form Tambah Menu</DialogTitle>
                    </DialogHeader>
                    <hr>
                    <form>
                         <div class="grid gap-4 py-4">
                              <div class="grid grid-cols-4 items-center gap-4">
                                   <Label for="name" class="text-right">
                                        Nama Menu
                                   </Label>
                                   <Input id="name" type="text" v-model="form_add.nama" class="col-span-3" />
                              </div>
                              <div class="grid grid-cols-4 items-center gap-4">
                                   <Label for="path" class="text-right">
                                        Path atau Module
                                   </Label>
                                   <Input type="text" id="path" v-model="form_add.path" class="col-span-3" />
                              </div>
                              <div class="grid grid-cols-4 items-center gap-4">
                                   <Label for="desc" class="text-right">
                                        Deskripsi
                                   </Label>
                                   <Input id="desc" type="text" v-model="form_add.desc" class="col-span-3" />
                              </div>
                              <div class="grid grid-cols-4 items-center gap-4">
                                   <Label for="desc" class="text-right">
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
                              </div>
                         </div>
                         <DialogFooter>
                              <Button type="submit">
                                   Simpan
                              </Button>
                         </DialogFooter>
                    </form>
               </DialogContent>
          </Dialog>
     </div>
</template>
<script setup lang="ts">
useHead({ title: 'Add Menu' });
definePageMeta({
     layout: 'custom',
     middleware: 'auth'
});

const optionsStatus = ref([
     { value: '1', label: 'Aktif' },
     { value: '0', label: 'Tidak Aktif' },
])
const form_add = reactive({
     nama: '',
     path: '',
     desc: '',
     status: '',
});
</script>