<template>
<v-app>
    <p>コンポーネント 01</p>

    <h2>アイコンボタン</h2>
    <!-- home アイコン , pages/index まで、遷移させる。  -->
    <p>
        <v-btn icon="mdi-home" to="./"> Home </v-btn>
    </p>

    <h2>ボタン</h2>
    <!-- アロー関数での、 void functionテスト  -->
    <p>ボタン 値: {{ num01 }}</p>
    <div style="margin-bottom: 30px;">
        <v-btn @click="submit_test">
            ボタン テスト 01
        </v-btn>
    </div>

    <h2>フォーム</h2>
    <!-- ====== form ====== -->
    <v-form action="#" @submit.prevent="">
        <!-- テキストフィールド　v-sheet で幅指定　-->
        <v-sheet class="bg-blue-darken-4 ma-2" width="50%">
            <v-text-field v-model="num02_01"></v-text-field>
        </v-sheet>
        <p>{{ num02_01 }}</p>
    
    </v-form>
    <!-- ====== form END ====== -->

    <!-- ====== ファイル選択 ====== -->
    <h2>ファイル選択</h2>
    
    <v-form @submit.prevent="">
    <v-file-input
        accept="image/*"
        @change="fileset"
        name="file"
        ></v-file-input>
    </v-form>

</v-app>
</template>

<script setup lang="ts">

import { ref } from 'vue';

// 配列初期化
const arr_01 = ref<string[]>([]);

// === click イベントで、インクリメントをする。
let num01 = ref(1);
const submit_test = () => {
  num01.value += 1;
};

let num02_01 = ref("");

// ============================
// ========= ファイル処理  POST 受信
// ============================
const fileset = async (e) => {
    const files = e.target.files;
    const formData = new FormData();

    formData.append('file', files[0]);
    // エンドポイント指定
    await useFetch('/api/upload', {
        method: 'post',
        body: formData,
    });
};


</script> 