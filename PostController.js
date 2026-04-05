import Post from "./Post.js";

class PostController { 
    async create(req, res) { 
        try {
            const { author, title, img } = req.body
            const post = await Post.create({ author, title, img })
            res.status(200).json({ message: "cool", post })  
        } catch(error) { 
            console.log(error)
            res.status(500).json({ error: error.message })
        }
    }

    async getAll(req, res) { 
        try {
            const posts = await Post.find()
            res.json(posts)
        } catch (e) { 
            console.log(e)
            res.status(500).json({ error: e.message })  
        }
    }

    async getOne(req, res) { 
        try {
            const { id } = req.params
            const post = await Post.findById(id)
            
            if (!post) {  
                return res.status(404).json({ error: 'Пост не найден' })
            }
            
            res.json(post)
            console.log('getOne: ' + post)
        } catch (e) { 
            console.log(e)
            res.status(500).json({ error: e.message })
        }
    }

    async updatePost(req, res) { 
        try {
            const { id } = req.params
            const updateData = req.body 
            
            if (!updateData || Object.keys(updateData).length === 0) {
                return res.status(400).json({ error: 'Нет данных для обновления' })
            }
            
            const updatedPost = await Post.findByIdAndUpdate(
                id, 
                updateData, 
                { new: true }
            )
            
            if (!updatedPost) {
                return res.status(404).json({ error: 'Пост не найден' })
            }
            
            console.log('update!!', updatedPost)
            res.status(200).json({
                message: 'Пост успешно обновлён',
                post: updatedPost 
            })
        } catch(e) { 
            console.log(e)
            res.status(500).json({ error: e.message })
        }
    }

    async deletePost(req, res) { 
        try {
            const { id } = req.params
            
            if (!id) { 
                res.status(404).json({ sms: 'id not found' })
            }
            const posts = await Post.findByIdAndDelete(id)
            if (!posts) {
                console.log({ e: 'yet del' })
                  res.status(404).json({ sms: 'post not found' })
            } else { 
                   console.log('!!!--- posts' + posts)
            return res.json(posts)
            }
         
            
        } catch (e) { 
            console.log(e)
            res.status(500).json('del err')
        }
    }
}

export default new PostController()