<template>
  <div class="w-full flex-col items-center justify-center relative">
    <div class="text-left">
      <div class="text-5xl font-bold my-4 uppercase mb-16">
        <span class="text-gray-800">Projects</span>
      </div>
      <div class="grid grid-cols-4 grid-cols-1 md:grid-cols-2 gap-12">
        <button @click="toggleProject('stats')" class="h-64 text-resumegreen-500 font-bold">Statistics and ML
          <!-- <img src="~/assets/stats.png" alt="Stats Picture" class="object-scale-down px-10" /> -->
          <div class="h-full w-full bg-[url('~/assets/stats.png')] bg-contain	bg-no-repeat bg-center"/>
        </button>
        <button @click="toggleProject('articles')" class="h-64 text-resumegreen-500 font-bold">Articles
          <!-- <img src="~/assets/articles.png" alt="Articles Picture" class="object-scale-down" /> -->
          <div class="h-full w-full bg-[url('~/assets/articles.png')] bg-contain	bg-no-repeat bg-center"/>
        </button>
        <button @click="toggleProject('webWork')" class="h-64 text-resumegreen-500 font-bold">Websites for work
          <!-- <img src="~/assets/webwork.png" alt="Webwork picture" class="object-scale-down" /> -->
          <div class="h-full w-full bg-[url('~/assets/webwork.png')] bg-contain	bg-no-repeat bg-center"/>
        </button>
        <button @click="toggleProject('webPersonal')" class="h-64 text-resumegreen-500 font-bold">Websites for personal projects
          <!-- <img src="~/assets/webpersonal.png" alt="Webpersonal picture" class="object-scale-down" /> -->
          <div class="h-full w-full bg-[url('~/assets/webpersonal.png')] bg-contain	bg-no-repeat bg-center"/>
        </button>
      </div>
      <div v-if="showProject">
      <ProjectDetail :project="selectedProject" @close-modal="showProject = false"/>
    </div>
      <!-- Statistics and ML
       - Gitlab and Linkedin Articles
      Firebase Authentication
       - Articles
      Website for work
       - GoCollaborate
       - StandoutCV
       - WomenWise 
      Website for personal projects
       - Resume
       - TheLadder -->
    </div>
    <div class="border-b border-black w-full h-32 flex items-center justify-center "></div>
  </div>
</template>

<script lang="ts" setup>
import ProjectDetail from './ProjectDetail.vue'

const selectedProject = ref('')
const showProject = ref(false)
const toggleProject = (projectID: string) => {
  selectedProject.value = projects[projectID]
  showProject.value = true
}

const projects = {
  stats:{
    title: 'Statistics and ML',
    image: '',
    projects: {
      project1: {
        name: 'Environmental Statistics',
        description: 'A project to build out a python statistics library for extreme value analysis, joint probability analysis.',
        techUsed: ['Numpy', 'Pandas', 'Matplotlib'],
        git: {logo:'gitlab', url: 'https://gitlab.com/markgdawson/statistics/-/tree/master/Statistics'},
        linktolive: '',
      },
      project2: {
        name: 'Machine Learning',
        description: 'A project to forecast environmental variables using machine learning.',
        techUsed: ['Tensorflow', 'ski-kitlearn'],
        git: {logo:'gitlab', url: 'https://gitlab.com/markgdawson/statistics/-/blob/master/Statistics/08%20-%20LSTM%20Neural%20Networks%202.ipynb'},
        linktolive: '',
      }
    }
  },
  articles:{
    title: 'Articles and Blog Posts',
    image: '',
    projects: {
      project1: {
        name: 'Firebase Authentication',
        description: 'A series of blog posts on using Nuxt with Firebase Authentication.',
        techUsed: ['Firebase', 'Nuxt'],
        git: {logo:'', url: ''},
        linktolive: 'https://medium.com/@markgrahamdawson/nuxt-firebase-authentication-5c16a58831f9',
      },
      project2: {
        name: 'Numerical and Empirical Methods',
        description: 'A linkedIn article on the history of the methods used in the field of environmental numerical modelling.',
        techUsed: [],
        git: {logo:'', url: ''},
        linktolive: 'https://www.linkedin.com/pulse/water-engineers-rationalists-empiricists-mark-dawson/',
      },
      project3: {
        name: 'Public Flood Risk Finance',
        description: 'A linkedIn article on the financing of public flood and coastal erosion infrastructure.',
        techUsed: [],
        git: {logo:'', url: ''},
        linktolive: 'https://www.linkedin.com/pulse/flood-money-mark-dawson/',
      }
    }
  },
  webWork:{
    title: 'Website for work',
    image: '',
    projects: {
      project1: {
        name: 'WomenWise',
        description: 'A web app for supporting women through the menopause. The app was built using Nuxt3, an Express API and firebase for authentication and database.',
        techUsed: ['Typescript', 'Nuxt3', 'Express', 'Firebase'],
        git: {logo:'', url: ''},
        linktolive: 'https://app.womenwise.health/sign-up/screening-questionnaire',
      },
      project2: {
        name: 'StandOutCV',
        description: 'A web app for creating CVs. The app was built using Nuxt2, and a Django rest API. The backend is hosted on a digital ocean droplet using docker and kubernetes for scaling. The frontend is hosted on netlify.',
        techUsed: ['Nuxt2', 'Django-Rest-Framework','Docker','Kubernetes'],
        git: {logo:'', url: ''},
        linktolive: 'https://cvbuilder.standout-cv.com/',
      },
      project3: {
        name: 'GoCollaborate',
        description: 'A web app for managing comunity consultations. The app was built using Nuxt2, and a Django rest API. The backend is hosted on a digital ocean droplet using docker and kubernetes for scaling. The frontend is hosted on netlify.',
        techUsed: ['Nuxt2', 'Django-Rest-Framework','Docker','Kubernetes','Prismic-CMS'],
        git: {logo:'', url: ''},
        linktolive: 'https://app.gocollaborate.co.uk/cornwall/redruth/',
      }
    }
  },
  webPersonal:{
    title: 'Website for personal projects',
    image: '',
    projects: {
      project1: {
        name: 'TheLadder',
        description: 'A website for a community interest company that are repurposing an old community library into a creative hub. The app was built using Nuxt3 and StoryBlock for a CMS.',
        techUsed: ['Typescript', 'Nuxt3', 'Storyblock'],
        git: {logo:'github', url: 'https://github.com/markgrahamdawson/theladder_rr_vue3'},
        linktolive: 'https://theladder-rr.netlify.app/',
      },
      project2: {
        name: 'Resume',
        description: 'A resume website.',
        techUsed: ['Typescript', 'Nuxt3'],
        git: {logo:'github', url: ''},
        linktolive: 'https://markgrahamdawson.github.io/',
      }
    }
  },
}

</script>