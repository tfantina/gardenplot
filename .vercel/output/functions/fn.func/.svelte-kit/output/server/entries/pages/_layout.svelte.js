import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, b as subscribe, i as is_promise, n as noop, d as each } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
import { b as base } from "../../chunks/paths.js";
/* empty css                                              */import { p as page } from "../../chunks/stores.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="d-flex justify-content-center rounded-3">${slots.headerimg ? slots.headerimg({}) : ``} <div class="header-content"><h1>${slots.title ? slots.title({}) : ``}</h1></div></header>`;
});
const NavButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text, target } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `<span class="btn-nav--bg"><a${add_attribute("href", target, 0)} class="btn btn-nav btn-primary">${escape(text)}</a></span>`;
});
const css = {
  code: ".links.svelte-ix38zk{positon:relative;height:100%}.content.svelte-ix38zk{positon:absolute}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="nav-container col-md-3 col-lg-2"><div class="links svelte-ix38zk"><div class="content mr-5 p-3 rounded-3 d-flex flex-column align-items-center svelte-ix38zk">${validate_component(NavButton, "NavButton").$$render($$result, { text: "Home", target: `${base}/` }, {}, {})} ${validate_component(NavButton, "NavButton").$$render($$result, { text: "Blog", target: `${base}/blog` }, {}, {})} ${validate_component(NavButton, "NavButton").$$render($$result, { text: "About", target: `${base}/about` }, {}, {})} ${validate_component(NavButton, "NavButton").$$render(
    $$result,
    {
      text: "Programming",
      target: `${base}/programming`
    },
    {},
    {}
  )} ${validate_component(NavButton, "NavButton").$$render(
    $$result,
    {
      text: "Projects",
      target: `${base}/projects`
    },
    {},
    {}
  )}</div></div> </div>`;
});
const MobileFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="col align-items-center">${validate_component(NavButton, "NavButton").$$render($$result, { text: "Home", target: `${base}/` }, {}, {})} ${validate_component(NavButton, "NavButton").$$render($$result, { text: "Blog", target: `${base}/blog` }, {}, {})} ${validate_component(NavButton, "NavButton").$$render($$result, { text: "About", target: `${base}/about` }, {}, {})} ${validate_component(NavButton, "NavButton").$$render(
    $$result,
    {
      text: "Programming",
      target: `${base}/programming`
    },
    {},
    {}
  )} ${validate_component(NavButton, "NavButton").$$render(
    $$result,
    {
      text: "Projects",
      target: `${base}/projects`
    },
    {},
    {}
  )}</footer>`;
});
const ThemeSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentTheme, $$unsubscribe_currentTheme;
  let { setTheme, currentTheme } = $$props;
  $$unsubscribe_currentTheme = subscribe(currentTheme, (value) => $currentTheme = value);
  if ($$props.setTheme === void 0 && $$bindings.setTheme && setTheme !== void 0)
    $$bindings.setTheme(setTheme);
  if ($$props.currentTheme === void 0 && $$bindings.currentTheme && currentTheme !== void 0)
    $$bindings.currentTheme(currentTheme);
  $$unsubscribe_currentTheme();
  return `<div class="theme-box"><div class="theme-box--all"><button class="themable forest"></button> <button class="themable creamsicle"></button> <button class="themable nightly"></button></div> <div class="theme-box--current"><button class="${"themable " + escape($currentTheme, true)}"></button></div></div>`;
});
const global = "";
async function importImage(image) {
  const pictures = /* @__PURE__ */ Object.assign({
    "/src/images/programming/avaliemeuprofessor/full_logo.png": () => import("../../chunks/full_logo.js").then((m) => m["default"]),
    "/src/images/programming/avaliemeuprofessor/hero.png": () => import("../../chunks/hero.js").then((m) => m["default"]),
    "/src/images/programming/kbyg/hero.png": () => import("../../chunks/hero2.js").then((m) => m["default"]),
    "/src/images/programming/optconnect/hero.png": () => import("../../chunks/hero3.js").then((m) => m["default"]),
    "/src/images/programming/wildelements/Screen Shot 2023-06-30 at 3.38.48 PM.png": () => import("../../chunks/Screen Shot 2023-06-30 at 3.38.48 PM.js").then((m) => m["default"]),
    "/src/images/programming/wildelements/Screen Shot 2023-06-30 at 3.38.58 PM.png": () => import("../../chunks/Screen Shot 2023-06-30 at 3.38.58 PM.js").then((m) => m["default"]),
    "/src/images/programming/wildelements/Screen Shot 2023-06-30 at 3.41.31 PM.png": () => import("../../chunks/Screen Shot 2023-06-30 at 3.41.31 PM.js").then((m) => m["default"]),
    "/src/images/programming/wildelements/hero.png": () => import("../../chunks/hero4.js").then((m) => m["default"]),
    "/src/images/programming/wildelements/lion.png": () => import("../../chunks/lion.js").then((m) => m["default"]),
    "/src/images/storage/index/hero.jpeg": () => import("../../chunks/hero5.js").then((m) => m["default"]),
    "/src/images/storage/index/hero.webp": () => import("../../chunks/hero6.js").then((m) => m["default"])
  });
  for (const [path, src] of Object.entries(pictures)) {
    if (path.includes(image)) {
      return await src();
    }
  }
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let theme;
  let currentTheme = writable(theme);
  const setTheme = (theme2) => {
    window.localStorage.setItem("theme", theme2);
    currentTheme.set(theme2);
    document.querySelector("html").dataset.theme = theme2;
  };
  let img = $page.data.image;
  $$unsubscribe_page();
  return `${validate_component(ThemeSelect, "ThemeSelect").$$render($$result, { setTheme, currentTheme }, {}, {})} <div class="container">${validate_component(Header, "Header").$$render($$result, {}, {}, {
    headerimg: () => {
      return `<div class="header-image">${$page.data.image ? `${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return ``;
        }
        return function(src) {
          return ` ${typeof src === "string" ? `<img${add_attribute("src", src.img.src, 0)}${add_attribute("alt", $page.data.title, 0)}${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}>` : `<picture>${each(Object.entries(src.sources), ([format, srcset]) => {
            return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
          })} <img${add_attribute("src", src.img.src, 0)}${add_attribute("alt", $page.data.title, 0)}${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}></picture>`} `;
        }(__value);
      }(importImage(img))}` : ``}</div> `;
    },
    title: () => {
      return `<span slot="title">${escape($page.data.title)}</span>`;
    }
  })} <div class="d-flex">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} <div class="col-md-9 col-lg-10 content rounded-3 p-4">${slots.default ? slots.default({}) : ``}</div></div></div> ${validate_component(MobileFooter, "MobileFooter").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
