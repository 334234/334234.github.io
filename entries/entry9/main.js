$(document).ready(function() {

			// list one content
			var one = [
				"cute",
				"smooth",
				"evil",
				"dusty",
				"open",
				"organic",
				"futuristic",
				"soft",
				"round",
				"sour",
				"old",
				"abnormal",
				"striped",
				"sticky",
				"plastic",
			];

			// list two content
			var two = [
				"alarm",
				"blob",
				"porpoise",
				"bug",
				"pill",
				"oval",
				"jacket",
				"friend",
				"inch",
				"fountain",
				"suspect",
				"deer",
				"pool",
				"door",
				"students",
			];
            
            // list three content
			var three = [
				"circus",
				"ktown",
				"soho",
				"zoo",
                "pool",
				"farm",
				"whole foods",
				"trader joe",
                "hmart",
				"studio",
				"Manhattan",
                "university",
				"parsons",
				"street"
			];
            

			// This is a very common randomizing function.
			// It takes a list (array) and returns one at random.
			function select_random(x){
				return x[Math.floor(Math.random()*x.length)];
				
			}

			function generate(){

				// Select a random item from each list
				var selected_one = select_random(one);
				var selected_two = select_random(two);
                var selected_three = select_random(three);

				// Take the selected (random) item from list and make it visible
				$('.list-one').html(selected_one);
				$('.list-two').html(selected_two);
                $('.list-three').html(selected_three);

			}

			$('button').click(function(){
				generate();
			});

			generate();
			
		});

console.log("main.js is executed!");

