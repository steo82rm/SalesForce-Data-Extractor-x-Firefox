SalesForce Data Extractor (for Firefox):
===

### # What is this?:
It is a Firefox Add-On/Extension.<br />
It has been designed with in mind any _Enterprise Spectrum Technician (6th level)_; it provides an easy tool (script) that *aim to help* to quickly collect the most useful information in order to build the _Cut-Sheet_ document needed for the job.

### # Why it is useful:
It is useful because it can quickly help to extracts the most essential data from a __Salesforce ENG# page__ and then it will present these information into a popup window as a temporary webpage _(that will automatically close after about 10 minutes)_.

### # How it works:
It is mainly a script in JavaScript language that retrives/extracts specific fields from a __Salesforce ENG# webpage__ and will format these information in a new popup webpage created ad-hoc for this specific needs.<br />
The script is launched in background as the user will click on the extension/add-on icon.<br />
The script will **automatically collect/extract** specific **information** from the opened ENG# page and will **organize them in a more clean and concise way** for the end-user, **creating a new webpage as a popup window**.<br /><br />
This popup page will contain some easy useful additional JavaScript that can help the user to interact with it...<br />
_Example: one-click on a field-value will copy its textual content to the user-clipboard, so to make it easier to copy specific information elsewhere as needed._

### # Get-Started:
The best feasible way to integrate this feature into Mozilla Firefox browser is to... ~~visit the add-ons pages and **add**(/install) it directly from there:<br />
[https://addons.mozilla.org/en-US/firefox/addon/salesforce-data-extractor/](https://addons.mozilla.org/en-US/firefox/addon/salesforce-data-extractor/)~~<br />
<sub>🚩 Despite it was originally published for a while, and despite there are some similar projects online (on the public Mozilla Add-Ons repositories), the Mozilla Reviewer Team decided that this project should be private because not fully reachable by the public; hence the only way to retrive and install this add-on feature, at the moment, is from this current github page of mine. 🚩</sub><br />
<br />
... follow this link (with the Mozilla Firefox browser) to install the add-on:<br />
_[Install SalesForce Data Extractor Firefox add-on/extension](https://raw.githubusercontent.com/steo82rm/SalesForce-Data-Extractor-x-Firefox/main/builds/SalesForce_DataExtractor_xFirefox_2023-01-21_21-29-19.xpi)_<br />
<br />
Otherwise, you can _clone this project_ and _build it locally_ so you can install it yourself on your browser following the suggested manual installation instructions [here below](https://github.com/steo82rm/SalesForce-Data-Extractor-x-Firefox#-manual-installation).<br />

### # Manual installation:
Please, before to proceed, consider the following:
- keep this package version and it is a local installation;
- most probably there will be no auto-update feature;
- the following information provided are valid and good ***ONLY for any LINUX OS*** ...
- the script _make_ can be used to facilitate the build of the package.

To proceed with a manual installation follow these instructions and run the following commands:<br />
`mkdir SalesForce_DataExtractor_xFirefox_add-on`<br />
`cd SalesForce_DataExtractor_xFirefox_add-on`<br />
`git clone https://github.com/steo82rm/SalesForce-Data-Extractor-x-Firefox`<br />
`cd SalesForce-Data-Extractor-x-Firefox`<br />
`chmod 754 ./make`<br />
`./make`<br />

- inside the folder `./builds` there will be the so built extension named: _`SalesForce_DataExtractor_xFirefox_YYYY-MM-DD_hh-mm-ss`_
- to install it: double click-it  ( or copy it into the Firefox profile directory: _`/home/<username>/.mozilla/firefox/<userprofile>/extensions/`_ )


### # Mantainer and getting help:
I am the only mantainer of this simple project at the moment... and this is a work-in-progress still, but while adding a few easy functionality: the goal, the scope, and the main flow of this Add-On/script will remain exactly the same and pretty much unchanged.<br />
If any help is needed or for any question please contact me here on github.

<br />

---
### ⚠ Important notes: ⚠
1. In order to allow this extension/script to efficiently run, the user will _need to allow popups windows from the domain: "**[salesforce.com](https://salesforce.com)**"_
    - _a quick official guide on how to achieve this configuration for the Mozilla Firefox browser can be reached here:_<br />
      _[https://support.mozilla.org/en-US/kb/pop-blocker-settings-exceptions-troubleshooting](https://support.mozilla.org/en-US/kb/pop-blocker-settings-exceptions-troubleshooting)_
2. The script is designed to be effective and to run _only on the domain: "**[salesforce.com](https://salesforce.com)**"_
---
### # Preview: Screenshots of the Firefox Extension/Add-On:

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/steo82rm/SalesForce-Data-Extractor-x-Firefox/blob/main/tutorial/Pic_01_ExtensionIcon.png">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/steo82rm/SalesForce-Data-Extractor-x-Firefox/blob/main/tutorial/Pic_01_ExtensionIcon.png">
  <img alt="Shows a screenshot of the extension icon on the browser Firefox with some description." src="https://github.com/steo82rm/SalesForce-Data-Extractor-x-Firefox/blob/main/tutorial/Pic_01_ExtensionIcon.png">
</picture><br />
Once installed a small icon will be (should be, based on your settings) visible on the top-right corner of the browser.<br />
Once the desired ENG# page is loaded and visible, just click the extension icon one time to launch the script and extract the information.<br />
<br />

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/steo82rm/SalesForce-Data-Extractor-x-Firefox/blob/main/tutorial/Pic_02_PopupWindow.png">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/steo82rm/SalesForce-Data-Extractor-x-Firefox/blob/main/tutorial/Pic_02_PopupWindow.png">
  <img alt="Shows a screenshot of the extension popup window with some description." src="https://github.com/steo82rm/SalesForce-Data-Extractor-x-Firefox/blob/main/tutorial/Pic_02_PopupWindow.png" width="75%">
</picture><br />
This is an example of the information extracted and how will be presented to the user.<br />
<br />

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/steo82rm/SalesForce-Data-Extractor-x-Firefox/blob/main/tutorial/Pic_03_PopupWindow_Features1.png">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/steo82rm/SalesForce-Data-Extractor-x-Firefox/blob/main/tutorial/Pic_03_PopupWindow_Features1.png">
  <img alt="Shows a screenshot of the embedded features of the extension popup window on the browser Firefox with some description." src="https://github.com/steo82rm/SalesForce-Data-Extractor-x-Firefox/blob/main/tutorial/Pic_03_PopupWindow_Features1.png" width="77%">
</picture><br />
Description of some features available inside the popup webpage.<br />
<br />

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/steo82rm/SalesForce-Data-Extractor-x-Firefox-/blob/main/tutorial/Pic_04_PopupWindow_Features2.png">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/steo82rm/SalesForce-Data-Extractor-x-Firefox-/blob/main/tutorial/Pic_04_PopupWindow_Features2.png">
  <img alt="Shows a screenshot of the embedded features of the extension popup window on the browser Firefox with some description." src="https://github.com/steo82rm/SalesForce-Data-Extractor-x-Firefox-/blob/main/tutorial/Pic_04_PopupWindow_Features2.png" width="50%">
</picture><br />
Description of some other features available.<br />
(this one is still under development...)<br />
<br />
<br />

<br />

---
### About Me:
<picture>
 <source media="(prefers-color-scheme: dark)" srcset="https://avatars.githubusercontent.com/u/114833388?s=400&u=ae7813769b528e419e049624801e7eb8017ba7a8&v=4">
 <source media="(prefers-color-scheme: light)" srcset="https://avatars.githubusercontent.com/u/114833388?s=400&u=ae7813769b528e419e049624801e7eb8017ba7a8&v=4">
 <img alt="My Avatar" src="https://avatars.githubusercontent.com/u/114833388?s=400&u=ae7813769b528e419e049624801e7eb8017ba7a8&v=4" width="12%">
</picture>

> [DOH!](https://github.com/steo82rm/SalesForce-Data-Extractor-x-Firefox#salesforce-data-extractor-for-firefox)

— Homer J. Simpson

<sub>
I am an enthusiast amatorial programmer with, at the moment, little time for it.<br />
I hope to share some of my knowledge to this community and to provide useful contributions, nevertheless to learn new things.<br />
<!-- TO DO: add more details about me later -->
Thank you for using and contributing to this little project of mine; any contribution may be precious and sincerely welcome!
</sub>
