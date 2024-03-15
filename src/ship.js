function Ship() {

    // ships

    function hit() {
        return length - 1
    }

    function isSunk(length, hits) {
        if (length > hits) 
            return "ship is not sunk"
        else
            return "ship has sunk"
    }
};

module.exports = Ship;