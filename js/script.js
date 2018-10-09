$(document).ready(function() {
	const canvas = $("#canvas");
	const ctx = canvas[0].getContext("2d");

	function Init() {
		Loop();
	}

	function Update() {
		if(!player.profile.isOn && !npc.dialogue.isOn && !puzzle.isOn) {
			player.searchNPC();
			cam.move();
			player.move();		
		}

 		if(puzzle.isOn) {
 			if(npc.array[player.searchNPC()].name == "Heloisa" && !puzzle.puzzlePong.intro && !puzzle.pause) {
 				puzzle.puzzlePong.movePlayer();
 				puzzle.puzzlePong.moveEnemy();
 				puzzle.puzzlePong.moveBall();
 				puzzle.puzzlePong.colide();
 				puzzle.puzzlePong.gameOver();
 			} else if(npc.array[player.searchNPC()].name == "Jorge" && !puzzle.puzzleFishing.intro && !puzzle.pause) {
 				puzzle.puzzleFishing.movePlayer();
 				puzzle.puzzleFishing.updateFish();
 			} else if(npc.array[player.searchNPC()].name == "Sofia" && !puzzle.puzzleBreakout.intro && !puzzle.pause) {
 				puzzle.puzzleBreakout.movePlayer();
 				puzzle.puzzleBreakout.moveBall();
 				puzzle.puzzleBreakout.ballColidePlayer();
 				puzzle.puzzleBreakout.ballColideEnemy();
 				puzzle.puzzleBreakout.ballColideWalls();	
 			} else if(npc.array[player.searchNPC()].name == "Mario" && !puzzle.puzzleFlappyBird.intro && !puzzle.pause) {
 				puzzle.puzzleFlappyBird.jump();
 				puzzle.puzzleFlappyBird.gravity();
 				puzzle.puzzleFlappyBird.movePillar();
 				puzzle.puzzleFlappyBird.scoring();
 				puzzle.puzzleFlappyBird.colide();
 			} else if(npc.array[player.searchNPC()].name == "Bruno" && !puzzle.puzzleGuitarHero.intro && !puzzle.pause) {
 				puzzle.puzzleGuitarHero.moveTiles();
				puzzle.puzzleGuitarHero.pressKey(); 				
 			} else if(npc.array[player.searchNPC()].name == "Ronaldo" && !puzzle.puzzleMaze.intro && !puzzle.pause) {
 				puzzle.puzzleMaze.movePlayer();				
 			}
		}		
	}

	function Render() {
		if(!player.profile.isOn && !npc.dialogue.isOn) {			
			ctx.save();
			ctx.translate(-cam.x, -cam.y);
			cam.x = Math.max(0,Math.min(scenario.width - cam.width,cam.x));
			cam.y = Math.max(0,Math.min(scenario.height - cam.height,cam.y));					
			scenario.drawTiles();
			npc.draw();	
			player.draw();				
			ctx.restore();
			if(!puzzle.isOn) {
				npc.infoNPC.draw();			
			}	
		} 
 		if(puzzle.isOn) {
			if(npc.array[player.searchNPC()].name == "Jorge") {
				puzzle.puzzleFishing.draw();
				puzzle.puzzleFishing.drawFish();		
			} else if(npc.array[player.searchNPC()].name == "Heloisa") {
				puzzle.puzzlePong.draw();
			} else if(npc.array[player.searchNPC()].name == "Mario") {
				puzzle.puzzleFlappyBird.draw();
			} else if(npc.array[player.searchNPC()].name == "Sofia") {
				puzzle.puzzleBreakout.draw();				
			} else if(npc.array[player.searchNPC()].name == "Bruno") {
				puzzle.puzzleGuitarHero.draw();				
			} else if(npc.array[player.searchNPC()].name == "Ronaldo") {
				puzzle.puzzleMaze.draw();
			}
		}		
		if(player.profile.isOn) {
			player.profile.draw();
		} 
		if(npc.dialogue.isOn) {
			npc.dialogue.draw();
		}
	}

	function Loop() {
		window.requestAnimationFrame(Loop, canvas);
		Update();
		Render();
	}

	function DrawRect(color, x, y, width, height) {
		ctx.fillStyle = color;
		ctx.fillRect(x, y, width, height);
	}

	function RenderImage(image, x, y, width, height) {		
		ctx.drawImage(image ,x, y, width, height);
	}	

	function LoadImages() {
		this.dialogue_background = new Image();
		this.dialogue_background.src = "./imgs/dialogue_background.png";		
		this.grama_solo = new Image();
		this.grama_solo.src = "./imgs/grama_solo.png";
		this.terra_solo = new Image();
		this.terra_solo.src = "./imgs/terra_solo.png";
		this.agua_solo = new Image();
		this.agua_solo.src = "./imgs/agua_solo.png";	
		this.grama2 = new Image();
		this.grama2.src = "./imgs/grama2.png";
		this.grama3 = new Image();
		this.grama3.src = "./imgs/grama3.png";
		this.grama4 = new Image();
		this.grama4.src = "./imgs/grama4.png";
		this.grama5 = new Image();
		this.grama5.src = "./imgs/grama5.png";
		this.grama6 = new Image();
		this.grama6.src = "./imgs/grama6.png";
		this.flower = new Image();
		this.flower.src = "./imgs/flower.png";
		this.fence_left = new Image();
		this.fence_left.src = "./imgs/fence_left.png";
		this.fence_solo = new Image();
		this.fence_solo.src = "./imgs/fence_solo.png";
		this.mario = new Image();
		this.mario.src = "./imgs/Mario.png";
		this.marioBody = new Image();
		this.marioBody.src = "./imgs/MarioBody.png";
		this.sofia = new Image();		
		this.sofia.src = "./imgs/Sofia.png";
		this.sofiaBody = new Image();		
		this.sofiaBody.src = "./imgs/sofiaBody.png";		
		this.bruno = new Image();
		this.bruno.src = "./imgs/Bruno.png";
		this.taya = new Image();
		this.taya.src = "./imgs/taya.png";
		this.jorge = new Image();
		this.jorge.src = "./imgs/Jorge.png";
		this.jorgeBody = new Image();
		this.jorgeBody.src = "./imgs/jorgeBody.png";
		this.ronaldo = new Image();
		this.ronaldo.src = "./imgs/Ronaldo.png";
		this.ronaldoBody = new Image();
		this.ronaldoBody.src = "./imgs/ronaldoBody.png";				
		this.house_solo = new Image();
		this.house_solo.src = "./imgs/house_solo.png";
		this.window = new Image();
		this.window.src = "./imgs/window.png";
		this.door1 = new Image();
		this.door1.src = "./imgs/door1.png";
		this.door2 = new Image();
		this.door2.src = "./imgs/door2.png";
		this.roof_bottom = new Image();
		this.roof_bottom.src = "./imgs/roof_bottom.png";
		this.roof_top = new Image();
		this.roof_top.src = "./imgs/roof_top.png";
		this.roof_left = new Image();
		this.roof_left.src = "./imgs/roof_left.png";
		this.roof_right = new Image();
		this.roof_right.src = "./imgs/roof_right.png";
		this.roof_bottom_left = new Image();
		this.roof_bottom_left.src = "./imgs/roof_bottom_left.png";
		this.roof_bottom_right = new Image();
		this.roof_bottom_right.src = "./imgs/roof_bottom_right.png";
		this.roof_top_left = new Image();
		this.roof_top_left.src = "./imgs/roof_top_left.png";
		this.roof_top_right = new Image();
		this.roof_top_right.src = "./imgs/roof_top_right.png";
		this.bridge_top = new Image();
		this.bridge_top.src = "./imgs/bridge_top.png";									
	}

	$(document).keydown(function(e){
		switch(e.which) {
			case 37:				
				player.moveLeft = true;
				if(puzzle.isOn) {
					puzzle.playerMoveLeft = true;
					break;
				}				
				break;
			case 38:				
				player.moveUp = true;
				if(puzzle.isOn) {
					if(!puzzle.upIsDown) {
						puzzle.puzzleFlappyBird.playerJumping = true;
					}
					puzzle.playerMoveUp = true;				
					break;
				}	

				break;
			case 39:				
				player.moveRight = true;
				if(puzzle.isOn) {
					puzzle.playerMoveRight = true;
					break;
				}								
				break;
			case 40:				
				player.moveDown = true;
				if(puzzle.isOn) {
					puzzle.playerMoveDown = true;
					break;
				}				
				break;

			case 13:
				if(puzzle.puzzlePong.intro && !puzzle.pause) {
					puzzle.puzzlePong.intro = false;
				}	else if(puzzle.puzzleFishing.intro && !puzzle.pause) {
					puzzle.puzzleFishing.intro = false;
					puzzle.puzzleFishing.addFish();
					puzzle.puzzleFishing.time();					
				}	else if(puzzle.puzzleBreakout.intro && !puzzle.pause) {
					puzzle.puzzleBreakout.intro = false;
					puzzle.puzzleBreakout.addEnemies();			
				}	else if(puzzle.puzzleFlappyBird.intro && !puzzle.pause) {
					puzzle.puzzleFlappyBird.intro = false;
					puzzle.puzzleFlappyBird.addPillars();			
				}	else if(puzzle.puzzleGuitarHero.intro && !puzzle.pause) {
					puzzle.puzzleGuitarHero.intro = false;
					puzzle.puzzleGuitarHero.addControllers();
					puzzle.puzzleGuitarHero.addTiles();
				}	else if(puzzle.puzzleMaze.intro && !puzzle.pause) {
					puzzle.puzzleMaze.intro = false;
					puzzle.puzzleMaze.time();				}
				if(!player.profile.isOn && !npc.dialogue.isOn && !puzzle.isOn) {
					player.profile.isOn = true;
					break;
				} else {
					player.profile.isOn = false;
					break;
				}

			case 80:
				if(!puzzle.pause && puzzle.isOn) {
					puzzle.pause = true;
				} else {
					puzzle.pause = false;
				}

			case (!puzzle.isOn):
				case 81:
					if(!npc.dialogue.isOn && !player.profile.isOn && !puzzle.isOn && npc.array[player.searchNPC()] != null) {
						if(!player.moveLeft && !player.moveUp && !player.moveRight && !player.moveDown) {
							npc.dialogue.isOn = true;
							break;
						}
					} 
					if(npc.dialogue.isOn) {
						npc.dialogue.isOn = false;
						break;
					}	
				break;			

			case 83:
				if(npc.array[player.searchNPC()] != null && npc.array[player.searchNPC()].name == "Heloisa" && !puzzle.isOn) {
					puzzle.puzzlePong.intro = true;
				} else if(npc.array[player.searchNPC()] != null && npc.array[player.searchNPC()].name == "Jorge" && !puzzle.isOn) {
					puzzle.puzzleFishing.intro = true;
				} else if(npc.array[player.searchNPC()] != null && npc.array[player.searchNPC()].name == "Sofia" && !puzzle.isOn) {
					puzzle.puzzleBreakout.intro = true;
				} else if(npc.array[player.searchNPC()] != null && npc.array[player.searchNPC()].name == "Mario" && !puzzle.isOn) {
					puzzle.puzzleFlappyBird.intro = true;
				} else if(npc.array[player.searchNPC()] != null && npc.array[player.searchNPC()].name == "Bruno" && !puzzle.isOn) {
					puzzle.puzzleGuitarHero.intro = true;
				} else if(npc.array[player.searchNPC()] != null && npc.array[player.searchNPC()].name == "Ronaldo" && !puzzle.isOn) {
					puzzle.puzzleMaze.intro = true;
				}
				if(npc.dialogue.isOn && npc.array[player.searchNPC()].hasPuzzle) {
					puzzle.isOn = true;
					npc.dialogue.isOn = false;
					break;
				}
			break;

			case (!puzzle.isOn):
				case 78:
					if(npc.dialogue.isOn && npc.array[player.searchNPC()].hasPuzzle) {
						npc.dialogue.isOn = false;
						break;
					}
				break;

			case 90:
				if(!puzzle.zIsDown) {
					puzzle.controlRed = true;
					puzzle.zIsDown = true;
				}
				break;
			case 88:
				if(!puzzle.xIsDown) {
					puzzle.controlBlue = true;
					puzzle.xIsDown = true;
				}
				break;
			case 67:
				if(!puzzle.cIsDown) {
					puzzle.controlGreen = true;
					puzzle.cIsDown = true;
				}
				break;
			case 86:
				if(!puzzle.vIsDown) {
					puzzle.controlPurple = true;
					puzzle.vIsDown = true;
				}
				break;

			case 27:
				if(puzzle.puzzlePong.intro) {
					puzzle.isOn = false;
				} else if(puzzle.puzzleFishing.intro) {
					puzzle.isOn = false;
				} else if(puzzle.puzzleBreakout.intro) {
					puzzle.isOn = false;
				} else if(puzzle.puzzleFlappyBird.intro) {
					puzzle.isOn = false;
				} else if(puzzle.puzzleGuitarHero.intro) {
					puzzle.isOn = false;
				} else if(puzzle.puzzleMaze.intro) {
					puzzle.isOn = false;
				}
				if(puzzle.puzzlePong.outro) {
					puzzle.puzzlePong.outro = false;
					puzzle.puzzlePong.exit();
				} else if(puzzle.puzzleFishing.outro) {
					puzzle.puzzleFishing.outro = false;
					puzzle.puzzleFishing.exit();					
				} else if(puzzle.puzzleFlappyBird.outro) {
					puzzle.puzzleFlappyBird.outro = false;
					puzzle.puzzleFlappyBird.exit();					
				} else if(puzzle.puzzleBreakout.outro) {
					puzzle.puzzleBreakout.outro = false;
					puzzle.puzzleBreakout.exit();					
				} else if(puzzle.puzzleGuitarHero.outro) {
					puzzle.puzzleGuitarHero.outro = false;
					puzzle.puzzleGuitarHero.exit();					
				} else if(puzzle.puzzleMaze.outro) {
					puzzle.puzzleMaze.outro = false;
					puzzle.puzzleMaze.exit();					
				}							
		}
	})

	$(document).keyup(function(e){
		switch(e.which) {
			case 37:
				player.moveLeft = false;
				if(puzzle.isOn) {
					puzzle.playerMoveLeft = false;
					break;
				}					
				break;
			case 38:
				player.moveUp = false;
				if(puzzle.isOn) {
					puzzle.playerMoveUp = false;
					puzzle.upIsDown = false;
					break;
				}				
				break;
			case 39:
				player.moveRight = false;
				if(puzzle.isOn) {
					puzzle.playerMoveRight = false;
					break;
				}					
				break;
			case 40:
				player.moveDown = false;
				if(puzzle.isOn) {
					puzzle.playerMoveDown = false;
					break;
				}				
				break;

			case 90:
				puzzle.zIsDown = false;
				break;
			case 88:
				puzzle.xIsDown = false;
				break;
			case 67:
				puzzle.cIsDown = false;
				break;
			case 86:
				puzzle.vIsDown = false;
				break;				
		}
	})	

	class Player {
		constructor() {
			this.name = "Cecil";
			this.x = 310;
			this.y = 200;
			this.width = 25;
			this.height = 25;
			this.level = 0;
			this.actualXp = 0;
			this.xpCalc = 0;
			this.storageXp = 0;
			this.levelMath = 0;
			this.levelPhysicalEducation = 0;
			this.levelEnglish = 0;
			this.color = "Black";
			this.speed = 8;
			this.moveLeft = this.moveUp = this.moveRight = this.moveDown = false;					
			this.talking = false;
		}

		draw() {
			DrawRect(this.color, this.x, this.y, this.width, this.height);
		}

		move() {
			if(this.moveLeft && this.x >= 0) {
				this.x -= this.speed;
			}
			if(this.moveUp && this.y >= 0) {
				this.y -= this.speed;
			}
			if(this.moveRight && this.x + this.width <= scenario.width) {
				this.x += this.speed;
			}
			if(this.moveDown && this.y + this.height <= scenario.height) {
				this.y += this.speed;
			}
		}

		levelUp(score) {
			if(score >= 100 && score < 200) {
				this.storageXp = score - 100;
				this.actualXp = this.storageXp;
				this.level += 1;
			} else if(score >= 200) {
					this.storageXp = score - 200;
					this.actualXp = this.storageXp;
					this.level += 2;
			} else if(this.actualXp + score < 100) {
					this.actualXp += score;
			} else if(this.actualXp + score >= 100 && this.actualXp + score < 200) {
					this.xpCalc = (this.actualXp + score) - 100;
					this.actualXp = this.xpCalc;
					this.level += 1;
			} else if(this.actualXp + score >= 200) {
					this.xpCalc = (this.actualXp + score) - 200;
					this.actualXp = this.xpCalc;
					this.level += 2;
			}	
		}

		searchNPC() {
			for(var i = 0; i < npc.array.length; i++) {
				this.currentNPC = npc.array[i];
				if(this.x + this.width + 10 >= this.currentNPC.x &&
					this.x - 10 <= this.currentNPC.x + this.currentNPC.width &&
					this.y + this.height + 10 >= this.currentNPC.y &&
					this.y - 10 <= this.currentNPC.y + this.currentNPC.height) {																					
					return [npc.array.indexOf(this.currentNPC)];
				}
			}
		}
	}

	class Profile {
		constructor() {
			this.width = 600;
			this.height = 500;
			this.x = canvas.width() / 2 - this.width / 2;
			this.y = canvas.height() / 2 - this.height / 2;
			this.bgColor = "#CAE1FF";
			this.isOn = false;
		}

		draw() {
			ctx.fillStyle = this.bgColor;
			ctx.fillRect(this.x, this.y, this.width, this.height);
			//Cor das bordas das divs
			ctx.fillStyle = "Black";		
			//Desenhando div que mostrará a foto do personagem
			ctx.strokeRect(this.x + 5, this.y + 5, 100, 100);
			//Desenhando a div da lista de conhecimentos
			ctx.strokeRect(this.x + 5, this.y + 110, 170, 385);
			ctx.font = "17px Cursive";
			ctx.fillText("Maiores pontuações", this.x + 10, this.y + 130);
			ctx.fillText("Pong: " + puzzle.highestScorePong, this.x + 10, this.y + 160);
			ctx.fillText("Pescaria: " + puzzle.highestScoreFishing, this.x + 10, this.y + 180);
			ctx.fillText("Flappy Bird: " + puzzle.highestScoreFlappyBird, this.x + 10, this.y + 200);
			ctx.fillText("Breakout: " + puzzle.highestScoreBreakout, this.x + 10, this.y + 220);
			ctx.fillText("Guitar Hero: " + puzzle.highestScoreGuitarHero, this.x + 10, this.y + 240);
			ctx.fillText("Labirinto: " + puzzle.highestScoreMaze, this.x + 10, this.y + 260);
			//Desenhando a div das informações do personagem
			ctx.strokeRect(this.x + 110, this.y + 5, 485, 100);
			ctx.font = "30px Cursive";
			ctx.fillText("Nome", this.x + 120, this.y + 40);
			ctx.fillText(player.name, this.x + 120, this.y + 80);
			ctx.fillText("Nível", this.x + 450, this.y + 40);
			ctx.fillText(player.level, this.x + 530, this.y + 40);
			ctx.fillText("XP: ", this.x + 480, this.y + 80);
			ctx.fillText(Math.floor(player.actualXp), this.x + 530, this.y + 80);
			//Desenhando a div inventário do personagem
			ctx.strokeRect(this.x + 180, this.y + 110, 415, 270);
			//Desenhando a div da Generosidade do personagem
			ctx.strokeRect(this.x + 180, this.y + 385, 415, 110);			
		}			
	}

	class NPC {
		constructor(name ,message, body, x, y, width, height, img, profession, friendlyLevel, hasPuzzle) {
			this.name = name;
			this.message = message;
			this.body = body;
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			this.img = img;
			this.profession = profession;
			this.friendlyLevel = friendlyLevel;
			this.hasPuzzle = hasPuzzle;
			this.array = [];
		}

		add() {
				//Nome
				//Mensagem
				//Cor
				//Posição em X
				//Posição em Y
				//Largura
				//Altura
				//Imagem
				//Profissão
				//Nível de amizade
				//Precisa de ajuda?

			this.array.push(new NPC(
				"Heloisa", 
				"Oi, " + player.name + ", quer brincar comigo?", 
				img.sofiaBody, 
				400, 
				100, 
				25, 
				25, 
				img.taya,
				"",
				"1",
				true
			));

			this.array.push(new NPC(
				"Mario", 
				"Olá, " + player.name + ", bom dia!", 
				img.marioBody, 
				400, 
				270, 
				25, 
				25, 
				img.mario,
				"Agricultor",
				"1",
				true
			));

			this.array.push(new NPC(
				"Sofia", 
				"Oi, " + player.name + ", tudo bem?", 
				img.sofiaBody, 
				200, 
				500, 
				25, 
				25, 
				img.sofia,
				"Comerciante",
				"1",
				true
			));

			this.array.push(new NPC(
				"Bruno", 
				"Bom dia!",
				img.marioBody,
				240, 
				200, 
				25, 
				25, 
				img.bruno,
				"Músico",
				"1",
				true
			));

			this.array.push(new NPC(
				"Jorge", 
				"Bom dia, " + player.name + "! Gostaria de me ajudar a pescar?",
				img.jorgeBody, 
				300, 
				300, 
				25, 
				25, 
				img.jorge,
				"Pescador",
				"1",
				true
			));

			this.array.push(new NPC(
				"Ronaldo", 
				"Eae, " + player.name + "! Tenho um desafio para você, quer jogar?",
				img.ronaldoBody, 
				500, 
				300, 
				25, 
				25, 
				img.ronaldo,
				"Explorador",
				"1",
				true
			));			
		}

		draw() {
			for (var i = 0; i < this.array.length; i++) {
				var currentNPC = this.array[i];
				RenderImage(currentNPC.body, currentNPC.x, currentNPC.y, 30, 30);
				scenario.blockRectangle(player, currentNPC.x, currentNPC.y, 30, 30);
			}
		}
	}	

	class Dialogue {
		constructor() {
			this.width = 800;
			this.height = 200;
			this.x = canvas.width() / 2 - this.width / 2;
			this.y = canvas.height() - this.height - 10;
			this.img = img.dialogue_background;
			this.isOn = false;	
		}

		answer() {
			ctx.font = "30px Cursive";
			ctx.fillStyle = "Green";
			ctx.fillText("Sim (Pressione S)", 115, 510);
			ctx.fillStyle = "Red";
			ctx.fillText("Não (Pressione N)", 115, 550);
		}				

		draw() {
			if(player.searchNPC() != null) {
				RenderImage(this.img, this.x, this.y, this.width, this.height);
				ctx.fillStyle = "Black";			
				ctx.font = "28px Arial";
				ctx.textAlign = "left";
				ctx.fillText(npc.array[player.searchNPC()].name, this.x + 20, this.y + 30);
				ctx.font = "25px Cursive";
				ctx.fillText(npc.array[player.searchNPC()].message, this.x + 15, this.y + 70);
				if(npc.array[player.searchNPC()].hasPuzzle) {
					this.answer();					
				}				
			}
		}
	}

	class InfoNPC {
		constructor() {
			this.width = 400;
			this.height = 150;
			this.x = canvas.width() / 2 - this.width / 2;
			this.y = 440;
			this.img = img.dialogue_background;	
		}

		draw() {
			if(player.searchNPC() != null) {				
				RenderImage(this.img, this.x, this.y, this.width, this.height);
				ctx.fillStyle = "Black";			
				ctx.font = "20px Arial";
				ctx.textAlign = "left";
				ctx.fillText(npc.array[player.searchNPC()].name, this.x + 10, this.y + 25);
				RenderImage(npc.array[player.searchNPC()].img, this.x + 10, this.y + 35, this.width / 5, this.height - 45);
				ctx.font = "18px Cursive";
				if(npc.array[player.searchNPC()].profession != "") {
					ctx.fillText("Profissão: " + npc.array[player.searchNPC()].profession, 395, 495);
					ctx.fillText("Nível de Amizade: " + npc.array[player.searchNPC()].friendlyLevel, 395, 517);
				} else {
					ctx.fillText("Nível de Amizade: " + npc.array[player.searchNPC()].friendlyLevel, 395, 495);
				}
				ctx.fillStyle = "Red";
				ctx.fillText("Pressione Q para conversar", 460, 580);
			}		
		}
	}

	class Scenario {
		constructor() {
			this.tileSize = 25;			
			this.map = [
				[11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],
				[11,18,26,26,26,26,26,18,18,18,18,18,21,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,18,18,18,18,18,18,18,18,18,18,22,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,18,33,30,30,30,30,30,36,25,23,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,18,31,17,17,17,17,17,32,24,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,18,34,29,29,29,29,29,35,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,18,14,14,14,14,14,14,14,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,18,14,16,14,14,14,16,14,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,18,14,14,14,28,14,14,14,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,18,14,14,14,15,14,14,14,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,18,18,18,22,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,25,25,25,27,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,18,18,21,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[20,20,20,20,20,20,20,20,37,37,37,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[20,20,20,20,20,20,20,20,37,37,37,20,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[20,20,20,20,20,20,20,20,37,37,37,20,20,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[20,20,20,20,20,20,20,20,37,37,37,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,10,10,10,10,10,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,12,12,12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,12,12,12,12,12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,12,12,12,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,12,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,12,12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,12,12,12,12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,33,30,30,30,30,30,36,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,12,12,12,12,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,31,17,17,17,17,17,32,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,12,12,12,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,34,29,29,29,29,29,35,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,12,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,14,14,14,14,14,14,14,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,14,16,14,14,14,16,14,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,14,14,14,28,14,14,14,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,14,14,14,15,14,14,14,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,12,12,12,20,20,20,20,20,20],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,12,12,12,20,20,20,20,20,20],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,12,12,12,20,20,20,20,20,20],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,12,12,12,20,20,20,20,20,20],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,12,12,12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,12,12,12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,12,12,12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,25,25,25,25,25,25,25,25,25,27,10,10,10,10,10,10,10,10,10,10,10,10,10,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,26,26,26,26,26,26,26,26,18,10,10,10,10,10,10,10,10,10,10,10,10,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,33,30,30,30,30,30,36,18,18,18,18,10,10,10,10,10,10,10,10,10,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,12,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,31,17,17,17,17,17,32,18,18,18,18,10,10,10,10,10,10,10,10,10,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,12,12,12,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,34,29,29,29,29,29,35,18,18,18,18,10,10,10,10,10,10,10,10,10,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,12,12,12,12,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,14,14,14,14,14,14,14,18,18,18,18,10,10,10,10,10,10,10,10,10,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,12,12,12,12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,14,16,14,14,14,16,14,18,18,18,18,18,10,10,10,10,10,10,10,10,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,20,12,12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,14,14,14,28,14,14,14,18,18,18,18,18,10,10,10,10,10,10,10,10,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,20,20,12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,14,14,14,15,14,14,14,18,18,18,18,18,18,10,10,10,10,10,10,10,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,10,10,10,10,10,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,18,18,18,18,18,18,18,10,18,18,18,18,18,18,18,10,10,10,10,10,10,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,25,25,25,25,25,25,25,38,10,25,25,25,25,25,25,25,27,10,10,10,10,10,10,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,33,30,30,30,30,30,36,10,33,30,30,30,30,30,36,18,10,10,10,10,10,10,10,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,31,17,17,17,17,17,32,10,31,17,17,17,17,17,32,18,18,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,34,29,29,29,29,29,35,10,34,29,29,29,29,29,35,18,18,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,14,14,14,14,14,14,14,10,14,14,14,14,14,14,14,18,18,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,14,16,14,14,14,16,14,10,14,16,14,14,14,16,14,18,18,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,14,14,14,28,14,14,14,10,14,14,14,28,14,14,14,18,18,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,14,14,14,15,14,14,14,10,14,14,14,15,14,14,14,18,18,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,26,26,10,10,10,26,26,10,26,26,10,10,10,26,26,26,26,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,26,26,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,26,26,10,10,10,26,26,10,26,26,10,10,10,26,26,26,26,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,26,26,26,26,26,26,26,26,10,26,26,26,26,26,26,26,26,26,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],
				[11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,20,20,20,20,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11]];
				
				this.height = this.map.length * this.tileSize;
				this.width = this.map[0].length * this.tileSize;
		}


		blockRectangle(objA, x, y, width, height) {
			this.distX = (objA.x + objA.width/2) - (x + width/2);
			this.distY = (objA.y + objA.height/2) - (y + height/2);
			
			this.sumWidth = (objA.width + width)/2;
			this.sumHeight = (objA.height + height)/2;
			
			if(Math.abs(this.distX) < this.sumWidth && Math.abs(this.distY) < this.sumHeight){
				this.overlapX = this.sumWidth - Math.abs(this.distX);
				this.overlapY = this.sumHeight - Math.abs(this.distY);
				
				if(this.overlapX > this.overlapY){
					objA.y = this.distY > 0 ? objA.y + this.overlapY : objA.y - this.overlapY;
				} else {
					objA.x = this.distX > 0 ? objA.x + this.overlapX : objA.x - this.overlapX;
				}
			}
		}

		drawTiles() {
			for(this.row in this.map) {
				for(this.col in this.map[this.row]) {
					this.x = this.col * this.tileSize;
					this.y = this.row * this.tileSize;
					this.tile = this.map[this.row][this.col];
					if(this.tile == 10) {
						//Terra					
						DrawRect("#e9d8b1", this.x, this.y, this.tileSize, this.tileSize);
					} else if(this.tile == 11) {
						//Barreiras nas margens						
						DrawRect("#2E8B57", this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x, this.y, this.tileSize, this.tileSize);								
					} else if(this.tile == 12) {
						
						RenderImage(img.agua_solo, this.x, this.y, this.tileSize, this.tileSize);							
					} else if(this.tile == 13) {
						//Telhados das casas								
						DrawRect("lightgray", this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x, this.y, this.tileSize, this.tileSize);
					} else if(this.tile == 14) {
						//Paredes das casas									
						RenderImage(img.house_solo, this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x, this.y, this.tileSize, this.tileSize);
					} else if(this.tile == 15) {
						//Portas das casas											
						RenderImage(img.door1, this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x, this.y, this.tileSize, this.tileSize);
					} else if(this.tile == 16) {
						//Janelas das casas						
						RenderImage(img.window, this.x, this.y, this.tileSize, this.tileSize);										
					} else if(this.tile == 17) {
						//Telhados superiores das casas						
						DrawRect("gray", this.x, this.y, this.tileSize, this.tileSize);
					} else if(this.tile == 18) {
						//Grama						
						RenderImage(img.grama_solo, this.x, this.y, this.tileSize, this.tileSize);
					} else if(this.tile == 19) {
						//Cercas						
						DrawRect("#ffcc00", this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x, this.y, this.tileSize, this.tileSize);
					} else if(this.tile == 20) {
						//Água						
						RenderImage(img.agua_solo, this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x, this.y, this.tileSize, this.tileSize);
					} else if(this.tile == 21) {
						//Grama						
						RenderImage(img.grama2, this.x, this.y, this.tileSize, this.tileSize);						
					} else if(this.tile == 22) {
						//Grama						
						RenderImage(img.grama3, this.x, this.y, this.tileSize, this.tileSize);						
					} else if(this.tile == 23) {
						//Grama						
						RenderImage(img.grama4, this.x, this.y, this.tileSize, this.tileSize);						
					} else if(this.tile == 24) {
						//Grama						
						RenderImage(img.grama5, this.x, this.y, this.tileSize, this.tileSize);						
					} else if(this.tile == 25) {
						//Grama						
						RenderImage(img.grama_solo, this.x, this.y, this.tileSize, this.tileSize);
						RenderImage(img.fence_left, this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x, this.y, this.tileSize, this.tileSize);	
					} else if(this.tile == 26) {
						//Planta						
						RenderImage(img.grama_solo, this.x, this.y, this.tileSize, this.tileSize);
						RenderImage(img.flower, this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x, this.y, this.tileSize, this.tileSize);					
					} else if(this.tile == 27) {
						//Planta						
						RenderImage(img.terra_solo, this.x, this.y, this.tileSize, this.tileSize);
						RenderImage(img.fence_solo, this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x - 13, this.y, this.tileSize, this.tileSize);					
					} else if(this.tile == 28) {
																	
						RenderImage(img.door2, this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x, this.y, this.tileSize, this.tileSize);					
					} else if(this.tile == 29) {
						//Planta												
						RenderImage(img.roof_bottom, this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x, this.y, this.tileSize, this.tileSize);					
					} else if(this.tile == 30) {
						//Planta												
						RenderImage(img.roof_top, this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x, this.y, this.tileSize, this.tileSize);					
					} else if(this.tile == 31) {
						//Planta												
						RenderImage(img.roof_left, this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x, this.y, this.tileSize, this.tileSize);					
					} else if(this.tile == 32) {
						//Planta												
						RenderImage(img.roof_right, this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x, this.y, this.tileSize, this.tileSize);					
					} else if(this.tile == 33) {
						//Planta												
						RenderImage(img.roof_top_left, this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x, this.y, this.tileSize, this.tileSize);					
					} else if(this.tile == 34) {
						//Planta												
						RenderImage(img.roof_bottom_left, this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x, this.y, this.tileSize, this.tileSize);					
					} else if(this.tile == 35) {
						//Planta												
						RenderImage(img.roof_bottom_right, this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x, this.y, this.tileSize, this.tileSize);					
					} else if(this.tile == 36) {
						//Planta												
						RenderImage(img.roof_top_right, this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x, this.y, this.tileSize, this.tileSize);					
					} else if(this.tile == 37) {
						//Planta												
						RenderImage(img.bridge_top, this.x, this.y, this.tileSize, this.tileSize);				
					} else if(this.tile == 38) {
						//Cerca com grama solo												
						RenderImage(img.grama_solo, this.x, this.y, this.tileSize, this.tileSize);
						RenderImage(img.fence_solo, this.x, this.y, this.tileSize, this.tileSize);
						this.blockRectangle(player, this.x - 13, this.y, this.tileSize, this.tileSize);				
					}   
				}
			}			
		}
	}

	class Puzzle {
		constructor() {			
			this.isOn = false;
			this.pause = false;
			this.playerMoveLeft = this.playerMoveUp = this.playerMoveDown = this.playerMoveRight = this.upIsDown = false;
			this.controlRed = this.controlBlue = this.controlGreen = this.controlPurple = false;
			this.zIsDown = this.xIsDown = this.cIsDown = this.vIsDown = false;
			this.highestScorePong = this.highestScoreFishing = this.highestScoreFlappyBird = this.highestScoreBreakout = this.highestScoreGuitarHero = this.highestScoreMaze = 0;			
		}
	}

	class PuzzleFishing {
		constructor(fishX, fishY, fishWidth, fishHeight, fishSpeed, fishColor) {
			this.width = 600;
			this.height = 500;
			this.x = canvas.width() / 2 - this.width / 2;
			this.y = canvas.height() / 2 - this.height / 2;
			this.bgColor = "White";
			this.timer = 30;
			this.intro = false;
			this.outro = false;
			this.highestScore = 0;
			this.loopSpeed = 200;
			this.timerSpeed = 1000;

			this.playerWidth = 80;
			this.playerHeight = 30;
			this.playerX = canvas.width() / 2 - this.playerWidth / 2;
			this.playerY = 515;
			this.playerSpeed = 12;
			this.playerColor = "Black";
			this.playerScore = 0;

			this.fishWidth = fishWidth;
			this.fishHeight = fishHeight;
			this.fishX = fishX;
			this.fishY = fishY;
			this.fishSpeed = fishSpeed;
			this.fishColor = fishColor;	
			this.fishs = [];
		}

		addFish() {
			setTimeout(function loop(){
				this.random = Math.floor(Math.random() * 7);
				switch(this.random) {
					case 0:
						if(!puzzle.pause) {
							puzzle.puzzleFishing.fishs.push(new PuzzleFishing(Math.floor((Math.random() * 500) + 200), 50, 25, 25, 5, "Green"));
						}
						break;
					case 1:
						if(!puzzle.pause) {
							puzzle.puzzleFishing.fishs.push(new PuzzleFishing(Math.floor((Math.random() * 500) + 200), 50, 25, 25, 5, "Red"));
						}
						break;
					case 2:
						if(!puzzle.pause) {
							puzzle.puzzleFishing.fishs.push(new PuzzleFishing(Math.floor((Math.random() * 500) + 200), 50, 25, 25, 5, "Blue"));							
						}
						break;
					case 3:
						if(!puzzle.pause) {
							puzzle.puzzleFishing.fishs.push(new PuzzleFishing(Math.floor((Math.random() * 500) + 200), 50, 25, 25, 5, "Pink"));							
						}
						break;
					case 4:
						if(!puzzle.pause) {
							puzzle.puzzleFishing.fishs.push(new PuzzleFishing(Math.floor((Math.random() * 500) + 200), 50, 25, 25, 5, "Orange"));							
						}
						break;
					case 5:
						if(!puzzle.pause) {
							puzzle.puzzleFishing.fishs.push(new PuzzleFishing(Math.floor((Math.random() * 500) + 200), 50, 25, 25, 5, "Purple"));							
						}
						break;
					case 6:
						if(!puzzle.pause) {
							puzzle.puzzleFishing.fishs.push(new PuzzleFishing(Math.floor((Math.random() * 500) + 200), 50, 25, 25, 5, "Silver"));
						}
						break;
					case 7:
						if(!puzzle.pause) {
							puzzle.puzzleFishing.fishs.push(new PuzzleFishing(Math.floor((Math.random() * 500) + 200), 50, 25, 25, 5, "Gray"));
						}
						break;						
				}
				setTimeout(loop, puzzle.puzzleFishing.loopSpeed);
			}, puzzle.puzzleFishing.loopSpeed)
		}

		movePlayer() {
			if(puzzle.playerMoveLeft && this.playerX >= 215) {
				this.playerX -= this.playerSpeed;
			} else if(puzzle.playerMoveRight && this.playerX <= 700) {
				this.playerX += this.playerSpeed;
			}
		}

		updateFish() {
			for(var i = 0; i < this.fishs.length; i++) {
				this.currentFish = this.fishs[i];
				this.currentFish.fishY += this.currentFish.fishSpeed;

				if(this.currentFish.fishY + this.currentFish.fishHeight >= this.playerY &&
					 this.currentFish.fishY <= this.playerY + this.playerHeight &&
					 this.currentFish.fishX + this.currentFish.fishWidth >= this.playerX &&
					 this.currentFish.fishX <= this.playerX + this.playerWidth) {
					this.playerScore += 10;
					this.fishs.splice(this.fishs.indexOf(this.currentFish), 1);				
				}

				if(this.currentFish.fishY + this.currentFish.fishHeight >= 550) {
					this.fishs.splice(this.fishs.indexOf(this.currentFish), 1);
				}
			}
		}

		time() {
			setTimeout(function interval(){
				if(!puzzle.pause) {
					puzzle.puzzleFishing.timer -= 1;
				}
				if(puzzle.puzzleFishing.timer <= 0) {
					puzzle.puzzleFishing.gameOver();
				}
				setTimeout(interval, puzzle.puzzleFishing.timerSpeed);
			}, puzzle.puzzleFishing.timerSpeed)
		}

		gameOver() {
			if(this.playerScore > puzzle.highestScoreFishing) {
				puzzle.highestScoreFishing = this.playerScore;
			}
			this.fishs = [];
			this.outro = true;
			this.loopSpeed = 6000000;
			this.timerSpeed = 6000000;
		}

		exit() {
			puzzle.puzzleFishing = new PuzzleFishing;
			npc.array[4].message = "Obrigado, " + player.name + "! Pegamos muitos peixes hoje. Vamos continuar?";
			player.levelUp(Math.floor(this.playerScore / 10));
			puzzle.isOn = false;
		}  				

		draw() {
			DrawRect(this.bgColor, this.x, this.y, this.width, this.height);
			if(this.intro) {
				ctx.fillStyle = "Red";
				ctx.font = "50px Cursive";
				ctx.textAlign = "center";
				ctx.fillText("Pegue os peixes!", canvas.width() / 2, 100);
				ctx.fillStyle = "Black";
				ctx.font = "30px Cursive";
				ctx.fillText("Pegue o maior número de peixes", canvas.width() / 2, 170);
				ctx.fillText("possível antes que o tempo termine", canvas.width() / 2, 210);
				ctx.fillText("bloqueando-os com o bloco inferior", canvas.width() / 2, 250);
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.fillText("Comandos", canvas.width() / 2, 340);
				ctx.font = "28px Cursive";
				ctx.fillStyle = "Black";
				ctx.fillText("Movimentação: seta esquerda e seta direita", canvas.width() / 2, 390);
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.fillText("Deseja jogar?", canvas.width() / 2, 450);
				ctx.fillStyle = "Green";
				ctx.font = "30px Cursive";
				ctx.fillText("Sim (ENTER)", canvas.width() / 2, 500);
				ctx.fillStyle = "Red";
				ctx.font = "30px Cursive";				
				ctx.fillText("Não (ESC)", canvas.width() / 2, 540);
				ctx.textAlign = "start";				
			} else if(this.outro) { 
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.textAlign = "center";
				ctx.fillStyle = "Red";
				ctx.fillText("Pressione ESC para sair", canvas.width() / 2, 500);
				if(this.playerScore > puzzle.highestScoreFishing) {
					ctx.fillStyle = "Red";
					ctx.fillText("Parabéns!!!", canvas.width() / 2, 100);
					ctx.fillText("Você quebrou seu recorde!", canvas.width() / 2, 150);
					ctx.fillStyle = "Black"
					ctx.fillText("Pontuação final: " + this.playerScore, canvas.width() / 2, 200);
					ctx.font = "30px Cursive";
					ctx.fillStyle = "Green";
					ctx.fillText("Seu novo recorde: " + this.playerScore, 360, 300);
					ctx.fillText("Você recebeu " + this.playerScore / 10 + " pontos de experiência", 480, 340);
				} else {
					ctx.fillStyle = "Red";
					ctx.fillText("Pontuação final: " + this.playerScore, canvas.width() / 2, 100);
					ctx.fillStyle = "Black";
					ctx.font = "30px Cursive";
					ctx.fillText("Seu recorde atual é: " + puzzle.highestScoreFishing, 390, 200);
					ctx.fillStyle = "Green";
					ctx.fillText("Você recebeu " + this.playerScore / 10 + " pontos de experiência", 490, 240);					
				}				
			} else {
				ctx.fillStyle = "Black";
				ctx.font = "30px Cursive";
				ctx.fillStyle = "Red";
				ctx.fillText("Tempo: " + this.timer, 210, this.y + 30);	
				ctx.fillStyle = "Black";
				ctx.fillText("Pontos: " + this.playerScore, 210, this.y + 70);			
				DrawRect(this.playerColor, this.playerX, this.playerY, this.playerWidth, this.playerHeight);
			}
		}

		drawFish() {
			for(var i = 0; i < this.fishs.length; i++) {
				this.currentFish = this.fishs[i];
				if(!this.outro) {
					DrawRect(this.currentFish.fishColor, this.currentFish.fishX, this.currentFish.fishY, this.currentFish.fishWidth, this.currentFish.fishHeight);
				}
			}			
		}
	}

	class PuzzlePong {
		constructor() {
			this.width = 600;
			this.height = 500;
			this.x = canvas.width() / 2 - this.width / 2;
			this.y = canvas.height() / 2 - this.height / 2;
			this.bgColor = "White";
			this.intro = false;
			this.outro = false;

			this.playerWidth = 30;
			this.playerHeight = 80;
			this.playerX = 205;
			this.playerY = canvas.height() / 2 - this.playerHeight / 2;
			this.playerColor = "Black";
			this.playerSpeed = 12;			
			this.playerScore = 0;

			this.ballSize = 30;
			this.ballX = canvas.width() / 2 - this.ballSize / 2;
			this.ballY = canvas.height() / 2 - this.ballSize / 2;
			this.ballColor = "Black";			
			this.ballSpeed = 3;
			this.ballDirectionX = 0;
			this.ballDirectionY = 0;

			this.enemyWidth = 30;
			this.enemyHeight = 30;
			this.enemyX = 765;
			this.enemyY = canvas.height() / 2 - this.playerHeight / 2;
			this.enemyColor = "Black";
		}

		movePlayer() {
			if(puzzle.playerMoveUp && this.playerY >= 60) {
				this.playerY -= this.playerSpeed;
			} else if(puzzle.playerMoveDown && this.playerY + this.playerHeight <= 540) {
				this.playerY += this.playerSpeed;
			}
		}

		moveBall() {
			if(this.ballDirectionX == 0) {
				this.ballX -= this.ballSpeed;				
			} else {
				this.ballX += this.ballSpeed;				
			}
			if(this.ballDirectionY == 0) {
				this.ballY -= this.ballSpeed;
			} else {
				this.ballY += this.ballSpeed;
			}
		}

		moveEnemy() {
			this.enemyY = this.ballY;
		}

		colide() {
			if(this.ballY <= 50) {
				this.ballDirectionY = 1;
			} else if(this.ballY + this.ballSize >= 550) {
				this.ballDirectionY = 0;
			}

			if(this.ballX <= this.playerX + this.playerWidth &&
				 this.ballX + this.ballSize >= this.playerX &&
				 this.ballY <= this.playerY + this.playerHeight &&
				 this.ballY + this.ballSize >= this.playerY) {
				this.ballDirectionX = 1;
				this.ballSpeed += 0.5;
				this.playerScore += 10;		
			} 
			if(this.ballX <= this.enemyX + this.enemyWidth &&
			   this.ballX + this.ballSize >= this.enemyX &&
			   this.ballY <= this.enemyY + this.enemyHeight &&
			   this.ballY + this.ballSize >= this.enemyY) {
				this.ballDirectionX = 0;
			}
		}

		gameOver() {
			if(this.ballX <= 210) {			
				this.outro = true;
			}
		}

		exit() {
			if(this.playerScore > puzzle.highestScorePong) {
				puzzle.highestScorePong = this.playerScore;
			}				
			puzzle.isOn = false;			
			npc.array[0].message = "Valeu, " + player.name + "! Foi muito divertido. Quer jogar de novo?";
			player.levelUp(Math.floor(this.playerScore / 2));
			puzzle.puzzlePong = new PuzzlePong();
		}

		draw() {
			DrawRect(this.bgColor, this.x, this.y, this.width, this.height);
			if(this.intro) {
				ctx.fillStyle = "Red";
				ctx.font = "50px Cursive";
				ctx.textAlign = "center";
				ctx.fillText("Partida de Ping Pong", canvas.width() / 2, 100);
				ctx.fillStyle = "Black";
				ctx.font = "30px Cursive";
				ctx.fillText("Evite que com que a bola alcance", canvas.width() / 2, 170);
				ctx.fillText("a margem esquerda do quadro branco", canvas.width() / 2, 210);
				ctx.fillText("bloqueando-a com o bloco da esquerda", canvas.width() / 2, 250);
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.fillText("Comandos", canvas.width() / 2, 340);
				ctx.font = "30px Cursive";
				ctx.fillStyle = "Black";
				ctx.fillText("Movimentação: seta cima e seta baixo", canvas.width() / 2, 390);
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.fillText("Deseja jogar?", canvas.width() / 2, 450);
				ctx.fillStyle = "Green";
				ctx.font = "30px Cursive";
				ctx.fillText("Sim (ENTER)", canvas.width() / 2, 500);
				ctx.fillStyle = "Red";
				ctx.font = "30px Cursive";				
				ctx.fillText("Não (ESC)", canvas.width() / 2, 540);
				ctx.textAlign = "start";
			} else if(this.outro) {
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.textAlign = "center";
				ctx.fillStyle = "Red";
				ctx.fillText("Pressione ESC para sair", canvas.width() / 2, 500);
				if(this.playerScore > puzzle.highestScorePong) {
					ctx.fillStyle = "Red";
					ctx.fillText("Parabéns!!!", canvas.width() / 2, 100);
					ctx.fillText("Você quebrou seu recorde!", canvas.width() / 2, 150);
					ctx.fillStyle = "Black"
					ctx.fillText("Pontuação final: " + this.playerScore, canvas.width() / 2, 200);
					ctx.font = "30px Cursive";
					ctx.fillStyle = "Green";
					ctx.fillText("Seu novo recorde: " + this.playerScore, 360, 300);
					ctx.fillText("Você recebeu " + this.playerScore / 2 + " pontos de experiência", 480, 340);
				} else {
					ctx.fillStyle = "Red";
					ctx.fillText("Pontuação final: " + this.playerScore, canvas.width() / 2, 100);
					ctx.fillStyle = "Black";
					ctx.font = "30px Cursive";
					ctx.fillText("Seu recorde atual é: " + puzzle.highestScorePong, 370, 200);
					ctx.fillStyle = "Green";
					ctx.fillText("Você recebeu " + this.playerScore / 2 + " pontos de experiência", 470, 240);					
				}
			} else {
				ctx.fillStyle = "Black";
				ctx.font = "30px Cursive";
				ctx.fillText("Pontos: " + this.playerScore, 250, this.y + 30);
				DrawRect(this.playerColor, this.playerX, this.playerY, this.playerWidth, this.playerHeight);
				DrawRect(this.ballColor, this.ballX, this.ballY, this.ballSize, this.ballSize);
				DrawRect(this.enemyColor, this.enemyX, this.enemyY, this.enemyWidth, this.enemyHeight);
			}
		}			
	}

	class PuzzleFlappyBird {
		constructor(pillarColor, pillarX, pillarY, pillarWidth, pillarHeight) {
			this.width = 1000;
			this.height = 600;
			this.x = canvas.width() / 2 - this.width / 2;
			this.y = canvas.height() / 2 - this.height / 2;
			this.bgColor = "White";
			this.intro = false;
			this.outro = false;
			this.spawnSpeed = 300;

			this.playerColor = "Black";
			this.playerSize = 15;
			this.playerX = 150;
			this.playerY = canvas.height() / 2 - this.playerSize / 2;
			this.playerGravityForce = 0.4;
			this.playerLift = -17;
			this.playerSpeed = 0;
			this.playerJumping = false;
			this.playerScore = 0;

			this.pillarSpeed = 5;
			this.pillarColor = pillarColor;
			this.pillarX = pillarX;
			this.pillarY = pillarY;
			this.pillarWidth = pillarWidth;
			this.pillarHeight = pillarHeight;
			this.pillars = [];
		}

		draw() {
			DrawRect(this.bgColor, this.x, this.y, this.width, this.height);
			if(this.intro) {
				ctx.fillStyle = "Red";
				ctx.font = "50px Cursive";
				ctx.textAlign = "center";
				ctx.fillText("Jogar Breakout", canvas.width() / 2, 100);
				ctx.fillStyle = "Black";
				ctx.font = "30px Cursive";
				ctx.fillText("Evite com que a bola colida com a margem inferior", canvas.width() / 2, 170);
				ctx.fillText("bloqueando-a com seu bloco e ao mesmo tempo", canvas.width() / 2, 210);
				ctx.fillText("quebre todos os blocos", canvas.width() / 2, 250);
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.fillText("Comandos", canvas.width() / 2, 340);
				ctx.font = "28px Cursive";
				ctx.fillStyle = "Black";
				ctx.fillText("Movimentação: seta esquerda e seta direita", canvas.width() / 2, 390);
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.fillText("Deseja jogar?", canvas.width() / 2, 450);
				ctx.fillStyle = "Green";
				ctx.font = "30px Cursive";
				ctx.fillText("Sim (ENTER)", canvas.width() / 2, 500);
				ctx.fillStyle = "Red";
				ctx.font = "30px Cursive";				
				ctx.fillText("Não (ESC)", canvas.width() / 2, 540);
				ctx.textAlign = "start";
			} else if(this.outro) {
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.textAlign = "center";
				ctx.fillStyle = "Red";
				ctx.fillText("Pressione ESC para sair", canvas.width() / 2, 500);
				if(this.playerScore > puzzle.highestScoreFlappyBird) {
					ctx.fillStyle = "Red";
					ctx.fillText("Parabéns!!!", canvas.width() / 2, 100);
					ctx.fillText("Você quebrou seu recorde!", canvas.width() / 2, 150);
					ctx.fillStyle = "Black"
					ctx.fillText("Pontuação final: " + Math.floor(this.playerScore), canvas.width() / 2, 200);
					ctx.font = "30px Cursive";
					ctx.fillStyle = "Green";
					ctx.fillText("Seu novo recorde: " + Math.floor(this.playerScore), 360, 300);
					ctx.fillText("Você recebeu " + Math.floor(this.playerScore / 2) + " pontos de experiência", 480, 340);
				} else {
					ctx.fillStyle = "Red";
					ctx.fillText("Pontuação final: " + Math.floor(this.playerScore), canvas.width() / 2, 100);
					ctx.fillStyle = "Black";
					ctx.font = "30px Cursive";
					ctx.fillText("Seu recorde atual é: " + Math.floor(puzzle.highestScoreFlappyBird), 370, 200);
					ctx.fillStyle = "Green";
					ctx.fillText("Você recebeu " + Math.floor(this.playerScore / 3) + " pontos de experiência", 470, 240);					
				}
			} else {
				if(this.playerY >= 48) {
					DrawRect(this.playerColor, this.playerX, this.playerY, this.playerSize, this.playerSize);
				}
				for(var i = 0; i < this.pillars.length; i++) {
					this.currentPillar = this.pillars[i];
					DrawRect(this.currentPillar.pillarColor, this.currentPillar.pillarX, this.currentPillar.pillarY, this.currentPillar.pillarWidth, this.currentPillar.pillarHeight);
				}
				ctx.font = "30px Cursive";
				ctx.fillStyle = "Red";
				ctx.fillText("Pontos: " + Math.floor(this.playerScore), 20, 40);
			}
		}

		scoring() {
			if(!this.outro && !puzzle.pause) {
				this.playerScore += 0.1;
			}
		}

		jump() {
			if(this.playerJumping && this.playerY >= 0) {
				this.playerSpeed += this.playerLift;
				this.playerSpeed *= 0.3;
			}
			this.playerJumping = false;
		}

		gravity() {
			if(this.playerY + this.playerSize) {
				this.playerSpeed += this.playerGravityForce;
				this.playerY += this.playerSpeed;
			}
		}

		colide() {
			if(this.playerY + this.playerSize >= canvas.height()) {
				this.playerY = canvas.height() - this.playerSize;
			}

			for(var i = 0; i < this.pillars.length; i++) {
				this.currentPillar = this.pillars[i];
				if(this.playerX + this.playerSize >= this.currentPillar.pillarX &&
					this.playerX <= this.currentPillar.pillarX + this.currentPillar.pillarWidth &&
					this.playerY + this.playerSize >= this.currentPillar.pillarY &&
					this.playerY <= this.currentPillar.pillarY + this.currentPillar.pillarHeight) {
					this.gameOver();		
				}
			}
		}		

		addPillars() {
			setTimeout(function interval(){
				if(!puzzle.pause) {
					puzzle.puzzleFlappyBird.pillars.push(new PuzzleFlappyBird("Black", canvas.width(), 0, 50, puzzle.puzzleFlappyBird.randomNumber(260, 220)));
					puzzle.puzzleFlappyBird.pillars.push(new PuzzleFlappyBird("Black", canvas.width(), puzzle.puzzleFlappyBird.randomNumber(320, 360), 50, 600));
				}
				setTimeout(interval, puzzle.puzzleFlappyBird.spawnSpeed);			
			}, puzzle.puzzleFlappyBird.spawnSpeed)
		}

		movePillar() {
			for(var i = 0; i < this.pillars.length; i++) {
				this.currentPillar = this.pillars[i];
				this.currentPillar.pillarX -= this.pillarSpeed;
			}
		}

		randomNumber(max, min) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		gameOver() {
			this.pillars = [];
			this.outro = true;
			this.spawnSpeed = 6000000;	
		}	

		exit() {
			if(this.playerScore > puzzle.highestScoreFlappyBird) {
				puzzle.highestScoreFlappyBird = Math.floor(this.playerScore);
			}
			puzzle.puzzleFlappyBird = new PuzzleFlappyBird();
			puzzle.isOn = false;
			npc.array[1].message = "Valeu, " + player.name + "! Foi muito divertido.";
			player.levelUp(Math.floor(this.playerScore / 3));
		}
	}

	class PuzzleBreakout {
		constructor(enemyColor, enemyX, enemyY, enemyWidth, enemyHeight) {
			this.width = 800;
			this.height = 500;
			this.x = canvas.width() / 2 - this.width / 2;
			this.y = canvas.height() / 2 - this.height / 2;
			this.bgColor = "White";
			this.intro = false;
			this.outro = false;

			this.playerWidth = 80;
			this.playerHeight = 30;
			this.playerX = canvas.width() / 2 - this.playerWidth / 2;
			this.playerY = 510;
			this.playerColor = "Black";			
			this.playerSpeed = 12;
			this.playerScore = 0;

			this.enemyWidth = enemyWidth;
			this.enemyHeight = enemyHeight;
			this.enemyX = enemyX;
			this.enemyY = enemyY;
			this.enemyColor = enemyColor;
			this.enemies = [];	

			this.ballWidth = 10;
			this.ballHeight = 10;
			this.ballX = canvas.width() / 2 - this.ballWidth / 2;
			this.ballY = 350;
			this.ballSpeedY = 4;
			this.ballSpeedX = 2;
			this.ballColor = "Black";
			this.ballDirectionX = null;
			this.ballDirectionY = 1;				
		}

		draw() {
			DrawRect(this.bgColor, this.x, this.y, this.width, this.height);
			if(this.intro) {
				ctx.fillStyle = "Red";
				ctx.font = "50px Cursive";
				ctx.textAlign = "center";
				ctx.fillText("Jogar Breakout", canvas.width() / 2, 100);
				ctx.fillStyle = "Black";
				ctx.font = "30px Cursive";
				ctx.fillText("Evite com que a bola colida com a margem inferior", canvas.width() / 2, 170);
				ctx.fillText("bloqueando-a com seu bloco e ao mesmo tempo", canvas.width() / 2, 210);
				ctx.fillText("quebre todos os blocos", canvas.width() / 2, 250);
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.fillText("Comandos", canvas.width() / 2, 340);
				ctx.font = "28px Cursive";
				ctx.fillStyle = "Black";
				ctx.fillText("Movimentação: seta esquerda e seta direita", canvas.width() / 2, 390);
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.fillText("Deseja jogar?", canvas.width() / 2, 450);
				ctx.fillStyle = "Green";
				ctx.font = "30px Cursive";
				ctx.fillText("Sim (ENTER)", canvas.width() / 2, 500);
				ctx.fillStyle = "Red";
				ctx.font = "30px Cursive";				
				ctx.fillText("Não (ESC)", canvas.width() / 2, 540);
				ctx.textAlign = "start";
			} else if(this.outro) { 
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.textAlign = "center";
				ctx.fillStyle = "Red";
				ctx.fillText("Pressione ESC para sair", canvas.width() / 2, 500);
				if(this.playerScore > puzzle.highestScoreBreakout) {
					ctx.fillStyle = "Red";
					ctx.fillText("Parabéns!!!", canvas.width() / 2, 100);
					ctx.fillText("Você quebrou seu recorde!", canvas.width() / 2, 150);
					ctx.fillStyle = "Black"
					ctx.fillText("Pontuação final: " + this.playerScore, canvas.width() / 2, 200);
					ctx.font = "30px Cursive";
					ctx.fillStyle = "Green";
					ctx.fillText("Seu novo recorde: " + this.playerScore, 360, 300);
					ctx.fillText("Você recebeu " + Math.floor(this.playerScore / 3) + " pontos de experiência", 480, 340);
				} else {
					ctx.fillStyle = "Red";
					ctx.fillText("Pontuação final: " + this.playerScore, canvas.width() / 2, 100);
					ctx.fillStyle = "Black";
					ctx.font = "30px Cursive";
					ctx.fillText("Seu recorde atual é: " + puzzle.highestScoreBreakout, 390, 200);
					ctx.fillStyle = "Green";
					ctx.fillText("Você recebeu " + this.playerScore / 10 + " pontos de experiência", 490, 240);					
				}				
			} else {
				ctx.font = "25px Cursive";
				ctx.fillStyle = "Red";
				ctx.fillText("Pontos: " + this.playerScore, 110, 80);
				DrawRect(this.playerColor, this.playerX, this.playerY, this.playerWidth, this.playerHeight);
				DrawRect(this.ballColor, this.ballX, this.ballY, this.ballWidth, this.ballHeight);
				for(var i = 0; i < this.enemies.length; i++) {
					this.currentEnemy = this.enemies[i];
					ctx.fillStyle = this.currentEnemy.enemyColor;
					ctx.fillRect(this.currentEnemy.enemyX, this.currentEnemy.enemyY, this.currentEnemy.enemyWidth, this.currentEnemy.enemyHeight);
				}
			}
		}

		movePlayer() {
			if(puzzle.playerMoveLeft && this.playerX >= 110) {
				this.playerX -= this.playerSpeed;
			} else if(puzzle.playerMoveRight && this.playerX <= 810) {
				this.playerX += this.playerSpeed;
			}
		}

		moveBall() {
			if(this.ballDirectionY == 1) {
				this.ballY += this.ballSpeedY;
			} else {
				this.ballY -= this.ballSpeedY;
			}

			if(this.ballDirectionX == 1) {
				this.ballX += this.ballSpeedX;
			} else if(this.ballDirectionX == 0) {
				this.ballX -= this.ballSpeedX;
			}
		}

		ballColidePlayer() {
			if(this.ballY + this.ballHeight >= this.playerY &&
				 this.ballY <= this.playerY + this.playerHeight &&
				 this.ballX + this.ballWidth >= this.playerX &&
				 this.ballX <= this.playerX + this.playerWidth) {
				this.ballDirectionY = 0;
				if(this.ballDirectionX == null) {
					this.ballDirectionX = 1;
				}
			}
		}

		ballColideEnemy() {
			for(var i = 0; i < this.enemies.length; i++) {
				this.currentEnemy = this.enemies[i];

				if(this.ballY <= this.currentEnemy.enemyY + this.currentEnemy.enemyHeight &&
					 this.ballY + this.ballHeight >= this.currentEnemy.enemyY &&
					 this.ballX <= this.currentEnemy.enemyX + this.currentEnemy.enemyWidth &&
					 this.ballX + this.ballWidth >= this.currentEnemy.enemyX) {
					this.enemies.splice(this.enemies.indexOf(this.currentEnemy), 1);
					this.playerScore += 10;
					this.ballSpeedY += Math.floor((Math.random() * 4) + 1) * 10 / 100;
					this.ballSpeedX += Math.floor((Math.random() * 2) + 1) * 10 / 100;
					if(this.ballY < this.currentEnemy.enemyY) {
						this.ballDirectionY = 0;
					} else if(this.ballY > this.currentEnemy.enemyY) {
						this.ballDirectionY = 1;
					}				
				}
			}
		}

		ballColideWalls() {
			if(this.ballX <= 100) {
				this.ballDirectionX = 1;
			} else if(this.ballX + this.ballWidth >= 900) {
				this.ballDirectionX = 0;
			}

			if(this.ballY <= 55) {
				this.ballDirectionY = 1;
			}

			if(this.ballY + this.ballHeight >= 550) {
				this.gameOver();
			}
		}		

		addEnemies() {
			for(var i = 0; i < 28; i++) {			
				if(i <= 6) {
					this.enemies.push(new PuzzleBreakout("Black", 100 * (i + 1) + 60, 100, 80, 30));
				} else if(i > 6 && i <= 13) {
					this.enemies.push(new PuzzleBreakout("Black", 100 * (i - 7 + 1) + 60, 140, 80, 30));
				} else if(i > 13 && i <= 20) {
					this.enemies.push(new PuzzleBreakout("Black", 100 * (i - 14 + 1) + 60, 180, 80, 30));
				} else {
					this.enemies.push(new PuzzleBreakout("Black", 100 * (i - 21 + 1) + 60, 220, 80, 30));
				}
			}
		}

		gameOver() {
			this.outro = true;			
		}

		exit() {
			if(this.playerScore > puzzle.highestScoreBreakout) {
				puzzle.highestScoreBreakout = this.playerScore;
			}			
			puzzle.isOn = false;
			npc.array[1].message = "Valeu, " + player.name + "! Foi muito divertido.";
			player.levelUp(Math.floor(this.playerScore / 3));
			puzzle.puzzleBreakout = new PuzzleBreakout();
		}		
	}

	class PuzzleGuitarHero {
		constructor(playerColor, playerX, tileColor, tileX, tileY) {
			this.width = 800;
			this.height = 600;
			this.x = canvas.width() / 2 - this.width / 2;
			this.y = canvas.height() / 2 - this.height / 2;
			this.bgColor = "White";
			this.intro = false;
			this.outro = false;

			this.playerX = playerX;
			this.playerY = 500;
			this.playerWidth = 50;
			this.playerHeight = 50;
			this.playerColor = playerColor;
			this.playerScore = 0;

			this.tileHeight = 50;
			this.tileWidth = 50;
			this.tileX = tileX;
			this.tileY = tileY;
			this.tileColor = tileColor;
			this.tilesArray = [];
			this.tileSpeed = 5;
			this.tilesQuantity = 50;
			this.spawnSpeed = 400;		

			this.controllers = [];
			this.controlRed = this.controlBlue = this.controlGreen = this.controlPurple = false;
			this.qIsDown = this.wIsDown = this.eIsDown = this.rIsDown = false;						
		}

		addControllers() {
			this.controllers.push(new PuzzleGuitarHero("Red", 325));
			this.controllers.push(new PuzzleGuitarHero("Blue", 425));
			this.controllers.push(new PuzzleGuitarHero("Green", 525));
			this.controllers.push(new PuzzleGuitarHero("Purple", 625));
		}

		pressKey() {
			for(var i = 0; i < this.tilesArray.length; i++) {
				this.currentTile = this.tilesArray[i];

				for(var j = 0; j < this.controllers.length; j++) {
					this.currentController = this.controllers[j];
					
					if(this.currentTile.tileY + this.tileHeight >= this.playerY &&
						 this.currentTile.tileY <= this.playerY + this.playerHeight) {

						 if(this.currentController.playerColor == "Red" && 
						 puzzle.controlRed &&
						 this.currentTile.tileColor == "Red") {
							this.playerScore += 5;
							this.tilesArray.splice(this.tilesArray.indexOf(this.currentTile), 1);						
						 } else if(this.currentController.playerColor == "Blue" && 
						 puzzle.controlBlue &&
						 this.currentTile.tileColor == "Blue") {
						 	this.playerScore += 5;
							this.tilesArray.splice(this.tilesArray.indexOf(this.currentTile), 1);
						 } else if(this.currentController.playerColor == "Green" && 
						 puzzle.controlGreen &&
						 this.currentTile.tileColor == "Green") {
						 	this.playerScore += 5;
							this.tilesArray.splice(this.tilesArray.indexOf(this.currentTile), 1);
						 } else if(this.currentController.playerColor == "Purple" && 
						 puzzle.controlPurple &&
						 this.currentTile.tileColor == "Purple") {
						 	this.playerScore += 5;
							this.tilesArray.splice(this.tilesArray.indexOf(this.currentTile), 1);
						 }
					}
				}			
			}
		puzzle.controlRed = false;
		puzzle.controlBlue = false;
		puzzle.controlGreen = false;
		puzzle.controlPurple = false;
		}		

		addTiles() {
			setTimeout(function interval() {
				this.random = Math.floor((Math.random() * 4) + 1);
				switch(random) {
					case 1:
						if(!puzzle.pause) {
							puzzle.puzzleGuitarHero.tilesArray.push(new PuzzleGuitarHero(null, null, "Red", 325, 0));
						}
						break;
					case 2:
						if(!puzzle.pause) {
							puzzle.puzzleGuitarHero.tilesArray.push(new PuzzleGuitarHero(null, null, "Blue", 425, 0));
						}					
						break;
					case 3:
						if(!puzzle.pause) {
							puzzle.puzzleGuitarHero.tilesArray.push(new PuzzleGuitarHero(null, null, "Green", 525, 0));
						}					
						break;
					case 4:
						if(!puzzle.pause) {
							puzzle.puzzleGuitarHero.tilesArray.push(new PuzzleGuitarHero(null, null, "Purple", 625, 0)); 
						}
						break;
				}
				if(!puzzle.pause) {
					puzzle.puzzleGuitarHero.tilesQuantity--;
				}
				if(puzzle.puzzleGuitarHero.tilesQuantity <= 0) {
					puzzle.puzzleGuitarHero.gameOver();
				}
				setTimeout(interval, puzzle.puzzleGuitarHero.spawnSpeed);
			}, puzzle.puzzleGuitarHero.spawnSpeed)
		}

		moveTiles() {
			for(var i = 0; i < this.tilesArray.length; i++) {
				this.currentTile = this.tilesArray[i];
				this.currentTile.tileY += this.tileSpeed;
				if(this.currentTile.tileY >= 560) {					
					this.tilesArray.splice(this.tilesArray.indexOf(this.currentTile), 1);
				}
			}
		}		

		gameOver() {
			this.tilesArray = [];
			this.outro = true;
			this.spawnSpeed = 6000000;
		}

		exit() {
			if(this.playerScore > puzzle.highestScoreGuitarHero) {
				puzzle.highestScoreGuitarHero = this.playerScore;
			}
			puzzle.isOn = false;
			npc.array[4].message = "Valeu, " + player.name + "! Quer praticar mais um pouco?";
			player.levelUp(Math.floor(this.playerScore / 2));
			puzzle.puzzleGuitarHero = new PuzzleGuitarHero();				
		}		

		draw() {
			DrawRect(this.bgColor, this.x, this.y, this.width, this.height);
			if(this.intro) {
				ctx.fillStyle = "Red";
				ctx.font = "50px Cursive";
				ctx.textAlign = "center";
				ctx.fillText("Praticando guitarra!", canvas.width() / 2, 100);
				ctx.fillStyle = "Black";
				ctx.font = "30px Cursive";
				ctx.fillText("Evite com que os blocos alcancem a margem inferior,", canvas.width() / 2, 170);
				ctx.fillText("pressionando a tecla correspondente quando os blocos", canvas.width() / 2, 210);
				ctx.fillText("em movimento estiverem acima dos blocos inferiores", canvas.width() / 2, 250);
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.fillText("Comandos", canvas.width() / 2, 340);
				ctx.font = "28px Cursive";
				ctx.fillStyle = "Black";
				ctx.fillText("Ações: Z para o bloco Vermelho, X para o bloco Azul,", canvas.width() / 2, 390);
				ctx.fillText("C para o bloco Verde e V para o bloco Roxo", canvas.width() / 2, 430);
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.fillText("Deseja jogar?", canvas.width() / 2, 490);
				ctx.fillStyle = "Green";
				ctx.font = "30px Cursive";
				ctx.fillText("Sim (ENTER)", canvas.width() / 2, 540);
				ctx.fillStyle = "Red";
				ctx.font = "30px Cursive";				
				ctx.fillText("Não (ESC)", canvas.width() / 2, 580);
				ctx.textAlign = "start";
			} else if(this.outro) {
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.textAlign = "center";
				ctx.fillStyle = "Red";
				ctx.fillText("Pressione ESC para sair", canvas.width() / 2, 500);
				if(this.playerScore > puzzle.highestScoreGuitarHero) {
					ctx.fillStyle = "Red";
					ctx.fillText("Parabéns!!!", canvas.width() / 2, 100);
					ctx.fillText("Você quebrou seu recorde!", canvas.width() / 2, 150);
					ctx.fillStyle = "Black"
					ctx.fillText("Pontuação final: " + Math.floor(this.playerScore), canvas.width() / 2, 200);
					ctx.font = "30px Cursive";
					ctx.fillStyle = "Green";
					ctx.fillText("Seu novo recorde: " + Math.floor(this.playerScore), 360, 300);
					ctx.fillText("Você recebeu " + Math.floor(this.playerScore / 2) + " pontos de experiência", 480, 340);
				} else {
					ctx.fillStyle = "Red";
					ctx.fillText("Pontuação final: " + Math.floor(this.playerScore), canvas.width() / 2, 100);
					ctx.fillStyle = "Black";
					ctx.font = "30px Cursive";
					ctx.fillText("Seu recorde atual é: " + Math.floor(puzzle.highestScoreGuitarHero), 370, 200);
					ctx.fillStyle = "Green";
					ctx.fillText("Você recebeu " + Math.floor(this.playerScore / 2) + " pontos de experiência", 470, 240);					
				}
			} else {
				ctx.font = "30px Cursive";
				ctx.fillStyle = "Red";
				ctx.fillText("Pontos: " + this.playerScore, 200, 30);
				ctx.fillText("Notas restantes: " + this.tilesQuantity, 600, 30);
				ctx.beginPath();
				ctx.moveTo(350, 0);
				ctx.lineTo(350, 600);
				ctx.moveTo(450, 0);
				ctx.lineTo(450, 600);
				ctx.moveTo(550, 0);
				ctx.lineTo(550, 600);
				ctx.moveTo(650, 0);
				ctx.lineTo(650, 600);				
				ctx.stroke();
				for(var i = 0; i < this.controllers.length; i++) {
					this.currentController = this.controllers[i];
					ctx.fillStyle = this.currentController.playerColor;
					ctx.fillRect(this.currentController.playerX, this.playerY, this.playerWidth, this.playerHeight);
				}
				for(var j = 0; j < this.tilesArray.length; j++) {
					this.currentTile = this.tilesArray[j];
					ctx.fillStyle = this.currentTile.tileColor;
					ctx.fillRect(this.currentTile.tileX, this.currentTile.tileY, this.tileWidth, this.tileHeight);
				}				
			}
		}
	}

	class PuzzleMaze {
		constructor() {
			this.width = canvas.width();
			this.height = canvas.height();
			this.x = canvas.width() / 2 - this.width / 2;
			this.y = canvas.height() / 2 - this.height / 2;
			this.bgColor = "White";
			this.intro = false;
			this.timerSpeed = 1000;
			this.timer = 50;

			this.playerSize = 10;
			this.playerX = 10;
			this.playerY = 130;
			this.playerColor = "Red";
			this.playerScore = 1000;
			this.playerSpeed = 3;

			this.tileSize = 23;
			this.map = [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0],
				[0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0],
				[0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0],
				[1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0],
				[1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0],
				[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0],
				[0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0],
				[0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0],
				[0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0],
				[0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0],
				[0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0],
				[0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0],
				[0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0],
				[0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0],
				[0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0],
				[0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0],
				[0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0],
				[0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0],
				[0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0],
				[0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0],
				[0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1],
				[0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1],
				[0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]];

		this.mapHeight = this.map.length * this.tileSize;
		this.mapWidth = this.map[0].length * this.tileSize;					 
		}

		movePlayer() {
			if(puzzle.playerMoveLeft) {
				this.playerX -= this.playerSpeed;
			} else if(puzzle.playerMoveUp) {
				this.playerY -= this.playerSpeed;
			} else if(puzzle.playerMoveRight) {
				this.playerX += this.playerSpeed;
			} else if(puzzle.playerMoveDown) {
				this.playerY += this.playerSpeed;
			}
			if(this.playerX + this.playerSize >= this.mapWidth || this.playerY + this.playerSize >= this.mapHeight) {
				this.gameOver();
			}
		}

		time() {
			setTimeout(function interval(){
				if(!puzzle.pause) {
					puzzle.puzzleMaze.timer -= 1;
				}				
				if(puzzle.puzzleMaze.playerScore > 0 && puzzle.puzzleMaze.playerScore > 150 && !puzzle.pause) {
					puzzle.puzzleMaze.playerScore -= 20;
				}
				if(puzzle.puzzleMaze.timer <= 0) {
					puzzle.puzzleMaze.gameOver();
				}
				setTimeout(interval, puzzle.puzzleMaze.timerSpeed);
			}, puzzle.puzzleMaze.timerSpeed)
		}				

		blockRectangle(tileX, tileY, tileSize) {
			this.distX = (this.playerX + this.playerSize/2) - (tileX + tileSize/2);
			this.distY = (this.playerY + this.playerSize/2) - (tileY + tileSize/2);
			
			this.sumWidth = (this.playerSize + tileSize)/2;
			this.sumHeight = (this.playerSize + tileSize)/2;
			
			if(Math.abs(this.distX) < this.sumWidth && Math.abs(this.distY) < this.sumHeight){
				this.overlapX = this.sumWidth - Math.abs(this.distX);
				this.overlapY = this.sumHeight - Math.abs(this.distY);
				
				if(this.overlapX > this.overlapY){				
					this.playerY = this.distY > 0 ? this.playerY + this.overlapY : this.playerY - this.overlapY;
				} else {
					this.playerX = this.distX > 0 ? this.playerX + this.overlapX : this.playerX - this.overlapX;
				}
			}
		}		

		gameOver() {
			this.map = [];
			this.outro = true;
			this.timerSpeed = 6000000;
		}

		exit() {
			if(this.playerScore > puzzle.highestScoreMaze) {
				puzzle.highestScoreMaze = this.playerScore;
			}
			puzzle.isOn = false;
			npc.array[5].message = "Valeu, " + player.name + "! Vamos jogar de novo?";
			player.levelUp(Math.floor(this.playerScore / 15));
			puzzle.puzzleMaze = new PuzzleMaze();				
		}		

		draw() {			
			DrawRect(this.bgColor, this.x, this.y, this.width, this.height);
			if(this.intro) {
				ctx.fillStyle = "Red";
				ctx.font = "50px Cursive";
				ctx.textAlign = "center";
				ctx.fillText("Fuja do labirinto!", canvas.width() / 2, 100);
				ctx.fillStyle = "Black";
				ctx.font = "30px Cursive";
				ctx.fillText("Mova seu personagem e escape do labirinto", canvas.width() / 2, 170);
				ctx.fillText("antes que o tempo acabe, quanto mais rápido", canvas.width() / 2, 210);
				ctx.fillText("você sair, mais pontos receberá", canvas.width() / 2, 250);
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.fillText("Comandos", canvas.width() / 2, 340);
				ctx.font = "28px Cursive";
				ctx.fillStyle = "Black";
				ctx.fillText("Movimentação: seta esquerda, cima, direita e baixo", canvas.width() / 2, 390);
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.fillText("Deseja jogar?", canvas.width() / 2, 450);
				ctx.fillStyle = "Green";
				ctx.font = "30px Cursive";
				ctx.fillText("Sim (ENTER)", canvas.width() / 2, 500);
				ctx.fillStyle = "Red";
				ctx.font = "30px Cursive";				
				ctx.fillText("Não (ESC)", canvas.width() / 2, 540);
				ctx.textAlign = "start";				
			} else if(this.outro) {
				ctx.fillStyle = "Red";
				ctx.font = "40px Cursive";
				ctx.textAlign = "center";
				ctx.fillStyle = "Red";
				ctx.fillText("Pressione ESC para sair", canvas.width() / 2, 500);
				if(this.playerScore > puzzle.highestScoreMaze) {
					ctx.fillStyle = "Red";
					ctx.fillText("Parabéns!!!", canvas.width() / 2, 100);
					ctx.fillText("Você quebrou seu recorde!", canvas.width() / 2, 150);
					ctx.fillStyle = "Black"
					ctx.fillText("Pontuação final: " + Math.floor(this.playerScore), canvas.width() / 2, 200);
					ctx.font = "30px Cursive";
					ctx.fillStyle = "Green";
					ctx.fillText("Seu novo recorde: " + Math.floor(this.playerScore), 360, 300);
					ctx.fillText("Você recebeu " + Math.floor(this.playerScore / 15) + " pontos de experiência", 480, 340);
				} else {
					ctx.fillStyle = "Red";
					ctx.fillText("Pontuação final: " + Math.floor(this.playerScore), canvas.width() / 2, 100);
					ctx.fillStyle = "Black";
					ctx.font = "30px Cursive";
					ctx.fillText("Seu recorde atual é: " + Math.floor(puzzle.highestScoreMaze), 370, 200);
					ctx.fillStyle = "Green";
					ctx.fillText("Você recebeu " + Math.floor(this.playerScore / 15) + " pontos de experiência", 470, 240);					
				}
			} else {
				for(this.row in this.map) {
					for(this.col in this.map[this.row]) {
						this.tileX = this.col * this.tileSize;
						this.tileY = this.row * this.tileSize;
						this.tile = this.map[this.row][this.col];
						if(this.tile == 1) {
							ctx.fillStyle = "White";
							ctx.fillRect(this.tileX, this.tileY, this.tileSize, this.tileSize);
						} else if(this.tile == 0) {
							ctx.fillStyle = "Black";
							ctx.fillRect(this.tileX, this.tileY, this.tileSize, this.tileSize);
							this.blockRectangle(this.tileX, this.tileY, this.tileSize);				
						}
					}
				}
				DrawRect(this.playerColor, this.playerX, this.playerY, this.playerSize, this.playerSize);
				ctx.font = "40px Cursive";
				ctx.fillStyle = "Red";
				ctx.fillText("Tempo: " + this.timer, 650, 40);
				ctx.fillText("Pontos: " + this.playerScore, 650, 90);
			}
		}	
	}

	class Cam {
		constructor() {
			this.x = 0;
			this.y = 0;
			this.width = canvas.width();
			this.height = canvas.height();
		}

		leftEdge() {
			return this.x + (this.width * 1.0);
		}

		rightEdge() {
			return this.x + (this.width * 0.50);	
		}

		topEdge() {
			return this.y + (this.height * 1.0);
		}

		bottomEdge() {
			return this.y + (this.height * 0.50);
		}

		move() {
			if(player.x < this.leftEdge()) {
				this.x = player.x - (this.width * 1.0);
			}
			if(player.x + player.width > this.rightEdge()) {
				this.x = player.x + player.width - (this.width * 0.5);
			}
			if(player.y < this.topEdge()) {
				this.y = player.y - (this.height * 1.0);
			}
			if(player.y + player.height > this.bottomEdge()) {
				this.y = player.y + player.height - (this.height * 0.5);
			}
			if(this.x < 0) {
				this.x = 0
			}
			if(this.x + this.width > scenario.width) {
				this.x = scenario.width - this.width;
			}
			if(this.y < 0) {
				this.y = 0;
			}
			if(this.y + this.height > scenario.height) {
				this.y = scenario.height - this.height;
			}
 		}		
	}
	
	let img = new LoadImages();
	let cam = new Cam();
	let player = new Player();
	Player.prototype.profile = new Profile();
	let npc = new NPC();
	NPC.prototype.dialogue = new Dialogue();
	NPC.prototype.infoNPC = new InfoNPC();
	let scenario = new Scenario();
	let puzzle = new Puzzle();
	Puzzle.prototype.puzzleFishing = new PuzzleFishing();
	Puzzle.prototype.puzzlePong = new PuzzlePong();
	Puzzle.prototype.puzzleFlappyBird = new PuzzleFlappyBird();
	Puzzle.prototype.puzzleBreakout = new PuzzleBreakout();
	Puzzle.prototype.puzzleGuitarHero = new PuzzleGuitarHero();
	Puzzle.prototype.puzzleMaze = new PuzzleMaze();
	
	npc.add();
	Init();
})