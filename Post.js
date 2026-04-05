import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    author: String,
    title: String,
    img: String
});

export default mongoose.model('Post', PostSchema);