#!/bin/bash

## Initialization/Declaration of local global variable for the current script:
		## \e[	-> start color scheme
		## \033	-> is equal to \e
		## x;y	-> color pair to use:
		## x-Code:	Description:
		#	0		Reset/Normal
		#	1		Bold text
		#	2		Faint text
		#	3		Italics
		#	4		Underlined text
		## \e[m	-> stop the color scheme
		## Color:	Foregrd#: 	Backgrd#:
		# Black			30			 40
		# Red			31			 41
		# Green			32			 42
		# Yellow		33			 43
		# Blue			34			 44
		# Magenta		35			 45
		# Cyan			36			 46
		# Light Gray	37			 47
		# Gray			90			100
		# Light Red		91			101
		# Light Green	92			102
		# Light Yellow	93			103
		# Light Blue	94			104
		# Light Magenta	95			105
		# Light Cyan	96			106
		# White			97			107

   RED='\033[31m'	# start RED   Color
  BLUE='\033[34m'   # start BLUE  Color
 GREEN='\033[32m'   # start GREEN Color
  CYAN='\033[96m'   # start CYAN  Color
  LYEL='\033[93m'   # start Light YELLOW Color
 LGRAY='\033[37m'   # start Light GRAY   Color
LGREEN='\033[92'    # start Light GREEN  Color
    NC='\033[0m'    # NO Color anymore
     B='\033[1m'    # start BOLD
    Bs='\033[21m'   # stop  BOLD
     U='\033[4m'    # start UNDERLINE
    Us='\033[24m'   # stop  UNDERLINE

_filename="SalesForce_DataExtractor_xFirefox.zip"
_fileNameOnly="${_filename%%.*}"
_filenameExt="${_filename##*.}"
_buildDate=$(date +"%Y-%m-%d_%H-%M-%S")
_FN="${_fileNameOnly}_${_buildDate}.${_filenameExt}"
_buildDir="./builds"
_userChoice=""

_selfName="${0##*/}"
_selfPath="${0}"
## End local global variables initialization/declaration.


## Beginning of the script:
echo -e "${CYAN} # Checking project status:${NC}${LGRAY}"

read -p " - Remove previous versions and builds? [y,n]: " _userChoice
# if [ "$_userChoice" == "" ] ; then { _userChoice="y"; } ; fi		# avoid because dangerous, maybe unwanted!
# Convert the user input to lower case:
_userChoice=${_userChoice,,}
# if user input is equal to 'y': clean-up and package
# if user input is equal to 'n': just package a new version
# ... otherwise exit with code 0:
if [ "$_userChoice" != "y" -a "$_userChoice" != "n" ] ;  then { echo -e "${NC}"; exit 0; } ; fi
if [ "$_userChoice" == "y" ]
then {
	echo -e "${NC}${GREEN}";
	if [ -d "$_buildDir" ] ; then { rm -vr "$_buildDir"; } ; fi
		if [ $? != 0 ] ; then { echo -e " ${NC}${RED}# Error during project clean-up of the build folder! Exiting...${NC}"; exit 1; } ; fi
	if ls ./*.zip 1> /dev/null 2>&1 ; then { rm -v *.zip; } ; fi
		if [ $? != 0 ] ; then { echo -e " ${NC}${RED}# Error during project clean-up of the zip files in the project path! Exiting...${NC}"; exit 1; } ; fi
	echo -e " ${NC}${CYAN}# Project clean-up completed.${NC}";
} fi

echo -e " ${CYAN}# Creating new package extension version:${NC}${GREEN}"
	zip -rv -FS ./"${_FN}" ./* --exclude make \*.git\* \*.zip \*.xpi \*builds\* \*git\* \*website\* \*tutorial\*
	if [ $? != 0 ] ; then { echo -e " ${NC}${RED}# Error during the project packaging process (zip)! Exiting...${NC}"; exit 1; } ; fi
echo -e " ${NC}${CYAN}--- Done.${NC}"
echo -e " ${CYAN}# Moving built to '${_buildDir}' ${NC}${GREEN}"
	if [ ! -d "$_buildDir" ] ; then { mkdir "$_buildDir"; } ; fi
	mv -v "./${_FN}" "$_buildDir"
	if [ $? != 0 ] ; then { echo -e " ${NC}${RED}# Error while moving the project zip-package to the build folder! Exiting...${NC}"; exit 1; } ; fi
echo -e " ${NC}${CYAN}--- Done.${NC}"
echo -e " ${CYAN}# Package extension conversion:${NC}${GREEN}"
	cp -v "$_buildDir/${_FN}" "$_buildDir/${_FN%%.*}.xpi"
	if [ $? != 0 ]
	then {
		echo -e " ${NC}${RED}# Error while converting the project zip-package to Firefox Add-On dated extension! Exiting...${NC}";
		exit 1;
	} else {
		echo -e " ${CYAN}# Calculating and generating SHA256 hash for the new package extension:${NC}${GREEN}"
		_hash=$(echo -e "sha256:$(sha256sum ${_buildDir}/${_FN%%.*}.xpi)"  | cut -d" " -f1)
		echo -e "   '${_buildDir}/${_FN%%.*}.xpi' ${CYAN}SHA256 hash is:${NC}\n   '${_hash}'"
		echo $_hash>"${_buildDir}/${_FN%%.*}.xpi.hash.SHA256"
		unset _hash
	} fi
echo -e " ${NC}${CYAN}--- Done.${NC}"

echo -e " ${CYAN}# Completed!\n"
echo -e " The new package extention version has been created into: '${_buildDir}'] as shown below:${NC}${GREEN}"
	ls -hal --group-directories-first $_buildDir
echo -e " ${NC}${CYAN}--- Build process completed.${NC}\n"



# Script clean-up:
unset RED
unset BLUE
unset GREEN
unset CYAN
unset LYEL
unset LGRAY
unset LGREEN
unset NC
unset B
unset Bs
unset U
unset Us
unset _filename
unset _fileNameOnly
unset _filenameExt
unset _userChoice
unset _buildDir
unset _buildDate
unset _FN
unset _selfName
unset _selfPath

## END.
