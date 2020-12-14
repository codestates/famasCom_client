import {withRouter} from 'react-router-dom';

const assets = ["icon.png"]; // do not need an array with one asset... but in case we want more
const path = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2104200/";
const frame = new Frame("fit", 1024, 768, "#555", "#555", assets, path);

frame.on("ready", ()=>{ // ES6 Arrow Function - similar to function(){}
	zog("ready from ZIM Frame"); // logs in console (F12 - choose console)

	// often need below - so consider it part of the template
	const stage = frame.stage;
	const stageW = frame.width;
	const stageH = frame.height;

	// REFERENCES for ZIM at https://zimjs.com
	// see https://zimjs.com/intro.html for an intro example
	// see https://zimjs.com/learn.html for video and code tutorials
	// see https://zimjs.com/docs.html for documentation

	// CODE HERE

	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// 0. Make background rectangles

	// We want to tile four rectangles
	// A ZIM Tile usually tiles a copy of a single object
	// but we can apply what is called a ZIM series
	// to change the object or a property of the object each time!
	// This series will give these colors in order
	const colors = series(pink, green, yellow, blue);

	// The series is part of a special system called ZIM VEE
	// which uses a Pick object for dynamic parameters
	// https://zimjs.com/docs.html?item=Pick
	// Just one of the many magical features of ZIM
	// don't worry about it too much now!

	// Tile four background Rectangles in 2 columns and 2 rows
	// then add the tile to the stage
	// object.addTo(container) can add to any container, the stage is default
	// We can chain most ZIM methods such as addTo()
	// Here is where we use the colors series
	// Each rectangle that gets made, gets the next color in the series!
	new Tile(new Rectangle(stageW/2, stageH/2, colors), 2, 2).addTo();

	// Set a style for all label colors
	// We could set the color as a parameter on each label instead...
	// ZIM STYLE is similar to CSS but uses Object Literals {} 
	// This may look like CSS... but it is really the other way around!
	// Coders have had object literals long before CSS
	// See more here: https://zimjs.com/docs.html?item=STYLE
	STYLE = {
		type:{
			Label:{color:white}
		}
	}

	// This is our own variable
	// to store a time in seconds for animation on each section
	// We could use an animate() series or sequence
	// but we are keeping the intro more basic...
	// We store it here because it is used in many places
	const animateTime = .5;


	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// 1. Make the drag example top left

	// To animate the sections in we put each in a container
	// The chaining after can go on the same line or multiple lines
	// Multiple lines lets you comment out individual methods
	// and can sometimes make the code easier to read
	// Make sure the semi-colon goes right at the end!
	const one = new Container(stageW/2, stageH/2)
		.addTo()
		.alp(0) // start off with alpha (transparency) of 0 
		.animate({alpha:1}, animateTime); // animate the alpha to 1


	// dragging is very simple - just use obj.drag()
   // and here we will add a boundary of the one container
   // this could be customized with a Boundary object as well
   new Circle(80, purple)
        .center(one)
        .drag(one);

	new Label("drag the circle")
		.alp(.7)
		.pos(30, 30, LEFT, BOTTOM, one);


	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// 2. Make the components example top right

	const two = new Container(stageW/2, stageH/2)
		.pos(0,0,RIGHT)
		// use the ZIM DUO technique - a single parameter
		// that is a configuration object { }
		// with properties that match the parameter names
		// this way the order does not matter
		// and we can skip parameters instead of putting null
		.animate({
			props:{alpha:0},
			from:true, // animates from the props to current value
			wait:animateTime, // wait for the first animation to finish
			time:animateTime
		});

	// There are many components in ZIM
	// Here is an example page:
	// https://zimjs.com/components/
	// Components are very customizable - i.e. here are Dial parameters:
	// min, max, step, width, backgroundColor, indicatorColor, indicatorScale, indicatorType,
	// innerCircle, innerScale, useTicks, innerTicks, tickColor, limit,
	// keyArrows, keyArrowsStep, keyArrowsH, keyArrowsV,
	// continuous, continuousMin, continuousMax, damp, style, group, inherit
	// We are just using the default:
	const dial = new Dial()
		.pos(50,50,LEFT,TOP,two)
		// any components that change have a chainable change() method
		// that will call a function when the component changes
		// we set the slider to the dial and later the dial to the slider!
		.change(()=>{
			slider.currentValue = dial.currentValue;
			stage.update();
		});

	const slider = new Slider()
		.pos(0,50,CENTER,BOTTOM,two)
		.change(()=>{
			dial.currentValue = slider.currentValue;
			stage.update();
		});

	// Note the ZIM DUO technique again
	// to get right to the alphaPicker parameter
	const cp = new ColorPicker({alphaPicker:false});

	// the usual way to capture an event
	// is with the CreateJS on() method
	// note that the on() method should not be chained
	// which means the object will need to be stored in a variable
	cp.on("change", ()=>{
		button.backgroundColor = cp.selectedColor;
		cp.removeFrom();
		stage.update();
	});
	cp.on("close", ()=>{
		cp.removeFrom();
		stage.update();
	});

	const button = new Button()
		.pos(60,-10,RIGHT,CENTER,two)
		// we could use on("click", function)
		// but ZIM has a chainable tap() method
		.tap(()=>{
			cp.center();
			stage.update();
		});

	new Label("COMPONENTS")
		.alp(.7)
		.pos(30,30,RIGHT,TOP,two);
	
	// to turn on Accessibility for Screen Readers you would use
	// new Accessibility(); 
	// you could also pass it a specific array of DisplayObjects


	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// 3. Make the Squiggle example bottom left

	const three = new Container(stageW/2, stageH/2)
		.pos(0,0,LEFT,BOTTOM)
		.animate({
			props:{alpha:0},
			from:true, // animates from the props to current value
			wait:animateTime*2, // wait for the first two to finish
			time:animateTime
		});

	const path = new Squiggle({
		onTop:false, // so does not go over triangle
		showControls:false // start with controls off
	})
		.sca(1.2) // make a little bigger
		.center(three);

	new Triangle(60,60,60,purple)
		.rot(90) // to aim along the path
		.addTo(three)
		.animate({
			props:{path:path}, // animate along path
			drag:true, // make it drag
			// loop:true, // comment out drag and try these
			// rewind:true,
			// time:5000
		});

	new Label("drag triangle, click squiggle")
		.alp(.7)
		.pos(30,30,LEFT,BOTTOM,three);


	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// 4. Make the Tile example bottom right

	const four = new Container(stageW/2, stageH/2)
		.pos(0,0,RIGHT,BOTTOM)
		.animate({
			props:{alpha:0},
			from:true, // animates from the props to current value
			wait:animateTime*3, // wait for the first three to finish
			time:animateTime
		});

	const randomColors = [green, orange, pink, yellow];
	// passing in an array [] will pick randomly from array
	const pixels = new Tile(new Rectangle(40,40,randomColors,dark),8,4,5,5).center(four);

	const eraser = new Rectangle(40,40,grey,darker)
		.sha()
		.pos(150,30,LEFT,BOTTOM,four)
		.drag();

	// add an event to erase the pixels with the eraser
	eraser.on("pressmove", ()=>{
		// ZIM loop gives each child when looping on a container
		pixels.loop(pixel=>{
			// for better performance on large tiles
			// use the hitTestGrid()
			// there are many types of hit tests in ZIM
			// see https://zimjs.com/tips.html#HITTEST
			if (eraser.hitTestBounds(pixel)) {
				pixel.alp(0).animate({
					wait:2,
					props:{alpha:1},
					time:.5
				});
				stage.update();
			}
		});
	});

	new Label("TILE AND HITS")
		.alp(.7)
		.pos(30,30,RIGHT,TOP,four);

	new Label("drag the eraser")
		.alp(.7)
		.pos(30,30,RIGHT,BOTTOM,four);

	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// 5. Make the App title and icon

	// this will now go on top of the circle that gets dragged
	new Label({
		text:"ZIM intro",
		backgroundColor:"rgba(0,0,0,.1)" // can use any HTML color such as RGBA format
	}).loc(30,30);

	// Use the asset() to access any assets
	// can also access sound this way and then .play() the sound
	asset("icon.png")
		.sca(.6)
		.alp(.8)
		.centerReg()
		.animate({
			props:{rotation:720, scale:0},
			from:true,
			wait:animateTime*4,
			time:animateTime,
			ease:"backOut"
		})
		.hov(1) // will bring alpha to 1 when hovered
		.tap(()=>{
			zgo("https://zimjs.com", "_blank");
		});	

	stage.update(); // this is needed to show any changes

	// DOCS FOR ITEMS USED
	// https://zimjs.com/docs.html?item=Frame
	// https://zimjs.com/docs.html?item=Container
	// https://zimjs.com/docs.html?item=Circle
	// https://zimjs.com/docs.html?item=Rectangle
	// https://zimjs.com/docs.html?item=Triangle
	// https://zimjs.com/docs.html?item=Squiggle
	// https://zimjs.com/docs.html?item=Label
	// https://zimjs.com/docs.html?item=Button
	// https://zimjs.com/docs.html?item=Slider
	// https://zimjs.com/docs.html?item=Dial
	// https://zimjs.com/docs.html?item=Tile
	// https://zimjs.com/docs.html?item=ColorPicker
	// https://zimjs.com/docs.html?item=tap
	// https://zimjs.com/docs.html?item=change
	// https://zimjs.com/docs.html?item=drag
	// https://zimjs.com/docs.html?item=hitTestBounds
	// https://zimjs.com/docs.html?item=hitTestGrid
	// https://zimjs.com/docs.html?item=animate
	// https://zimjs.com/docs.html?item=loop
	// https://zimjs.com/docs.html?item=sha
	// https://zimjs.com/docs.html?item=pos
	// https://zimjs.com/docs.html?item=loc
	// https://zimjs.com/docs.html?item=alp
	// https://zimjs.com/docs.html?item=hov
	// https://zimjs.com/docs.html?item=rot
	// https://zimjs.com/docs.html?item=sca
	// https://zimjs.com/docs.html?item=addTo
	// https://zimjs.com/docs.html?item=removeFrom
	// https://zimjs.com/docs.html?item=centerReg
	// https://zimjs.com/docs.html?item=center
	// https://zimjs.com/docs.html?item=Boundary
	// https://zimjs.com/docs.html?item=series
	// https://zimjs.com/docs.html?item=zog
	// https://zimjs.com/docs.html?item=zgo
	// https://zimjs.com/docs.html?item=STYLE

}); // end of ready