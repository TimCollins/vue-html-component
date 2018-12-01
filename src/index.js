import $ from 'jquery';
import 'foundation-sites';
import Vue from 'vue';
import { example } from './components/example/example';
import './scss/app.scss';
import './scss/foundation.scss';
import './scss/foundation-icons.scss';

$(document).foundation();

new Vue({
  el: '#app',
  components: { example },
  data() {
    return {
      showTopicFlag: false,
    }
  },
  mounted() {
    console.log('index.js:mounted()');
  }
});

