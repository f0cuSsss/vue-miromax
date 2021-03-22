Array.prototype.inArray = function(comparer) { 
    for(var i=0; i < this.length; i++) { 
        if(comparer(this[i])) return true; 
    }
    return false; 
}; 

Array.prototype.toggleItem = function(element, comparer) { 
    if (!this.inArray(comparer)) {
        this.push(element);
    } else {
        this.pop(element);
    }
}; 
