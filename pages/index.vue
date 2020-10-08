<template>
  <div class="w-full">
    <Hero />
    <Header />
    <Us />
    <Monogram />
    <Gif class="container content" :source="require('@/static/meet.gif')" />
    <Rsvp class="container content h-screen" />
    <Details class="container content" />
    <Gif class="container content" :source="require('@/static/hdnl.gif')" />
    <Monogram />
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style>
.container.full {
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container.content {
  @apply w-10/12;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
