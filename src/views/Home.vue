<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "home",
};
</script>

<style scoped>
main {
  margin: 50px auto;
  width: 50%;
  padding: 30px;
}
/***___Media Queries___***/
/***___Tablet, Moins de 992px___***/
@media (max-width: 991.98px) {
  main {
    width: 90%;
  }
}
/***___Mobile, Moins de 668px___***/
@media (max-width: 667.98px) {
  main {
    width: 100%;
  }
}
</style>
