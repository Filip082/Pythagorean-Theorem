function drawFigure(figureName, a, b){
    figureName = figureName.toLowerCase();
    var canvas = document.getElementById("canvas");
    var startX;
    var startY;
    var previousX = 0;
    var previousY = 0;
    var ctx = canvas.getContext("2d");
    ctx.font = "normal bold 15px Arial"; 

    if (a <= 0) {
        a = 1;
    } else if (b <= 0) {
        b = 1;
    }

    var width = (canvas.width == 120) ? 100 : 200;
    var scaled = scale(a, b);
    a = scaled.x;
    b = scaled.y;
           
    if (figureName == "rectangulartriangle") {
        ctx.clearRect(0, 0, 240, 240);
        startX = (canvas.width - b) / 2;
        startY = (canvas.height - a) / 2;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        drawSide(0, a, 'a', false);
        drawSide(b, a, 'b', true);
        drawSide(0, 0, 'c', true);
    } else if (figureName == "regulartriangle") {
        
    } else if (false){
        
    } else {
        console.error("Podano nie właściwą liczbę boków");
    }

    function drawSide(x, y, text, modifierIsPositive) {
        var modifyX = 0;
        var modifyY = 0;

        if (x == previousX && y == previousY) {
            console.error('bok nie istnieje');           
        }

        if (previousX == x) {
            modifyY = (y / 2) * (-1);
            if (modifierIsPositive == true) {
                modifyX = 15
            } else {
                modifyX = -15;
            }
        } else if(previousY == y) {
            modifyX = (x / 2) * (-1);
            if (modifierIsPositive == true) {
                modifyY = 15;
            } else {
                modifyY = -15;
            }
        } else {
            modifyX = ((previousX - x) / 2);
            modifyY = ((previousY - y) / 2);
            if (modifierIsPositive == true) {
                modifyX += 5;
                modifyY += -5;
            } else {
                modifyX += -5;
                modifyY += 5;
            }
        }
        
        ctx.lineTo(startX + x, startY + y);
        ctx.fillText(text, (startX + x + modifyX), (startY + y + modifyY));
        ctx.stroke(); 

        previousX = x;
        previousY = y;
    }     
    
    function scale(a, b) {
        for (; true;) {
            if (a >= (width / 2) && b >= (width / 2))
                break;
            else {
                a *= 2;
                b *= 2;
            }
        }
        for (; true;) {
            if (a <= width && b <= width)
                break;
            else {
                a /= 2;
                b /= 2;
            }
        }
        return {x: a, y: b}
    }
}