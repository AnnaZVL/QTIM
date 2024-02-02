<script lang="ts">
export default {
  props: ['article']
}
</script>

<template>
  <div class="card">
    <router-link class="card__link-img" :to="{ name: 'article', params: { id: article.id } }">
      <img class="card__img" ref="img" :src="article.image" :alt="article.title" />
    </router-link>
    <p class="card__text">
      {{ article.description }}
    </p>
    <router-link class="card__link" :to="{ name: 'article', params: { id: article.id } }"
      >Read more</router-link
    >
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  transform: translateY(20px);
  background: transparent;
  transition: transform 0.3s ease-in-out;
  height: 400px;
  position: relative;
}

.card__link-img {
  height: 210px;
}
.card__img {
  margin-bottom: 12px;
}
.card:hover {
  transform: translateY(0px);
}

.card__text {
  padding-right: 8px;
  line-height: 120%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.card__link {
  position: absolute;
  bottom: -12px;
  left: 0;
  opacity: 0;
  line-height: 120%;
  color: var(--color_second);
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
}

.card:hover .card__link {
  opacity: 1;
  visibility: visible;
}
</style>
