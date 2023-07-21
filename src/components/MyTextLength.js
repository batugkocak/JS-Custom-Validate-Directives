export default{
  mounted(el, binding) {
    el.addEventListener('input', () => {
      if (el.value.length > binding.value) {
        el.value = el.value.slice(0, binding.value);
      }
    });
  }
}