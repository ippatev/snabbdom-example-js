import {
  h,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  init,
} from "snabbdom";

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

const app = document.getElementById("app");

const vnode = h("div.hello", null, "Hello World!");

patch(app, vnode);
