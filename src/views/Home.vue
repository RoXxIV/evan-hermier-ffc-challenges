<template>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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
    margin: 10px auto;
    padding: 15px;
  }
}
/**router-view transition */
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
