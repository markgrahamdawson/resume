<template>
  <div class="fixed rounded-xl top-64 h-96 w-3/4 md:w-1/2 bg-gray-200 border border-resumegreen-200 overflow-scroll text-gray-300">
    <div class="w-full h-20">
      <button @click="$emit('close-modal')" class="border border-resumegreen-500 rounded-full w-8 h-8 m-4 bg-resumegreen-100">X</button>
    </div>
    <div v-for="proj in project.projects" class="flex flex-col bg-gray-500 mx-4 my-6 mt-0 rounded-xl hover:shadow-lg">
      <div class="text-xl text-gray-800 bg-resumegreen-200 p-2 rounded-t-xl">
        {{proj.name}}
      </div>
      <div class="p-2">
        <div class="grow pb-4">
          {{proj.description}}
        </div>
        <div class="flex">
          <div v-if="proj.techUsed.length" class="w-1/2">
            Tech Used:
            <ul class="list-disc pl-4">
              <li v-for="tech in proj.techUsed" class="">
                {{tech}}
              </li>
            </ul>
          </div>
          <div class="w-full justify-start items-center flex w-1/2 text-sm">
            <div v-if="proj.git" class="flex flex-col items-center justify-center md:px-5">
              <div v-if="proj.git.logo==='gitlab'" class="items-center flex flex-col">
                <a :href="proj.git.url" target="_blank"><IconsGitLab class="fill-gray-200 w-12 h-12"/></a>
                CODE
              </div>
              <div v-else-if="proj.git.logo==='github'" class="items-center flex flex-col">
                <a :href="proj.git.url" target="_blank"><IconsGitHub class="fill-gray-200 w-12 h-12 p-2"/></a>
                CODE
              </div>
            </div>
            <div v-if="proj.linktolive" class="flex flex-col items-center justify-center">
              <a :href="proj.linktolive" target="_blank"><IconsEye class=" w-12 h-12 p-2"/></a>
              VIEW
            </div>

          </div>
        </div>
      </div>
    </div>


  </div>
    abc
</template>

<script lang="ts" setup>
defineProps({
  project : {
    type: Object,
    required: true
  }
})
</script>