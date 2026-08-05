const button=document.getElementById("loadBtn");
const titl=document.getElementById("title");
const art=document.getElementById("artist");
const alb=document.getElementById("Album");
const image= document.getElementById("cover");
const downloadBtn=document.getElementById("downloadBtn");

button.addEventListener("click",()=>{
    const songLink=document.getElementById("songurl").value;
    if (songLink==""){
        alert("Enter the song link");
    }else{
    console.log(songLink);
    }
    fetch(`https://spotify-downloader9.p.rapidapi.com/downloadSong?songId=${songLink}`,{
        method:"GET",
        headers:{
            'x-rapidapi-key': 'a681a3b637mshc19f49e1527d179p17cca0jsn6fa875eb8e3f',
		    'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com',
		    'Content-Type': 'application/json'
            
        }
    })
    .then((response)=>{
         return response.json();

    })
    .then((data)=>{
        console.log(data);
        const textcontent=data.data.title;
        titl.textContent=textcontent;
        const artists=data.data.artist;
        art.textContent=artists;
        const albums=data.data.album;
        alb.textContent=albums;
        const images=data.data.cover;
        image.src=images;
        const link=data.data.downloadLink;
        console.log(link);
        downloadBtn.onclick=()=>{
            window.open(link,"_blank");

        };
    
    })
    
    });
     
    
/* body{
    background-color: rgb(39, 179, 39);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    
}
#songurl{
    width: 200px;
    height: 40px;
    margin-left: 50px;
    text-align: center;
}
#loadBtn{
    margin-left: 50px;
    margin-top: 30px;
    width: 200px;
    height: 40px;
    font-weight: bold;
    font-size: 20px;
    border-radius: 10px;
    border-color: chartreuse;
    
}
*/
/*<!DOCTYPE html>
<html>
    <head>
        <title>
            DownloadSpotifySong
        </title>
    </head>
    <link rel="stylesheet" href="download.css">
    <body>
       <div id="all">
        <h1>DownloadSongHere!!</h1>
        <br>
        <input type="text" placeholder="paste spotify link" id="songurl">
        <br>
        <input type="button" id="loadBtn" value="Search"> 
        <h2 id="title"></h2>   
        <h3 id="artist"></h3>
        <h4 id="Album"></h4>
        <img id="cover" width="200">
        <button id="downloadBtn">Download Song</button>
       </div>

        <script src="download.js"></script>

    </body>
</html> */



    