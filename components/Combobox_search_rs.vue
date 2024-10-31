<template>
  <div class="combobox">
    <!-- Input box untuk mencari data -->
    <!-- <input type="text" v-model="query" @input="handleInput" @blur="hideList" @focus="fetchData"
      placeholder="Cari data..." class=""> -->

    <div class="form-floating mb-3 d-flex">
      <input type="text" class="form-control" v-model="query" @input="handleInput" @blur="hideList" @focus="fetchData"
        placeholder="Masukan kode atau nama fasyankes">
        <button class="btn btn-info ms-1" @click="getDetailRs">Cari</button>
      <label for="nama_fasyankes">Nama Fasyankes</label>
    </div>

    <!-- Menampilkan hasil pencarian -->
    <ul v-if="showList && searchResults.length" class="combobox-list mb-2">
      <li v-for="(item, index) in searchResults" :key="index" @click="selectItem(item)" class="search-item">
        {{ item.kode }} - {{ item.nama }} <!-- Ubah sesuai dengan struktur data API -->
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
const emit = defineEmits();
const query = ref('')
const searchResults = ref([])
const showList = ref(false)

const handleInput = async () => {
  if (query.value.trim()) {
    fetchData()
  } else {
    showList.value = false
  }
}

const fetchData = async () => {
  if (query.value.length > 0) {
    const { data } = await axios.post(`/api/register/cekkoders`,
      {
        keyword: query.value
      }
    )
    if (data.success) {
      searchResults.value = data.faskes // Ubah `results` sesuai dengan response dari API
      showList.value = !!searchResults.value.length // Tampilkan list jika ada hasil
    }
  }
}

const selectItem = (item) => {
  // Set value yang dipilih di input
  query.value = item.kode + " - " + item.nama
  emit('input-kode-changed', item.kode)
  // Sembunyikan list hasil pencarian
  showList.value = false
}

const hideList = () => {
  // Delay untuk menunggu event click pada list sebelum hide
  setTimeout(() => {
    showList.value = false
  }, 200)
}

const getDetailRs = async () => { 
  emit('get-data-rs',true)
}
</script>
<style scoped>
.combobox {
  position: relative;
  width: 100%;
}

.combobox-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.combobox-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  position: relative;
  /* position: absolute; */
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1;
}

.combobox-list li {
  padding: 8px;
  cursor: pointer;
}

.combobox-list li:hover {
  background-color: #f0f0f0;
}

p {
  margin-top: 8px;
  color: #888;
}
</style>