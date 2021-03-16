let btnmenu = document.querySelector(".btnmenu");
let nav = document.querySelector("nav");
let lang = document.querySelector(".lang");
let langCurrent = document.querySelector(".lang__current span");
let langOpt = document.querySelector(".lang__options");
let langItems = document.querySelectorAll(".lang__options a ");
let header = document.querySelector("header");
let slider = document.querySelector("main .slider__list");
let product = document.querySelector(".product");
let toTop = document.querySelector(".totop");
let heighHeader = header.clientHeight;
let heighSlider = slider.clientHeight;
let heightProduct = product.clientHeight;
let scrollY = window.pageYOffset;

/* =========open lang option======== */

/* funtion active Nav */
function activeNav() {
  nav.classList.toggle("active");
}
/* function for lang */
/* function takeText(){
    let langText = this.textContent;
    langCurrent.innerHTML=langText;
}

function lang(item){
item.addEventListener("click",takeText)
}
 */

/* active nav */
btnmenu.addEventListener("click", activeNav);
/* =============================================================== */
/*                          Lang Option Effects                    */
/* =============================================================== */
/* click to show lang opt */
langCurrent.addEventListener("click", function (e) {
  e.stopPropagation(); // tạo sự kiển sủi bọt khi click vào window

  langOpt.classList.toggle("active");
});
/* tắt langOpt khi click ra bên ngoài */
document.addEventListener("click", function () {
  langOpt.classList.remove("active");
});

/* active lang bar */
langItems.forEach(function (item) {
  item.addEventListener("click", function () {
    let langText = this.textContent;
    let showLang = langCurrent.textContent;
    langCurrent.innerHTML = langText;
    this.innerHTML = showLang;
  });
});

/* hiệu ứng hiện header khi scroll hết sec1 */
document.addEventListener("scroll", function () {
  let scrollY = window.pageYOffset;
  console.log(heighSlider);
  console.log(scrollY);
  if (scrollY > heighSlider - heighHeader) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
    toTop.classList.remove("active");
  }
});
/* ===== function active back2top button ======= */
document.addEventListener("scroll", function () {
  let scroll1 = window.pageYOffset;
  if (scroll1 > heighSlider + heightProduct) {
    toTop.classList.add("active");
  }
});

/* ==============chuyển trang slider================== */

/*
// nều HTML để thể <a> nhớ đặt href="javascript:void(0)" 
//để tránh refresh trang.

/* =============================================================== */
/*                          menu bar effect                        */
/* =============================================================== */
let menu_li = document.querySelectorAll(".menu ul li");
let menuItems = document.querySelectorAll(".menu ul li a");
let sections = [];
function removeAndActive() {
  menu_li.forEach(function (liItem) {
    liItem.classList.remove("active");
    menu_li[index].classList.add("active");
  });
}
menuItems.forEach(function (menu_item, index) {
  let att = menu_item.getAttribute("href"); // lấy nội dung href trong thẻ <a>
  let className = att.replace("#", ""); // bỏ dấu #trong nội dung href
  let section = document.querySelector("." + className);
  sections.push(section);

  menu_item.addEventListener("click", function () {
    let posSection = section.offsetTop; // lấy vị trì section
    window.scrollTo({
      top: posSection - heighHeader,

      behavior: "smooth",
    });
    removeAndActive;
  });

  /* ------------tắt active menu bar when hover--------- */
  menu_item.addEventListener("mouseover", function () {
    menu_li.forEach(function (liItem) {
      liItem.classList.remove("active");
    });
  });
  /* ----------- menu bar active theo section------ */
  document.addEventListener("scroll", function () {
    let scroll = window.pageYOffset;
    if (
      scroll > sections[index].offsetTop - heighHeader - 5 &&
      scroll < sections[index].offsetTop + sections[index].offsetHeight
    ) {
      menu_li.forEach(function (liItem) {
        liItem.classList.remove("active");
        menu_li[index].classList.add("active");
      });
    } else {
      menu_li[index].classList.remove("active");
    }
  });
});

/* =============================================================== */
/*                          back to top button                     */
/* =============================================================== */

document.querySelector(".totop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* =============================================================== */
/*                          videos-section                     */
/* =============================================================== */

let playbtn = document.querySelectorAll(".icon-play");
let popupVideo = document.querySelector(".popup-video");
let iframe = document.querySelector(".popup-video iframe");
let btnClose = document.querySelector(".close .btn-close");
let thumpnail = document.querySelectorAll(".videos-img");
console.log(thumpnail);
thumpnail.forEach(function (thumpnailItem, index) {
  thumpnailItem.addEventListener("click", function () {
    popupVideo.style.display = "flex";
    let videoId = playbtn[index].getAttribute("data-video-id");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId);
  });
});

playbtn.forEach(function (playItem) {
  playItem.addEventListener("click", function () {
    popupVideo.style.display = "flex";
    let videoId = playItem.getAttribute("data-video-id");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId);
  });
});
/* -----------click btn-close to turn off video-------- */
btnClose.addEventListener("click", function (e) {
  popupVideo.style.display = "none";
  iframe.setAttribute("src", "");
});

/* -----------click backgroung to turn of video--------- */
popupVideo.addEventListener("click", function () {
  popupVideo.style.display = "none";
  iframe.setAttribute("src", "");
});

/* =============================================================== */
/*                          slider-2 button                    */
/* =============================================================== */
let slider2 = document.querySelector(".slider2");
let btnSlider2 = document.querySelectorAll(".btn-slider2");
let news = document.querySelector(".news");
let slider2Img = document.querySelectorAll(".image");

document.addEventListener("scroll", function () {
  let Y = window.pageYOffset;

  btnSlider2.forEach(function (btnItem, index) {
    btnSlider2[0].addEventListener("click", function () {
      slider2Img.forEach(function (img, imgIndex) {
        let widthImg = img.offsetWidth;
        slider2.scrollBy({
          left: -(widthImg + 10),
          behavior: "smooth",
        });
      });
    });

    btnSlider2[1].addEventListener("click", function () {
      slider2Img.forEach(function (img, imgIndex) {
        let widthImg = img.offsetWidth;
        slider2.scrollBy({
          left: widthImg + 10,
          behavior: "smooth",
        });
      });
    });
    if (Y >= news.offsetTop - heighHeader - 100) {
      btnItem.classList.add("active");
    } else {
      btnItem.classList.remove("active");
    }
  });
});

/* ==============pop up hình cho gallery======= */
$(document).ready(function () {
  var initPhotoSwipeFromDOM = function (gallerySelector) {
    var parseThumbnailElements = function (el) {
      var thumbElements = el.childNodes,
        numNodes = thumbElements.length,
        items = [],
        figureEl,
        linkEl,
        size,
        item;
      for (var i = 0; i < numNodes; i++) {
        figureEl = thumbElements[i]; // <figure> element
        if (figureEl.nodeType !== 1) {
          continue;
        }
        linkEl = figureEl.children[0]; // <a> element
        size = linkEl.getAttribute("data-size").split("x");
        item = {
          src: linkEl.getAttribute("href"),
          w: parseInt(size[0], 10),
          h: parseInt(size[1], 10),
        };
        if (figureEl.children.length > 1) {
          item.title = figureEl.children[1].innerHTML;
        }
        if (linkEl.children.length > 0) {
          // <img> thumbnail element, retrieving thumbnail url
          item.msrc = linkEl.children[0].getAttribute("src");
        }
        item.el = figureEl; // save link to element for getThumbBoundsFn
        items.push(item);
      }
      return items;
    };
    var closest = function closest(el, fn) {
      return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function (e) {
      e = e || window.event;
      e.preventDefault ? e.preventDefault() : (e.returnValue = false);
      var eTarget = e.target || e.srcElement;
      var clickedListItem = closest(eTarget, function (el) {
        return el.tagName && el.tagName.toUpperCase() === "FIGURE";
      });
      if (!clickedListItem) {
        return;
      }
      var clickedGallery = clickedListItem.parentNode,
        childNodes = clickedListItem.parentNode.childNodes,
        numChildNodes = childNodes.length,
        nodeIndex = 0,
        index;
      for (var i = 0; i < numChildNodes; i++) {
        if (childNodes[i].nodeType !== 1) {
          continue;
        }
        if (childNodes[i] === clickedListItem) {
          index = nodeIndex;
          break;
        }
        nodeIndex++;
      }
      if (index >= 0) {
        openPhotoSwipe(index, clickedGallery);
      }
      return false;
    };
    var photoswipeParseHash = function () {
      var hash = window.location.hash.substring(1),
        params = {};
      if (hash.length < 5) {
        return params;
      }
      var vars = hash.split("&");
      for (var i = 0; i < vars.length; i++) {
        if (!vars[i]) {
          continue;
        }
        var pair = vars[i].split("=");
        if (pair.length < 2) {
          continue;
        }
        params[pair[0]] = pair[1];
      }
      if (params.gid) {
        params.gid = parseInt(params.gid, 10);
      }
      return params;
    };
    var openPhotoSwipe = function (
      index,
      galleryElement,
      disableAnimation,
      fromURL
    ) {
      var pswpElement = document.querySelectorAll(".pswp")[0],
        gallery,
        options,
        items;
      items = parseThumbnailElements(galleryElement);
      options = {
        galleryUID: galleryElement.getAttribute("data-pswp-uid"),
        getThumbBoundsFn: function (index) {
          var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
            pageYScroll =
              window.pageYOffset || document.documentElement.scrollTop,
            rect = thumbnail.getBoundingClientRect();

          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
        },
        showAnimationDuration: 0,
        hideAnimationDuration: 0,
      };
      if (fromURL) {
        if (options.galleryPIDs) {
          for (var j = 0; j < items.length; j++) {
            if (items[j].pid == index) {
              options.index = j;
              break;
            }
          }
        } else {
          options.index = parseInt(index, 10) - 1;
        }
      } else {
        options.index = parseInt(index, 10);
      }
      if (isNaN(options.index)) {
        return;
      }
      if (disableAnimation) {
        options.showAnimationDuration = 0;
      }
      gallery = new PhotoSwipe(
        pswpElement,
        PhotoSwipeUI_Default,
        items,
        options
      );
      gallery.init();
    };
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
      galleryElements[i].setAttribute("data-pswp-uid", i + 1);
      galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
      openPhotoSwipe(
        hashData.pid,
        galleryElements[hashData.gid - 1],
        true,
        true
      );
    }
  };

  initPhotoSwipeFromDOM(".carousel-img");
});

$(document).ready(function () {
  let $carousel = $(".slider__list");
  $carousel.flickity({
    //options
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    on: {
      ready: function () {
        let dotted = $(".flickity-page-dots");
        paging = $(".slider__control .paging .dots");
        dotted.appendTo(paging);
      },
      change: function (i) {
        let number = $(".slider__control .paging .number");
        let indexPage = i + 1;
        console.log(indexPage);
        number.text(indexPage.toString().padstart(2, "0"));
      },
    },
  });
  /* ---------previous--------- */
  $(".slider__control .btncontrol .pre").on("click", function () {
    $carousel.flickity("previous");
  });
  /* ----------next------------- */
  $(".slider__control .btncontrol .next").on("click", function () {
    $carousel.flickity("next");
  });

  let $dragCarousel = $(".slider-drag__list");
  $dragCarousel.flickity({
    cellAlign: "left",
    freeScroll: true,
    // wrapAround: true,
    contain: true,
    prevNextButtons: true,
    pageDots: false,
  });
});
