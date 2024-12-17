<template>
  <v-app>
    <v-card color="primary" :class="responsiveClass('index-v-card')">
      <v-container :class="responsiveClass('index-v-container')">
        <span :class="responsiveClass('index-title')">
          <div class="d-flex flex-wrap justify-center">
            <div>こんにちは！</div>
            <div>なにかお困りですか？</div>
          </div>
        </span>
      </v-container>
      <suggest :categories="categories" />
    </v-card>

    <v-container class="customGray">
      <v-row class="ma-1" justify="center" align="center">
        <v-col>
          <v-icon id="mainicon-style">mdi-widgets</v-icon>
          <span id="category-search-title">カテゴリで探す</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="4"
          v-for="(category, index) in categories"
          :key="index"
        >
          <v-card height="110" rounded="lg">
            <v-icon class="bookmark-icon">mdi-bookmark</v-icon>
            <v-card-title class="category-name-title">
              {{ category.categoryName }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import responsiveMixin from '~/mixins/responsiveMixin.js'
import Suggest from '~/components/Suggest.vue'
import { useNuxtApp } from '#imports'
export default {
  components: { Suggest },
  mixins: [responsiveMixin],
  data() {
    return {
      categories: [],
    }
  },
  async mounted() {
    const route = useRoute()
    const nuxtApp = useNuxtApp()

    if (route.query.inquiry) {
      nuxtApp.$emit('openFormDialog')
    }

    await this.getCategories()
  },

  methods: {
    async getCategories() {
      try {
        const nuxtApp = useNuxtApp()
        const response = await nuxtApp.$axios.get('/categories') //TODO API
        this.categories = response.data
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    },
  },
  computed: {
    isMobile() {
      const nuxtApp = useNuxtApp()
      return nuxtApp.$display.mobile
    },
  },
}
</script>

<style scoped lang="scss">
#category-search-title {
  font-size: 25px;
  font-weight: 700;
  color: #1a237e;
  text-shadow: 1px 1px 1px #bdbdbd;
  vertical-align: middle;
}
#mainicon-style {
  font-size: 30px;
  color: #1a237e;
  text-shadow: 1px 1px 1px #bdbdbd;
}
.bookmark-icon {
  margin-left: 20px;
  color: #1a237e;
  font-size: 40px;
  text-shadow: 1px 1px 1px #1a237e;
}
.category-name-title {
  margin-left: 20px;
  letter-spacing: normal;
  line-height: 1.5rem;
  color: #1a237e;
}
.index {
  &-v-card-desktop {
    padding: 80px 0 30px;
  }
  &-v-card-mobile {
    padding-top: 20px;
  }
  &-v-container-desktop {
    margin-bottom: 40px;
  }
  &-title-desktop {
    font-size: 30px;
    font-weight: 700;
    color: white;
    text-shadow: 1px 1px 1px #1a237e;
  }
  &-title-mobile {
    font-size: 25px;
    font-weight: 700;
    color: white;
    text-shadow: 1px 1px 1px #1a237e;
  }
}
.customGray {
  background-color: #f5f5f5;
}
</style>
