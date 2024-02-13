import { CSS3DObject } from "../../libs/three.js-r132/examples/jsm/renderers/CSS3DRenderer.js";
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener("DOMContentLoaded", () => {

  const start = async () => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: "../../assets/targets/lecture1.mind",
    });
    const { renderer, cssRenderer, scene, cssScene, camera } = mindarThree;

    const obj = new CSS3DObject(document.querySelector("#ar-div"));
    const obj2 = new CSS3DObject(document.querySelector("#ar-div2"));
    const obj3 = new CSS3DObject(document.querySelector("#particles-js"));
    const iframeContainer = new CSS3DObject(
      document.querySelector("#iframe-container")
    );

    const cssAnchor = mindarThree.addCSSAnchor(0);

    cssAnchor.group.add(obj);
    cssAnchor.group.add(obj2);
    cssAnchor.group.add(obj3);
   

    // Add event listener to the website icon
    const websiteIcon = document.querySelector("#website-icon");
    let iframeVisible = false;

    websiteIcon.addEventListener("click", () => {
      cssAnchor.group.add(iframeContainer);
      if (iframeVisible) {
        hideIframe();
      } else {
        showIframe();
      }
    });

    function showIframe() {
      iframeContainer.visible = true;
      iframeVisible = true;
    }

    function hideIframe() {
      iframeContainer.visible = false;
      iframeVisible = false;
    }

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      cssRenderer.render(cssScene, camera);
    });
  };
  start();
  
});
