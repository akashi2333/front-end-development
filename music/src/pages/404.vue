<template>
  <div class="error-page">
    <div class="error-code">404</div>
  </div>
</template>

<script>
export default {
  name: 'error-page'
}
</script>

<style scoped>
.error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    padding: 11rem 0;
    box-sizing: border-box;
}
.error-code {
    font-size: 250px;
    font-weight: bolder;
    color: #1abc9c;
}
</style>