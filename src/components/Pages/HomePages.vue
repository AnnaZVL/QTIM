<script lang="ts">
import ArticleCard from '../Layot/ArticleCard.vue'
import PaginationBox from '../Layot/PaginationBox.vue'

import { useArticlesStore } from '@/stores/articlesStore'

export default {
  setup() {
    const articlesStore = useArticlesStore()

    return {
      articlesStore
    }
  },
  components: {
    ArticleCard,
    PaginationBox
  }
}
</script>

<template>
  <section class="articles">
    <div class="container articles__container">
      <h1 class="title">Articles</h1>
      <ul class="articles__list">
        <ArticleCard
          v-for="article in articlesStore.paginatedArticles"
          :key="article.id"
          :article="article"
        ></ArticleCard>
      </ul>
      <PaginationBox></PaginationBox>
    </div>
  </section>
</template>

<style scoped>
.articles__container {
  margin-bottom: 140px;
}

.articles__list {
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 32px;
}
</style>
