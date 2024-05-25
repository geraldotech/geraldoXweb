<script setup>
const props = defineProps({
  attr: {
    type: String,
  },
  code: {
    type: String,
  },
})

const copy = ref()
const btnCopy = ref('')

const btncopy = () => {
  const codeAtual = copy.value.textContent
  btnCopy.value.textContent = 'copied'

  navigator.clipboard.writeText(codeAtual).then(() => {
    setTimeout(() => btnCopy.value.textContent = 'copy', 2000)
  })
}
</script>
<template>
  <section class="copy">
    <p>{{ attr ? attr : '' }}</p>
    <div class="clipboard">
     <pre ref="copy">
       <slot default />
     </pre>

      <button @click="btncopy" ref="btnCopy">Copy</button>
    </div>
  </section>
</template>
<style scoped>
.clipboard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0e1425;
  position: relative;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.copy {
  background: rgb(68, 71, 77);
  font-family: sans-serif;
  margin-top: 20px;
  border-radius: 10px;
  max-width: 100%;
  width: 100%;
}
button {
  color: white;
}
section p {
  margin: 0;
  padding: 5px 0;
  text-align: center;
}
pre {
  overflow: scroll;
  margin: 0;
}

pre {
  white-space: break-spaces;
  overflow: scroll;
  line-height: 1.5;
  color: #2c70ff;
  padding: 0;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

pre {
  overflow: auto;
  color: hsl(204 100% 59%);
  white-space: no-wrap;
  padding-left: 8px;
}
button {
  outline: none;
  border: none;
  cursor: pointer;
  background: #41467b;
  font-size: 0.7em;
  padding: 8px 15px;
  border-radius: 10px;
  position: absolute;
  top: 5px;
  right: 5px;
}

@media (min-width: 650px) {
  section {
    margin-left: right;
  }
}
</style>
