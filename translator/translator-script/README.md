# Simple DeepL API Integration
 An integration of the DeepL API that translates a given text from one language(default:English) to another language and outputs the translation.
# Requirements
 - A working internet connection to send and receive text from DeepL API.
 - Up-to-date browser (e.g. Google Chrome Version 91, Mozilla Firefox 90, Apple Safari 14)
# Installation
As this is a simple implementation done in HTML and CSS for the visual interface, and JavaScript for the algorithm that use the API behind the translation, there is not installation required. 
# How to Use
In order to use the website to translate text, it is given as three files: 
 - index.html (the main page)
 - style.css (the visual interface design)
 - API-DeepL.js (the translation API)

These files have to be placed in the same folder, and to run it, the index.html page has to be opened in one of the aforementioned browsers, everything else is automatically done by the browser.

After the website is opened, the user must enter the source text they want translated, and choose what language to translate to, after which all is left is pressing the Translate button.
# Tests
### 1st Test:

**Input Text**: 

Hello, world!

**Output Text**: 

Hej, verden!

**Expected Text**: 

Hej, verden!

**Observation**: A simple translation without any formatting, in this case the website was able to translate correctly while keeping the formatting.

**Image**: ![Simple Translation 1](https://github.com/EdwardBalaj/Simple-DeepL-API-Integration/blob/main/Tests/simpletranslation1.PNG?raw=true)

### 2nd Test:

**Input Text**: 

Hello, 

world!

**Output Text**: 

Hej, 

verden!

**Expected Text**: 

Hej, 

verden!

**Observation**: A simple translation with newline element, in this case the website was able to translate correctly while keeping the formatting.

**Image**: ![Simple Translation 2](https://github.com/EdwardBalaj/Simple-DeepL-API-Integration/blob/main/Tests/simpletranslation2.PNG?raw=true)

### 3rd Test:

**Input Text**: 

Hello, 
                
world!

**Output Text**: 

Hej, 

verden!

**Expected Text**: 

Hej, 

verden!

**Observation**: A simple translation with two successive newline elements, in this case the website was able to translate correctly while keeping the formatting.

**Image**: ![Simple Translation 3](https://github.com/EdwardBalaj/Simple-DeepL-API-Integration/blob/main/Tests/simpletranslation3.PNG?raw=true)

### 4th Test:

**Input Text**:

Hello, 

world!
            
Hello123

**Output Text**:

Hej, 

verden!
             
Hello123

**Expected Text**: 

Hej, 

verden!
               
Hej123

**Observation**: A simple translation with two successive newline elements, and numbers within a word, in this case the website was not able to translate correctly, as DeepL is apparently not able to understand a word if it has numbers somewhere in it, although the formatting was kept.

**Image**: ![Simple Translation 4](https://github.com/EdwardBalaj/Simple-DeepL-API-Integration/blob/main/Tests/simpletranslation4.PNG?raw=true)

### 5th Test:

**Input Text**: 

Hello, 

world!
            
Hello 123

**Output Text**: 

Hej, 

verden!
             
Hej 123

**Expected Text**: 

Hej, 

verden!
               
Hej 123

**Observation**: A simple translation with two successive newline elements, and numbers within a word, in this case the website was able to translate correctly, as the word and the numbers have a space between them, and also the formatting was kept.

**Image**: ![Simple Translation 5](https://github.com/EdwardBalaj/Simple-DeepL-API-Integration/blob/main/Tests/simpletranslation5.PNG?raw=true)

# Observations
While using the website to translate from English to any other language I have noticed that even as the DeepL specifications require a User-Agent header, and a Content-Length header, the browser Google Chrome had refused to run the translation algorithm as it considered these headers to be unsafe for use.

These have been commented out until Google Chrome updates its policies, or perhaps removed completely if deemed permanently unsafe.

# License
MIT License
# Author
Designed and Programmed by Alexandru Edward Balaj

15/07/2021
