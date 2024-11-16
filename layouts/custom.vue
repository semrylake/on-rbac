<script setup lang=ts>
//useHead({ title: 'Dashboard' });
// definePageMeta({
//      middleware: 'auth'
// });
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
  AudioWaveform,
  BadgeCheck,
  CircleUser,
  ChevronRight,
  ChevronsUpDown,
  GalleryVerticalEnd,
  LogOut,
  Database,
  Monitor,
  Accessibility,
  Terminal,
  TerminalIcon,
  MonitorCheck,
  Home,
  Bell,
  Package2,
  Menu,
  User
} from 'lucide-vue-next'
import { ref } from 'vue'

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
        {
          title: 'Master Menu',
          url: 'mstmenu',
        },

      ],
    },
    // {
    //   title: 'Models',
    //   url: '#',
    //   icon: Bot,
    //   items: [
    //     {
    //       title: 'Genesis',
    //       url: '#',
    //     },
    //     {
    //       title: 'Explorer',
    //       url: '#',
    //     },
    //     {
    //       title: 'Quantum',
    //       url: '#',
    //     },
    //   ],
    // },
    // {
    //   title: 'Documentation',
    //   url: '#',
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: 'Introduction',
    //       url: '#',
    //     },
    //     {
    //       title: 'Get Started',
    //       url: '#',
    //     },
    //     {
    //       title: 'Tutorials',
    //       url: '#',
    //     },
    //     {
    //       title: 'Changelog',
    //       url: '#',
    //     },
    //   ],
    // },
    // {
    //   title: 'Settings',
    //   url: '#',
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: 'General',
    //       url: '#',
    //     },
    //     {
    //       title: 'Team',
    //       url: '#',
    //     },
    //     {
    //       title: 'Billing',
    //       url: '#',
    //     },
    //     {
    //       title: 'Limits',
    //       url: '#',
    //     },
    //   ],
    // },
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
              <GalleryVerticalEnd class="h-6 w-6" />
              <span class="">OnRBAC</span>
            </a>
            <!-- <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
              <Bell class="h-4 w-4" />
              <span class="sr-only">Toggle notifications</span>
            </Button> -->
          </div>
          <div class="flex-1">
            <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
              <a href="/dashboard"
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Home class="h-4 w-4" />
                Dashboard
              </a>
              <a href="/mstmenu"
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <User class="h-4 w-4" />
                Master Menu
              </a>
              
            </nav>
          </div>
          <div class="mt-auto p-4">
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
                  <Package2 class="h-6 w-6" />
                  <span class="sr-only">OnRBAC</span>
                </a>
                <a href="/dashboard"
                  class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                  <Home class="h-5 w-5" />
                  Dashboard
                </a>
                <a href="/mstmenu"
                  class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground">
                  <User class="h-5 w-5" />
                  Master Menu
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