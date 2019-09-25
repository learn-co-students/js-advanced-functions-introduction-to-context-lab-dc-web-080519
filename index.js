function createEmployeeRecord(employeeArray) {
  return {
    firstName: employeeArray[0],
    familyName: employeeArray[1],
    title: employeeArray[2],
    payPerHour: employeeArray[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployees(employeesArray) {
  return employeesArray.map(employeeArray => {
    return createEmployeeRecord(employeeArray);
  })
}

function createTimeInEvent(employee, dateStamp) {
  const timeIn = {
    type: 'TimeIn',
    hour: Number(dateStamp.slice(-4)),
    date: dateStamp.slice(0, -5)
  }
  employee.timeInEvents.push(timeIn);
  return employee;
}

function createTimeOutEvent(employee, dateStamp) {
  const timeOut = {
    type: 'TimeOut',
    hour: Number(dateStamp.slice(-4)),
    date: dateStamp.slice(0, -5)
  }
  employee.timeOutEvents.push(timeOut);
  return employee;
}

function hoursWorkedOnDate(employee, date) {
  const inPunch = employee.timeInEvents.find(punch => {
    return punch.date === date;
  })

  const outPunch = employee.timeOutEvents.find(punch => {
    return punch.date === date;
  })

  return (outPunch.hour - inPunch.hour)/100;
}

function wagesEarnedOnDate(employee, date) {
  const hours = hoursWorkedOnDate(employee, date);
  return hours * employee.payPerHour;
}

function allWagesFor(employee) {
  const dates = employee.timeOutEvents.map(punch => {
    return punch.date;
  })

  const allWages = dates.map(date => {
    return wagesEarnedOnDate(employee, date);
  })

  return allWages.reduce((memo, dayWage) => {
    return memo + dayWage;
  })
}

function createEmployeeRecords(employeesArray) {
  return employeesArray.map(employeeArray => {
    return createEmployeeRecord(employeeArray)
  });
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(employee => {
    return employee.firstName === firstName;
  });
}

function calculatePayroll(employeesArray) {
  const allWages = employeesArray.map(employee => {
    return allWagesFor(employee)
  })

  return allWages.reduce((memo, currentWage) => {
    return memo + currentWage;
  });
}





