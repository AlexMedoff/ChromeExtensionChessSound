///**** I'm sure there is a more efficient way to import all of the audio samples, but it was few enough sounds that I just did it by hand *****//
//***** This file just creates those Audio objects and sets their source to an actual audio file I recorded. *****///

var c7 = new Audio();
c7.src = chrome.extension.getURL("/sounds/7Chords/C7.mp3");
var ab7 = new Audio();
ab7.src = chrome.extension.getURL("/sounds/7Chords/Ab7.mp3");
var d7 = new Audio();
d7.src = chrome.extension.getURL("/sounds/7Chords/D7.mp3");
var f7 = new Audio();
f7.src = chrome.extension.getURL("/sounds/7Chords/F7.mp3");
var g7 = new Audio();
g7.src = chrome.extension.getURL("/sounds/7Chords/G7.mp3");

var baug = new Audio();
baug.src = chrome.extension.getURL("/sounds/AugmentedChords/BAug.mp3");
var caug = new Audio();
caug.src = chrome.extension.getURL("/sounds/AugmentedChords/CAug.mp3");
var daug = new Audio();
daug.src = chrome.extension.getURL("/sounds/AugmentedChords/DAug.mp3");
var ebaug = new Audio();
ebaug.src = chrome.extension.getURL("/sounds/AugmentedChords/EbAug.mp3");
var fsaug = new Audio();
fsaug.src = chrome.extension.getURL("/sounds/AugmentedChords/FsAug.mp3");

var abdim = new Audio();
abdim.src = chrome.extension.getURL("/sounds/DiminishedChords/AbDim.mp3");
var bbdim = new Audio();
bbdim.src = chrome.extension.getURL("/sounds/DiminishedChords/BbDim.mp3");
var cdim = new Audio();
cdim.src = chrome.extension.getURL("/sounds/DiminishedChords/CDim.mp3");
var ddim = new Audio();
ddim.src = chrome.extension.getURL("/sounds/DiminishedChords/DDim.mp3");
var ebdim = new Audio();
ebdim.src = chrome.extension.getURL("/sounds/DiminishedChords/EbDim.mp3");

var amaj = new Audio();
amaj.src = chrome.extension.getURL("/sounds/MajorChords/AMajor.mp3");
var bmaj = new Audio();
bmaj.src = chrome.extension.getURL("/sounds/MajorChords/BMajor.mp3");
var cmaj = new Audio();
cmaj.src = chrome.extension.getURL("/sounds/MajorChords/CMajor.mp3");
var dmaj = new Audio();
dmaj.src = chrome.extension.getURL("/sounds/MajorChords/DMajor.mp3");
var emaj = new Audio();
emaj.src = chrome.extension.getURL("/sounds/MajorChords/EMajor.mp3");
var fmaj = new Audio();
fmaj.src = chrome.extension.getURL("/sounds/MajorChords/FMajor.mp3");
var gmaj = new Audio();
gmaj.src = chrome.extension.getURL("/sounds/MajorChords/GMajor.mp3");

var bbmin = new Audio();
bbmin.src = chrome.extension.getURL("/sounds/MinorChords/BbMinor.mp3");
var csmin = new Audio();
csmin.src = chrome.extension.getURL("/sounds/MinorChords/CsMinor.mp3");
var bmin = new Audio();
bmin.src = chrome.extension.getURL("/sounds/MinorChords/BMinor.mp3");
var cmin = new Audio();
cmin.src = chrome.extension.getURL("/sounds/MinorChords/CMinor.mp3");
var emin = new Audio();
emin.src = chrome.extension.getURL("/sounds/MinorChords/EMinor.mp3");
var gmin = new Audio();
gmin.src = chrome.extension.getURL("/sounds/MinorChords/GMinor.mp3");

var anote = new Audio();
anote.src = chrome.extension.getURL("/sounds/SingleNotes/A.mp3");
var asnote = new Audio();
asnote.src = chrome.extension.getURL("/sounds/SingleNotes/As.mp3");
var bnote = new Audio();
bnote.src = chrome.extension.getURL("/sounds/SingleNotes/B.mp3");
var cnote = new Audio();
cnote.src = chrome.extension.getURL("/sounds/SingleNotes/C.mp3");
var csnote = new Audio();
csnote.src = chrome.extension.getURL("/sounds/SingleNotes/Cs.mp3");
var dnote = new Audio();
dnote.src = chrome.extension.getURL("/sounds/SingleNotes/D.mp3");
var dsnote = new Audio();
dsnote.src = chrome.extension.getURL("/sounds/SingleNotes/Ds.mp3");
var enote = new Audio();
enote.src = chrome.extension.getURL("/sounds/SingleNotes/E.mp3");
var fnote = new Audio();
fnote.src = chrome.extension.getURL("/sounds/SingleNotes/F.mp3");
var fsnote = new Audio();
fsnote.src = chrome.extension.getURL("/sounds/SingleNotes/Fs.mp3");
var gnote = new Audio();
gnote.src = chrome.extension.getURL("/sounds/SingleNotes/G.mp3");
var gsnote = new Audio();
gsnote.src = chrome.extension.getURL("/sounds/SingleNotes/Gs.mp3");