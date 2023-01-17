/* What to do while and at the end of the execution of the extension script: */
function onExecuted(result) {
	console.log("The Script has been executed without errors!");
}

/* What to do in case of error during the execution of the extension script: */
function onError(error) {
	console.log("Some errors occurred running the extension Script... Here below the details:\n   " + error);
}


function execute() {   // can be defined as 'async'
	// this need to be implemented better:
	const permissionsToRequest = {
		permissions: ["activeTab", "clipboardWrite"]	// "webRequest", "scripting", "activeTab", "tabs", "clipboardWrite"
	}
	// const response = await browser.permissions.request(permissionsToRequest);		// used with 'async' function
	const response = browser.permissions.request(permissionsToRequest);					// used without 'async' function
	console.log("Permissions to request are the followings:\n   ", permissionsToRequest);
	
	// console.log("Running browser extension:\n   " + browser.extension.getURL(""));   // deprecated by Mozilla
	console.log("Browser extension URL is:\n   "  + window.location.href);
	
	const executing = browser.tabs.executeScript({
		file: "/scripts/SalesForce_DataExtractor_JavaScriptPageGenerator.js"
	});
	
	executing.then(onExecuted, onError);
}


/* Define the main behavior once the extension button is clicked (and launch the extension script): */
browser.browserAction.onClicked.addListener((clicked) => {   // can be: async (clicked) => {
	console.log("Extension button click intercepted: launching extension script...");
	execute();
	console.log("...Script execution completed!");
});

/* Define the keyboard shortcut to launch the extension script: */
browser.commands.onCommand.addListener((keyboard_shortcut) => {   // can be: async (clicked) => {
	if (keyboard_shortcut === "run-data-extractor-script") {
		console.log("Keyboard shortcut intercepted (feature called: '" + keyboard_shortcut + "'): launching script...");
		execute();
		console.log("...Script execution completed!");
	}
});
