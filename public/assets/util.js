var items = document.getElementsByClassName('item');
var amounts = document.getElementsByClassName('amount');
var modify = false;

function logger(msg){
    console.log("["+logger.caller.toString().split(" ")[1].toUpperCase()+"] "+msg);
}

function sliderChange (e){
    factor = 1.0;
    for (i = 0; i < amounts.length; i++){
        if(e == amounts[i]){
            amounts[i].value = e.value;
            oldValue = e.getAttribute("oldValue");
            factor = e.value / oldValue;
            logger("Element : "+e.id+" <Old> "+oldValue+ " changed to <New> "+ e.value+" w factor "+factor);
            amounts[i].value = e.value;
        }
    }
    if(modify){
        logger("Number of items :" + amounts.length);
        for (i=0; i< amounts.length; i++){
            if (e == amounts[i]) continue;
            else {
                oldValue = amounts[i].getAttribute("oldValue");
                amounts[i].value = (amounts[i].value*factor).toFixed(2);
                logger("Element : "+amounts[i].id+" <Old> "+oldValue+ " changed to <New> "+ amounts[i].value);
            }
        }
    }
}

function setOldValue (e) {
    e.setAttribute("oldValue", e.value);
    logger("Set <Old> Value for element "+e.id+" as "+ e.getAttribute("oldValue"));

}

function setAllValues() {
    for (i = 0; i < amounts.length; i++){
        setOldValue(amounts[i]);
    }
    modify = true;
    logger("Starting modifications.");
}

function addRow(tableID){

    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;

    var row = table.insertRow(rowCount);
    var sliderCell = row.insertCell(0);
    sliderCell.innerHTML = '<input type="text" placeholder="Item" class="item" id="Item'+(rowCount)+' required=true"/>';

    var amountCell = row.insertCell(1);
    amountCell.innerHTML = '<input type="text" placeholder="1" class="amount" id="Amount'+(rowCount)+'" required=true onChange="sliderChange(this)" onClick="setOldValue(this)"/>';

}