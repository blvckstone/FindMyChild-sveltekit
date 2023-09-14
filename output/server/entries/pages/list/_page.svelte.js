import { c as create_ssr_component, h as each, b as add_attribute, e as escape, n as null_to_empty, v as validate_component } from "../../../chunks/ssr.js";
import { c as childrenData } from "../../../chunks/data.js";
const Search_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".mainDiv.svelte-al8i0j{margin:5px 5px 5px 5px;position:sticky;top:5px;z-index:100}#default-search.svelte-al8i0j{background-color:#3c3c3c;border:none;color:white}#default-search.svelte-al8i0j::placeholder,.searchlogo.svelte-al8i0j{color:rgb(151, 151, 151)}#default-search.svelte-al8i0j:focus{outline:none;background-color:#5c5c5c;color:rgb(255, 255, 255)}",
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="mainDiv svelte-al8i0j" data-svelte-h="svelte-1kn7u11"><form><label for="default-search" class="mb-2 text-sm font-medium sr-only ">Search</label> <div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-4 h-4 searchlogo svelte-al8i0j" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg></div> <input type="search" id="default-search" class="block w-full p-3 pl-10 text-sm dark:placeholder-grey-100 text-gray-900 border border-gray-300 rounded-lg focus:border-blue-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 svelte-al8i0j" placeholder="Search missing person" required></div></form> </div>`;
});
const RecentMissChildList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".mainul.svelte-ei7n8y{display:grid;grid-template-columns:1fr}.mainli.svelte-ei7n8y{display:grid;grid-template-columns:2fr 1fr;background-color:white}.firstdiv.svelte-ei7n8y{display:grid;grid-template-columns:1fr 4fr}.firstdiv1.svelte-ei7n8y{display:grid;grid-template-rows:1fr 1fr;margin-left:10px}.seconddiv.svelte-ei7n8y{display:grid;grid-template-rows:1fr 1fr;justify-content:end;text-align:end}.other.svelte-ei7n8y{font-size:12px;font-weight:500}.status.svelte-ei7n8y{font-size:10px;font-weight:500}",
  map: null
};
const RecentMissChildList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<ul role="list" class="mainul m-2  svelte-ei7n8y">${each(childrenData, (child) => {
    return `<li class="mainli border p-2 mt-1 rounded svelte-ei7n8y"><div class="firstdiv svelte-ei7n8y"><img class="roundimg rounded-full h-12 w-12"${add_attribute("src", child.img, 0)} alt=""> <div class="firstdiv1 svelte-ei7n8y"><p class="name text-sm font-semibold leading-6 text-gray-900">${escape(child.fullName)}</p> <p class="description mt-1 truncate text-xs leading-5 text-gray-500">${escape(child.address)}</p> </div></div> <div class="seconddiv svelte-ei7n8y"><p class="${escape(
      null_to_empty(child.found ? "other text-sm leading-6 text-gray-900 text-green-600" : "other text-sm leading-6 text-gray-900 text-red-600"),
      true
    ) + " svelte-ei7n8y"}">${escape(child.found ? "Found" : "Missing")}</p> <p class="status mt-1 text-xs leading-5 text-gray-500 text-blue-400 svelte-ei7n8y">${escape(child.missingDate)}</p></div> </li>`;
  })} </ul>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Search, "Search").$$render($$result, {}, {}, {})} ${validate_component(RecentMissChildList, "RecentMissChildList").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
