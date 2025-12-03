import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    photo:{
        type: String,
        default: "",
    },

    about: {
        type: String,
        default: "",
    }
});

export const Artist = mongoose.model('Artist', artistSchema);