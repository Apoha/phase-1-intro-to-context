// Your code here

const createEmployeeRecord = ([firstName, familyName, title, payPerHour]) => {
    return {
       firstName,
       familyName,
       title,
       payPerHour,
       timeInEvents : [],
       timeOutEvents : []
   }
}




const createEmployeeRecords = (employeeRecords) => {
    const result = []
    for (const employee of employeeRecords) {
        result.push(createEmployeeRecord(employee));
    }
    return result;
}






const createTimeInEvent = (record, timeStamp) => {

const timeObject = {

    type: "TimeIn",
    date: timeStamp.split(" ")[0],
    hour: parseInt(timeStamp.slice(-4), 10)
}

    record.timeInEvents.push(timeObject)
    return record
}


      



        const createTimeOutEvent = (record, timeStamp) =>{ 

            const timeObject = {
                type: "TimeOut",
                date: timeStamp.split(" ")[0],
                hour: parseInt(timeStamp.slice(-4), 10)
            }
                record.timeOutEvents.push(timeObject)
                return record
            }
            
        
            
        
            let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
            let updatedBpRecord = createTimeInEvent(bpRecord, "2014-02-28 1400")
            let newEvent = updatedBpRecord.timeInEvents[0]






            const hoursWorkedOnDate = (record, date) =>{

                const timeIn = record.timeInEvents.find(e => {
                
            return e.date === date
            
            }).hour
            
            const timeOut = record.timeOutEvents.find(e => {
            
            return e.date === date
        
            }).hour
            
            return (timeOut - timeIn) /100
            
            }
            


            const wagesEarnedOnDate = (record, date) =>{

                let pay = 0
                
                const hours = hoursWorkedOnDate(record, date)
                pay += hours * record.payPerHour
                
                return pay 
                
             //return hoursWorkedOnDate(record, date) * record.payPerHour

                }
                
                



    const allWagesFor = (record) => {
    let pay =0;

    for (let i = 0; i < record.timeInEvents.length; i++){
    let payday = wagesEarnedOnDate(record, record.timeInEvents[i].date)
    pay += payday
   }
    
      return pay
}




/*
const calculatePayroll = (arr) =>{

    const totalPay = arr.reduce((acc, record) => {
    const totalPayForEmployee = allWagesFor(record)

    return acc+ totalPayForEmployee
    }, 0)
}
*/


let rRecord = createEmployeeRecord(["Rafiki", "", "Aide", 10])
        let sRecord = createEmployeeRecord(["Simba", "", "King", 100])

        let sTimeData = [
          ["2019-01-01 0900", "2019-01-01 1300"], // 4 * 100 = 400
          ["2019-01-02 1000", "2019-01-02 1300"]  // 3 * 100 = 300 ===> 700 total
        ]

        let rTimeData = [
          ["2019-01-11 0900", "2019-01-11 1300"], // 4 * 10 = 40
          ["2019-01-12 1000", "2019-01-12 1300"]  // 3 * 10 = 40 ===> 70 total ||=> 770
        ]

        sTimeData.forEach(function (d) {
          let [dIn, dOut] = d
          sRecord = createTimeInEvent(sRecord, dIn)
          sRecord = createTimeOutEvent(sRecord, dOut)
        })

        rTimeData.forEach(function (d, i) {
          let [dIn, dOut] = d
          rRecord = createTimeInEvent(rRecord, dIn)
          rRecord = createTimeOutEvent(rRecord, dOut)
        })

        let employees = [sRecord, rRecord]
        let grandTotalOwed = employees.reduce((m, e) => m + allWagesFor(e), 0)  





const findEmployeeByFirstname = (record, firstName) => {
    return record.find(function(rec){
        return rec.firstName === firstName
    })
}


  const calculatePayroll = (record) => {
    return record.reduce(function(rec){
    return allWagesFor(rec)
    })
  }  







  