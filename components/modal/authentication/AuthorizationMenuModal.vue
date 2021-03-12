<template>
    <TemplateAuthModal 
        modalName="authmenu" 
        headTitle="Профіль."
    >
        <template #content>
            <span class="preview-text secondary-text">Увійдіть або створіть акаунт, використовуючи email.</span>
            <div class="buttons">
                <ActionButton bgColor="#CE58E7" fontColor="#fff" title="Увійти"></ActionButton>
                <ActionButton title="Створити аккаунт"></ActionButton>
            </div>
            <div class="another-actions">
                <span class="another-actions__title">або авторизуйтесь через:</span>
                <div class="another-actions__list">
                    <div class="another-actions__list__item another-actions__list__item--blue">
                        <img src="@/assets/images/social/facebook_white.svg" alt="facebook">
                    </div>
                    <div class="another-actions__list__item">
                        <img src="@/assets/images/social/brands-and-logotypes.svg" alt="google">
                    </div>
                    <div class="another-actions__list__item">
                        <img src="@/assets/images/social/company.svg" alt="apple">
                    </div>
                </div>
            </div>
        </template>
    </TemplateAuthModal>
</template>

<script>
import TemplateAuthModal from '@/components/modal/authentication/TemplateAuthModal'
import ActionButton from '@/components/modal/authentication/ActionButton'
export default {
    components: { TemplateAuthModal, ActionButton },
    mounted() {}
}
</script>

<style lang="scss" scope>
    .secondary-text {
        font-weight: 600;
        font-size: 20px;
        color: $color_6;
    }

    .preview-text {
        width: 350px;
        display: block;
        margin: 20px 0 30px;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        .main-button {

        }

        .secondary-button {

        }
    }

    .another-actions {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        &__title {
            font-weight: 600;
            font-size: 20px;
            color: $color_6;
        }

        &__list{
            display: flex;
            flex-wrap: wrap;
            margin-top: 25px;
            &__item {
                border-radius: 10px;
                cursor: pointer;
                box-shadow: 0px 7px 12px -12px #7f7f8a;
                padding: 24px;
                margin-right: 15px;

                transition: all 0.25s ease-in-out;

                img {
                    width: 20px;
                    height: 20px;
                }

                &--blue {
                    box-shadow: none;
                    background-color: $color_8;
                }

                &:hover {
                    box-shadow: none;
                    transition: all 0.25s ease-in-out;
                }
            }
        }

        
    }
</style>