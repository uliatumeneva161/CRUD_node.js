import Post from "./Post.js"

class PostService { 
    async create(post) { 
      
        const createdPost  = await Post.create(post)
        return createdPost
    }

    async getAll(posts) { 
        const allPosts = await Post.find(posts)
        return allPosts
    }

    async getOne(id) { 
        if (!id) {
           throw new Error('id not f')
        }
        const onePost = await Post.findById(id) 
        return onePost
    }

    async updatePost(id, updatedPost) { 
        const post = await Post.findByIdAndUpdate(id, updatedPost, { new: true })
        return post
    }

    async deletePost(id) { 
        const postDel = await Post.findByIdAndDelete(id)
        return postDel
    }
}

export default new PostService()