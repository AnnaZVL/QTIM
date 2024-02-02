<script lang="ts">
export default {}
</script>

<template>
  <header class="header">
    <router-link class="header__logo" to="/" aria-label="на главную">
      <img src="../../assets/icons/logo.svg" alt="логотип" />
    </router-link>
    <div class="header__actions">
      <nav class="header__nav">
        <ul class="header__menu menu">
          <li class="menu__item">
            <a class="menu__link" href="#">Works</a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#about">About</a>
          </li>
        </ul>
      </nav>
      <div class="header__buttons">
        <button class="btn btn__lang">
          <img src="../../assets/icons/icon_lang.svg" alt="иконка флага" />
        </button>
        <button class="btn header__btn">Let’s work</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 35px 40px;
  margin: 0 auto;
  margin-bottom: 120px;
  max-width: 1440px;
  height: 120px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.header__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 90px;
}
.header__logo img {
  width: 84px;
  height: 25px;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 58px;
}

.menu__link {
  font-size: 20px;
  line-height: 100;
  color: var(--color_text);
  transition: outline 0.3s ease-in-out;
}

.menu__link:hover {
  outline: 1px solid var(--color_text);
  outline-offset: 3px;
  border-radius: 10px;
}

.header__buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.btn__lang {
  padding: 10px;
  border-radius: 100%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  width: 52px;
  height: 52px;
}

.header__btn {
  padding: 16px 32px;
  border-radius: 999px;
  background: var(--color_text);
  color: var(--color_white);
  font-size: 20px;
  line-height: 100%;
}

.header__btn:hover,
.btn__lang:hover {
  transform: scale(1.02);
}
</style>
