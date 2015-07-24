'use strict';

angular
	.module('kvApp')

	.controller('ApplicationController', ['$window', '$location', function($window, $location) {
		var vm = this;

		vm.index = 0;

		// Vertical Centering
		var parent = document.getElementById('parent');
		if (parent) parent.style.height = $window.innerHeight + 'px';

		var questions = [
			'What type of people do you like to work with?',
    	'Not work with?',
    	'What brands do you look to for inspiration?',
    	'It’s a Thursday night, what are you doing?',
    	'Tell us about a recent situation that stressed you out.',
    	'Why are you a perfect fit for the Assistant Producer role?'];
    
    var answers = [
    	'People with an upbeat attitude and high energy. I am rather bubbly myself, but it’s always nice to have another person’s energy to feed off of as I find it “gets the people going” (Chazz Michael Michaels). I also always appreciate people who are welcoming from the start and straightforward with me at all times. I strive for efficiency and these often help streamline the processes.',
    	'I prefer not to work with people who are close-minded because it greatly limits the possibilities of your task or goal. I find myself becoming frustrated with these types of people as they generally refuse to see anything but the negative, which ultimately limits their ambitions. Complaining and negative attitudes get you nowhere, while hope and positivity pushes you to take a step. <br><br>Although I prefer not to work with such people, it is not impossible for me to do so. I’ve had many experiences working in groups and in every single one conflicts arose but we always managed to reach our end goal through proper communication.',
    	'Aside from Everlane, I love <strong>The Reformation</strong> for their social consciousness and similarly, simply unique styles.  Their mission is to create fashionable products but at a much lower environmental cost compared to most other brands. By creating products that allow “fashion and sustainability [to] coexist,” they have created a brand desirable not only for their aesthetics, but also for the low environmental impact on the world (The Reformation). <br><br><strong>Angelina Jolie Pitt</strong> for staying grounded and using her influence for others rather than for herself.  If I were to idolize one celebrity, her personal brand as a humanitarian and an individual would compel me to do so.  She has impacted many causes, but her work protecting females in the midst of war has intrigued me the most.  At an event held by Women In The World she powerfully stated: “Advancing the rights of women and girls worldwide is not just a moral necessity but a fundamental part of how we overcome insecurity and conflict in the world” (New York Times).  She is a strong citizen of society as seen by her strength to be the light in an otherwise dark world. <br><br><strong>Rosa’s Fresh Pizza</strong> for their mission to end world hunger first by feeding the homeless of Philadelphia.  The visionaries at Rosa’s are a channel to help those in need.  More than this, they even encourage t-shirt designs by their homeless customers to sell as part of the brand.  The pizza company feeds both stomachs and creativity, proving Rosa’s stance as a truly admirable brand. <br><br>Anyone who manages to convince me of their potential, differentiated value, and humility with every action taken or decision made.',
    	'Even I don’t know what I’m doing; as a chronic optimist, I like to leave room for possibilities.  I could be in Seattle playing backgammon with my dad and eating my mother’s incredible home cooking.  Or perhaps my close friends have convinced me to a night on the town, which usually means low-key bars with my kind of music (hint: my favorite band is The Strokes). <br><br>More often than not I’m caught up in the Netflix trend that has swept the nation, usually watching something animated (Mulan, Tarzan, How to Train Your Dragon, to name a few).  I might be honing my tennis skills—which I have very few of—or simply wandering the city for some fresh air.  When there’s no set plan, anything could happen.',
    	'When I realized I couldn’t cook.  I’ve been trying to live organically in an artificial world, which is just as difficult as it sounds.  There may be many more options than ever in the organic department, but they mean nothing if I am ill equipped to utilize all my freshly perishable ingredients.  <br><br>I was spoiled with my mother’s health-conscious grocery lists and exotic concoctions for every meal.  It wasn’t until I arrived at college that I realized how far I was from my previously no-hormone, no-antibiotics, and no-added-preservatives diet.  As a college student living on campus all four years I had either no kitchen or one not fit for use.  So I did what college kids do best and ordered in or went out to eat. <br><br>It wasn’t until this past year as an actual adult living in a real apartment with a sophisticated kitchen (meaning it had a full-sized fridge and a working stove) that I realized how far behind I really was.  I was lacking the creativity it took to cook like my mother.  In my first attempts at buying only fresh vegetables, they somehow managed to go bad after I used them once and stuffed them in a drawer for “later use.”  Shocking right?  Eventually I learned the prestige of cooking in bulk quantities and the splendor of leftovers.  <br><br>Once I deemed myself responsible enough to use my ingredients before they met their expiration, I thought it time the grasshopper become the master—or at least to take the first hop.  When I went home for breaks I shadowed my mother as she cooked, mimicking her movements for myself when I returned to school.  <br><br>I found ways to make cooking more enjoyable by persuading my then-boyfriend into doing half the work.  It became a creative project and kept me happy and fed all at once.  I couldn’t even go back to eating takeout everyday because now I only have taste for home cooking.  With food of unknown origin, I was too unnerved with how I might have been deteriorating my body.  <br><br>So now, I’m happy to say that I’ve turned this around and am all-natural once again.  Although don’t be alarmed if you see me with a cheeseburger in hand every now and then—if I were Supergirl it would be my kryptonite.',
    	'<strong>Attention to detail</strong>—I’ve got it.  For example, this specific question in the application online literally reads:  “Why are you a perfect fit the Assistant Producer role?”  This sentence is incorrect as it omits the word ‘for.’ <br><br><strong>Communication</strong>—I do it.  To me, this skill encompasses many others: how the person in question listens to, collaborates with, and motivates those communicated with.  One experience comes to mind where I was grouped with five other peers, a few of whom did not exactly complement my working style.  Group work requires adaptability and patience; in situations like the aforementioned I observed our dynamic and reacted appropriately.  <br><br>For example, one colleague in particular was very narrow-minded and negative—he only presented various forms of the same idea and would shoot down any ‘out there’ ideas others set forth. This didn’t help the lackluster attitude that veiled our group meetings.  With Negative Ned, I listened to his ideas, praised those that were valuable and subtly redirected those that were not.  With the rest of the Lackluster Lads, I allowed my own enthusiastic energy to uplift and focus their own energies.  Interaction is everywhere and I recognize the importance of knowing how to draw the best out of someone when they are unable to do so themselves.  I still have much to learn on this front; however, I have gained the understanding for doing so. <br><br>And lastly the job description—I’m excited by it; <em>passion</em> always wins over practicality in my book.'
    ];

    // Typing Effect
    var captionLength = 0;
    var caption = '';

    setInterval (cursorAnimation, 600);

    function cursorAnimation() {
      $('#cursor').animate({
        opacity: 0
      }, 'fast', 'swing').animate({
        opacity: 1
      }, 'fast', 'swing');
    }

    function typeQuestion(direction) {
    	caption = questions[vm.index];
      $('#question').html(caption.substr(0, captionLength++));
      if(captionLength < caption.length+1) {
        setTimeout(function() { typeQuestion(direction) }, 25);
      } else {
        captionLength = 0;
        caption = '';
        setTimeout(function() { 
        	showAnswer(vm.index);
        	showNavLinks();
        }, 1000);
      }
    }

    function showAnswer(n){
    	$('#answer').html(answers[n]).addClass('animated fadeIn');
		}

		function showNavLinks(){
			if (vm.index === 0) {
				$('#next').removeClass('hidden').addClass('animated fadeIn');
			} else {
				$('#next').removeClass('hidden').addClass('animated fadeIn');
				$('#prev').removeClass('hidden').addClass('animated fadeIn');
			}
		}

		function updateIndex(direction){
			if (direction === '+') {
				vm.index++;
			} else {
				if (vm.index > 0) {
					vm.index--;
				}
			}
		}

		function clear(){
			$('#answer').text('').removeClass('animated fadeIn');
			hideNav();
		}

		function hideNav() {
			$('#next').addClass('hidden');
			$('#prev').addClass('hidden');
		}

		function gotoCoverLetter(){
			hideNav();
			$('#question').addClass('hidden');
			$('#cursor').addClass('hidden');
			$('#end').removeClass('hidden').addClass('animated fadeIn');
		}

		vm.next = function(){
			clear();
			if (vm.index === 5) { 
				vm.index = 0; 
				gotoCoverLetter();
				return;
			} else { 
				vm.index++ 
			};
			typeQuestion('+');
		}
		vm.prev = function(){
			clear();
			if (vm.index !== 0) vm.index--;
			typeQuestion('-');
		}

		typeQuestion('+');

		// TODO: ADD PAGINATION BUTTONS
	}]);