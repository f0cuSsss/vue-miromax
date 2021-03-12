<template>
    <div>
        <button class="auth-button" @click="$modal.show('authmenu')">
            <span>Увійти</span>
        </button>

        <AuthorizationMenuModal></AuthorizationMenuModal>
    </div>
</template>

<script>
import AuthorizationMenuModal from '@/components/modal/authentication/AuthorizationMenuModal'
export default {
    components: {
        AuthorizationMenuModal
    }
}
</script>

<style lang="scss" scope>
    .auth-button {
        margin-left: 20px;
        cursor: pointer;
        span {
            font-weight: 600;
            font-size: 15px;
            display: flex;
            align-items: center;
            &::after {
                content: '';
                background: url('../assets/images/profile-40px.svg');
                display: flex;
                margin-left: 5px;
                width: 40px;
                height: 40px;
            }
        }
    }
</style>