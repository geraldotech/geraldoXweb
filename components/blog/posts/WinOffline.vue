<script setup>

const  getlink = ref('')
const offline = ref([
        {
          name: 'Audacity',
          links: [
            { server: 'fosshub', url: 'https://www.fosshub.com/Audacity.html' },
          ],
        },
        {
          name: 'Google Chrome',
          links: [
            {
              server: 'Google Chrome x86',
              url: 'https://www.google.com/chrome/?system=true&standalone=1',
            },
            {
              server: 'Google Chrome x64',
              url: 'https://www.google.com/chrome/eula.html?system=true&standalone=1&platform=win64',
            },
          ],
        },
        {
          name: 'Mozilla Firefox FTP',
          links: [
            {
              server: 'Mozilla Firefox FTP',
              url: 'https://archive.mozilla.org/pub/firefox/releases/',
            },
          ],
        },
        {
          name: 'Foxit Reader ',
          links: [
            {
              server: 'cdn01 8.x.exe',
              url: 'http://cdn01.foxitsoftware.com/pub/foxit/reader/desktop/win/8.x/8.0/en_us/FoxitReader80_enu_Setup_clean.exe',
            },
            {
              server: 'cdn-1 8.x.msi',
              url: 'http://cdn01.foxitsoftware.com/pub/foxit/reader/desktop/win/8.x/8.0/en_us/FoxitReader80_enu_Setup.msi',
            },
          ],
        },
        {
          name: 'Windows ISO [TESTE]',
          links: [
            { server: 'Amazon Server', url: 'amazon.com' },
            { server: 'Digital Ocean Server', url: 'digitalocean.com' },
          ],
        },
        {
          name: 'Microsoft Edge',
          links: [
            {
              server: 'Microsoft',
              url: 'https://www.microsoft.com/en-us/edge/business/download?form=MA13FJ',
            },
          ],
        },
        {
          name: 'Brave Browser',
          links: [
            {
              server: 'Github',
              url: 'https://github.com/brave/brave-browser/releases',
            },
          ],
        },
      ])

</script>
<template>
  <h1>Offline installers</h1>
  <div>
    <figure>
      <img src="https://gpnotes.droppages.com/geraldox.proxyfiles.com/2023/img/offline.jpg" class="img-flex" />
    </figure>
    <section class="links">
      <select v-model="getlink">
        <option v-for="links in offline" :key="links.name" :value="links">
          {{ links.name }}
        </option>
      </select>
      <!--     <h1>{{ getlink.links }}</h1> -->
      <nav>
        <a
          v-for="lin in getlink.links"
          :key="lin.lin"
          :href="lin.url"
          target="_blank"
          >Server: {{ lin.server }}</a
        >
      </nav>
    </section>
  </div>
</template>
<style scoped>
section.links {
  text-align: center;
  background: #2f2546;
  min-height: 120px;
  border: 2px solid #5f4a8d;
  border-radius: 5px;
  padding: 5px;
}

h5 {
  margin-top: 20px;
}
a {
  display: block;
  margin-block: 5px;
}
nav {
  margin-top: 20px;
}
select {
  cursor: pointer;
  padding: 0.2rem;
  font-size: 1rem;
}
</style>