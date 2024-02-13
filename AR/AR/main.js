import { CSS3DObject } from "./three.js-r132/examples/jsm/renderers/CSS3DRenderer.js";
const THREE = window.MINDAR.IMAGE;
document.addEventListener("DOMContentLoaded", () => {
  const start = async () => {
    const mindarThree = new THREE.MindARThree({
      container: document.querySelector("#container"),
      imageTargetSrc: "./card.mind",
      uiScanning: "#scanning",
      uiLoading: "no",
    });
    const { renderer, cssRenderer, scene, cssScene, camera } = mindarThree;
    const obj = new CSS3DObject(document.querySelector("#ar-div"));
    const icon1 = new CSS3DObject(document.querySelector("#ar-div-icon1"));
    const icon2 = new CSS3DObject(document.querySelector("#ar-div-icon2"));
    const icon3 = new CSS3DObject(document.querySelector("#ar-div-icon3"));
    const icon4 = new CSS3DObject(document.querySelector("#ar-div-icon4"));
    const icon5 = new CSS3DObject(document.querySelector("#ar-div-icon5"));
    const icon6 = new CSS3DObject(document.querySelector("#ar-div-icon6"));
    const objTitle = new CSS3DObject(document.querySelector("#title-div"));
    const objTitle2 = new CSS3DObject(document.querySelector("#title-div2"));
    const paraHeader = new CSS3DObject(document.querySelector("#para-header"));
    const arDivButton = new CSS3DObject(
      document.querySelector("#ar-div-button")
    );
    const arDivButton2 = new CSS3DObject(
      document.querySelector("#ar-div-button2")
    );
    const site = new CSS3DObject(document.querySelector("#ar-div-site"));
   
    const cssAnchor = mindarThree.addCSSAnchor(0);

    cssAnchor.onTargetFound = () => {
      const pfp = document.querySelector(".pfp");
      pfp.style.transform = "translateX(0)";
      pfp.classList.add("slide-in");

      const title = document.querySelector(".title");
      title.style.transform = "translateX(0)";
      title.classList.add("slide-in-title1");

      const title2 = document.querySelector(".title2");
      title2.style.transform = "translateX(0)";
      title2.classList.add("slide-in-title2");

      const paraheader = document.querySelector(".paraheader");
      paraheader.style.transform = "translateY(0)";
      paraheader.classList.add("slide-upwards");

      const websiteIcon = document.querySelector(".fa-globe");
      websiteIcon.style.transform = "translateY(0)";
      websiteIcon.classList.add("slide-down-website");

      const mailIcon = document.querySelector(".fa-envelope");
      mailIcon.style.transform = "translateY(0)";
      mailIcon.classList.add("slide-down-mail");

      const resumeIcon = document.querySelector(".fa-file");
      resumeIcon.style.transform = "translateY(0)";
      resumeIcon.classList.add("slide-down-resume");

      const githubIcon = document.querySelector(".fa-github");
      githubIcon.style.transform = "translateY(0)";
      githubIcon.classList.add("slide-down-github");

      const instagramIcon = document.querySelector(".fa-instagram");
      instagramIcon.style.transform = "translateY(0)";
      instagramIcon.classList.add("slide-down-instagram");

      const linkedInIcon = document.querySelector(".fa-linkedin");
      linkedInIcon.style.transform = "translateY(0)";
      linkedInIcon.classList.add("slide-down-linkedin");

      const site = document.querySelector(".iframe");
      site.style.transform = "translateX(0)";
      site.classList.add("slide-site-right");
    };
    cssAnchor.onTargetLost = () => {
      const pfp = document.querySelector(".pfp");
      pfp.classList.remove("slide-in");

      const title = document.querySelector(".title");
      title.classList.remove("slide-in-title1");

      const title2 = document.querySelector(".title2");
      title2.classList.remove("slide-in-title2");

      const paraHeader = document.querySelector(".paraHeader");
      paraHeader.classList.remove("slide-upwards");

      const websiteIcon = document.querySelector(".fa-globe");
      websiteIcon.classList.remove("slide-down-website");

      const mailIcon = document.querySelector(".fa-envelope");
      mailIcon.classList.remove("slide-down-mail");

      const resumeIcon = document.querySelector(".fa-file");
      resumeIcon.classList.remove("slide-down-resume");

      const githubIcon = document.querySelector(".fa-github");
      githubIcon.classList.remove("slide-down-github");

      const instagramIcon = document.querySelector(".fa-instagram");
      instagramIcon.classList.remove("slide-down-instagram");

      const linkedInIcon = document.querySelector(".fa-linkedin");
      linkedInIcon.classList.remove("slide-down-linkedin");

      const site = document.querySelector(".iframe");
      site.classList.remove("slide-site-right");
    };

    cssAnchor.group.add(obj);
    cssAnchor.group.add(icon1);
    cssAnchor.group.add(icon2);
    cssAnchor.group.add(icon3);
    cssAnchor.group.add(icon4);
    cssAnchor.group.add(icon5);
    cssAnchor.group.add(icon6);
    cssAnchor.group.add(objTitle);
    cssAnchor.group.add(objTitle2);
    cssAnchor.group.add(paraHeader);
    cssAnchor.group.add(arDivButton);
    cssAnchor.group.add(arDivButton2);
    cssAnchor.group.add(site);
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      cssRenderer.render(cssScene, camera);
    });
  };
  start();
});
