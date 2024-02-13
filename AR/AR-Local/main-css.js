import { CSS3DObject } from "./three.js-r132/examples/jsm/renderers/CSS3DRenderer.js";
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener("DOMContentLoaded", () => {

  const start = async () => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: "./card.mind",
      uiScanning: "#scanning",
      uiLoading:"no",
    });
    const { renderer, cssRenderer, scene, cssScene, camera } = mindarThree;

    const obj = new CSS3DObject(document.querySelector("#ar-div"));
    const obj2 = new CSS3DObject(document.querySelector("#ar-div2"));
    const objTitle = new CSS3DObject(document.querySelector("#title-div"));
    const obj3 = new CSS3DObject(document.querySelector("#particles-js"));
    const iframeContainer = new CSS3DObject(
      document.querySelector("#iframe-container")
    );

    const cssAnchor = mindarThree.addCSSAnchor(0);

    cssAnchor.group.add(obj);
    cssAnchor.group.add(obj2);
    cssAnchor.group.add(objTitle);
    cssAnchor.group.add(obj3);
    cssAnchor.group.add(iframeContainer);
   

    // Add event listener to the website icon
    // const websiteIcon = document.querySelector("#website-icon");
    // let iframeVisible = false;

    // websiteIcon.addEventListener("click", () => {
    
    //   if (iframeVisible) {
    //     hideIframe();
    //   } else {
    //     showIframe();
    //   }
    // });

    // function showIframe() {
    //   iframeContainer.visible = true;
    //   iframeVisible = true;
    // }

    // function hideIframe() {
    //   iframeContainer.visible = false;
    //   iframeVisible = false;
    // }

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      cssRenderer.render(cssScene, camera);
    });
  };
  start();
  
});
