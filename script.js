var luck = Math.random();
luck = luck * 100;
luckno = Math.floor(luck);




calulate = () => {
    var form = document.getElementById("form");
    var yournameval = document.getElementById("yourname").value;
    var partnernameval = document.getElementById("partnername").value;
    var percentage = document.getElementById("per");
    var cal = document.getElementById("cal");
    var partner = document.getElementById("partner");
    var myname = document.getElementById("myname");
    var and = document.getElementById("and");
    //   code.................
    form.style.display = "none";
    cal.style.display = "block";
    if (partnernameval === "" || yournameval === "") {
        percentage.innerText = "Sorry";
        and.innerText = "";

    } else {
        percentage.innerText = luckno + "%";
    }
    partner.innerHTML = partnernameval;
    myname.innerText = yournameval;

}

Again = () => {
    document.getElementById("yourname").value = "";
    document.getElementById("partnername").value = "";
    form.style.display = "block";
    cal.style.display = "none";

}