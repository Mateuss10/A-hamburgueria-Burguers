const express = require('express')
const router = express.Router()
const fs = require ('fs')

const app = express()

app.use(express.json({extended: true}))

const readFile = ()=>{
    const content =fs.readFileSync('./data/items.json', 'utf-8')
    return JSON.parse(content)
}

const writeFile = (content)=>{
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./data/items.json',updateFile,'utf-8')
}

router.get('',(req,res)=>{
const content = readFile()
res.send(content)
})


//register 
router.post('/',(req,res)=>{
    const {name,descriçao,preco} = req.body
    const currentContent = readFile()
    const id = Math.random().toString(32).substr(2,9)
    currentContent.push({id,name,descriçao,preco})
    writeFile(currentContent)
    res.send({id,name,descriçao,preco})
    
})


