const createTable = (rows, columns) => {
  // rows & columns
  const table = []
  for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < columns; j++) {
      row.push(i * j)
    }
    table.push(row)
  }
  // array of arrays to represent a table
  //  each of the inner arrays will represent a row, and contains a rows data
  return table
}

const table1 = createTable(3, 4)
console.log(table1)

/* Expected Outcome:
[
  [0, 0, 0, 0],
  [0, 1, 2, 3],
  [0, 2, 4, 6]
]
 */
