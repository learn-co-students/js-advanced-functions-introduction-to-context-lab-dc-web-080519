// Your code here
function createEmployeeRecord(empArray) {
  let ee = {
    firstName: empArray[0],
    familyName: empArray[1],
    title: empArray[2],
    payPerHour: empArray[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return ee
}

function createEmployees(empArray){
  return empArray.map(createEmployeeRecord)
}

function createTimeInEvent(empRecord, dateStamp) {
  let timeInRecord = {
    type: "TimeIn",
    hour: parseInt(dateStamp.split(" ")[1], 10),
    date: dateStamp.split(" ")[0]
  }
  empRecord.timeInEvents.push(timeInRecord)
  return empRecord
}

function createTimeOutEvent(empRecord, dateStamp) {
  let timeOutRecord = {
    type: "TimeOut",
    hour: parseInt(dateStamp.split(" ")[1], 10),
    date: dateStamp.split(" ")[0]
  }
  empRecord.timeOutEvents.push(timeOutRecord)
  return empRecord
}

function hoursWorkedOnDate(empRecord, dateStamp) {
  //need to find timeinevent record by date and pull out hour
  //need to find timeoutevent record by date and also pull our hour, subtract time out
  //hour from time in hour
  function dateMatch (event) {
    return event.date === dateStamp
  }

  let inRecord = empRecord.timeInEvents.find(dateMatch)
  let inHour = inRecord.hour;

  let outRecord = empRecord.timeOutEvents.find(dateMatch)
  let outHour = outRecord.hour;

  return (outHour - inHour)/100;
}

function wagesEarnedOnDate(empRecord, dateStamp) {
  return hoursWorkedOnDate(empRecord, dateStamp) * empRecord.payPerHour
}

function allWagesFor(empRecord) {
  let availableDates = empRecord.timeInEvents.map(function(event) {
    return event.date
  })
  let totalWages = 0;
  availableDates.forEach(function(date) {
    totalWages += wagesEarnedOnDate(empRecord, date)
  })
  return totalWages;
}

function createEmployeeRecords(empArray){
  return empArray.map(createEmployeeRecord)
}

function findEmployeeByFirstName(empRecordArray, firstName) {
  return empRecordArray.find(function(empRec) {
    return empRec.firstName === firstName
  })
}

function calculatePayroll (empRecordArray) {
  return empRecordArray.reduce(function(memo, empRec) {
    return memo + allWagesFor(empRec)
  }, 0)
}
