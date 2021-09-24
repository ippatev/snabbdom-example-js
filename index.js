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

const vbutton = h(
  "button.btn.btn-primary",
  { on: { click: sayHello } },
  "Click me"
);
const vcontainer = (el) => h("div.container", null, el);
const vnode = h("div.layout", null, vcontainer(vbutton));

function sayHello() {
  console.log("Hello!");
}

patch(app, vnode);
