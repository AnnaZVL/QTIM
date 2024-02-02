<script lang="ts">
export default {}
</script>

<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__top">
        <div class="footer__titles titles">
          <span class="titles__text">Is there a project?</span>
          <span class="footer__title">Let’s work</span>
          <span class="footer__title">together</span>
        </div>
        <ul class="footer__contacts contacts">
          <li class="contacts__item">
            <span class="contacts__text">For all questions</span>
            <a class="contacts__link" href="tel:79202780068">+7 (920) 278—00—68</a>
            <a class="contacts__link" href="mailto:qtim@agency.com ">qtim@agency.com</a>
          </li>
          <li class="contacts__item">
            <span class="contacts__text">Office in Russia</span>
            <span class="contacts__text">139 Ruben Station Lake Drew, NM 52678</span>
            <button class="btn contacts__btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M7.5 10.5L10.5 1.5L1.5 4.5L5.25 6.75L7.5 10.5Z"
                  stroke="#E2BEFF"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </li>
          <li class="contacts__item">
            <span class="contacts__text">Office in Dubai</span>
            <span class="contacts__text">139 Ruben Station Lake Drew, NM 52678</span>
            <button class="btn contacts__btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M7.5 10.5L10.5 1.5L1.5 4.5L5.25 6.75L7.5 10.5Z"
                  stroke="#E2BEFF"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <div class="footer__buttom">
        <ul class="footer__social social">
          <li class="social__item">
            <a href="https://www.fecebook.com/" class="social__link" target="_blank">Facebook</a>
          </li>
          <li class="social__item">
            <a href="https://www.instagram.com" class="social__link" target="_blank">Instagram</a>
          </li>
          <li class="social__item">
            <a href="https://telegram.me/" class="social__link" target="_blank">Telegram</a>
          </li>
        </ul>
        <ul class="footer__social social">
          <li class="social__item">
            <a href="https://www.behance.net" class="social__link" target="_blank">Behance</a>
          </li>
          <li class="social__item">
            <a href="https://www.linkedin.com/" class="social__link" target="_blank">Linkedin</a>
          </li>
          <li class="social__item">
            <a href="#" class="social__link" target="_blank">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
    <button class="btn footer__btn">
      <span>Go</span>
    </button>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  background: var(--color_second);
  overflow: hidden;
}

.footer__btn {
  margin: 0 auto;
  position: absolute;
  bottom: -25%;
  left: 0;
  right: 0;
  border-radius: 100%;
  background: var(--color_text);
  color: var(--color_white);
  font-size: 32px;
  width: 360px;
  height: 360px;
}

.footer__btn span {
  display: block;
  transform: translateY(-30px);
}

.footer__container {
  padding-top: 140px;
}

.footer__top {
  margin-bottom: 250px;
  display: flex;
  gap: 40px;
}

.titles {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
}

.titles__text {
  margin-bottom: 56px;
  line-height: 120%;
  letter-spacing: 0.16px;
}

.footer__title {
  font-size: 112px;
  font-weight: 400;
  position: relative;
  line-height: 100%;
}

.footer__title::after {
  content: '';
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--color_text);
}

.contacts {
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 36px;
  width: 150px;
}

.contacts__item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
}

.contacts__text:first-child {
  margin-bottom: 4px;
}
.contacts__text,
.contacts__link {
  font-size: 16px;
  line-height: 120%;
  letter-spacing: 0.16px;
  color: var(--color_text);
}

.contacts__btn {
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background: var(--color_text);
  transition: background 0.3s ease-in-out;
}

.contacts__btn:hover {
  background: transparent;
}

.contacts__btn svg path {
  transition: stroke 0.3s ease-in-out;
}
.contacts__btn:hover svg path {
  stroke: var(--color_text);
}
.footer__buttom {
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.social {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.social__link {
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.16px;
  color: var(--color_text);
  position: relative;
}

.social__link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--color_text);
  transition: width 0.3s ease-in-out;
}

.social__link:hover:after {
  width: 0;
}
</style>
