

function Indentation (oString) {
	if(oString == undefined  || oString == null || oString == ""){
		return oString;
	}
	var line = oString.split("\n");
	var indent = "";
	var oneIndent = "	";
	for(var i=0;i<line.length;i++){
		
		if(line[i].indexOf("{")== line[i].length -1){
			line[i] = indent + line[i];
			indent = indent + oneIndent;
		}else if(line[i].indexOf("}")>=0){
			
			indent = indent.substring(1);
			line[i] = indent + line[i];
		}else{
			line[i] = indent + line[i];
		}
	}
	debugger;
	return line.join("\n");
}