const imageLoaded = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

const imageOptions = {
    threshold: 1,
   // rootMargin: "5px 10px 80px 0px"
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target)
            }
        });
    }, imageOptions);
    imageLoaded.forEach((img) => {
        observer.observe(img);  //Struggling to understand any of the intersection observer.. I get that it is based on how much of the image is visible but I don't get it. I worked on some others code. 
    });
} else {
    imageLoaded.forEach((img) => {
        loadImages(img);
    });
};