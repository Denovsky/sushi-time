<template>
  <div class="aboutPage__wrapper">
    <my-sign>We are located at:</my-sign>
    <h2>Cluster Q - Shop s-03, Saba 3 Tower - أبراج بحيرات الجميرا - دبي</h2>
    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.4392486576203!2d55.14490472924641!3d25.076224198997025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d4f48ee7cdf%3A0x74283262860ce9ca!2sSUSHI%20TIME%20DMCC!5e0!3m2!1sru!2sus!4v1640040072201!5m2!1sru!2sus" allowfullscreen="" loading="lazy">
    </iframe>
  </div>
</template>

<script>
export default {
  name: "about"
}
</script>

<style scoped>
.aboutPage__wrapper {
  padding: 100px 120px;
  width: 100%;
  display: flex;
  justify-self: center;
  align-items: center;
  flex-direction: column;
}
#map {
  border: 1px solid rgba(0, 0, 0, 0.6);
  margin-top: 30px;
  height: 500px;
  width: 80%;
}
@media (max-width: 1220px) {
  .aboutPage__wrapper {
    padding: 100px 10px 100px 10px;
  }
}
</style>