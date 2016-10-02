# Text Mining nodejs Library

## Simple
~~~javascript
var tm = require("tm-corpus");
console.log(tm("silahkan hina aku sepuasnya kamu suci aku penuh dosa"));

~~~
output :
~~~javascript
[ { word: 'aku', count: 2 },
  { word: 'silahkan', count: 1 },
  { word: 'hina', count: 1 },
  { word: 'sepuasnya', count: 1 },
  { word: 'kamu', count: 1 },
  { word: 'suci', count: 1 },
  { word: 'penuh', count: 1 },
  { word: 'dosa', count: 1 } ]
~~~

## StopWords

### Array

~~~javascript
var tm = require("tm-corpus");
var opts = {
  text: "silahkan hina aku sepuasnya kamu suci aku penuh dosa",
  sw: ["aku","kamu"]
}
console.log(tm(opts));
~~~
output :
~~~javascript
[ { word: 'silahkan', count: 1 },
  { word: 'hina', count: 1 },
  { word: 'sepuasnya', count: 1 },
  { word: 'suci', count: 1 },
  { word: 'penuh', count: 1 },
  { word: 'dosa', count: 1 } ]
~~~

### String

~~~javascript
var tm = require("tm-corpus");
var opts = {
  text: "silahkan hina aku sepuasnya kamu suci aku penuh dosa",
  sw: "aku kamu"
}
console.log(tm(opts));
~~~
output :
~~~javascript
[ { word: 'silahkan', count: 1 },
  { word: 'hina', count: 1 },
  { word: 'sepuasnya', count: 1 },
  { word: 'suci', count: 1 },
  { word: 'penuh', count: 1 },
  { word: 'dosa', count: 1 } ]
~~~

![yongleks](https://instagram.fcgk5-1.fna.fbcdn.net/t51.2885-15/e35/14482844_1851702305064394_8554828611654254592_n.jpg)
