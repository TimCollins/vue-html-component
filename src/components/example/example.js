import template from './example.html';

export const example = {
  ...template,
  mounted() {
    console.log('example.js:mounted()');
  }
};
