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
                <div class="input-error" v-if="$v.login.$dirty && !$v.login.required">Номер телефону або e-mail є обов'язковим полем.</div>
                <div class="input-error" v-else-if="$v.login.$dirty && !$v.login.minLength">Номер телефону або e-mail має бути не меньше нiж 5 символiв.</div>

                <Input 
                    placeholder="Пароль" 
                    type="password"
                    @value="getPassword($event)"
                />
                <div class="input-error" v-if="$v.password.$dirty && !$v.password.required">Пароль є обов'язковим полем.</div>
                <div class="input-error" v-else-if="$v.password.$dirty && !$v.password.minLength">Пароль має бути не меньше нiж 4 символи.</div>

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

                <div v-if="authError" class="input-error">{{ authError }}</div>
            </form>
        </template>
    </TemplateAuthModal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'

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
        ...mapActions({
            doLogin: 'user/login'
        }),
        getLogin(login) {
            this.login = login;
            this.$v.login.$touch();
        },
        getPassword(pass) {
            this.password = pass;
            this.$v.password.$touch();
        },
        async doAuth() {
            if(this.$v.$invalid) {
             this.$v.$touch();
             return;
            }

            try {
                await this.doLogin({ emailOrPhone: this.login, password: this.password });
            } catch(e) {
                alert(e.status)
            }

            if(!this.authError && this.isLoggedIn) {
                this.$modal.hide('signin');
            } 
            else {
                console.log(this.authErrors);
            }

        },
        handleCreateAccount() {
            this.$modal.hide('signin');
            this.$modal.show('signup');
        }
    },
    computed: {
        ...mapGetters({
            isLoggedIn: 'user/userIsLoggedIn',
            authError: 'user/error'
        }),
    },
    validations: {
        login: {
            required,
            minLength: minLength(5)
        },
        password: {
            required,
            minLength: minLength(4)
        }
    }
    
}
</script>

<style lang="scss" scope>
    .auth-form {
        min-width: 450px;
        margin-top: 25px;
    }

    .input-error {
        margin: 7px 0 12px;
        color: #c23131;
        font-size: 11px;
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