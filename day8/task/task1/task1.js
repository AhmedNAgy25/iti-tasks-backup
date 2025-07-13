function openChild() {
  const child = window.open("", "", "width=400,height=200");

  const h1 = child.document.createElement("h1");
  h1.textContent = "I'm child";
  child.document.body.appendChild(h1);

  setTimeout(() => {
    if (!child.closed) child.close();
  }, 5000);
}
