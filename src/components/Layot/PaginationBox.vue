<script lang="ts">
import { ref, computed, watch } from 'vue'
import { useArticlesStore } from '@/stores/articlesStore'

export default {
  setup() {
    const articlesStore = useArticlesStore()
    const totalPages = computed(() => articlesStore.totalPages)
    const visiblePages = ref<number[]>([])

    watch(
      () => articlesStore.currentPage,
      (currentPage) => {
        const start = Math.max(1, currentPage - 2)
        const end = Math.min(start + 4, totalPages.value)
        visiblePages.value = Array.from({ length: end - start + 1 }, (_, i) => start + i)
      },
      { immediate: true }
    )

    return {
      articlesStore,
      totalPages,
      visiblePages
    }
  },
  methods: {
    setCurrentPage(pageNumber: number): void {
      this.articlesStore.setCurrentPage(pageNumber)
    },
    setNextPage(this: any) {
      this.articlesStore.setNextPage()
    },
    setPrevPage(this: any) {
      this.articlesStore.setPrevPage()
    }
  }
}
</script>

<template>
  <div class="pagination">
    <button
      class="btn pagination__arrow pagination__arrow-prev"
      :class="{ show: articlesStore.currentPage === 1 }"
      @click="setPrevPage()"
    >
      <svg
        class="icon-arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9.5 7.5L14.5 12.5L9.5 17.5"
          stroke="#494949"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <button
      class="btn pagination__btn"
      :class="{ active: articlesStore.currentPage === page }"
      v-for="page in visiblePages"
      :key="page"
      @click="setCurrentPage(page)"
    >
      {{ page }}
    </button>
    <button
      class="btn pagination__arrow pagination__arrow-next"
      @click="setNextPage()"
      :class="{ show: articlesStore.currentPage === totalPages }"
    >
      <svg
        class="icon-arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9.5 7.5L14.5 12.5L9.5 17.5"
          stroke="#494949"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pagination__arrow {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid var(--color_border);
  background: var(--color_white);
  transition: background 0.3s ease-in-out;
}

.pagination__arrow.show {
  opacity: 0;
  visibility: hidden;
}
.pagination__arrow:hover {
  background: var(--color_border);
}

.pagination__arrow-prev {
  transform: rotate(180deg);
}

.pagination__arrow svg {
  width: 24px;
  height: 24px;
}
.pagination__btn {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--color_pag);
  font-size: 16px;
  font-weight: 400;
  line-height: 50%;
  transition:
    color 0.3s ease-in-out,
    background 0.3s ease-in-out;
}

.pagination__btn:hover {
  background: var(--color_border);
}

.pagination__btn.active {
  background: var(--color_text);
  color: var(--color_white);
}
</style>
