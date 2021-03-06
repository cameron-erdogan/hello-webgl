// applies a force to every non-fixed particle in the scene
// forgive given in a pair [fx, fy]
FOSSSim.SimpleGravityForce = function(g)
{
	FOSSSim.Force.call(this);

	this.g = g;
};

FOSSSim.SimpleGravityForce.prototype = Object.create( FOSSSim.Force.prototype);

FOSSSim.SimpleGravityForce.prototype.addForceToTotal = function(F){
	// console.log("I am a simple gravity force");
	var m = fosssim_scene.m;

	for(var i = 0; i < m.length/2; i++)
	{
		// var seg = numeric.getBlock(F, [2*i, 0], [2*i + 1, 0]);
		// seg = numeric.add( numeric.mul(m[2*i], this.g), seg);
		
		// copySegmentIntoVector(F, seg, 2*i);

		
		add2SegIntoF(F, numeric.mul(m[2*i], this.g), 2*i);
	}

};

