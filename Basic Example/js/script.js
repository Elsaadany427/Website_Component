var search_id = document.getElementById("search_btn");

function returnClassName(newName) {

    var classname = search_id.className;

    var stringArr = classname.split(" ");

    stringArr[1] = newName;

    var i, newString = "";

    for (i = 0; i < stringArr.length; i++) {
        newString += stringArr[i];
        newString += " ";
    }
    return newString;
};

function removeIcon() {
    var isvalid = search_id.getElementsByTagName("i");
    if (isvalid.length > 0) {
        isvalid[0].remove();
    }
}

function checkIcon(btn) {
    var isvalid = search_id.getElementsByTagName("i");
    var btnWithIcon = document.getElementById(btn);
    var icon = btnWithIcon.getElementsByTagName("i");
    var iconClass = icon[0].className;

    var NewI = document.createElement("i");
    var pasttextContent = document.createTextNode(search_id.textContent);
    var space = document.createTextNode(" ");
    search_id.textContent = "";

    if (isvalid.length > 0) {
        isvalid[0].remove();
        NewI.className = iconClass;
        search_id.appendChild(NewI);
        search_id.appendChild(space);
        search_id.appendChild(pasttextContent);

    } else {
        NewI.className = iconClass;
        search_id.appendChild(NewI);
        search_id.appendChild(space);

        search_id.appendChild(pasttextContent);
    }

}


/* DEFAULT BUTTONS */

function defaultColor(color) {
    var maincolor = "btn-" + color;
    var newStingClass = returnClassName(maincolor);
    search_id.className = newStingClass;
    removeIcon();
}


/* OUTLINE BUTTONS */

function Outlinecolor(color) {
    var mainColor = 'btn-outline-' + color;
    var newStingClass = returnClassName(mainColor);
    search_id.className = newStingClass;
    removeIcon();

}


/*OUTLINE BUTTONS with icons */

function btn_with_icon_color(btnWithIcon_1, color) {

    var mainColor = "btn-outline-" + color;
    var newStingClass = returnClassName(mainColor);
    search_id.className = newStingClass;

    // btn = btnWithIcon_1.id;
    checkIcon(btnWithIcon_1);

}

/* SMALL BUTTONS */

function smallbtn() {
    if (search_id.classList.contains("btn-bg")) {
        search_id.classList.remove("btn-bg");
        search_id.classList.add("btn-sm");
    } else {
        search_id.classList.add("btn-sm");
    }
}

/* big button */

function bgbtn() {
    if (search_id.classList.contains("btn-sm")) {
        search_id.classList.remove("btn-sm");
        search_id.classList.add("btn-bg");
    } else {
        search_id.classList.add("btn-bg");
    }
}



/* Background color */

var testNav = document.getElementById("testNav");


function checkBackground(newName) {


    var colors = ["bg-primary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-dark", "bg-light", "bg-white"];

    var classname = testNav.className;

    var stringArr = classname.split(" ");

    var lastName = stringArr[stringArr.length - 1];

    var j;
    for (j = 0; j < 8; j++) {
        if (colors[j] == lastName) { flag = true; break; }
    }
    if (flag) {
        stringArr[stringArr.length - 1] = newName;
        var i, newString = "";
        for (i = 0; i < stringArr.length; i++) {
            newString += stringArr[i];
            if (i != stringArr.length - 1) newString += " ";
        }

    } else {
        var i, newString = "";
        for (i = 0; i < stringArr.length; i++) {
            newString += stringArr[i];
            if (i != stringArr.length - 1) newString += " ";
        }

    }
    return newString;
}

function bgchangeColor(color) {
    var mainColor = "bg-" + color;
    var res = checkBackground(mainColor);
    testNav.className = res;
}