<template>
  <div class="fixed min-h-screen w-1/4 bg-resumegreen flex">
    <div class="flex items-center justify-center mt-32">
      <div class="text-center text-resumegreen-100 uppercase">
        <img src="~/assets/myface.jpeg" alt="Profile picture" class="rounded-full w-32 h-32 border-8 border-resumegreen-200" />
        <!-- <button class="nav-link js-scroll-trigger" @click="jumpTo('#about')">About</button> -->
        <div class="m-3"><nuxt-link :to="{ path: '/', hash: '#about' }">About</nuxt-link></div>
        <div class="m-3"><nuxt-link :to="{ path: '/', hash: '#skills' }">Skills</nuxt-link></div>
        <div class="m-3"><nuxt-link :to="{ path: '/', hash: '#projects' }">Projects</nuxt-link></div>
        <div class="m-3"><nuxt-link :to="{ path: '/', hash: '#experience' }">Experience</nuxt-link></div>
        <div class="m-3"><nuxt-link :to="{ path: '/', hash: '#education' }">Education</nuxt-link></div>
        <div class="m-3"><nuxt-link :to="{ path: '/', hash: '#interests' }">Interests</nuxt-link></div>
        <!-- <button class="nav-link js-scroll-trigger" @click="jumpTo('#projects')">Projects</button> -->
      </div>
    </div>

    <!-- <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" @click="jumpTo('#about')" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" @click="jumpTo('#education')" href="#">Education</a>
      </li>
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" @click="jumpTo('#experience')" href="#">Experience</a>
      </li>
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" @click="jumpTo('#skills')" href="#">Skills</a>
      </li>
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" @click="jumpTo('#interests')" href="#">Interests</a>
      </li>
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" @click="jumpTo('#projects')" href="#">Projects</a>
      </li>
    </ul> -->
  </div>
</template>


<script>

// import jump from "jump.js";

// const jumpTo = (element) => {
//   jump(element);
// }
</script>
