<template>
    <footer>
        <Logo />
        <a href="https://github.com/Zintaho" target="_blank">
            (c) {{ currentYear }} Zintaho
        </a>
    </footer>
</template>

<script>
import Logo from './Logo.vue'
export default {
    components: {
        Logo
    },
    computed: {
        currentYear() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style lang="scss" scoped>
    footer {
        padding: 70px 0;
        text-align: center;
        opacity: .3;
        .logo {
            display: block;
            margin-bottom: 4px;
        }
    }
</style>