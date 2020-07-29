import React, { Component } from 'react';
import "./Projects.css"
let response = [
    { 
    name: 'Star Wars Poster', 
    url: 'https://starwarsempireposter.firebaseapp.com/',
    description: 'This is some practice for CSS',
    imgUrl: 'https://lh3.googleusercontent.com/EjRtMuKGxoy0FGe1vr5YLVQhC4VEEy3ylHfrnEx8FOOgnkfqvrFFfj1kANepV79Wmk-4kottFRH1oHS7n5HEErqd6hOcL5AXKfhXlMyf4_LCpUQXJMbQQhPPhhO17AxfVigHaMVx-H8XhQYnogpEd0zKRzDp3gr05endS12E-k6mARMecRQtepzhVvmiFXEP0NtCvXWcXQi9XMNoUO-4X55jskks-8y5y3BzSvE2zKxkCWoyPSWjqs8eZE3w3WxjsKLUDhclgHSHqmrO-NQtYPZ7-HwJFrXRG0Lx63yaclC5wIyDMIsQi8D_CC0ege8vAYoVbqfAsfoKrt3WoKKRj8VfeheCVajLOJ279VifiliZvNVjwgEiArGrYc4LXDFvECpj8HeFdNwPVLcyHrzz0LfRdAmgldl3EZzlLI1hciR9W5jOvFtGE4RrTzZCChGmGTV-LXN5OHXrd5jsqx2ThHzGI1WqcELw9HEnHv56ZUtdh4VVdhwi-9BBXFP5o-fJ5WpKvge7cyairlK2SIsraWcpCDkyfPUzBu90WRvxf9ip67MBOGyonZLOUU-tc3aa8ccwEgC_LDvxaqPviw1V57pH8778ScbhwL1HEsWj5X06Q1PIyLK1N3dXxVscdX7xLIJLjSgIlyRyDdBJn9HysV-kKKyXh-LELD5Du7RcwmFcPzpSVCoYY7Y_yc30hA=w598-h801-no?authuser=0', 
    techUsed: ['CSS', 'HTML' ],
    },{ 
    name: 'Matrix Poster', 
    url: 'https://dynamicmatrixcssposter.firebaseapp.com/',
    description: 'This is some practice making a Matrix poster with CSS & HTML',
    imgUrl: 'https://lh3.googleusercontent.com/kAdCKVjTzvWZlVpME4DxaPl9lSdC2474o6FsOJKL1wyx2gKtxeplYOd5Bfa8Xnmxt-7P-lKZjIF6SNR7NfVX8xNMoyCiV4t5WAes-y1CgAD8nYGsPKQ9iODpmO9VXOQZMGIpA21_Y2DPlG2j_ldjlXq9wEPM9IJ8Zl4CubEfNWHrH13ijU3Mza2FqwaQqUhTaBx0yFBAnAxHv1ymTVKU7YY7mSbu3Znks1Utn1gKVN90VS_7mYmYPODanrLqzzIYzEUjcfrzWvVRsOIkFqIPqbFpnL-Jpa358wBDzcelLr60i9orYBrfBuiG9J6dKVU4333SEKjkCebmovsHY69F_TsuI6rd0m9O4GFW5wVGjeHu7osJJWUJLO_N5ZhIGjlUMjWPmZj_mybyOJtmjOYunD1xyU2n8-dJ_nug9VoZ4pCaikzreLSphWiY342BwySR6k2xY5PkgU874IfI_i9bVG1K_QQOgTIwfSJyGOedXr9OBEQZ44TGUCgQkaOCVc1-vPVcc6ItONtzg-f6uyjBmwvQ7-3qRtZPiuiajY9dsAPfFLST2eWlRfTCS9BugVgC3PDY1noQ39ZmVHzfSEfPBadD9R-pvr71Us795-yKH3hZm558MZ-Tt36yqLSlIcI8qOAhBxNyj0aOSsPGAhQrOvnTZSSfMPq0OOOKd2Q27QtAIkKWnrEJ9BNlHnlmBQ=w396-h642-no?authuser=0', 
    techUsed: ['CSS', 'HTML' ], 
    },{ 
    name: 'project3', 
    url: 'https://project3.io',
    description: 'Project description 1',
    imgUrl: '', 
    techUsed: ['JavaScript', 'html' ],
    },{ 
    name: 'project4', 
    url: 'https://project4.io',
    description: 'Project description 2',
    imgUrl: '', 
    techUsed: ['JavaScript', 'html' ], 
    }
   ] 

class Projects extends Component { //creating a class called Projects, Syntax.
    state = {
    };

    projectShower(){
        let allProjects = []
        for(let i = 0; i <response.length; i++){
            allProjects.push(
                <div key={response[i].name}>
                    <h1>{response[i].name}</h1>
                </div>
                )
        }
        return allProjects
    }

    render(){ 
        return ( 
            <div className="componentWrapper">
                <h1>Projects</h1>
                {this.projectShower()}
                
            </div>
        
        )
    }
}

export default Projects;

