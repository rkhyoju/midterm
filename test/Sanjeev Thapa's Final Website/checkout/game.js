function calculate(){
    var x = document.getElementById("list").value;
    const pricea = 0;
    const priceb = 450;
    const pricec = 1200;
    const priced = 2500;
    const pricee = 3100;
    if (x == "a") {
        document.getElementById("price").innerHTML = "Rs." + pricea;
        document.getElementById("vat").innerHTML = "Rs." + (pricea * 13) / 100;
        document.getElementById("total_price").innerHTML = "Rs." + (pricea+(pricea*13)/100);
    }

    else if (x == "b") {
        document.getElementById("price").innerHTML = "Rs." + priceb;
        document.getElementById("vat").innerHTML = "Rs." + (priceb * 13) / 100;
        document.getElementById("total_price").innerHTML = "Rs." + (priceb+(priceb*13)/100);
    }

    else if (x == "c") {
        document.getElementById("price").innerHTML = "Rs." + pricec;
        document.getElementById("vat").innerHTML = "Rs." + (pricec * 13) / 100;
        document.getElementById("total_price").innerHTML = "Rs." + (pricec+(pricec*13)/100);
    }

    else if (x == "d") {
        document.getElementById("price").innerHTML = "Rs." + priced;
        document.getElementById("vat").innerHTML = "Rs." + (priced * 13) / 100;
        document.getElementById("total_price").innerHTML = "Rs." + (priced+(priced*20)/100);
    }

    else if (x == "e") {
        document.getElementById("price").innerHTML = "Rs." + pricee;
        document.getElementById("vat").innerHTML = "Rs." + (pricee * 13) / 100;
        document.getElementById("total_price").innerHTML = "Rs." + (pricee+(pricee*20)/100);
    }
}

function message() {
    alert("Payment Successful! Your Product will be delivered shortly...");
}
