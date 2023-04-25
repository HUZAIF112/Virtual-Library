const {Media} = require('./Media')

class Book extends Media{
    constructor(title,year,genre,author,numPages,rating){
        super(title,year,genre)
        this.author = author
        this.numPages = numPages
        this.rating = rating
    }
    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static highestRating(Book){
        let highest = 0
        let answer;
       for(let i = 0;i < Book.length; i++){
        if(Book[i].rating > highest){
            highest = Book[i].rating
            answer = Book[i]
        }
    }
    return answer
}
}
module.exports = {Book}