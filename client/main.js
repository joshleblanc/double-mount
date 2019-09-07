import { onPageLoad } from 'meteor/server-render';
import App from '../imports/ui/App.svelte';

onPageLoad(sink => {
  console.log(sink);
  new App({
    target: document.querySelector('#server-render-target'),
    hydrate: true,
  });
});