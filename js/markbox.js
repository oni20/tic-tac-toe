 var cell;
    var symbol = "X";
    function markbox(cell)
    {
        if (cell.value == "")
        {
          cell.value = symbol;
        if (winning_condition())
        {
        alert (symbol + " wins the game!");
        return;
        }
        else
        {
            if(check_for_draw()){
                alert("Draw!");
                return;
            }
        }
        if (symbol == "X")
        symbol = "O";
        else
        symbol = "X";
        }

    }
    function check_for_draw(){
     return (document.f1.b00.value!="" && document.f1.b01.value!="" && document.f1.b10.value!="" && document.f1.b11.value!="" && document.f1.b12.value!="" && document.f1.b20.value!="" && document.f1.b21.value!="" && document.f1.b22.value!="" && document.f1.b02.value!="")
    }
    function winning_condition()
        {
        if(document.f1.b00.value==symbol && document.f1.b01.value==symbol && document.f1.b02.value==symbol)
        return true;
        else if(document.f1.b10.value==symbol && document.f1.b11.value==symbol && document.f1.b12.value==symbol)
        return true;
        else if(document.f1.b20.value==symbol && document.f1.b21.value==symbol && document.f1.b22.value==symbol)
        return true;
        else if(document.f1.b00.value==symbol && document.f1.b10.value==symbol && document.f1.b20.value==symbol)
        return true;
        else if(document.f1.b01.value==symbol && document.f1.b11.value==symbol && document.f1.b21.value==symbol)
        return true;
        else if(document.f1.b02.value==symbol && document.f1.b12.value==symbol && document.f1.b22.value==symbol)
        return true;
        else if(document.f1.b00.value==symbol && document.f1.b11.value==symbol && document.f1.b22.value==symbol)
        return true;
        else if(document.f1.b02.value==symbol && document.f1.b11.value==symbol && document.f1.b20.value==symbol)
        return true;
        }
    function clearBtn()
    {
    status = "X"
    document.f1.b00.value="";
    document.f1.b01.value="";
    document.f1.b02.value="";
    document.f1.b10.value="";
    document.f1.b11.value="";
    document.f1.b12.value="";
    document.f1.b20.value="";
    document.f1.b21.value="";
    document.f1.b22.value="";
    }