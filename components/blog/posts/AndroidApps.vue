<script setup>
const root = ref('')
const gdrive = ref('')
const gplay = ref('')
</script>
<template>
  <h2>Best App for Android</h2>

  <label for="root">Root Apps:</label>
  <select
    name=""
    id="root"
    v-model="root">
    <option value=""></option>
    <option value="https://f-droid.org/packages/org.adaway/">Adway</option>
    <option value="https://arcai.com/netcut-for-android">Netcut</option>
    <option value="https://github.com/revanced/revanced-manager/releases">Revanced Manager</option>
    <option value="https://revancedextended.com/">Revancedextended</option>
    <option value="https://f-droid.org/en/packages/com.termux/">Termux</option>
    <option value="gdrive">Google Drive [Archive]</option>
  </select>
  <p>
    <a
      :href="root"
      target="blank"
      >{{ root }}</a
    >
  </p>

  <form>
   <div>
    <input
      type="checkbox"
      id="gdrive"
      v-model="gdrive" />
    <label for="gdrive">Google Drive Archive</label>
   </div>
   <div>
    <input
      type="checkbox"
      id="gplay"
      v-model="gplay" />
    <label for="gplay">Google Play</label>
   </div>
  </form>
  <div class="content">
    <iframe
      v-show="root == `gdrive`"
      src="https://drive.google.com/embeddedfolderview?id=1x2aVUcPVMkRW5GFLn9tlO3tHovjLX7wv#list"
      width="100%"
      height="500"
      frameborder="0"></iframe>
    <section v-show="gplay">
      <a href="https://play.google.com/store/apps/details?id=mark.via.gp">Via Browser</a>
    </section>
  </div>
</template>
<style scoped>
h2 {
  color: dodgerblue;
  padding: 5px;
  text-align: center;
}
ul li {
  color: white;
}
div img {
  width: 30%;
}
.content {
  margin-top: 30px;
}
label,
input,
select {
  cursor: pointer;
}
form {
  margin-top: 20px;
}
</style>
