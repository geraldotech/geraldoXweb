<script setup>
function replaceQuotes() {
  // Get the textarea element
  var textarea = document.getElementById('myTextarea')

  // Get the current content of the textarea
  var content = textarea.value

  // Replace double quotes with single quotes
  var modifiedContent = content.replace(/"/g, "'")

  // Set the modified content back to the textarea
  textarea.value = modifiedContent
}
</script>
<template>
<div>
  <h1>Remove double quotes Tool</h1>
  <textarea
    id="myTextarea"
    rows="10"
    cols="30">
This is a "test" string with "double quotes".</textarea
  >
  <br />
  <button @click="replaceQuotes">Replace Quotes</button>
</div>
</template>
<style scoped>
textarea{
  width: 100%;
}
div{
  padding: 1rem;
}
</style>
