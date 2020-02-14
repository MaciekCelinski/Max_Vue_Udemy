import Vue from 'vue'
import App from './App.vue'

// registering custom directive
Vue.directive('highlight', {
  // configuring a directive - hook functions
  // bind
  bind(el, binding, vnode){
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    let delay = 0;
    if(binding.modifiers['delayed']){
      delay=3000
    }
    setTimeout(()=>{
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay)
  }
  // inserted
  // updated
  // componentUpdated
  // unbind
});


new Vue({
  el: '#app',
  render: h => h(App)
})
