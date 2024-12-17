<template>
  <v-app>

    <v-system-bar color="secondary">
      System Bar
    </v-system-bar>

    <v-app-bar color="primary">
      <v-app-bar-title>
        App バー タイトル
      </v-app-bar-title>
    </v-app-bar>


    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
    
    <v-footer color="primary" app>
      フッター
    </v-footer>

  </v-app>
</template>
