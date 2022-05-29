const axios  = require("axios")

module.exports = async (req, res) => {

    const slug = req.params.slug

    const query = `
        query postBySlug($slug: String! ){
            postBySlug(slug: $slug ){
                body,
                author
            }
        }
    `

    try{
        const postData = await axios.get("http://localhost:3000/graphql", {
            data: {
                query, 
                variables: {
                    slug
                }
            },
            'Content-Type': 'application/json'
        })

        // console.log(postData.data.data.postBySlug)
        const post = postData.data.data.postBySlug;

        if (!post) {
            res.redirect('/')
            return
        }

        res.render('profile', {post})

    } catch(e){
        console.log(e)
    }

    // res.render('profile')
}