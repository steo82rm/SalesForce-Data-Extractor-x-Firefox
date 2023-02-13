
/** 
 * SalesForce Data Extractor for Enterprise Spectrum Technicians.
 * Cut-Sheet data builder helper.
 * 
 * @author: Stefano Fiori
 * @version: 1.12.1.2, 2023/02/12
 * @language: JavaScript
 * 
 *
 * Icons and images are from https://getemoji.com/  and  https://www.iconfinder.com/
 *
 */


/** Main variables declarations: --- START --- ***/
var version = "v1.12.1.2, 2023/02/12";
var body = "<!DOCTYPE html>\n";
var color = "Gold";
var bgcolor = "#000052"; // "Navy";
var font = "font-size: 1.25rem; font-family: Courier New, Monospace; font-style: normal; font-weight: normal;";
var testValue = "";
/** Main variables declarations: --- END --- ***/


/** Function declarations: --- START --- ***/

function buildBodyTableLineSeparator() {
	// --- Insert line separator ---
	body += "\t\t\t<tr class=\"tableRowLineSeparator\"><td colspan=\"2\"></td></tr>\n";
}


function buildBodyTableRowSection(id, name, indent_tabs, isFirst=false, leaveTrace=false, itemNum=-1, copyPrefix="", replace="", removeCRandNL=false, addTagID="") {
	var found = false;
	try {
		testValue = itemNum < 0 ? document.getElementById(id) : document.querySelectorAll("[id^='"+id+"']")[itemNum];
		if ( testValue != null ) {
			testValue = testValue.innerText;
			testValue = testValue.replace(/\\/gm,"");
			testValue = testValue.replace(/'/gm,"\\\'");
			testValue = testValue.replace(/"/gm,"\\\'");
			testValue = testValue.trim();
			testValue = removeCRandNL ? testValue.replace(replace,"").replaceAll("\n","<br />") : testValue;  // replace is a regex, value example: /^\s*$(?:\r\n?|\n)/gm
			if ( testValue != "" && testValue != "N/A" ) {
				found = true;
				body += indent_tabs +
						"<tr>"+
							(isFirst ? "<td class=\"fieldName\" style=\"padding-top: 7px;\">"+name+":</td>" :
									   "<td class=\"fieldName\">"+name+":</td>")+
							(isFirst ? "<td class=\"fieldValue\" style=\"padding-top: 7px;\"" :
									   "<td class=\"fieldValue\"") +
							(addTagID ? addTagID : "") + 
							" onclick=\"copyText('"+ copyPrefix + testValue +"');\">"+testValue+"</td>"+
						"</tr>\n";
			} else if (leaveTrace)
				body += indent_tabs +"<tr><td class=\"fieldName\">"+name+":</td><td class=\"fieldValue notFound\">&lt;&lt;empty&gt;&gt;</td></tr>\n";
		} else if (leaveTrace)
			body += indent_tabs +"<tr><td class=\"fieldName\">"+name+":</td><td class=\"fieldValue notFound\">&lt;&lt;NOT-FOUND!&gt;&gt;</td></tr>\n";
	} catch (err) {
		console.log("---");
		console.log("Search for item id \""+id+"\" and for the field \""+name+"\" has thrown an exception!\n");
		console.log(err.message);
	} finally {
		testValue = null;
	}
	return found;
}


function buildTableFor_MainENGPage() {
	// ENG#
	buildBodyTableRowSection("Name_ileinner", "ENG#", "\t\t\t\t", isFirst=true, leaveTrace=true);
	// PRISM-ID
	buildBodyTableRowSection("00N1W000002tAv2_ileinner", "PRISM-ID", "\t\t\t\t", isFirst=false);
	// Opportunity
	buildBodyTableRowSection("00N40000002MXAR_ileinner", "Opportunity", "\t\t\t\t", isFirst=false);
	// Site Survey Number
	buildBodyTableRowSection("00N40000002yZz2_ileinner", "Site Survey Number", "\t\t\t\t", isFirst=false);

	buildBodyTableLineSeparator(); // --- Insert line separator ---

	// Notes and attachments (documents) #
	testValue = document.getElementsByClassName("count")[0];
	if (testValue != null && testValue != "" && testValue) {
		testValue = testValue.innerText.trim().replace(/^.*\[/g,"").replace(/\].*$/g,"");
		body += "\t\t\t\t<td class=\"fieldName\" style=\"color: DarkOrange;\">Documents [#]:</td><td class=\"fieldValue\" style=\"color: DarkOrange;\">"+testValue+"</td>\n";

		buildBodyTableLineSeparator(); // --- Insert line separator ---
	}

	// Project Manager
	buildBodyTableRowSection("00N40000002MbIw_ileinner", "Project Manager", "\t\t\t\t", isFirst=false, leaveTrace=true);
	// Service Delivery Manager
	buildBodyTableRowSection("00N1W0000039xIs_ileinner", "Service Delivery Manager", "\t\t\t\t", isFirst=false, leaveTrace=true);
	// Sales Support
	buildBodyTableRowSection("CF00N", "Sales Support", "\t\t\t\t", isFirst=false, leaveTrace=true, itemNum=2, copyPrefix="Sales Support: ");

	buildBodyTableLineSeparator(); // --- Insert line separator ---
	
	// Engineering (Job) Notes
	// getElementByIdCS("00N40000002MbIY_ileinner").innerText.trim().replace(/^\s*$(?:\r\n?|\n)/gm,"").replaceAll("\n","<br />");
	buildBodyTableRowSection("00N40000002MbIY_ileinner", "Engineering (Job) Notes", "\t\t\t\t", false, true, -1, "", replace=/^\s*$(?:\r\n?|\n)/gm, removeCRandNL=true);

	buildBodyTableLineSeparator(); // --- Insert line separator ---
	
	// Sales Engineering (Job) Notes
	buildBodyTableRowSection("00N40000002WyOI_ileinner", "Sales Engineering (Job) Notes", "\t\t\t\t", false, false, -1, "", replace=/^\s*$(?:\r\n?|\n)/gm, removeCRandNL=true);

	buildBodyTableLineSeparator(); // --- Insert line separator ---
	
	// Customer
	buildBodyTableRowSection("00N40000002MbI9_ileinner", "Customer", "\t\t\t\t", isFirst=false, leaveTrace=true);
	// Address
	buildBodyTableRowSection("00N40000002MbJ1_ileinner", "Address", "\t\t\t\t", isFirst=false, leaveTrace=true);
	// Unit#/Suite#
	buildBodyTableRowSection("00N40000002WyOU_ileinner", "Unit#/Suite#", "\t\t\t\t", isFirst=false, leaveTrace=true);
	// Account#
	buildBodyTableRowSection("00N40000002MbIA_ileinner", "Account#", "\t\t\t\t", isFirst=false, leaveTrace=true);
	// WorkOrder#
	buildBodyTableRowSection("00N40000002Mge1_ileinner", "Work-Order#", "\t\t\t\t", isFirst=false, leaveTrace=true);
	// Owner
	buildBodyTableRowSection("00N40000002MXAS_ileinner", "Owner", "\t\t\t\t", isFirst=false, leaveTrace=false);

	// POC (name)
	// id=CF00N400000038k8N_ileinner
	// buildBodyTableRowSection("CF00N400000038k8N_ileinner", "POC (name)", "\t\t\t\t", isFirst=false, leaveTrace=true, itemNum=-1, copyPrefix="");
	buildBodyTableRowSection("lookup003", "POC (name)", "\t\t\t\t", isFirst=false, leaveTrace=true, itemNum=0, copyPrefix="", "", false, " id=\"POC_Name\" " );
	// POC (tel.)
	buildBodyTableRowSection("00N400000038k8O_ileinner", "POC (tel.)", "\t\t\t\t", isFirst=false, leaveTrace=true, -1, copyPrefix="", "", false, " id=\"POC_Tel\" " );
	// POC (eMail)
	buildBodyTableRowSection("00N400000038k8M_ileinner", "POC (eMail)", "\t\t\t\t", isFirst=false, leaveTrace=true, -1, copyPrefix="", "", false, " id=\"POC_eMail\" " );

	buildBodyTableLineSeparator(); // --- Insert line separator ---

	// Product
	buildBodyTableRowSection("00N40000002WyOE_ilecell", "Product", "\t\t\t\t", isFirst=false, leaveTrace=true);
	/**
	try {
		testValue = getElementByIdCS("00N400000033Iaz_ileinner").innerText.trim();
		if ( testValue == "DIA" || testValue == "FIA" )
			body += "\t\t\t\t<tr><td class=\"fieldName\">Product:</td><td class=\"fieldValue\">FIA/DIA</td></tr>\n";
		else if ( testValue == "Choose One" )
				body += "\t\t\t\t<tr><td class=\"fieldName\">Product:</td><td class=\"fieldValue\">"+getElementByIdCS("00N40000002MYeI_ileinner").innerText.trim()+"</td></tr>\n";
		else	body += "\t\t\t\t<tr><td class=\"fieldName\">Product:</td><td class=\"fieldValue\">"+testValue+"</td></tr>\n";
	} catch (err) { console.log("Error retriving \"Product\":\n" + err.message); }
	 */

	// Duplex
	buildBodyTableRowSection("00N40000002yUp0_ileinner", "Duplex", "\t\t\t\t", isFirst=false, leaveTrace=false);
	// UNI type
	buildBodyTableRowSection("00N40000002WyOk_ileinner", "UNI type", "\t\t\t\t", isFirst=false, leaveTrace=false);
	// UNI Port Speed
	buildBodyTableRowSection("00N40000002WyOj_ileinner", "UNI Port Speed", "\t\t\t\t", isFirst=false, leaveTrace=false);
	// Bandwidth
	buildBodyTableRowSection("00N40000002MjLM_ileinner", "Bandwidth", "\t\t\t\t", isFirst=false, leaveTrace=false);
	// Hand-off
	buildBodyTableRowSection("00N40000002WyTY_ileinner", "Hand-off", "\t\t\t\t", isFirst=false, leaveTrace=false);

	buildBodyTableLineSeparator(); // --- Insert line separator ---
	
	// Circuit-ID
	buildBodyTableRowSection("00N40000002MbKV_ileinner", "Circuit-ID", "\t\t\t\t", isFirst=false, leaveTrace=true);
	// Wavelength
	// buildBodyTableRowSection("00N1W000002tHwy_ileinner", "Wavelength", "\t\t\t\t", isFirst=false, leaveTrace=true);
	try {
		testValue = document.getElementById("00N1W000002tHwy_ileinner").innerText.trim().replace("nm","");
		if ( testValue != null && testValue != "" && testValue != "N/A" ) {
			testValue += "nm";
			if ( testValue.indexOf('.') >= 0 )
				body += "\t\t\t\t<tr><td class=\"fieldName\">Wavelength: (DWDM)</td><td class=\"fieldValue\" onclick=\"copyText('"+testValue+"');\">"+testValue+"</td></tr>\n";
			else
				body += "\t\t\t\t<tr><td class=\"fieldName\">Wavelength: (CWDM)</td><td class=\"fieldValue\" onclick=\"copyText('"+testValue+"');\">"+testValue+"</td></tr>\n";
		}
	} catch (err) { console.log("Error retriving \"Wavelength\":\n" + err.message); }

	buildBodyTableLineSeparator(); // --- Insert line separator ---

	// Circuit Notes
	buildBodyTableRowSection("00N40000002MbIG_ileinner", "Circuit Notes", "\t\t\t\t", isFirst=false, leaveTrace=true, -1, "", replace=/^\s*$(?:\r\n?|\n)/gm, removeCRandNL=true);

	buildBodyTableLineSeparator(); // --- Insert line separator ---

	// CPE Install Date
	buildBodyTableRowSection("00N40000002MX8f_ileinner", "CPE Install Date", "\t\t\t\t", isFirst=false, leaveTrace=true);
	// CPE Fiber Installer
	buildBodyTableRowSection("CF00N40000002MsGV_ileinner", "CPE Fiber Installer", "\t\t\t\t", isFirst=false, leaveTrace=true);
	// CPE Install Notes
	buildBodyTableRowSection("00N40000002MX8p_ileinner", "CPE Install Notes", "\t\t\t\t", isFirst=false, leaveTrace=true, -1, "", replace=/^\s*$(?:\r\n?|\n)/gm, removeCRandNL=true);
}


function buildTableFor_SearchResultsPage() {
	var list = document.getElementById("Engineering__c_body").getElementsByClassName("dataCell");
	// var listArray = [...list];   // transform the NodeList of HTML nodes into an Array List.

	var items = new Map(); // Map key-names , field-column-position per row (numbering start from 0)
	items.set("ENG#", 0);
	items.set("Circuit-ID", 1);
	items.set("Bandwidth", 3);
	items.set("Service", 6);

	const rowNumberOfFields = 8; // number of dataCell fields per row
	var firstRow1stElement = Boolean(true);
	for (var row = 0; row < list.length/rowNumberOfFields; row++) {
		for (key of items.keys()) {
			testValue = list[items.get(key)+row*rowNumberOfFields].innerText;
			if ( testValue == null )  continue;
			if ( testValue.trim() == "" )  continue;
			testValue = testValue.trim();
			body += "<tr><td class=\"fieldName\"";
			if ( firstRow1stElement ) { // add the 'padding-top' at the style
				body += " style=\"padding-top: 7px;\">"+key+":</td>"+
"<td class=\"fieldValue\" style=\"padding-top: 7px;\" onclick=\"copyText('"+testValue+"');\">"+testValue;
				firstRow1stElement = Boolean(false);
			} else
				body += ">"+key+":</td><td class=\"fieldValue\" onclick=\"copyText('"+testValue+"');\">"+testValue;
			body += "</td></tr>\n";
	  } // end of row
		if ( row+1 < list.length/rowNumberOfFields )
			buildBodyTableLineSeparator(); // --- Insert line separator ---
		// firstRow1stElement = Boolean(true);
	}
/*
	// for ( const [key, value] of items.entries() ) { console.log( `${key} = ${value}` ) };
	items.forEach( (value, key) => { // console.log( `${key} = ${value}` ) } );
		testValue = list[value].innerText;
		// [...]
		} );
	}
*/
}


function buildTableFor_ServiceRequestsPage() {
	// to-do ... ? Not essential at the moment.
}


//** Notes: */
/**
 * // to cycle through all the elements with an ID starting with a specific prefix like "CF00N":
	var testValue = "";
	for ( var el = 0; el < document.querySelectorAll("[id^='CF00N']").length ; el++ ) {
		testValue = document.querySelectorAll('[id^="CF00N"]')[el];
		if ( testValue.innerHTML.includes("Daniel") ) {		// manually find a specific name
			console.log("Found! Item #: " + el);
			console.log(testValue);
		}
	}
 */

/** Function declarations: --- END --- ***/


/** Body definition and built --- START --- ***/
// HTML <html>:
body += "<html>\n\t<head>\n";
body += "\t\t<meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\" \>\n";
body += "\t\t<meta name=\"description\" content=\"SalesForce Extractor for Enterprise Spectrum Technicians (Cut-Sheet data builder helper).\" \>\n";
body += "\t\t<meta name=\"keywords\" content=\"SalesForce, FTVI, Enterprise, Charter/Spectrum Technicians, Data Extractor, Cut-Sheet builder helper.\" \>\n";
body += "\t\t<meta name=\"author\" content=\"Stefano Fiori\" \>\n";
body += "\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" \>\n";
body += "\t\t<title>SalesForce Extractor for Enterprise Spectrum Technicians ("+version+" - Stefano Fiori)</title>\n";
body += "\t\t<link rel=\"icon\" type=\"image/x-icon\" href=\"/images/icons/icon_multi-pickup-colors-64.ico\" \>\n";

// CSS and <style>:
body += "\t\t<style>\n";
body += "\t\t\tbody { background-color: "+bgcolor+"; color: "+color+"; "+font+"; margin: auto; padding: auto; } \n";
body += "\t\t\ttable { vertical-align: center; border-color: orange; border: 2px solid DarkOrange; border-radius: 12px; padding: 2px; margin: 2px; width: 100%; margin: auto; padding: auto; } \n";
body += "\t\t\ttr { text-align: center; } \n";
body += "\t\t\ttr.tableRowLineSeparator { background-color: DarkSlateGray; height: 1px; padding-top: 5px; padding-bottom: 5px; } \n";
body += "\t\t\tth { background-color: DarkSlateGray; color: Gold; border-color: Orange; border: 1px solid Orange; border-radius: 12px; height: 2.7rem; font-family: Georgia; font-style: italic; font-size: 1.75rem; } \n";
body += "\t\t\ttd { ; } \n";
body += "\t\t\ttd.fieldName  { width: 30%; text-align: right;   padding-right: 20px; } \n";
body += "\t\t\ttd.fieldValue { width: 70%; text-align: justify; padding-left:  12px; } \n";
body += "\t\t\ttd.notFound { color: BlueViolet; } \n";
body += "\t\t\t.emojies { font-family: Segoe UI Emoji; font-size: 1.5rem; font-style: normal; } \n";
body += "\t\t\t.copyrights { text-align: center; color: ForestGreen; margin-bottom: 1.2rem; margin-top: 0.75rem; font-family: Magneto; font-style: italic; font-size: 2.5rem; font-weight: bold; } \n";
body += "\t\t\t#copyrights { text-align: right; margin-right: 12px; margin-top: 7px; color: ForestGreen; font-family: Consolas; font-style: italic; font-size: 1.12rem; font-weight: bold; } \n";
body += "\t\t\t#popup_note { text-align: justify; color: Grey; font-family: Baskerville Old Face; font-style: normal; font-size: 1.2rem; margin-left: 12%; margin-right: 12%; } \n";
body += "\t\t\t#popup_note a { Color: #AB3763; font-size: 1rem; font-style: italic; } \n";
body += "\t\t\t#disclaimer { text-align: justify; color: Grey; font-family: Baskerville Old Face; font-style: normal; font-size: 1.2rem; margin-left: 12%; margin-right: 12%; } \n";
body += "\t\t\t.reportings { text-align: center; color: DarkGrey; font-family: Baskerville Old Face; font-style: italic; font-size: 1.25rem; margin: 12px; } \n";
body += "\t\t\t.reportings a { color: #AB3763; } \n";
body += "\t\t\ta:hover { background-color: navy; font-weight: 408; text-decoration: underline #AB3763; } \n";
body += "\t\t\ta { text-decoration: none; } \n";
body += "\t\t</style>\n";

// JavaScript <script>:  embedded function "copyText"
body += "\t\t<script>\n";
body += "\t\t\tasync function copyText( text_to_copy ) {\n\
    \t\t\t\ttry {\n\
      \t\t\t\t\t/** copy(text_to_copy);    // doesn't always work. */\n\
	  \t\t\t\t\ttext_to_copy = text_to_copy.replace(/\\\<br \\/\\\>/gi, function (s) { return \"\\n\"; } );\
	  \t\t\t\t\tnavigator.clipboard.writeText(text_to_copy);    /** // this may raise an exception in case the browser user profile don't grant permission... */\n\
	  \t\t\t\t\tconsole.log(\"Field value text succesfully copied.\");\
	  \t\t\t\t\t/** console.log(\"Text \\\"\"+text_to_copy+\"\\\" copied to clipboard.\"); // with big text can be confusing and create problems*/\n\
    \t\t\t\t} catch (err) {\n\
      \t\t\t\t\tconsole.log(\"Failed to copy \\\"\"+text_to_copy+\"\\\" to clipboard.\", err);\n\
    \t\t\t\t}\n\
\t\t\t}\n";
body += "\t\tfunction sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }\n";
body += "\t\t</script>\n";
body += "\t</head>\n";

// Body <body>:
body += "<body>\n";
body += "\t<div style=\"margin: auto;\">\n";

// Icons & buttons:
body += "\t\t<div style=\"display: inline-block; position: absolute; margin-left: 90%;\">\n";
body += "\t\t\t<div style=\"display: inline-block; height: 32px; width: 25px; overflow: hidden;\" onclick=\"JavaScript: if (document.getElementsByTagName('tbody')[0].style.fontWeight == 'bold') document.getElementsByTagName('tbody')[0].style.fontWeight = 'normal';  else document.getElementsByTagName('tbody')[0].style.fontWeight = 'bold';\">\n";
// body += "\t\t\t\t<img style=\"background-color: grey; height: 52px; margin: -8px 0px 0px -14px;\" src=\"https://www.iconfinder.com/icons/352381/download/ico/4096\"> \n\t\t\t</div>\n";
body += "\t\t\t\t<img style=\"background-color: grey; height: 52px; margin: -8px 0px 0px -14px;\" src=\""+browser.runtime.getURL('/')+"images/icons/352381_bold_format_icon.ico\"> \n\t\t\t</div>\n";
   // 2nd Icon for Copy function
body += "\t\t\t<div style=\"display: inline-block; height: 32px; width: 30px; overflow: hidden;\" onclick=\"JavaScript: formattedCopy = !formattedCopy; formattedCopy ? alert('Unified Copy Format Dectivated!') : alert('Unified Copy Format Activated!'); changeCopyFormat(document.getElementById('userDelimitator').value);\"> \n";
// body += "\t\t\t\t<img style=\"background-color: grey; height: 38px; width: 40px; margin: -3px 0px 0px -5px;\" src=\"https://www.iconfinder.com/icons/7787508/download/ico/4096\"> \n\t\t\t</div>";
body += "\t\t\t\t<img style=\"background-color: grey; height: 38px; width: 40px; margin: -3px 0px 0px -5px;\" src=\""+browser.runtime.getURL('/')+"images/icons/7787508_duplicate_copy_documents_folder_file_icon.ico\"> \n\t\t\t</div>";
body += "\n\t\t\t<textarea style=\"display: inline-block; background-color: #E0E0E0; margin-bottom: 11px; resize: none; text-align: center; vertical-align: center; height: 12px; width: 12px\" id=\"userDelimitator\" name=\"userDelimitator\" rows=\"1\" cols=\"1\" minlength=\"1\" maxlength=\"1\" autofocus required placeholder=\",\">,</textarea>\n";
body += "\n\t\t</div> \n";


// Title and credits:
body += "\t\t<p class=\"copyrights\"> ~ SalesForce Extractor ~ </p>\n";
body += "\t\t\t<!-- <p class=\"copyrights\">("+version+" - Stefano Fiori)</p> -->\n";

// Start and headers of the content Table:
body += "\t\t<table><tbody>\n";
body += "\t\t\t\t<tr>\n";
body += "\t\t\t\t\t<th class=\"fieldName\">Field Name:</th>\n";
body += "\t\t\t\t\t<th class=\"fieldValue\">Field Value:</th>\n";
body += "\t\t\t\t</tr>\n";


// MAIN --- Building the main Table:
if ( window.location.toString().includes("nooverride=1") ) {
	console.log("Start building the 'Main ENG page'...");
	buildTableFor_MainENGPage();
	console.log("...Building finished.");
}
else if ( window.location.toString().includes("UnifiedSearchResults") ) {
	console.log("Start building the 'Search Results page'...");
	buildTableFor_SearchResultsPage();
	console.log("...Building finished.");
}
else if ( window.location.toString().slice(8,-16) == "spectrum-enterprise.my.salesforce.com" ) {
	console.log("Start building the 'Service Requests page'...");
	buildTableFor_ServiceRequestsPage();
	console.log("...Building finished.");
}


// TABLE END
body += "\t\t\t</tbody></table>\n\t</div>\n";

// Copyrights
body += "\t<div><div id=\"copyrights\">-~= SaleForce Extractor =~- &nbsp; ("+version+" - Stefano Fiori)</div>\n";

// Footer notes and disclaimer:
body += "\t\t<p id=\"popup_note\"><br/ ><span class=\"emojies\">⚠</span><strong><i>Warning</i></strong>: &nbsp; modern browsers like Firefox/Chrome/Opera/Chromium have built-in PopUp blockers that prevent the opening of new windows/popups. Please make sure your browser settings are set to allow this feature specifically for the current site.<br />A quick official guide on how to achieve this configuration for Firefox can be read here:<br /><a href=\"https://support.mozilla.org/en-US/kb/pop-blocker-settings-exceptions-troubleshooting\">https://support.mozilla.org/en-US/kb/pop-blocker-settings-exceptions-troubleshooting</a></p>\n";
body += "\t\t<p id=\"disclaimer\"><span class=\"emojies\">🧾</span><strong><i><u>Disclaimer</u></i>:</strong> &nbsp; Please use this tool as a \"best-effort\", do not entirely trust it, but use it at your own discretion as a generic automated data extractor helper... double check important things manually!</p>\n";
body += "\t\t<p class=\"reportings\"><br /><span class=\"emojies\">🙄</span> &nbsp; Please report any issue/problem or suggestion for improvement to <a href=\"mailto:Stefano.Fiori@charter.com?subject=Report for SalesForce Extractor ("+version+")&amp;body=(Please explain here in detail... Thank you for your reporting!)\">Stefano.Fiori@charter.com</a> &nbsp; <span class=\"emojies\">📧</span></p>\n"
body += "\t\t<p class=\"reportings\"><span class=\"emojies\">🙃</span> &nbsp; * If you like this project, consider to say <a href=\"mailto:Stefano.Fiori@charter.com?subject=Thank you for SalesForce Extractor ("+version+")&amp;body=Hello Stefano, thank you for this project!\" target=\"_blank\">Thank You!</a> ^_^ * &nbsp; <span class=\"emojies\">🤗</span> </p>\n";


body += "\t\t<p> <br /> </p>\n";
body += "\t</div>\n";

// Scripts (onLoad / defer)
// Script to color the table rows and to set a 10 minutes timer to close the popup window.
body += "<script defer>\n";
body += "var formattedCopy = false;\n";
body += "var list = document.querySelectorAll(\"[class^='field']\");\n";
body += "var listArray = [...list];	// converts the NodeList into an Array one.\n";
body += "for (var i = 1; i <= 4; i++) { listArray.shift(); }	// skip the table headers <th> and the 1st row...\n";
body += "for (var el = 0; el < listArray.length; el++) {\n";
body += "\tif ( el % 4 == 0) {\n";
body += "\t\tlistArray[el].style.backgroundColor   = \"#000062\";\n";
body += "\t\tlistArray[el+1].style.backgroundColor = \"#000062\";\n";
body += "\t}" + "}\n\n";
body += "sleep(620000).then(() => { close(); });\n";   // sleep for +10 minutes then close the popup window.

body += "const delimitator = \", \";\n";
body += "var formattedCopy = true;\n";
body += "if (!fieldValuesMap)  var fieldValuesMap = new Map();\n";
body += "function changeCopyFormat(userDelimitator) {\n";
body += "\tif ( userDelimitator == \"\" || userDelimitator == \",\" )  userDelimitator = delimitator;\n";
body += "\telse userDelimitator = \" \" + userDelimitator + \" \";\n";
body += "\t\ttry {\n";
body += "\tif ( !formattedCopy ) {\n";
body += "\t\t// temporary variables for the field values to modify:\n";
body += "\t\tvar _temp_POC_Name  = document.getElementById(\"POC_Name\").innerText;\n";
body += "\t\tvar _temp_POC_Tel   = document.getElementById(\"POC_Tel\").innerText;\n";
body += "\t\tvar _temp_POC_eMail = document.getElementById(\"POC_eMail\").innerText;\n\n";
body += "\t\t// save all current/original values of the fields attribute \"onClick\" into a Map list:\n";
body += "\t\t// (the \"onClick\" tag attributes are the only ones that will change ~as a behaviour on the \"onClick\" event~, the HTML field values will always be the same...)\n";
body += "\t\tfieldValuesMap.set(\"POC_Name\",  document.getElementById(\"POC_Name\").getAttribute(\"onClick\"));\n";
body += "\t\tfieldValuesMap.set(\"POC_Tel\",   document.getElementById(\"POC_Tel\").getAttribute(\"onClick\"));\n";
body += "\t\tfieldValuesMap.set(\"POC_eMail\", document.getElementById(\"POC_eMail\").getAttribute(\"onClick\"));\n\n";
body += "\t\t// prepare the new values:\n";
body += "\t\t_temp_POC_Name = _temp_POC_Name;\n";
body += "\t\t_temp_POC_Tel = _temp_POC_Tel.replace(/(\(|\))/gm, \"\");\n";
body += "\t\t_temp_POC_Tel = _temp_POC_Tel.replace(/ /gm, \"-\");\n";
body += "\t\t_temp_POC_eMail = _temp_POC_eMail;\n\n";
body += "\t\t// write new values for \"formatted copy\":\n";
body += "\t\tfor ( key of fieldValuesMap.keys() )\n";
body += "\t\t\tdocument.getElementById(key).setAttribute(\"onClick\", \"copyText('\"+_temp_POC_Name+userDelimitator+_temp_POC_Tel+userDelimitator+_temp_POC_eMail+\"')\");\n";
body += "\t} else {\n";
body += "\t\t// restore all defaults values of the field attributes:\n";
body += "\t\tfor ( [key, value] of fieldValuesMap.entries() )\n";
body += "\t\t\tdocument.getElementById(key).setAttribute(\"onClick\", value);\n";
body += "\t}\n";
body += "\t/**\n\t// for checking Map values and keys:\n\t\t for ( [key, value] of fieldValuesMap.entries() ) { console.log(\"key=\" + key + \" =>  value=\" + v); }\n\t */\n";
body += "\t\t} catch (err) { alert(\"Unfortunately this feature is designed only for a single ENG# page. Open a single ENG# page and try again.\"); console.log(\"Tried to access the Copy Format Functionality not in a ENG# page.\"); }\n";
body += "}\n";

body += "</script>\n";

// Body & HTML closing tags
body += "</body></html>\n";
/** Body definition and built --- END --- ***/

var newWin;
newWin = window.wrappedJSObject.open('','extractor_popup','width=1024,height=750,resizable=yes,scrollbars=yes');
newWin.document.write(body);
newWin.focus();
XPCNativeWrapper(newWin);
