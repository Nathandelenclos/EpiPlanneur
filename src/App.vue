<script setup lang="ts">
</script>

<template>
  <main>
    <nav>
      <RouterLink to="/tek1"><button>Tek1</button></RouterLink>
      <RouterLink to="/tek2"><button>Tek2</button></RouterLink>
    </nav>
    <RouterView/>
  </main>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
</style>
