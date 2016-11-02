//Bron: Hulp van Mohammed en Tobias

var image = document.querySelectorAll("article div img");
//var image_tracker = "likeRemoved";

var change = function (that) {
    if (that.getAttribute("src") == "/images/heartempty-01.png") {
        that.setAttribute("src", "images/heartfill-01.png");
        document.querySelectorAll(".likesNumber")[0].innerHTML =
            parseInt(document.querySelectorAll(".likesNumber")[0].innerHTML) += 1;
        //            image_tracker = "liked";
    } else {
        that.src = "/images/heartempty-01.png";
        document.querySelectorAll(".likesNumber")[0].innerHTML =
            parseInt(document.querySelectorAll(".likesNumber")[0].innerHTML) += -1;

        //            image_tracker = "likeRemoved";
    }
}

for (var i = 0; i < image.length; i++) {
    image[i].addEventListener("click", function () {
        change(this);
    });
}