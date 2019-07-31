function noAlphabets(n){
                var x=n.which;
                if(x>=48 && x<=57)
                    return true;
                else
                    return false;
            }

function calculate() {
    var previous = document.getElementById('previous').value;
    var current = document.getElementById('current').value;
    var ampere = document.getElementById('ampere').value;
    var consumed = current - previous;

    document.getElementById('consumed').innerHTML = consumed + " Units";

    if (ampere ==='5amp' && consumed > 400) {
        var amt = (4200 + (consumed - 400) * 13 + 175);  /*the total price till 400 unit is 4200*/
    }else if (ampere === '15amp' && consumed > 400) {
        amt = (4220 + (consumed - 400) * 13 + 200); 
    }else if (ampere ==='30amp' && consumed > 400) {
        amt = (4240 + (consumed - 400) * 13 + 225);
    }else if (ampere ==='60amp' && consumed > 400) {
        amt = (4260 + (consumed - 400) * 13 + 275);
    }

    if (ampere ==='5amp' && consumed <= 400) {
        var amt = (2400 + (consumed - 250) * 12 + 150);
    }else if (ampere ==='15amp' && consumed <= 400) {
        amt = (2420 + (consumed - 250) * 12 + 175);
    }else if (ampere ==='30amp' && consumed <= 400) {
        amt = (2440 + (consumed - 250) * 12 + 200);
    }else if (ampere ==='60amp' && consumed <= 400) {
        amt = (2460 + (consumed - 250) * 12 + 250);
    }

    if (ampere ==='5amp' && consumed <= 250) {
        var amt = (1300 + (consumed - 150) * 11 + 125);
    }else if (ampere ==='15amp' && consumed <= 250) {
        amt = (1320 + (consumed - 150) * 11 + 150);
    }else if (ampere ==='30amp' && consumed <= 250) {
        amt = (1340 + (consumed - 150) * 11 + 175);
    }else if (ampere ==='60amp' && consumed <= 250) {
        amt = (1360 + (consumed - 150) * 11 + 225);
    }

    if (ampere ==='5amp' && consumed <= 150) {
        var amt = (300 + (consumed - 50) * 10 + 100);
    }else if (ampere ==='15amp' && consumed <= 150) {
        amt = (320 + (consumed - 50) * 10 + 125);
    }else if (ampere ==='30amp' && consumed <= 150) {
        amt = (340 + (consumed - 50) * 10 + 150);
    }else if (ampere ==='60amp' && consumed <= 150) {
        amt = (360 + (consumed - 50) * 10 + 200);
    }

    if (ampere ==='5amp' && consumed <= 50) {
        var amt = (130 + (consumed - 30) * 8.5 + 75);
    }else if (ampere ==='15amp' && consumed <= 50) {
        amt = (150 + (consumed - 30) * 8.5 + 100);
    }else if (ampere ==='30amp' && consumed <= 50) {
        amt = (170 + (consumed - 30) * 8.5 + 125);
    }else if (ampere ==='60amp' && consumed <= 50) {
        amt = (190 + (consumed - 30) * 8.5 + 175);
    }

    if (ampere ==='5amp' && consumed <= 30) {
        var amt = (60 + (consumed - 20) * 7 + 50);
    }else if (ampere ==='15amp' && consumed <= 30) {
        amt = (80 + (consumed - 20) * 7 + 75);
    }else if (ampere ==='30amp' && consumed <= 30) {
        amt = (100 + (consumed - 20) * 7 + 100);
    }else if (ampere ==='60amp' && consumed <= 30) {
        amt = (120 + (consumed - 20) * 7 + 150);
    }

    if (ampere === '5amp' && consumed <= 20) {
        var amt = (consumed * 3 + 30);
    } else if (ampere === '15amp' && consumed <= 20) {
        amt = (consumed * 4 + 50);
    } else if (ampere === '30amp' && consumed <= 20) {
        amt = (consumed * 5 + 75);
    } else if (ampere === '60amp' && consumed <= 20) {
        amt = (consumed * 6 + 125);
    }

    if (consumed == 0) {
        var amt = 0;
    }

    else if (consumed < 0) {
        var amt = 0 + ('(-ve value detected)');
    }

  
    
    document.getElementById('bill').innerHTML = "Rs. " + amt;
}