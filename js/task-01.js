const сategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${сategoriesEl.length}`);

сategoriesEl.forEach((category) => {
  const categoryTitle = category.querySelector("h2");
  console.log("Category:", categoryTitle.textContent);
  const categoryEl = category.querySelectorAll("li");
  console.log("Elements:", categoryEl.length);
});
