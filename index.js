/* Your Code Here */
function createEmployeeRecord(employee) {
    return {
      firstName: employee[0],
      familyName: employee[1],
      title: employee[2],
      payPerHour: employee[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee));
  }

  function createTimeInEvent(employee, dateTimeString) {
    const [date, hour] = dateTimeString.split(' ')
  
    employee.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour, 10)
    })
  
    return employee
  }
  

  function createTimeOutEvent(employee, dateTimeString) {
    const [date, hour] = dateTimeString.split(' ')
  
    employee.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour, 10)
    })
  
    return employee
  }
  

  function hoursWorkedOnDate(employee, date) {
    const timeIn = employee.timeInEvents.find(event => event.date === date).hour
    const timeOut = employee.timeOutEvents.find(event => event.date === date).hour
    return (timeOut - timeIn) / 100
  }

  function wagesEarnedOnDate(employee, date) {
    const hours = hoursWorkedOnDate(employee, date)
    return hours * employee.payPerHour
  }

  function allWagesFor(employee) {
    const dates = employee.timeInEvents.map(event => event.date)
    const wages = dates.map(date => wagesEarnedOnDate(employee, date))
    return wages.reduce((total, wage) => total + wage, 0)
  }

  function findEmployeeByFirstName(employees, firstName) {
    return employees.find(employee => employee.firstName === firstName)
  }
  
  function calculatePayroll(employees) {
    const wages = employees.map(employee => allWagesFor(employee))
    return wages.reduce((total, wage) => total + wage, 0)
  }
  
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function calculatePayroll(employees) {
    const wages = employees.map(employee => allWagesFor(employee))
    return wages.reduce((total, wage) => total + wage, 0)
  }
  

