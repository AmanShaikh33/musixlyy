import mongoose from 'mongoose';

const LanguageSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true,
    }
})

export const Language = mongoose.model('language', languageSchema)