function getInputElement(id) {
    return document.getElementById(id)
}

function addAction(actionName, processFun) {
    Pixastic.Actions[actionName] = {
    	process : function(params) {
    		if (!Pixastic.Client.hasCanvasImageData()) {
    		    return;
    		}
            var data = Pixastic.prepareData(params);
            var dataCopy = Pixastic.prepareData(params, true);
            var rectangle = params.options.rect;
            processFun(dataCopy, data, rectangle.width, rectangle.height);
            return true;
        }
    	,
    	checkSupport : function() {
    		return (Pixastic.Client.hasCanvasImageData());
    	}
    };
}


function getContextForCanvas(c) {
    return c.getContext('2d');
}

function getCanvasById(id) {
    return document.getElementById(id)
}
