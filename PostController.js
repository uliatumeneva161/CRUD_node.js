import PostService from './PostService.js'

class PostController { 
     async create(req, res) { 
        try {
            const post = await PostService.create(req.body)
            
            res.status(200).json({ message: "cool", post })  
        } catch(error) { 
            console.log(error)
            res.status(500).json({ error: error.message })
        }
    }

    async getAll(req, res) { 
        try {
            const posts = await PostService.getAll()
            res.json(posts)
        } catch (e) { 
            console.log(e)
            res.status(500).json({ error: e.message })  
        }
    }

    async getOne(req, res) { 
        try {
            
            const onePost = await PostService.getOne(req.params.id)

            if (!onePost) {  
                return res.status(404).json({ error: 'Пост не найден' })
            }
            
            res.json(onePost)
            console.log('getOne: ' + onePost)

        } catch (e) { 
            console.log(e)
            res.status(500).json({ error: e.message })
        }
    }

    async updatePost(req, res) { 
        try {
            const post = await PostService.updatePost(req.params.id, req.body)
            res.json(post)
        } catch(e) { 
            console.log(e)
            res.status(500).json({ error: e.message })
        }
    }

    async deletePost(req, res) { 
        try {
            const post = await PostService.deletePost(req.body)
            res.json(post)
            
        } catch (e) { 
            console.log(e)
            res.status(500).json('del err')
        }
    }
}

export default new PostController()