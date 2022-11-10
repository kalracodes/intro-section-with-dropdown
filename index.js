var drop_down_classes = document.querySelectorAll(".visible");
var up_arr = document.querySelectorAll(".up-arrow");

drop_down_classes.forEach((element) => {
	element.style.display = "none";
});

up_arr.forEach((element) => {
	element.style.display = "none";
});

var feature = document.getElementById("feature");
var feature_drop_down = document.getElementById("drop-down-features");
var outer_feature = document.getElementById("outer-feature");
var feature_up = document.getElementById("feature-up");
var feature_down = document.getElementById("feature-down");
var company = document.getElementById("company");
var company_drop_down = document.getElementById("drop-down-company");
var outer_company = document.getElementById("outer-company");
var company_up = document.getElementById("company-up");
var company_down = document.getElementById("company-down");
var career = document.getElementById("career");

feature.addEventListener("mouseenter", () => {
    feature.style.fontWeight = "bold";
	feature_up.style.display = "block";
	feature_down.style.display = "none";
	feature_drop_down.style.display = "block";
});

outer_feature.addEventListener("mouseleave", () => {
    feature.style.fontWeight = "normal";
	feature_up.style.display = "none";
	feature_down.style.display = "block";
	feature_drop_down.style.display = "none";
});
company.addEventListener("mouseenter", () => {
    company.style.fontWeight = "bold";
    career.style.marginLeft = "-1px";
	company_up.style.display = "block";
	company_down.style.display = "none";
	company_drop_down.style.display = "block";
});

outer_company.addEventListener("mouseleave", () => {
    company.style.fontWeight = "normal";
    career.style.marginLeft = "0px";
	company_up.style.display = "none";
	company_down.style.display = "block";
	company_drop_down.style.display = "none";
});

var l3 = document.getElementById("3l");
var cross = document.getElementById("cross")
l3.addEventListener("click",()=>{
	cross.style.display = "inline-block";
	l3.style.display = "none";
})

cross.addEventListener("click",()=>{
	l3.style.display = "inline-block";
	cross.style.display = "none";
})