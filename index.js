const chess = require('./pages/api/minichess/leahchess')
const board = new chess.Board(5)
board.apply("k1br1/pqp1p/2N2/P2BP/R2QK w")
console.log(board.toString())
console.log(board.moves())