// code your solution here
function superbowlWin(records) {
    let winningRecord = records.find(record => record.result === "W")
    return winningRecord ? winningRecord.year : undefined;
}
let superbowlRecords = [
    { year: 2010, result: "L" },
    { year: 2011, result: "W" },
    { year: 2012, result: "L" },
    { year: 2013, result: "L" }
];

console.log(superbowlWin(superbowlRecords)); // Output: 2011
let noWinRecords = [
    { year: 2010, result: "L" },
    { year: 2011, result: "L" },
    { year: 2012, result: "L" }
];

console.log(superbowlWin(noWinRecords)); // Output: undefined
