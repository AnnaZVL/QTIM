import { defineStore } from 'pinia'
import axios from "axios";

export type Article = {
  id: number;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string
}

export interface State {
  articlesList: Article[];
  currentPage: number;
  limitPage: number;
}

export interface Actions {
  getArticles(): Promise<void>;
  setCurrentPage(pageNumber: number): void;
  getArticleById(id: string): Article | null;
 
}

export const useArticlesStore = defineStore('articles', {
  state: (): State => ({
    articlesList: [] as Article[],
    currentPage: 1,
    limitPage: 8,
  }),
  actions: { 
    async getArticles(this: any): Promise<void> {
      try {
        const response = await axios.get<Article[]>('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/') 
        this.articlesList = response.data;               
     } catch (error) {
        console.log('Ошибка при получении списка статей', error);
     }
    },
    getArticleById(this: any, id: string): Article | null {            
      return this.articlesList.find((article: any) => article.id === id);
    },
    setCurrentPage(this: any, pageNumber: number): void {
      this.currentPage = pageNumber;      
    },    
    setNextPage(this: any) {      
      this.currentPage += 1;      
    },
    setPrevPage(this: any) {      
      this.currentPage -= 1;      
    },   
  } as Actions,
  getters: {
    paginatedArticles(this: State): Article[] {
      const startIndex = (this.currentPage - 1) * this.limitPage;
      const endIndex = startIndex + this.limitPage;
      return this.articlesList.slice(startIndex, endIndex);
    },
    totalPages(this: State): number {      
      return Math.ceil(this.articlesList.length / this.limitPage);
    },
    

  }
})
