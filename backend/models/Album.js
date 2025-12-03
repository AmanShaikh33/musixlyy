import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    coverImage: {
        type: String,
        default: "",
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Artist",
    },

    releaseDate: {
        type: Date,
    },

    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
    },
],
});

export const Album = mongoose.model("Album", albumSchema);

