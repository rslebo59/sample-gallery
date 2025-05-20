const container = document.querySelector(".grid-gallery__container");
const grids = container.querySelectorAll(".grid-gallery__grid");
const containerRect = container.getBoundingClientRect();

grids.forEach((grid) => {
  const gridRect = grid.getBoundingClientRect();

  const offsetX = gridRect.left - containerRect.left;
  const offsetY = gridRect.top - containerRect.top;

  grid.style.backgroundPosition = `-${offsetX}px -${offsetY}px`;
});
