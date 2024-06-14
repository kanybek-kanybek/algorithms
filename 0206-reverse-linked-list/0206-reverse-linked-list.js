function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var reverseList = function(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    return prev;
};

function arrayToList(array) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of array) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(list) {
    let array = [];
    while (list !== null) {
        array.push(list.val);
        list = list.next;
    }
    return array;
}

let head1 = arrayToList([1, 2, 3, 4, 5]);
let reversed1 = reverseList(head1);
console.log(listToArray(reversed1)); 
let head2 = arrayToList([1, 2]);
let reversed2 = reverseList(head2);
console.log(listToArray(reversed2)); 
let head3 = arrayToList([]);
let reversed3 = reverseList(head3);
console.log(listToArray(reversed3)); 
