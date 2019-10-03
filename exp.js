// const gray = createEmployeeRecord()
// let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])





let recs = [
  ["moe", "sizlak", "barkeep", 2],
  ["bartholomew", "simpson", "scamp", 3],
  ["Gray", "Worm", "Security", 1],
  ["Byron", "Poodle", "Mascot", 3]
]

const employees = () => recs.map(em => createEmployeeRecord(em))

let [mo, bart, gray, byron] = employees()
createTimeInEvent(mo, "2015-02-28 1400")
createTimeOutEvent(mo, "2015-02-28 1700")
createTimeInEvent(mo, "2011-11-11 0800")
createTimeOutEvent(mo, "2011-11-11 1600")


createTimeInEvent(mo, "1944-03-15 0900")
createTimeOutEvent(mo, "1944-03-15 1100")

document.addEventListener('DOMContentLoaded', () => {
  console.log('connected')
  // console.log({
  //   moe: mo,
  //   bart: bart,
  //   gray: gray,
  //   byron: byron
  // })
  console.log(mo);
  console.log(bart);
  console.log(gray);
  console.log(byron);
})













//
