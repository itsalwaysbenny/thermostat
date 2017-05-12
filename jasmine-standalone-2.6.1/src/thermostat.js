function Thermostat () {
  this.temp = 20
  this.powerSave = [[true, 24], [false, 31]]
  this.usage = ["Low Usage", "Medium Usage", "High Usage"]
  this.minTemp =  10
};

var thermostat = new Thermostat;

Thermostat.prototype.increase = function() {
  if(this.temp > this.powerSave[0][1]) { return thermostat.error() };
  this.temp = this.temp + 1;
  // return this.temp
};

Thermostat.prototype.decrease = function() {
  if(this.temp === 10) { return thermostat.error() };
  this.temp = this.temp - 1;
  // return this.temp
};

Thermostat.prototype.powerSaveSwitch = function() {
  var x = this.powerSave[0]
  this.powerSave[0] = this.powerSave[1];
  this.powerSave[1] = x;
  if (this.powerSave[0][0] === true && this.temp > 25) {this.temp = 25}
};

Thermostat.prototype.resetTemp = function() {
  this.temp = 20;
  return this.temp
};

Thermostat.prototype.thermUsage = function() {
  if(this.temp < 18)  { return this.usage[0] }
  else if (this.temp > 24) { return this.usage[2] }
  else { return this.usage[1] };

};

Thermostat.prototype.error = function() {
  if (this.powerSave[0][0] === false && this.temp === 25) {return ""}
  else if (this.temp === this.minTemp) {return "Minimum Temperature"}
  else if (this.powerSave[0][0] === true && this.temp === 25) {return "Maximum Temperature"}
  else if (this.powerSave[0][0] === false && this.temp === 32) {return "Maximum Temperature"}
  else {return ""};

};
