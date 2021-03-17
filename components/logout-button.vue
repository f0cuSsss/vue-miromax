<template>
    <div>
        <button class="logout-button" @click="handleLogout">
            <span>Вихiд</span>
        </button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import AuthorizationMenuModal from '@/components/modal/authentication/AuthorizationMenuModal'
export default {
    components: {
        AuthorizationMenuModal
    },
    methods: {
        ...mapActions({
            logout: 'user/logout'
        }),
        handleLogout() {
            this.logout();
        }
    }
}
</script>

<style lang="scss" scope>
    .logout-button {
        margin-left: 20px;
        cursor: pointer;
        span {
            font-weight: 600;
            font-size: 15px;
            display: flex;
            align-items: center;
            &::after {
                content: '';
                background: url('../assets/images/logout.svg');
                display: flex;
                margin-left: 5px;
                width: 40px;
                height: 40px;
            }
        }
    }
</style>