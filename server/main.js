import { Meteor } from "meteor/meteor";
import { onPageLoad } from "meteor/server-render";
import App from '../imports/ui/App';

Meteor.startup(() => {
  // Code to run on server startup.
  console.log(`Greetings from ${module.id}!`);
});

onPageLoad(sink => {
  // Code to run on every request.

  const { html, css } = App.render({
    url: sink.request.url.path
  });

  sink.appendToHead(`<style>${css.code}</style>`);
  sink.renderIntoElementById('server-render-target', html);
});
