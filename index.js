 const PORT = process.env.PORT || 8000
// const PORT = 8000

const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()

const article = []

app.get('/', (req, res) =>{
    try {   
        axios.get('https://www.scholarshiptab.com/').then((response) => {
            const html = response.data
            // res.json(html)
            const $ = cheerio.load(html)

            $('.item-list .item-list-li', html).each(function () {
                const title = $(this).children('ul').children('.item-details').children('ul').children('.item-h2').children('h2').children('a').text()
                const image = $(this).children('ul').children('.item-logo').children('a').children('img').attr('src')
                const url = $(this).children('ul').children('.item-details').children('ul').children('.item-h2').children('h2').children('a').attr("href")
                const desc = $(this).children('ul').children('.item-details').children('ul').children('.item-desc').text()
                const deadline = $(this).children('ul').children('.item-details').children('ul').children('li').last().children('ul').children('li').first().children('span').text()
                const pre = "https://www.scholarshiptab.com"
    
                article.push({
                    title,
                    image: pre + image,
                    url: pre + url,
                    desc,
                    deadline
                })

            })

            res.json(article)

        })
    }
        catch (error) {
            {throw error}
        }
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

