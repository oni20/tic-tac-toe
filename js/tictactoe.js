		var used;
		var content;
		var winningEpoch;
		var turn = 0;
		var theCanvas;
		var c;
		var cxt;
		var grd;
		var squaresFilled = 0;
		var y;

		window.onload=function()
		{		
			used = new Array();
			content = new Array();
			winningEpoch = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

			for(var l = 0; l <= 8; l++)
				{
					used[l] = false;
					content[l]='';
				}
		}
		//Game methods
		function canvasClicked(canvasNumber){
			theCanvas = "canvas"+canvasNumber;
			//c = document.getElementById(theCanvas);
			cxt = document.getElementById(theCanvas).getContext("2d");

	grd = cxt.createRadialGradient(75,50,5,90,60,100);


			if(used[canvasNumber-1] ==false){
				if(turn%2==0){
					document.getElementById("myText").value = "";
					grd.addColorStop(0,"Salmon");
					cxt.fillStyle = grd;
					cxt.fillRect(0,0,100,100);
					cxt.lineWidth = 10;
					cxt.beginPath();
					cxt.moveTo(30,30);
					cxt.lineTo(70,70);
					cxt.moveTo(70,30);
					cxt.lineTo(30,70);
					cxt.lineCap= 'round';
					cxt.strokeStyle = '#FFFFFF';
					cxt.stroke();
					cxt.closePath();
					content[canvasNumber-1] = 'X';
				}
				else{
					document.getElementById("myText").value = "";
					grd.addColorStop(0,"HotPink ");
					cxt.fillStyle = grd;
					cxt.fillRect(0,0,100,100);
					cxt.beginPath();
					cxt.arc(50,50,25,0,Math.PI*2,true);
					cxt.lineWidth = 10;
					cxt.strokeStyle = '#FFFFFF';
					cxt.stroke();
					cxt.closePath();
					content[canvasNumber-1] = 'O';					
				}
				turn++;
				used[canvasNumber-1] = true;
				squaresFilled++;
				checkForWinners(content[canvasNumber-1]);
				if(squaresFilled==9){
					document.getElementById("myText").value = "Draw!";
				}			
			}
			else{
				document.getElementById("myText").value = "Space is already occupied!";
			}
		}

		function checkForWinners(symbol){
			
			for(var a = 0; a < winningEpoch.length; a++){
			if(content[winningEpoch[a][0]]==symbol&&content[winningEpoch[a][1]]==	symbol&&content[winningEpoch[a][2]]==symbol){
				document.getElementById("myText").value = symbol+ " WON!";
				//playAgain();		
			}
			}
		}
		function playAgain(){
			//y=confirm("PLAY AGAIN?");
			//if(y==true){
				location.reload(true);
			//}
		}
		