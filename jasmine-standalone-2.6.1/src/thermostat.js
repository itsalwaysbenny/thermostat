function Thermostat () {
  this.temp = 20
  this.powerSave = [[true, 25], [false, 32]]
  this.usage = ["Low Usage", "Medium Usage", "High Usage"]
};

var thermostat = new Thermostat;

Thermostat.prototype.increase = function() {
  if(this.temp > this.powerSave[0][1]) { return "Maximum Temperature" };
  this.temp = this.temp + 1;
  return this.temp
};

Thermostat.prototype.decrease = function() {
  if(this.temp === 10) { return "Minimum Temperature" };
  this.temp = this.temp - 1;
  return this.temp
};

Thermostat.prototype.powerSaveSwitch = function() {
  var x = this.powerSave[0]
  this.powerSave[0] = this.powerSave[1];
  this.powerSave[1] = x;
};

Thermostat.prototype.resetTemp = function() {
  this.temp = 20;
  return this.temp
};

Thermostat.prototype.thermUsage = function() {
  if(this.temp < 18)  { return this.usage[0] }
  else if (this.temp > 25) { return this.usage[2] }
  else { return this.usage[1] };

};
