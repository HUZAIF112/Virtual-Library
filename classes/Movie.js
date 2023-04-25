const {Media} = require('./Media')

class Movie extends Media{
    constructor(title,year,genre,director,duration,rating){
        super(title,year,genre)
        this.director = director
        this.duration =  duration
        this.rating =  rating
    }
    
    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static longestMovie(Movie){
        let longest_time = 0
        let answer;

        for(let i = 0; i < Movie.length; i++){
            if(Movie[i].duration > longest_time){
                longest_time = Movie[i].duration
                answer = Movie[i]
            }
        }
        return answer
    }
} 

module.exports = {Movie}