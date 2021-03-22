<template>
  <footer>
      <div class="info-block">
        <MiromaxApp />
        <button class="ticket-back__button">Правила повернення квитків</button>
        <div class="social_links">
           <social-link :iconPath="require('../assets/images/social/facebook-f_24px.svg')" iconAlt="facebook" href="https://www.facebook.com/pg/tangram.pt" />
           <social-link :iconPath="require('../assets/images/social/instagram_24px.svg')" iconAlt="instagram" href="https://www.instagram.com/tangraminteriors/" />
           <social-link :iconPath="require('../assets/images/social/telegram-alt_24px.svg')" iconAlt="telegram" href="https://www.instagram.com/tangraminteriors/" />
        </div>
      </div>
      <div class="info-block">
          <span class="miromax-copyright">© 2020 Miromax. Всі права захищено.</span>
          <div class="dev">
              <span>By</span>
              <img src="../assets/images/Sign_Tangram_Studio.svg" alt="Tangram studio">
          </div>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    footer {
        margin: 0 20px;
        padding: 20px;
        background-color: $color_2;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .info-block {
            display: flex;
        }
    }

    .social_links {
        display: flex;
        align-items: center;
    }

    .miromax-copyright {
        color: #7F7F8A;
        font-weight: 400;
        font-size: 14px;
        margin-right: 64px;
    }

    .dev {
        display: flex;
        align-items: center;
        span {
            color: #7F7F8A;
            font-weight: 400;
            font-size: 14px;
        }
        img {
            width: 24px;
            height: 24px;
            margin-left: 16px;
        }
    }

    .ticket-back__button {
        text-decoration: underline;
        font-size: 17px;
        // text-decoration-color: $accent;
        color: $accent;
        margin-left: 32px;
    }
</style>