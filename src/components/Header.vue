<template>
  <header>
      <Logo />
      <div 
        class="nav nav-pills"
      >
        <div 
            v-for="nav in navigations"
            :key="nav.name"
            class="nav-item"
        >
            <RouterLink
                :to="nav.href"
                class="nav-link"
                active-class="active"
            >
                {{nav.name}}
            </RouterLink>
        </div>
      </div>
  </header>
</template>

<script>
import Logo from './Logo.vue';
export default {
    components: {
        Logo
    },
    data() {
        return {
            navigations: [
                {
                    name : 'Search',
                    href : '/'
                },
                {
                    name : 'Movie',
                    href : '/movie/tt4520988'
                },
                {
                    name: 'About',
                    href: '/about'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    height: 70px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    .logo {
        margin-right: 40px;
    }
}
</style>