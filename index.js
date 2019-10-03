// Your code here

function createEmployeeRecord([first, last, title, pph]) {
  let employee = {
  firstName: first,
  familyName: last,
  title: title,
  payPerHour: pph,
  timeInEvents: [],
  timeOutEvents: []
  }
  return employee
}



function createEmployeeRecords(recordsArrays) {
  let employeeRecords = recordsArrays.map(employee => createEmployeeRecord(employee))
  return employeeRecords
}


function createTimeInEvent(employeeObj, dateStamp) {
    //create a timeOut event
  let timeIn = createEvent(dateStamp, "TimeIn")
    //add the timeOut event to employee's record
  employeeObj.timeInEvents.push(timeIn)

  return employeeObj
}


function createTimeOutEvent(employeeObj, dateStamp) {
    //create a timeOut event
  let timeOut = createEvent(dateStamp, "TimeOut")
    //add the timeOut event to employee's record
  employeeObj.timeOutEvents.push(timeOut)

  return employeeObj
}

function createEvent(dateStamp, eventType) {
  //helper function to create timeIn and timeOut events
  let [day, time] = dateStamp.split(" ")
  let newEvent = {}
    newEvent.type = eventType
    newEvent.hour = parseInt(time)
    newEvent.date = day
  return newEvent
}


function hoursWorkedOnDate(employeeObj, dateStr) { // dateStr "YYYY-MM-DD"
  const {timeInEvents, timeOutEvents} = employeeObj
  let tIn = timeInEvents.find(t => t.date == dateStr)
  let tOut = timeOutEvents.find(t => t.date == dateStr)
  let hoursWorked = (tOut.hour - tIn.hour) / 100

  return hoursWorked //integer
}

// function onDate(employeeObj, dateStr) {
//   let timeIn = eventsArr.find(eventObj => eventObj.date == dateStr)
//   return
// }

function wagesEarnedOnDate(employeeObj, dateStr) { // dateStr "YYYY-MM-DD"
  const [hours, rate] = [hoursWorkedOnDate(employeeObj, dateStr), employeeObj.payPerHour]
  let payOwed =  hours * rate
  return payOwed //number
}

function allWagesFor(employeeObj) {
  //get array of all dates worked
  let dates = datesWorked(employeeObj)
  let allPayOwed = 0
  dates.forEach(date => {
    allPayOwed += wagesEarnedOnDate(employeeObj, date)
  })

  return allPayOwed;
}

function datesWorked(employeeObj) { // returns array of dateStrings worked
  let dates = employeeObj.timeInEvents.map(inEvent => inEvent.date)
  return dates
}

function findEmployeeByFirstName(employeeObjsArr, firstNameStr) {
  let matchFound = employeeObjsArr.find(employee => employee.firstName === firstNameStr)
  return matchFound
  // if (matchFound) {return employeeObj} else { undefined }
}


function calculatePayroll(employeeObjsArr) {
  let allWagesOwed = 0

  employeeObjsArr.forEach(employee => {
    allWagesOwed += allWagesFor(employee)
  })

  return allWagesOwed;
}









//
