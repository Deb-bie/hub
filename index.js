 const PORT = process.env.PORT || 8000
// const PORT = 8000

const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()
const cache = require('./routeCache')



const intl = [
    {
        link: "https://www.scholarshiptab.com/",
        master: "https://www.scholarshiptab.com/masters",
        undergrad: "https://www.scholarshiptab.com/undergraduate",
        phd: "https://www.scholarshiptab.com/phd",
        college: "https://www.scholarshiptab.com/college-school",
        women: "https://www.scholarshiptab.com/scholarships-by-gender/women",
        developing: "https://www.scholarshiptab.com/developing-countries",
        
    },{
        link: "https://www.scholarshiptab.com/page/2",
        master: "https://www.scholarshiptab.com/masters/2",
        undergrad: "https://www.scholarshiptab.com/undergraduate/2",
        phd: "https://www.scholarshiptab.com/phd/2",
        college: "https://www.scholarshiptab.com/college-school/2",
        women: "https://www.scholarshiptab.com/scholarships-by-gender/women/2",
        developing: "https://www.scholarshiptab.com/developing-countries/2",
    },{
        link: "https://www.scholarshiptab.com/page/3",
        master: "https://www.scholarshiptab.com/masters/3",
        undergrad: "https://www.scholarshiptab.com/undergraduate/3",
        phd: "https://www.scholarshiptab.com/phd/3",
        college: "https://www.scholarshiptab.com/college-school/3",
        women: "https://www.scholarshiptab.com/scholarships-by-gender/women/3",
        developing: "https://www.scholarshiptab.com/developing-countries/3",
    }
]

const article = []
const masters = []
const undergrad = []
const phd = []
const college = []
const women = []
const developing = []

intl.forEach(link => {
    axios.get(link.link).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"

            article.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/', cache(88000), (req, res) =>{res.json(article)})


intl.forEach(link => {
    axios.get(link.master).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"

            masters.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/master', cache(88000), (req, res) =>{res.json(masters)})


intl.forEach(link => {
    axios.get(link.undergrad).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"

            undergrad.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/undergrad', cache(88000), (req, res) =>{res.json(undergrad)})


intl.forEach(link => {
    axios.get(link.phd).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"
            phd.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/phd', cache(88000), (req, res) =>{res.json(phd)})


intl.forEach(link => {
    axios.get(link.college).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"

            college.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/college', cache(88000), (req, res) =>{res.json(college)})


intl.forEach(link => {
    axios.get(link.women).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"

            women.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/women', cache(88000), (req, res) =>{res.json(women)})



intl.forEach(link => {
    axios.get(link.developing).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"
            developing.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/developing', cache(88000), (req, res) =>{res.json(developing)})



app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))



