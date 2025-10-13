export function clearContainer(container) {
  let child = container.lastElementChild;

  while (child != null) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
}
