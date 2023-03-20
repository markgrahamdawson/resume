<template>
  <div>
    <Menu class="hidden md:block"/>
    <Header class="md:hidden"/>
    <slot></slot>
  </div>
</template>

<script>
import Menu from '~~/components/Menu.vue'
import Header from '~~/components/Header.vue'
</script>