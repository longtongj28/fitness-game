export const generateActivity = () => {
  return {
    name: generateChoice('str'),
    distance: generateChoice('int'),
    description: generateChoice('str'),
    minTime: generateChoice('int'),
    participants: generateChoice('int'),
    location: generateChoice('str'),
    longitude: generateRandomLatLng(false),
    latitude: generateRandomLatLng(true)
  }
}

//https://stackoverflow.com/questions/6878761/javascript-how-to-create-random-longitude-and-latitudes
const generateRandomLatLng = (lat) => {
    var num = Math.random()* (lat ? 90 : 180);
    var posorneg = Math.random() > 0.5;
    if (posorneg)
    {
        num = num * -1;
    }
    return num;
}

const generateChoice = (type) => {
    if (type === 'int') {
      return generateRandomNumber()
    }
    else if (type === 'str') {
      return generateRandomString()
    }
    return null
  }
  
  // credit to https://catonmat.net/generate-random-json-data-structures
  function chooseOne(choices) {
    return choices[parseInt(Math.random()*choices.length)];
  }
  function generateRandomString () {
    var alphabet = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  
    var maxLength = 15;
    var length = Math.random()*maxLength;
    var string = "Objective ";
    for (var i = 0; i < length; i++) {
      string += chooseOne(alphabet);
    }
  
    return string;
  } 
  function generateRandomNumber () {
    var maxNum = 2**32;
    var number = Math.random()*maxNum;
    var isInteger = chooseOne([true,false]);
  
    if (isInteger) number = parseInt(number);
  
    return number;
  }