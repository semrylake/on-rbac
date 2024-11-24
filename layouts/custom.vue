<script setup lang="ts">
import { computed, watchEffect,onMounted,watch } from 'vue';
const pageTitle = ref('');
// // Perbarui title secara dinamis
onMounted(() => {
  pageTitle.value = document.title
});

function getDynamicClass(value: string):string {
  return pageTitle.value === value ? 'bg-cyan-600 text-white hover:bg-cyan-500 hover:text-white' : '';
}
const onlogout = async () => {
  try {
    await $fetch('/api/logout');
    window.location.reload()
  } catch (error) {
    alert('failed to logout');
  }
};


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  MenuIcon,
  Folder,
  CircleUser,
  GalleryVerticalEnd,
  Database,
  MonitorCheck,
  Home,
  Package2,
  Menu,
  User
} from 'lucide-vue-next'
import { ref } from 'vue'
import { timestamp } from '@vueuse/core';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'OnRBAC',
      logo: MonitorCheck,
      plan: '',
    },
  ],
  navMain: [
    {
      title: 'Manajemen Penguna',
      url: '#',
      icon: Database,
      isActive: false,
      items: [

      ],
    },
  ],
}

const activeTeam = ref(data.teams[0])

function setActiveTeam(team: typeof data.teams[number]) {
  activeTeam.value = team
}
</script>

<template>
  <div>
    <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div class="hidden border-r bg-muted/40 md:block">
        <div class="flex h-full max-h-screen flex-col gap-2">
          <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <a href="/dashboard" class="flex items-center gap-2 font-semibold">
              <!-- <GalleryVerticalEnd class="h-6 w-6" /> -->
              <img src="/assets/images/logo2.png" alt="" width="80">
              <span class="">OnRBAC</span>
            </a>
            <!-- <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
              <Bell class="h-4 w-4" />
              <span class="sr-only">Toggle notifications</span>
            </Button> -->
          </div>
          <div class="flex-1">
            <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
              <a href="/dashboard" :class="getDynamicClass('Dashboard')"
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Home class="h-4 w-4" />
                Dashboard
              </a>
              <a href="/mstmenu" :class="getDynamicClass('Master Menu')"
                class=" flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Folder class="h-4 w-4" />
                Master Menu
              </a>
              <a href="/mstpengguna" :class="getDynamicClass('Master Pengguna')"
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Folder class="h-4 w-4" />
                Master Pengguna
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger as-child>
              <Button variant="outline" size="icon" class="shrink-0 md:hidden">
                <Menu class="h-5 w-5" />
                <span class="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" class="flex flex-col">
              <nav class="grid gap-2 text-lg font-medium">
                <a href="#" class="flex items-center gap-2 text-lg font-semibold">
                  <!-- <Package2 class="h-6 w-6" />
                  <span class="sr-only">OnRBAC</span> -->
                  <img src="/assets/images/logo2.png" alt="" width="80">
                  <span class="">OnRBAC</span>
                </a>
                <a href="/dashboard" :class="dynamicClass('Dashboard')"
                  class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                  <Home class="h-5 w-5" />
                  Dashboard
                </a>
                <a href="/mstmenu" :class="dynamicClass('Master Menu')"
                  class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground">
                  <Folder class="h-5 w-5" />
                  Master Menu
                </a>
                <a href="/mstpengguna" :class="dynamicClass('Master Pengguna')"
                  class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground">
                  <Folder class="h-5 w-5" />
                  Master Pengguna
                </a>

              </nav>

            </SheetContent>
          </Sheet>
          <div class="w-full flex-1">
            <!-- <form>
              <div class="relative">
                <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search products..."
                  class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3" />
              </div>
            </form> -->
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="secondary" size="icon" class="rounded-full">
                <CircleUser class="h-5 w-5" />
                <span class="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem @click="onlogout">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main class="p-6">
          <slot></slot>
        </main>
        <!-- <main class="flex flex-1 flex-col gap-4 lg:gap-6 lg:p-6">
          <div class="flex items-center">
          </div>
          <div class="flex flex-1 rounded-lg border border-dashed shadow-sm">
          </div>
        </main> -->
      </div>
    </div>
  </div>
</template>