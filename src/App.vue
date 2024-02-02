<script lang="ts">
import { ref, watch, onMounted } from 'vue'

import FooterBase from './components/Layot/FooterBase.vue'
import HeaderBase from './components/Layot/HeaderBase.vue'

import { useArticlesStore } from './stores/articlesStore'

export default {
  components: {
    HeaderBase,
    FooterBase
  },
  setup() {
    const articlesStore = useArticlesStore()
    const isLoading = ref(false)

    const getArticlesList = async () => {
      isLoading.value = true
      try {
        await articlesStore.getArticles()
      } catch (error) {
        console.log('error', error)
      }
      isLoading.value = false
    }

    onMounted(getArticlesList)

    watch(
      () => articlesStore.articlesList,
      () => {
        isLoading.value = false
      }
    )

    return {
      articlesStore,
      isLoading,
      getArticlesList
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <HeaderBase></HeaderBase>
    <div class="loader" v-if="isLoading">
      <div class="loader-spin"></div>
      Загузка данных
    </div>
    <div class="main" v-else>
      <router-view></router-view>
    </div>
    <FooterBase></FooterBase>
  </div>
</template>

<style scoped></style>
