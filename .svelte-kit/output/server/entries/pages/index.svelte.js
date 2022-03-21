import { c as create_ssr_component, a as createEventDispatcher, e as escape, n as null_to_empty, v as validate_component } from "../../chunks/index-6a85fedf.js";
var Button_svelte_svelte_type_style_lang = "";
const css = {
  code: ".button.svelte-160swco{display:inline-block;cursor:pointer;border-radius:0.375rem;border-width:0px;font-family:Roboto, sans-serif;font-weight:700;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.button--primary.svelte-160swco{--tw-bg-opacity:1;background-color:rgb(98 89 200 / var(--tw-bg-opacity))}.button--primary.svelte-160swco:active{--tw-bg-opacity:1;background-color:rgb(122 113 222 / var(--tw-bg-opacity))}.button--primary-disabled.svelte-160swco{--tw-bg-opacity:1;background-color:rgb(98 89 200 / var(--tw-bg-opacity));opacity:0.5}.button--secondary.svelte-160swco{border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(182 175 252 / var(--tw-border-opacity));background-color:transparent}.button--secondary.svelte-160swco:active{border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(150 140 255 / var(--tw-border-opacity));background-color:transparent}.button--secondary-disabled.svelte-160swco{--tw-border-opacity:1;border-color:rgb(182 175 252 / var(--tw-border-opacity))}.button--disabled.svelte-160swco{--tw-bg-opacity:1;background-color:rgb(98 89 200 / var(--tw-bg-opacity));opacity:0.5}.button--medium.svelte-160swco{font-size:16px;padding:12px 24px}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = false } = $$props;
  let { primaryDisabled = false } = $$props;
  let { secondaryDisabled = false } = $$props;
  let { size = "medium" } = $$props;
  let { label = "" } = $$props;
  let disabled = primaryDisabled || secondaryDisabled;
  let mode = primary ? "button--primary" : "button--secondary";
  let primaryDisabledStyle = primaryDisabled ? "button--primary-disabled" : "";
  let secondaryDisabledStyle = secondaryDisabled ? "button--secondary-disabled" : "";
  createEventDispatcher();
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.primaryDisabled === void 0 && $$bindings.primaryDisabled && primaryDisabled !== void 0)
    $$bindings.primaryDisabled(primaryDisabled);
  if ($$props.secondaryDisabled === void 0 && $$bindings.secondaryDisabled && secondaryDisabled !== void 0)
    $$bindings.secondaryDisabled(secondaryDisabled);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css);
  return `<button type="${"button"}" ${disabled ? "disabled" : ""} class="${escape(null_to_empty([
    "button",
    $$props.class,
    `button--${size}`,
    mode,
    primaryDisabledStyle,
    secondaryDisabledStyle
  ].join(" "))) + " svelte-160swco"}">${escape(label)}
</button>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Button, "Button").$$render($$result, { label: "Button" }, {}, {})}`;
});
export { Routes as default };
