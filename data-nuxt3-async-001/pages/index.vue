<script setup lang="ts">

// =============================================================
// ================== useFetch() テスト =========================
// =============================================================
const { data, pending, error } = await useFetch('https://api.example.com/data');

console.log(data);
// データのプロパティをデストラクチャリングで取得
const title = data.value?.title ?? 'No title available';
const description = data.value?.description ?? 'No description available';

</script>

<template>
    <h1>data テスト</h1>

    <p>{{ title }}</p>
    <p>{{ description }}</p>
</template>