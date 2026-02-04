/*
 * Coin Sum
 *
 * In England, the currency is made up of pounds (£) and pence (p).
 *
 * There are eight coins in general circulation:
 * - 1p
 * - 2p
 * - 5p
 * - 10p
 * - 20p
 * - 50p
 * - £1 (100p)
 * - £2 (200p)
 *
 * Consider that it is possible to make £2 (200p) in the following way:
 * (1 x £1) + (1 x 50p) + (2 x 20p) + (1 x 5p) + (1 x 2p) + (3 x 1p)
 *
 * How many different ways can n pence be made using any number of coins?
 *
 * ex:
 *
 * coinSum(1); -> 1
 * There is only 1 way to make 1 pence - with a single 1p coin.
 *
 * coinSum(2); -> 2
 * There are 2 ways to make 2 pence:
 * - 2 x 1p coins
 * - 1 x 2p coin
 *
 * coinSum(100); -> 4,563
 * There are 4,563 ways to make £1!
 */

const coinSum = (pence) => {};

// console.log(coinSum(1)); // 1
// console.log(coinSum(2)); // 2
// console.log(coinSum(100)); // 4563

/*
 * N Paths
 *
 * How many unique ways can you move from one corner of a n x n board to the opposite
 * diagonal corner?
 *
 * You can move up, down, left, and right. You may not visit spaces that you have
 * visited already. Make your solution work for a grid of any size.
 *
 * Hint: We created a 'Board' class to help you out.
 */

class Board {
  board: boolean[][];

  /**
   * Create a board of size 'n' x 'n'.
   * @param {number} n
   */
  constructor(n: number) {
    this.board = [];

    for (let i = 0; i < n; i++) {
      this.board.push([]);
      for (let j = 0; j < n; j++) {
        this.board[i].push(false);
      }
    }
  }

  /**
   * Visit a space on the board (i.e. switch from 'false' to 'true').
   * @param {number} i | a board space's row index
   * @param {number} j | a board space's column index
   */
  visitSpace(i: number, j: number): void {
    this.board[i][j] = !this.board[i][j];
  }

  /**
   * Check if a space has already been visited.
   * @param {number} i | a board space's row index
   * @param {number} j | a board space's column index
   * @returns {boolean}
   */
  hasBeenVisited(i: number, j: number): boolean {
    return !!this.board[i][j];
  }
}

const nPaths = (size) => {};

// console.log(nPaths(1)); // 1
// console.log(nPaths(2)); // 2
// console.log(nPaths(3)); // 12

export { coinSum, nPaths };
