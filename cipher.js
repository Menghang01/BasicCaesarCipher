// let target,shift; 



String.prototype.replaceAt = function(index, replacement) {
	if (index >= this.length) {
		return this.valueOf();
	}

	return this.substring(0, index) + replacement + this.substring(index + 1);
}

function Convert()
{

    var target = document.getElementById("plain").value; 
    var hello = parseInt((document.getElementById("shift").value));

for(let i = 0; i<target.length;i++)
{
    var n  = target.charCodeAt(i)+hello; 
    var c = String.fromCharCode(n);
    
    if(n > 122)
    {
        target = target.replaceAt(i,  String.fromCharCode(n-122+96)); 
    }
    else{
        target = target.replaceAt(i,c);
    }
    
}

document.getElementById("display").innerHTML = target; 
 
}

function reset()
{
    document.getElementById("display").innerHTML= ""; 
    document.getElementById("plain").value = ""; 
    document.getElementById("shift").value = ""; 
}





























