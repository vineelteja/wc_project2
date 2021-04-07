var photos = [];
var fileNames = [];
var imageList = [];
var image;
var openList = `<li><div>`;
var closeList = `</div></li>`;
var description = [
  "pet cat description 01",
  "pet cat description 02",
  "pet cat description 03",
  "pet cat description 04",
  "pet cat description 05",
  "pet cat description 06",
  "pet cat description 07",
  "pet cat description 08",
  "pet cat description 09",
  "pet cat description 10",
];
var caption = [
  "img caption 01",
  "img caption 02",
  "img caption 03",
  "img caption 04",
  "img caption 05",
  "img caption 06",
  "img caption 07",
  "img caption 08",
  "img caption 09",
  "img caption 10",
];
var hover_cap_open = `<p class="hover-cap">`;
var hover_cap_close = `</p>`;
var description_open = `<p>`;
var description_close = `</p>`;
for (var i = 0; i < 10; i++) {
  filename = "cats" + String(i);
  imgtag = `<img src="images/img-cats/${filename}.jpg" />`;
  descriptionTag = `${description_open}${caption[i]}${description_close}`;
  captionTag = `${hover_cap_open}${description[i]}${hover_cap_close}`;
  liTag = `${openList}${imgtag}${descriptionTag}${captionTag}${closeList}`;
  imageList.push(liTag);
}

imageList = imageList.join("");
document.getElementById("album").innerHTML = imageList;

cat_lorem = [
  `cat 01 cat 01 cat 01 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ea, reprehenderit assumenda. Magnam cupiditate pariatur, asperiores voluptatibus 
    ipsum excepturi earum molestiae laborum ex.`,
  `cat 02 cat 02 cat 01 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ea, reprehenderit assumenda. Magnam cupiditate pariatur, asperiores voluptatibus 
    ipsum excepturi earum molestiae laborum ex.`,
  `cat 03 cat 03 cat 01 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ea, reprehenderit assumenda. Magnam cupiditate pariatur, asperiores voluptatibus 
    ipsum excepturi earum molestiae laborum ex.`,
  `cat 04 cat 04 cat 01 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ea, reprehenderit assumenda. Magnam cupiditate pariatur, asperiores voluptatibus 
    ipsum excepturi earum molestiae laborum ex.`,
  `cat 05 cat 05 cat 01 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ea, reprehenderit assumenda. Magnam cupiditate pariatur, asperiores voluptatibus 
    ipsum excepturi earum molestiae laborum ex.`,
  `cat 06 cat 06 cat 01 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ea, reprehenderit assumenda. Magnam cupiditate pariatur, asperiores voluptatibus 
    ipsum excepturi earum molestiae laborum ex.`,
  `cat 07 cat 07 cat 01 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ea, reprehenderit assumenda. Magnam cupiditate pariatur, asperiores voluptatibus 
    ipsum excepturi earum molestiae laborum ex.`,
  `cat 08 cat 08 cat 01 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ea, reprehenderit assumenda. Magnam cupiditate pariatur, asperiores voluptatibus 
    ipsum excepturi earum molestiae laborum ex.`,
  `cat 09 cat 09 cat 01 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ea, reprehenderit assumenda. Magnam cupiditate pariatur, asperiores voluptatibus 
    ipsum excepturi earum molestiae laborum ex.`,
  `cat 10 cat 10 cat 01 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ea, reprehenderit assumenda. Magnam cupiditate pariatur, asperiores voluptatibus 
    ipsum excepturi earum molestiae laborum ex.`,
];

$(function () {
  var lst = $(".hover-cap"); 
  var caption = "";

  $(lst).click(function () {

    // remove OLD caption and description from info box 
    try {
      $(".info-box h2").remove();
      $(".info-box p").remove();
    } catch {}

    var caption = $(this).prev()[0].innerHTML;
    var lorem_ind = Number(caption.slice(-2)) - 1;

    // add NEW caption and description INTO info box 
    $(".info-box")
      .toggleClass("info-box-show")
      .append(`<h2>${caption}</h2>`)
      .append(`<p>${cat_lorem[lorem_ind]}</p>`)
      .append(`<p id="close_p">Click this to close</p>`);
  });

  // hide info box
  $(".info-box").on("click", "#close_p", function () {
    $(".info-box").toggleClass("info-box-show");
  });
});
