function solve(arr) {

    class Song  {
        constructor(type, name, time) {
        this.type = type;
        this.name = name;
        this.time = time;
        }    
    }
    let songs = [];
    let numberofSongs = arr.shift();
    let typeSong = arr.pop();

    for (let index = 0; index < numberofSongs.length; index++) {
        let [type, name, time] = arr[index].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }
    if(type === "all") {
        songs.forEach((inndex) = console.log(index.name));
    }else {
        let filtered = songs.filter((index) => index.type === typeSong);
        filtered.forEach((index) => console.log(index.name));
    }
}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])