import './styles/main.scss'
import Main from "./views/pages/Main";
import ActionA from "../src/views/pages/ActionsA";
import RouteSettings from "./config/RouteSettings";

import SwitchToggle from "./views/components/SwitchToggle";

const routes = {
  "/": Main,
  "/action_a": ActionA,
};

const router = async () => {
  const header = null || document.getElementById("header_container");
  const content = null || document.getElementById("page_container");


  const request = RouteSettings.parseRequestURL();
  // Render the Header of the page
  header.innerHTML = await SwitchToggle.render();
  await SwitchToggle.after_render();

  const parsedURL =
    (request.resource ? `/${request.resource}` : "/") +
    (request.verb ? `/${request.verb}` : "");

  const page = routes[parsedURL];
  const data = await page.loadContent();
  // console.log(content)
  content.innerHTML = data;
  await page.after_render();

};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);