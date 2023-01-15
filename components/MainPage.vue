<template>
  <div class="min-h-screen w-3/4 border border-black absolute right-0 bg-gray-200">
    <div class="text-center">
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="interests">
        <Interests />
      </section>
      <sectionid id="projects">
        <Projects />
      </sectionid>
    </div>
  </div>
</template>

<script>
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