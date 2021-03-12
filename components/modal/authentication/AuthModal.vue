<template>
    <TemplateAuthModal 
        modalName="signin" 
        headTitle="Авторизація"
    >
        <template #content>
            <form class="auth-form" action="#">
                <Input 
                    placeholder="Номер телефону або e-mail"
                    @value="getLogin($event)"
                />
                <Input 
                    placeholder="Пароль" 
                    type="password"
                    @value="getPassword($event)"
                />

                <div class="forgot-password">
                    <span class="forgot-password__text">Забули пароль?</span>
                    <button class="forgot-password__button">відновити пароль</button>
                </div>

                <ActionButton 
                    gradient
                    fontColor="#fff" 
                    title="Увійти"
                    @click="doAuth"
                />
                <ActionButton 
                    title="Створити аккаунт"
                    @click="handleCreateAccount"
                />
            </form>
        </template>
    </TemplateAuthModal>
</template>

<script>
import TemplateAuthModal from '@/components/modal/authentication/TemplateAuthModal'
import ActionButton from '@/components/modal/authentication/ActionButton'
import Input from '@/components/modal/authentication/Input'
export default {
    components: { 
        TemplateAuthModal, 
        ActionButton, 
        Input 
    },
    data: () => ({
        login: "",
        password: ""
    }),
    methods: {
        getLogin(login) {
            this.login = login;
        },
        getPassword(pass) {
            this.password = pass;
        },
        doAuth() {
            if(this.login.length == 0) {
                alert('Логин не должен быть пустым!');
                return;
            }

            if(this.login.length < 5) {
                alert('Логин должен быть не меньше 5 символов');
                return;
            }

            if(this.password.length == 0) {
                alert('Пароль не должен быть пустым!');
                return;
            }

            if(this.password.length < 8) {
                alert('Пароль должен быть не меньше 8 символов');
                return;
            } 

            console.log("Trying to auth...");
            console.log("DATA:", this.login, this.password);
        },
        handleCreateAccount() {
            this.$modal.hide('signin');
            this.$modal.show('signup');
        }
    }
}
</script>

<style lang="scss" scope>
    .auth-form {
        min-width: 450px;
        margin-top: 25px;
    }

    .forgot-password {
        margin: 35px 0;

        &__text {
            font-size: 16px;
        }   

        &__button {
            font-weight: 300;
            color: $accent;
        }
    }
</style>