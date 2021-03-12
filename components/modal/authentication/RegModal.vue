<template>
    <TemplateAuthModal 
        modalName="signup" 
        headTitle="Реєстрація"
    >
        <template #content>
            <form class="reg-form" action="#">
                <Input 
                    placeholder="Електронна адреса"
                    @value="getEmail($event)"
                />
                <Input 
                    placeholder="Номер телефону" 
                    @value="getPhone($event)"
                />

                <div class="additional">
                    <Checkbox >
                        <template #text>
                            <span>Я погоджуюсь з 
                                <nuxt-link to="" :style="{ color: '#CE58E7', 'text-decoration': 'none' }">правилами кінотеатру miromax</nuxt-link> 
                                та підтверджую, що ознайомлений 
                                <nuxt-link to="" :style="{ color: '#CE58E7', 'text-decoration': 'none' }">з віковими обмеженнями</nuxt-link> кінотеатру
                            </span>
                        </template>
                    </Checkbox>

                    <Checkbox checked >
                        <template #text>
                            <span>Підписатися на розсилку</span>
                        </template>
                    </Checkbox>
                </div>

                <ActionButton 
                    gradient
                    fontColor="#fff" 
                    title="Створити"
                    @click="doReg"
                />
                <ActionButton 
                    title="Є аккаунт?"
                    @click="handleAuth"
                />
            </form>
        </template>
  </TemplateAuthModal>
</template>

<script>
import TemplateAuthModal from '@/components/modal/authentication/TemplateAuthModal'
import ActionButton from '@/components/modal/authentication/ActionButton'
import Input from '@/components/modal/authentication/Input'
import Checkbox from '@/components/checkbox/Checkbox'

export default {
    mounted() {
        // this.rulesAgreement = true;
    },
    components: { 
        TemplateAuthModal, 
        ActionButton, 
        Input,
        Checkbox
    },
    data: () => ({
        email: "",
        phone: "",
        rulesAgreement: false,
        subscribeAgreement: true
    }),
    methods: {
        getEmail(email) {
            this.email = email;
        },
        getPhone(phone) {
            this.phone = phone;
        },
        getRulesAgreement(rulesAgreement) {
            this.rulesAgreement = rulesAgreement;
            console.log(rulesAgreement);
        },
        getSubscribeAgreement(subscribeAgreement) {
            this.subscribeAgreement = subscribeAgreement;
            console.log(subscribeAgreement);
        },
        doReg() {
            // if(this.email.length == 0) {
            //     alert('Почта не должена быть пустой!');
            //     return;
            // }

            // if(this.phone.length == 0) {
            //     alert('Номер телефона не должен быть пустым!');
            //     return;
            // }

            // if(this.phone.length > 12) {
            //     alert('Номер телефона должен быть не более 12 символов');
            //     return;
            // } 

            console.log("Trying to reg...");
            console.log("DATA:", this.email, this.phone);
            console.log("Agreements: ", this.rulesAgreement, this.subscribeAgreement);
        },
        handleAuth() {
            this.$modal.hide('signup');
            this.$modal.show('signin');
        }
    }
}
</script>

<style lang="scss" scope>
    .reg-form {
        width: 450px;
        margin-top: 40px;
        margin-bottom: 30px;

        .additional {
            margin: 50px 0;
        }
    }
</style>