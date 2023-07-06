function enoughAirtime(usageString, callCost, dataCost, smsCost) {
  var usageArray = usageString.split(',');
  var totalAirtime = 0;
  
  for (var i = 0; i < usageArray.length; i++) {
    var current = usageArray[i].trim();
    
    if (current === 'call') {
      totalAirtime += callCost;
    } else if (current === 'data') {
      totalAirtime += dataCost;
    } else if (current === 'sms') {
      totalAirtime += smsCost;
    }
  }
  
  return 'R' + totalAirtime.toFixed(2);
}
