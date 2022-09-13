<div id="parent">parent
  <div id="child">
    child
  </div>
</div>

<script>
  	document.getElementById("parent").addEventListener('click', e => {
  		if(e.target !== e.currentTarget) console.log("child clicked") 
  		else console.log("parent clicked");
		});
    
    </script>
