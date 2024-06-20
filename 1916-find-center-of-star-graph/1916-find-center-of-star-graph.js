/**
 * @param {number[][]} edges
 * @return {number}
 */
function findCenter(edges) {
    let node1 = edges[0][0];
    let node2 = edges[0][1];

    for (let i = 1; i < edges.length; i++) {
        if (edges[i][0] === node1 || edges[i][0] === node2) {
            return edges[i][0];
        } else if (edges[i][1] === node1 || edges[i][1] === node2) {
            return edges[i][1];
        }
    }
}

let edges = [[1,2],[2,3],[4,2]];
let center = findCenter(edges);
console.log(center);