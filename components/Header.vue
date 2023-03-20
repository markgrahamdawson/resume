<template>
  <div class="w-full h-20 bg-resumegreen-500 flex align-center justify-end">
    <!-- <div class="h-10 m-auto text-center text-resumegreen-100 text-lg font-extrabold bold">Marks Resume</div> -->
    <button class="border-2 border-resumegreen-200 rounded my-auto h-10 w-10 mr-6">
      <IconsHamburger  @click="toggleModal()" class="stroke-resumegreen-200 m-auto"/>
    </button>
    <!-- modal pop-up -->
    <div class="fixed z-50 h-full w-full p-10" :class="showModal ? 'hidden': ''">
      <div class="bg-gray-200 w-full h-full rounded border border-white">
        <button @click="toggleModal()" class="border border-resumegreen-500 rounded-full w-8 h-8 m-4 bg-resumegreen-100">X</button>
        <div class="flex justify-center text-resumegreen-500 text-lg font-extrabold">
          <ul>
            <li @click="toggleModal()" class="m-3"><nuxt-link :to="{ path: '/', hash: '#about' }">About</nuxt-link></li>
            <li @click="toggleModal()" class="m-3"><nuxt-link :to="{ path: '/', hash: '#education' }">Education</nuxt-link></li>
            <li @click="toggleModal()" class="m-3"><nuxt-link :to="{ path: '/', hash: '#experience' }">Experience</nuxt-link></li>
            <li @click="toggleModal()" class="m-3"><nuxt-link :to="{ path: '/', hash: '#skills' }">Skills</nuxt-link></li>
            <li @click="toggleModal()" class="m-3"><nuxt-link :to="{ path: '/', hash: '#interests' }">Interests</nuxt-link></li>
            <li @click="toggleModal()" class="m-3"><nuxt-link :to="{ path: '/', hash: '#about' }">Projects</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showModal = ref(true)
const toggleModal = () => {
  showModal.value = !showModal.value
}

</script>