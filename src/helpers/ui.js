export function clearContainer(container) {
  let child = container.lastElementChild;
  console.log(child);
  while (child != null) {
    console.log(child);
    container.removeChild(child);
    child = container.lastElementChild;
  }
}
