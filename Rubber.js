class Rubber{
	constructor(x,y,r)
	{
		var options = {
			restitution	:0.3,
			friction:5,
			density:1
		}
	// assign options to the rubber ball
		this.body=Bodies.circle(x, y, r, options) 
		this.r =r
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipseMode(RADIUS)
			eclipse.display();
			pop()
	}

}