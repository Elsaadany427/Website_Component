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
function warning() {
    var newStingClass = returnClassName("btn-warning");
    search_id.className = newStingClass;
    removeIcon();
}

function primary() {
    var newStingClass = returnClassName("btn-primary");
    search_id.className = newStingClass;
    removeIcon();
}

function success() {
    var newStingClass = returnClassName("btn-success");
    search_id.className = newStingClass;
    removeIcon();

}

function light() {
    var newStingClass = returnClassName("btn-light");
    search_id.className = newStingClass;
    removeIcon();

}

function dark() {
    var newStingClass = returnClassName("btn-dark");
    search_id.className = newStingClass;
    removeIcon();

}

function danger() {
    var newStingClass = returnClassName("btn-danger");
    search_id.className = newStingClass;
    removeIcon();

}

function info() {
    var newStingClass = returnClassName("btn-info");
    search_id.className = newStingClass;
    removeIcon();

}


/* OUTLINE BUTTONS */

function outlinewarning() {
    var newStingClass = returnClassName("btn-outline-warning");
    search_id.className = newStingClass;
    removeIcon();

}

function outlineprimary() {
    var newStingClass = returnClassName("btn-outline-primary");
    search_id.className = newStingClass;
    removeIcon();

}

function outlinesuccess() {
    var newStingClass = returnClassName("btn-outline-success");
    search_id.className = newStingClass;
    removeIcon();

}

function outlinedark() {
    var newStingClass = returnClassName("btn-outline-dark");
    search_id.className = newStingClass;
    removeIcon();

}

function outlinelight() {
    var newStingClass = returnClassName("btn-outline-light");
    search_id.className = newStingClass;
    removeIcon();

}

function outlineinfo() {
    var newStingClass = returnClassName("btn-outline-info");
    search_id.className = newStingClass;
    removeIcon();

}

function outlinedanger() {
    var newStingClass = returnClassName("btn-outline-danger");
    search_id.className = newStingClass;
    removeIcon();

}

/*OUTLINE BUTTONS with icons */

var btn = "";

function btn_with_icon_warning(btnWithIcon_1) {

    var newStingClass = returnClassName("btn-outline-warning");
    search_id.className = newStingClass;

    btn = btnWithIcon_1.id;
    checkIcon(btn);

}

function btn_with_icon_warning(btnWithIcon_1_1) {

    var newStingClass = returnClassName("btn-outline-warning");
    search_id.className = newStingClass;

    btn = btnWithIcon_1_1.id;
    checkIcon(btn);

}

function btn_with_icon_primary(btnWithIcon_2) {

    var newStingClass = returnClassName("btn-outline-primary");
    search_id.className = newStingClass;

    btn = btnWithIcon_2.id;
    checkIcon(btn);
}

function btn_with_icon_primary(btnWithIcon_2_2) {

    var newStingClass = returnClassName("btn-outline-primary");
    search_id.className = newStingClass;

    btn = btnWithIcon_2_2.id;
    checkIcon(btn);
}

function btn_with_icon_success(btnWithIcon_3) {

    var newStingClass = returnClassName("btn-outline-success");
    search_id.className = newStingClass;

    btn = btnWithIcon_3.id;
    checkIcon(btn);
}

function btn_with_icon_success(btnWithIcon_3_3) {

    var newStingClass = returnClassName("btn-outline-success");
    search_id.className = newStingClass;

    btn = btnWithIcon_3_3.id;
    checkIcon(btn);
}

function btn_with_icon_light(btnWithIcon_4) {

    var newStingClass = returnClassName("btn-outline-light");
    search_id.className = newStingClass;

    btn = btnWithIcon_4.id;
    checkIcon(btn);
}

function btn_with_icon_light(btnWithIcon_4_4) {

    var newStingClass = returnClassName("btn-outline-light");
    search_id.className = newStingClass;

    btn = btnWithIcon_4_4.id;
    checkIcon(btn);
}

function btn_with_icon_danger(btnWithIcon_5) {

    var newStingClass = returnClassName("btn-outline-danger");
    search_id.className = newStingClass;

    btn = btnWithIcon_5.id;
    checkIcon(btn);
}

function btn_with_icon_danger(btnWithIcon_5_5) {

    var newStingClass = returnClassName("btn-outline-danger");
    search_id.className = newStingClass;

    btn = btnWithIcon_5_5.id;
    checkIcon(btn);
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
    console.log(lastName);
    console.log(stringArr);

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

function bgprimary() {
    var color = "bg-primary";
    var res = checkBackground(color);
    testNav.className = res;
}

function bgwarning() {
    var color = "bg-warning";
    var res = checkBackground(color);
    testNav.className = res;
}

function bgsuccess() {
    var color = "bg-success";
    var res = checkBackground(color);
    testNav.className = res;
}

function bglight() {
    var color = "bg-light";
    var res = checkBackground(color);
    testNav.className = res;
}

function bgdanger() {
    var color = "bg-danger";
    var res = checkBackground(color);
    testNav.className = res;
}

function bginfo() {
    var color = "bg-info";
    var res = checkBackground(color);
    testNav.className = res;
}

function bgwhite() {
    var color = "bg-white";
    var res = checkBackground(color);
    testNav.className = res;
}

function bgdark() {
    var color = "bg-dark";
    var res = checkBackground(color);
    testNav.className = res;
}