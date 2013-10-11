
/*
 * GET home page.
 */

exports.index = function(db) {
    return function(req, res){
        var collection = db.get('test');
        collection.find({},{},function(e,docs){
            //console.log(docs);
            res.render('index',
                {
                    title: 'Express',
                    sample: docs
                });
        });
    };
};
