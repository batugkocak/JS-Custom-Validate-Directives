<template>
  <div> 
    <p>Max Length: </p>
    <input type="text" v-max-length="maxLength">
    <br>
    <br>
    <p>Text will be copied: </p>

    <input id="copy-text" type="text" v-model="copyText" />
    <button @click="copyToClipboard">Copy</button>


    
  </div>
  
</template>



<script>


export default {
  name: 'App',
  data(){
    return{
      maxLength: 10,
    }
  },
  methods: {
          copyToClipboard() {
            navigator.clipboard.writeText(this.copyText).then(
              () => {
                this.result = "Text copied to clipboard";
                setTimeout(() => {
                  this.result = ""; // Clear the result message after 5 seconds
                }, 5000); // 5000 milliseconds = 5 seconds
              },
              (err) => {
                console.error("Could not copy text: ", err);
              }
            );
          },
        },
      
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
