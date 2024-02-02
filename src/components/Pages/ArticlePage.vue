<script lang="ts">
import { ref, onMounted } from 'vue'
import { useArticlesStore } from '@/stores/articlesStore'
import type { Article } from '@/stores/articlesStore'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const idParam = useRoute().params.id
    const articleId = ref(Array.isArray(idParam) ? idParam[0] : idParam)
    const currentArticle = ref<Article | null>(null)

    const articlesStore = useArticlesStore()

    onMounted(async () => {
      currentArticle.value = articlesStore.getArticleById(articleId.value)
    })

    return {
      articlesStore,
      currentArticle
    }
  }
}
</script>

<template>
  <section class="article">
    <div class="container article__container">
      <h1 class="article__title">{{ currentArticle?.title }}</h1>
      <img class="article__img" :src="currentArticle?.image" :alt="currentArticle?.title" />
      <div class="article__descr">
        <span class="article__subtitle" id="about">About</span>
        <p class="article__text">{{ currentArticle?.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.article__container {
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;
}

.article__title {
  font-size: 84px;
}

.article__img {
  height: 700px;
}

.article__descr {
  width: 57%;
}
.article__subtitle {
  display: block;
  margin-bottom: 32px;
  font-size: 16px;
}

.article__text {
  font-size: 36px;
  line-height: 124%;
}
</style>
