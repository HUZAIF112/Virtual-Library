const {Media} = require('./Media')

class Music extends Media{
    constructor(title,year,genre,artist,length){
        super(title,year,genre)
        this.artist = artist
        this.length = length
    }
    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }

    static shortestAlbum(Music){
        let shortest = Infinity
        let answer;
        for(let i = 0; i < Music.length; i++){
            if(Music[i].length < shortest){
                shortest = Music[i].length
                answer = Music[i]
            }
        }
        return answer
    
    }


}

module.exports = {Music}
