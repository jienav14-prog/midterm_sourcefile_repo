// LESSON 3: SSQL
// This program demonstrates Stack, Queue, Priority Queue, and Linked List.


'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ==================== PART A: STACK ====================

class Stack {
    constructor() {
        this.items = [];
    }

    // Add
    push(element) {
        this.items.push(element);
    }

    // Remove top
    pop() {
        return this.items.pop();
    }

    // Get top
    peek() {
        return this.items[this.items.length - 1];
    }

    // Check empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get size
    size() {
        return this.items.length;
    }

    // Display items
    toString() {
        return this.items.join(', ');
    }
}

console.log('\nPART A: UNDO HISTORY');

let actionHistory = new Stack();

actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

console.log('Top Action:', actionHistory.peek());
console.log('Undo Action:', actionHistory.pop());
console.log('Remaining Actions:', actionHistory.toString());
console.log('Stack Size:', actionHistory.size());


// ==================== PART B: QUEUE ====================

class Queue {
    constructor() {
        this.items = [];
    }

    // Add at back
    enqueue(element) {
        this.items.push(element);
    }

    // Remove from front
    dequeue() {
        return this.items.shift();
    }

    // Get front
    front() {
        return this.items[0];
    }

    // Check empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get size
    size() {
        return this.items.length;
    }

    // Display items
    toString() {
        return this.items.join(', ');
    }
}

console.log('\nPART B: WAITING REQUESTS');

let waitingRequests = new Queue();

waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

console.log('Next Request:', waitingRequests.front());
console.log('Processed:', waitingRequests.dequeue());
console.log('Processed:', waitingRequests.dequeue());
console.log('Remaining Requests:', waitingRequests.toString());
console.log('Queue Size:', waitingRequests.size());


// ==================== PART C: PRIORITY QUEUE ====================

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    // Add based on priority
    enqueue(request, priority) {
        let item = {
            request: request,
            priority: priority
        };

        let i = 0;

        while (
            i < this.items.length &&
            this.items[i].priority <= priority
        ) {
            i++;
        }

        this.items.splice(i, 0, item);
    }

    // Remove first
    dequeue() {
        return this.items.shift();
    }

    // Get size
    size() {
        return this.items.length;
    }

    // Display queue
    print() {
        for (let item of this.items) {
            console.log(
                item.request + ', Priority ' + item.priority
            );
        }
    }
}

console.log('\nPART C: URGENT REQUESTS');

let urgentRequests = new PriorityQueue();

urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

console.log('Initial Priority Order:');
urgentRequests.print();

let priorityRequest = urgentRequests.dequeue();

console.log(
    'Processed Priority Request:',
    priorityRequest.request + ', Priority ' + priorityRequest.priority
);

console.log('Remaining Priority Requests:');
urgentRequests.print();


// ==================== PART D: LINKED LIST ====================

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Add at end
    append(element) {
        let node = new Node(element);

        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = node;
        }

        this.length++;
    }

    // Insert at position
    insert(position, element) {
        if (position < 0 || position > this.length) {
            return false;
        }

        let node = new Node(element);

        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;

            for (let i = 1; i < position; i++) {
                current = current.next;
            }

            node.next = current.next;
            current.next = node;
        }

        this.length++;
        return true;
    }

    // Remove at position
    removeAt(position) {
        if (position < 0 || position >= this.length) {
            return null;
        }

        let removed;

        if (position === 0) {
            removed = this.head;
            this.head = this.head.next;
        } else {
            let current = this.head;

            for (let i = 1; i < position; i++) {
                current = current.next;
            }

            removed = current.next;
            current.next = removed.next;
        }

        this.length--;

        return removed.element;
    }

    // Find position
    indexOf(element) {
        let current = this.head;
        let index = 0;

        while (current !== null) {
            if (current.element === element) {
                return index;
            }

            current = current.next;
            index++;
        }

        return -1;
    }

    // Remove by value
    remove(element) {
        let index = this.indexOf(element);

        if (index !== -1) {
            return this.removeAt(index);
        }

        return null;
    }

    // Check empty
    isEmpty() {
        return this.length === 0;
    }

    // Get size
    size() {
        return this.length;
    }

    // Display list
    toString() {
        let result = [];
        let current = this.head;

        while (current !== null) {
            result.push(current.element);
            current = current.next;
        }

        return result.join(', ');
    }
}

console.log('\nPART D: COMPLETED REQUESTS');

let completedRequests = new LinkedList();

completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');

completedRequests.insert(
    0,
    'Ticket #400 - Computer Diagnosed'
);

completedRequests.insert(
    completedRequests.size(),
    'Ticket #405 - Browser Updated'
);

console.log('Complete List:', completedRequests.toString());

console.log(
    'Index of Ticket #402:',
    completedRequests.indexOf('Ticket #402 - Printer Connected')
);

console.log(
    'Removed at Position 1:',
    completedRequests.removeAt(1)
);

console.log(
    'Removed by Value:',
    completedRequests.remove('Ticket #403 - Antivirus Updated')
);

console.log('Final List:', completedRequests.toString());
console.log('Final Size:', completedRequests.size());