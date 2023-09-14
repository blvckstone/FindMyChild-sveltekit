import { c as create_ssr_component, h as each, b as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { c as childrenData } from "../../chunks/data.js";
const Missing_svelte_svelte_type_style_lang = "";
const css = {
  code: ".seconddiv.svelte-1j8njn9{display:grid;grid-template-rows:3fr 50px 50px;background-color:white;padding:10px;border-radius:5px;border:1px solid rgb(230, 230, 230);margin:5px}.img.svelte-1j8njn9{border-radius:5px}.loadingimg.svelte-1j8njn9{height:230px;width:100%;background-color:rgb(210, 210, 210);border-radius:5px;align-items:center;justify-content:center;display:grid;grid-template-columns:1fr}.loadingname.svelte-1j8njn9{height:20px;width:90%;background-color:rgb(210, 210, 210)}.loadingmissingdate.svelte-1j8njn9{height:20px;background-color:rgb(210, 210, 210)}.loadingaddress.svelte-1j8njn9{height:20px;background-color:rgb(210, 210, 210)}lottie-player.svelte-1j8njn9{align-self:center;justify-self:center}.details.svelte-1j8njn9{margin-top:10px;display:grid;grid-template-columns:1fr 1fr;align-items:center;padding-left:10px;padding-right:10px;color:#4d565b}.missingdate.svelte-1j8njn9{justify-self:end;font-size:15px;font-weight:500}.name.svelte-1j8njn9{font-size:18px;font-weight:500}.address.svelte-1j8njn9{font-size:12px;align-self:center;color:gray;padding-left:10px;padding-right:10px}.missingtextdiv.svelte-1j8njn9{position:absolute;margin-top:12px;margin-left:10px;background-color:white;padding:5px 5px 5px 5px;width:120px;border-radius:5px;text-align:center;background-color:#ff5757}.missingtext.svelte-1j8njn9{font-size:11px;width:100%;font-weight:600;color:white}",
  map: null
};
const Missing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="mainDiv svelte-1j8njn9">${each(childrenData, (child) => {
    return `<div class="seconddiv svelte-1j8njn9"><div class="image">${child.img ? `<div class="missingtextdiv svelte-1j8njn9" data-svelte-h="svelte-ldk0kk"><p class="missingtext svelte-1j8njn9">Recently Missing</p></div> <img class="img svelte-1j8njn9"${add_attribute("src", child.img, 0)} alt="img">` : `<div class="loadingimg svelte-1j8njn9" data-svelte-h="svelte-1ef1ft5"><script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"><\/script> <lottie-player src="https://lottie.host/29062c59-acf2-49ec-95f8-4a2c39f0318a/15sTleu1OZ.json" background="transeparent" speed="1" style="width: 200px; height: 200px;" loop autoplay class="svelte-1j8njn9"></lottie-player> </div>`}</div> <div class="details svelte-1j8njn9">${child.fullName ? `<p class="name svelte-1j8njn9">${escape(child.fullName)}</p>` : `<div class="loadingname svelte-1j8njn9"></div>`} ${child.missingDate ? `<p class="missingdate svelte-1j8njn9">${escape(child.missingDate)}</p>` : `<div class="loadingmissingdate svelte-1j8njn9"></div>`}</div> <div class="address svelte-1j8njn9">${child.address ? `<p>${escape(child.address)}</p>` : `<div class="loadingaddress svelte-1j8njn9"></div>`}</div> </div>`;
  })} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Missing, "Missing").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
