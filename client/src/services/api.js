import axios from 'axios'

export const getPosts = async () => {
    const posts = await axios.get('/api/posts')
    return posts.data
}

export const getPostContent = async (slug) => {
    const posts = await axios.get(`/api/posts/${slug}`)
    return posts.data
}

   // createBlog = (post) => {
    //     const data = new FormData()
    //     data.append('title', post.title)
    //     data.append('content', post.content)
    //     data.append('img', post.img, post.img.name)
    //     data.append('imgDesc', post.imgDesc)
       
    //     console.log(data)

    //     //console.log(data.values)
    //     axios.post('/api/posts', data, {
    //         headers: {'Content-type': 'multipart/form-data'}
    //     })
    //         .then(res=>console.log("POST SUBMITTED SUCCESSFULLY"))
    // }