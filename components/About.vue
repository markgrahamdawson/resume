<template>
  <div class="px-36 py-60 w-full flex items-center justify-center border border-black">
    <div class="text-left">
      <div class="text-5xl font-bold my-4 uppercase">
        <span class="text-gray-800">Mark</span> <span class="text-lime-700">Dawson</span>
      </div>
      <div class="text-2xl font-bold my-4 uppercase">
        <span class="text-gray-800">Software Developer</span>
      </div>
      <div class="my-4 uppercase">
        <span class="text-gray-500 text-l">Cornwall, UK &#x2022;
        </span>
        <span class="text-lime-700 text-l">07842778711 &#x2022; markgrahamdawson@gmail.com
        </span>
      </div>
      <div class="text-gray-500 text-l my-8">Passionate web developer, making useful application using the latest
        technologies!</div>
      <div class="flex ">
        <div class="bg-lime-700 rounded-full w-14 h-14 flex items-center justify-center m-2">
          <a href="https://www.linkedin.com/in/mark-dawson-18807854/">
            <LinkedIn class="fill-gray-200" />
          </a>
        </div>
        <div class="bg-lime-700 rounded-full w-14 h-14 flex items-center justify-center m-2">
          <a href="https://github.com/markgrahamdawson">
            <GitHub class="fill-gray-200" />
          </a>
        </div>
      </div>

    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import LinkedIn from '~/components/icons/LinkedIn.vue'
import GitHub from '~/components/icons/GitHub.vue'

</script>
