sentenceBuilder = {
    subject:"I",
    verb:"am",
    object:"seeker",
    buildSentence: function(){
        ask= this.subject?this.verb?this.object?true:false:false:false 
        if(ask)
        console.log(`${this.subject}`+ ` ${this.verb}`+ ` ${this.object}`)
        else
        console.log("Property is missing")
    },
    updateProperty: function(property,value){
        if(this[property])
        this[property]=value;
        else
        console.log("Invalid Property")
    }

}
sentenceBuilder.buildSentence();


//"I am coding"

sentenceBuilder.updateProperty("verb", "am learning"); sentenceBuilder.buildSentence();
//9"I am learning coding"


sentenceBuilder.updateProperty("subject", "The cat");
sentenceBuilder.buildSentence();

//"The cat is learning coding"
sentenceBuilder.updateProperty("mood", "happy");

//"Invalid property"
sentenceBuilder.updateProperty("verb", ""); sentenceBuilder.buildSentence();
//"Incomplete sentence"