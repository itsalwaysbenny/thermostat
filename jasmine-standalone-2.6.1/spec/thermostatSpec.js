describe ("Thermostat", function() {

  beforeEach(function(){
    thermostat = new Thermostat
  });


  it("Thermostat starts at 20 degrees", function() {
  expect(thermostat.temp).toEqual (20)
  });

  it("Thermostat increases temp by 1", function() {
    thermostat.increase()
    expect(thermostat.temp).toEqual (21)
  });

  it("Thermostat decreases temp by 1", function() {
    thermostat.decrease()
    expect(thermostat.temp).toEqual (19)
  });

  it("Thermostat cannot go below 10", function() {
    thermostat.temp = 10;
    expect(thermostat.decrease()).toBe ("Minimum Temperature");
  });

  it("Thermostat switches off", function() {
    thermostat.powerSaveSwitch();
    expect(thermostat.powerSave[0][0]).toBe (false);
  });

  it("Thermostat switches on", function() {
    expect(thermostat.powerSave[0][0]).toBe (true);
  });

  it("Thermostat cannot increase past 25 if powerSave is on ", function() {
    thermostat.temp = 25
    expect(thermostat.increase()).toEqual ("Maximum Temperature")
  });

  it("Thermostat resets to 20", function() {
    thermostat.increase();
    thermostat.resetTemp();
    expect(thermostat.temp).toEqual (20);
  });

  it("Thermostat shows low usage message", function() {
    thermostat.temp = 17;
    expect(thermostat.thermUsage()).toEqual ("Low Usage");
  });

  it("Thermostat shows med usage message", function() {
    thermostat.temp = 20;
    expect(thermostat.thermUsage()).toEqual ("Medium Usage");
  });

  it("Thermostat shows high usage message", function() {
    thermostat.temp = 26;
    expect(thermostat.thermUsage()).toEqual ("High Usage");
  });

  it("If temperature is above 25 when powersave turns on it is reset to 25", function() {
    thermostat.temp = 25;
    thermostat.powerSaveSwitch();
    thermostat.increase();
    thermostat.powerSaveSwitch();
    expect(thermostat.temp).toEqual (25);
  });

});
