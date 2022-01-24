"use strick";

function User(name_) {
    let name = name_;
    Object.defineProperty(this,"name", { 
        set : function(name) {
            return name = name
        },
        get : function() {
            return name
        }
    });
}
