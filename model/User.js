import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    orders : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }],
    wishlist : [{ type: mongoose.Schema.Types.ObjectId,
        ref: 'WishList'  }],
    isAdmin: {type : Boolean, default: false},
    hasShippingAddress: {type: Boolean, default: false},

    shippingAddress: { firstname: {type: String},
        lastname: {type: String},
        address: {type: String},
        city: {type: String},
        postalcode: {type: String},
        province: {type: String},
        country: {type: String},
        phone: {type: String}
    }, 

    
},
{
    timestamp: true,
})


const user = mongoose.model('User', UserSchema);

export default user;