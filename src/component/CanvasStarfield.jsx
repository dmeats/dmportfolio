import React, { useEffect, useRef } from 'react'
import './canvas.css'


const CanvasStarfield = () =>{
//let x=1
//let y=1

    const canvasRef = useRef(null)

    class Circle {

        constructor(x,y,dx,dy,radius){
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.radius = radius
       
        }
        draw = (ctx) =>{
            
            
            ctx.beginPath()
            ctx.arc(this.x,this.y,this.radius,0, Math.PI * 2, false)
            ctx.fillStyle = '#2957D6'
            ctx.fill()
            ctx.strokeStyle = '#2957D6'
            ctx.stroke()
        }
        update = (ctx) => {

            if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0){
                this.dx = -this.dx
                
           //     console.log('made it here')
            }
            if (this.y + this.radius > window.innerWidth || this.y - this.radius < 0){
                this.dy = -this.dy
                
           //     console.log('made it here')
            }
            this.x += this.dx
            this.y += this.dy
            this.draw(ctx)

        }
        
    }

    


    useEffect (()=>{

        let circlearry = []
        for (var i = 0; i < 500; i++) {
            let x = Math.random() * window.innerWidth
            let y = Math.random() * window.innerHeight
            let radius = Math.random() * 1.5
            let dy = Math.random() * -.6
            let dx = Math.random() * .6
            circlearry.push(new Circle(x,y,dx,dy,radius))
    
            }
            //console.log(circlearry)

        //let circle = new Circle(700,450,-.2,.07,20)
     
        
        const render = () =>{
         
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        //sets canvas size to browser
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        ctx.clearRect(0,0,canvas.width, canvas.height)

        
       
            
       
           
        for (i = 0; i < circlearry.length; i++) {
        
            circlearry[i].update(ctx)
            //console.log('this is i: '+i)
           
            }
            
       
        
        //console.log(a)
        //console.log('this is i: '+i)
        
        requestAnimationFrame(render)
    }
       
        render()
    })

    

   
return(

    <canvas id='canvas' ref={canvasRef} />

)
}
export default CanvasStarfield;
