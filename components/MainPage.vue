<template>
  <div class="min-h-screen absolute right-0 bg-gray-200 w-full md:w-3/4">
    <div class="text-center md:px-32 px-12 flex flex-col">
      <section id="about" class="pt-20">
        <About/>
      </section>
      <section id="skills" class="pt-20">
        <Skills />
      </section>
      <sectionid id="projects" class="pt-20">
        <Projects />
      </sectionid>
      <section id="experience" class="pt-20">
        <Experience />
      </section>
      <section id="education" class="pt-20">
        <Education />
      </section>
      <section id="interests" class="pt-20">
        <Interests />
      </section>
    </div>
  </div>
</template>

<script>
import Header from '~~/components/Header.vue'
import About from '~~/components/About.vue'
import Education from '~~/components/Education.vue'
import Experience from '~~/components/Experience.vue'
import Skills from '~~/components/Skills.vue'
import Interests from '~~/components/Interests.vue'
import Projects from '~~/components/Projects.vue'

export default {
  components: {
    About,
    Education,
    Experience,
    Skills,
    Interests,
    Projects
  }
}

</script>