var a = function(){

};

var obj = {
    append: function () {
        return "not jquery"
    }
};
var $foo = jQuery(document.body);
var $body = $(document.body);

$body.append("");
$foo.remove("");
a();
obj.append("");

(function () {
    (function () {
        function low(){
            $foo.prepend("test");
        }
    })();
})();