var recipes = {};

function updateObjectWithKeyAndValue (obj, key, value) {
  
  return Object.assign({}, obj, { [key]: value});
  
}

function destructivelyUpdateObjectWithKeyAndValue (obj, key, value) {
  
  obj[key] = value;
  
  return obj;
  
}

function deleteFromObjectByKey (obj, key) {
  
  return delete obj.key;
  
}

function destructivelyDeleteObjectByKey (obj, key) {
  
  var obj = { obj: key };
  
  var newObj = Object.assign({}, obj, {})
}