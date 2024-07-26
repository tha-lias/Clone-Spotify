<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Menu from './components/MenuItem.vue'

import ChevronUp from "vue-material-design-icons/ChevronUp.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";

let openMenu = ref(false);
</script>

<template>
  <div>
    <div
      class="bg-[#101010] w-[calc(100%-240px)] h-[60px] fixed right-0 z-20 bg-opacity-80 flex items-center justify-between"
    >
      <div class="flex items-center ml-6">
        <button
          type="button"
          class="rounded-full bg-black p-[1px] cursor-pointer"
        >
          <ChevronLeft fillColor="#FFF" :size="30" />
        </button>

        <button
          type="button"
          class="rounded-full bg-black p-[1px] ml-4 cursor-pointer"
        >
          <ChevronRight fillColor="#FFF" :size="30" />
        </button>
      </div>

      <button
        @click="openMenu = !openMenu"
        :class="openMenu ? 'bg-[#282828]' : 'bg-black'"
        class="bg-black hover:bg-[#282828] rounded-full p-0.5 mr-8 mt-0.5 cursor-pointer"
      >
        <div class="flex items-center">
          <img
            src="https://avatars.githubusercontent.com/u/128606778?v=4&size=64"
            width="27"
            class="rounded-full"
          />

          <div class="text-white text-[14px] ml-1.5 font-semibold">
            Thalia Silva
          </div>
          <ChevronDown
            v-if="!openMenu"
            @click="openMenu = true"
            fillColor="#fff"
            :size="25"
          />
          <ChevronUp
            v-else
            @click="openMenu = false"
            fillColor="#fff"
            :size="25"
          />
        </div>
      </button>

      <span
        v-if="openMenu"
        class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[52px] right-[35px] p-1 cursor-pointer"
      >
        <ul class="text-gray-200 font-semibold text-[14px]">
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">
            Profile
          </li>
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D]">Log out</li>
        </ul>
      </span>
    </div>

    <div class="h-[100%] p-6 w-[240px] fixed z-50 bg-black" id="SideNav">
      <a href="/">
        <img src="../public/images/icons/spotify-logo.png" width="125" />
      </a>

      <div class="my-8"></div>
      <ul>
        <a href="/">
          <Menu class="ml-[1px]" :iconSize="23" name="Home" iconString="home" pageUrl="/" />
        </a>

        <a href="/" >
          <Menu class="ml-[1px]" :iconSize="23" name="Search" iconString="search" pageUrl="/search" />
        </a>
      </ul>
    </div>
  </div>
</template>
