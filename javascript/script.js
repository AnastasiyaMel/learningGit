<script>
    $(function(){
			// create a variable for the userName
			var userName = prompt("What is your name?");
			console.log(userName);
			$("h1").text(`Hello,${userName}`);
		});
	</script>