### Use Route 

<br>

/cities  
Returns an array of strings for all city names in this format:

[
    "Stratford",
    "Heathrow",
    "Harrow"
]

<br>

Returns data based on any city that is passed to the server (in JSON format).

|       route       |              result               |
| :---------------: | :-------------------------------: |
| /:city/pharmacies | returns pharmacies list for :city |
|  /:city/colleges  |  returns colleges list for :city  |
|  /:city/doctors   |  returns doctors list for :city   |
| /:city /hospitals | returns hospitals list for :city  |