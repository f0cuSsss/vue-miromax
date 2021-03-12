<template>
      <Modal :name="modalName">
        <template #body>
            <div class="authorization">
                <div class="authorization__header">
                    <logo />
                    <h2 class="authorization__header__title">{{ headTitle }}</h2>
                </div>
                <div class="authorization__content">
                    <slot name="content"></slot>    
                </div>
            </div>
        </template>
    </Modal>
</template>

<script>
export default {
    props: {
        modalName: {
            type: String,
            required: true
        },
        headTitle: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scope>
    .authorization {
        padding: 10px 30px 20px;
        &__header {
            display: flex;
            align-items: center;
            padding: 0 0 25px;
            border-bottom: 1px solid #000;

            .logo {
                margin: 0;
            }

            &__title {
                font-size: 28px;
                font-weight: 700;
                margin-left: 20px;
            }
        }

        &__content {

        }
    }
</style>