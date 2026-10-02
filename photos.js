// Fill these paths with the user's supplied photographs after they are available.
// Relative paths work both locally and under a GitHub Pages repository URL.
const photographs = {
  "hibiscus": {src: "", alt: "朱槿花別針作品"},
  "staghorn": {src: "", alt: "鹿角蕨立體布框作品"},
  "clover": {src: "", alt: "白詰草花束別針與耳環作品"},
  "strawberry": {src: "", alt: "草莓蕾絲別針作品"},
  "tulip-lamp": {src: "", alt: "鬱金香小燈飾作品"},
  "hydrangea": {src: "", alt: "繡球花耳鉤作品"}
};
document.querySelectorAll("[data-photo]").forEach(container => {
  const photo = photographs[container.dataset.photo];
  if (!photo || !photo.src) return;
  const image = new Image();
  image.alt = photo.alt;
  image.className = "work";
  image.loading = container.classList.contains("hero-art") ? "eager" : "lazy";
  image.onload = () => {container.querySelector(".photo-space").replaceWith(image);container.classList.remove("pending");};
  image.src = photo.src;
});
