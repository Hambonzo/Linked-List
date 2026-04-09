import { Node } from "./node.js"

export const LinkedList = () => {
    let headNode = null;


    const append = (value) => {
        if (headNode === null) {
            headNode = Node(value);
        } else {
            let temp = headNode;
            while (temp.nextNode != null) {
                temp = temp.nextNode
            }
            temp.nextNode = Node(value);
        }
    }

    const prepend = (value) => {
        if (headNode === null) {
            headNode = Node(value);
        } else {
            let temp = headNode;
            headNode = Node(value, temp);
        }
    }

    const size = () => {
        let length = 0;
        if (headNode === null) {
            return 0;
        } else {
            let temp = headNode;
            while (temp.nextNode != null) {
                temp = temp.nextNode;
                length++;
            }
            return ++length;
        }
    }

    const head = () => {
        if (headNode === null) {
            return undefined;
        } else {
            return headNode.value;
        }
    }

    const tail = () => {
        if (headNode === null) {
            return undefined;
        } else {
            let temp = headNode;
            while (temp.nextNode != null) {
                temp = temp.nextNode;
            }
            return temp.value;
        }
    }

    const at = (index) => {
        if (index < 0) {
            return undefined;
        }

        let temp = headNode;
        for (let i = 0; i < index; i++) {
            if (temp.nextNode === null) {
                return undefined
            }
            temp = temp.nextNode;
        }
        return temp.value;
    }

    const pop = () => {
        if (headNode === null) {
            return undefined;
        } else {
            let temp = headNode;
            headNode = headNode.nextNode;
            return temp.value;
        }
    }

    const contains = (value) => {
        let temp = headNode;

        while (temp != null) {
            if (temp.value === value) {
                return true;
            }
            temp = temp.nextNode;
        }
        return false;
    }

    const findIndex = (value) => {
        let temp = headNode;
        let index = 0;

        while (temp != null) {
            if (temp.value === value) {
                return index;
            }
            temp = temp.nextNode;
            index++;
        }
        return -1;
    }

    const toString = () => {
        let string = ""
        let temp = headNode;

        if (headNode === null) {
            return string;
        }

        while (temp != null) {
            string += " ( " + temp.value + " ) ->";
            temp = temp.nextNode;
        }
        string += " null";
        return string;
    }

    const insertAt = (index, ...values) => {
        let indexCount = 0;
        let temp = headNode;

        if (values.length === 0) return;

        if (index < 0) {
            throw RangeError;
        }


        if (index === 0) {
            let oldHead = headNode;
            let firstNode = Node(values[0]);
            let current = firstNode;
            for (let i = 1; i < values.length; i++) {
                let newNode = Node(values[i], null);
                current.nextNode = newNode;
                current = newNode;
            }
            current.nextNode = oldHead;
            headNode = firstNode;
        }

        while (indexCount < index - 1 && temp.nextNode !== null) {
            temp = temp.nextNode;
            indexCount++;
        }

        let restOfList = temp.nextNode;
        let firstNode = Node(values[0]);
        let current = firstNode;

        for (let i = 1; i < values.length; i++) {
            let newNode = Node(values[i], null);
            current.nextNode = newNode;
            current = newNode;
        }
        temp.nextNode = firstNode;
        current.nextNode = restOfList;

    }

    const removeAt = (index) => {
        if (headNode === null) {
            throw RangeError("List is empty, nothing to remove.");
        }

        if (index === 0) {
            headNode = headNode.nextNode;
            return;
        }

        if (index < 0) {
            throw RangeError("Index has to be 0 or above!");
        }

        let indexCount = 0;
        let temp = headNode;

        while (indexCount < index - 1 && temp.nextNode !== null) {
            temp = temp.nextNode;
            indexCount++;
        }

        let nodeDelete = temp.nextNode;

        if (nodeDelete === null) {
            throw new RangeError(`Index ${index} is beyond the last size,`);
        }

        let restOfList = nodeDelete.nextNode;
        temp.nextNode = restOfList;
    }

    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        findIndex,
        toString,
        insertAt,
        removeAt,
        getHead: () => headNode
    }
}





















