
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const colorSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    hex:
    {
        type:String,
        required:true
    }
})

/*
    commentID:"21903DKSAKJ"
    userID:"9138249iISDAJFDKA"
    rating: 3.5
    comment:"Shit product."
    date: "04.01.1994"
*/

const reviewSchema = new mongoose.Schema({
    userID: 
    {
        type: Schema.Types.ObjectId, ref: "User",
        required: true 
    },
    rating: 
    {
        type: Number,
        required: true,
        min: 1, 
        max: 5 
    },
    comment:
    {
        type: String,
        required: false 
    },
    date:
    { 
        type: Date, 
        default: Date.now 
    }
});

/*
    productID:"9138249iISDAJFDKA"
    vendorID:"KSAJDLKQWAKMDS"
    name:"Banana"
    description:"A lovely banana."
    frontImage: img
    categories:"Foods"
    reviewList:...
    price: 500000000000
*/

productSchema = new Schema(
    {
        vendorID:
        {
            type: Schema.Types.ObjectId, ref: "User",
            required: true,
        },
        name:
        {
            type: String,
            required: true,
        },
        description:
        {
            type: String,
            required: true,
        },
        image:
        {
            type: [String],
            required: true,
        },
        sizes:
        {
            type: [String],
            required: false,
        },
        isInStock:
        {
            type: Boolean,
            required: true,
        },
        colors:
        {
            type:[colorSchema],
            required:false
        },
        reviewList:
        {
            type: [reviewSchema],
            required: false,
        },
        price:
        {
            type: Number,
            required: true,
        },

    });

    module.exports = mongoose.model("Product", productSchema);