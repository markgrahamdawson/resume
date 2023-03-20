<template>
    <div class="w-full flex-col items-center justify-center">

      <div class="text-left">
        <div class="text-5xl font-bold my-4 uppercase">
          <span class="text-gray-800">Mark</span> <span class="text-resumegreen">Dawson</span>
        </div>
        <div class="text-2xl font-bold my-4 uppercase">
          <span class="text-gray-800">Software Developer</span>
        </div>
        <div class="my-4 uppercase">
          <span class="text-gray-500 text-l">Cornwall, UK &#x2022;
          </span>
          <span class="text-resumegreen text-l">07842778711 &#x2022; markgrahamdawson@gmail.com
          </span>
        </div>
        <div class="text-gray-500 text-l my-8">Passionate web developer, making useful application using the latest
          technologies!</div>
        <div class="flex">
          <div class="bg-resumegreen rounded-full w-14 h-14 flex items-center justify-center m-2">
            <a href="https://www.linkedin.com/in/mark-dawson-18807854/">
              <IconsLinkedIn class="fill-gray-200" />
            </a>
          </div>
          <div class="bg-resumegreen rounded-full w-14 h-14 flex items-center justify-center m-2">
            <a href="https://github.com/markgrahamdawson">
              <IconsGitHub class="fill-gray-200" />
            </a>
          </div>
          <div class="text-gray-200 bg-resumegreen rounded-full w-14 h-14 flex items-center justify-center m-2">
            <a href="/MGD_Software2022.pdf">
              <IconsDocument class="fill-gray-200 stroke-resumegreen-200" />
              CV
            </a>
          </div>
        </div>
      </div>

      <div class="border-b border-black w-full h-32 flex items-center justify-center "></div>

    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
</script>
