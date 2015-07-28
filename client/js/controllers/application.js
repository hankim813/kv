'use strict';

angular
	.module('kvApp')

	.controller('ApplicationController', ['$window', '$location', function($window, $location) {
		var vm = this;

		vm.index = 0;

		// Vertical Centering
		var parent = document.getElementById('parent');
		if (parent) parent.style.height = $window.innerHeight + 'px';

		// Application questions
		var questions = [
			'What type of people do you like to work with?',
    	'Not work with?',
    	'What brands do you look to for inspiration?',
    	'It’s a Thursday night, what are you doing?',
    	'Tell us about a recent situation that stressed you out.',
    	'Why are you a perfect fit for the Assistant Producer role?'];
    
    // Application answers
    var answers = [
    	'At my internship with recruiting firm, Real Staffing, I had the privilege of working under a manager named Jay.  There was one meeting in particular where I realized he was a dedicated, true leader. The meeting was held in regards to what he called, “Vision Day.” It was mandatory for our team of twenty to pause their workflow and attend to ultimately draw our fantasmic goals on paper. <br><br>Jay ushered us into the conference room where we unleashed our imaginations in articulating our visions for ourselves in the form of art (or something like it). My paper bore a stick-figure Kiana as the boxer, the cook, and the impactful intern.  Others wished for tackled marathons, new relationships with new clients, and pet whales. We each received the opportunity to share our goals devoid of judgement, as Jay encouraged even our craziest ideas. <br><br>In the end, we created a vision board as a team, following a similar structure of brainstorming alone followed by idea sharing together. Jay’s positive demeanor uplifted us all, and his straightforward attitude streamlined our processes. <br><br>When I think of the most enjoyable colleagues I’ve had the pleasure of working with, Jay is at the top of my list. His energy alone is what “gets the people going” (Chazz Michael Michaels), and I only hope I can have a similar effect on my future colleagues.',
    	'I prefer not to work with people who are close-minded because it greatly limits the possibilities of your task or goal.  I am sometimes frustrated with these types of people as they generally refuse to see anything but the negative, which ultimately limits their ambitions.  Complaining and negative attitudes get you nowhere, while hope and positivity push you to take a step and move forward.  Although I prefer not to work with such people, it’s inevitable.  I’ve had many experiences working in groups and in every single one conflicts arose but we always managed to reach our end goal through proper communication.',
    	'Aside from Everlane, I love The Reformation for their social consciousness and similarly, simply unique styles.  Their mission is to create fashionable products but at a much lower environmental cost compared to most other brands. By creating products that allow “fashion and sustainability [to] coexist,” they have created a brand desirable not only for their aesthetics, but also for the low environmental impact on the world. <br><br><strong>Angelina Jolie Pitt</strong> for staying grounded and using her influence for others rather than for herself.  If I were to idolize one celebrity, her personal brand as a humanitarian and an individual would compel me to do so.  She has impacted many causes, but her work protecting females in the midst of war has intrigued me the most.  At an event held by Women In The World she powerfully stated: “Advancing the rights of women and girls worldwide is not just a moral necessity but a fundamental part of how we overcome insecurity and conflict in the world”.  As seen by her devotion to providing a voice for those who are silenced, Angelina is a meritable model for both girls and women to learn from today.for their mission to end world hunger first by feeding the homeless of Philadelphia.  The visionaries at Rosa’s are a channel to help those in need.  More than this, they even encourage t-shirt designs by their homeless customers to sell as part of the brand.  The pizza company feeds both stomachs and creativity, proving Rosa’s stance as a truly admirable brand. <br><br><strong>Anyone</strong> who manages to convince me of their potential, differentiated value, and humility with every action taken or decision made.',
    	'Even I don’t know what I’m doing; as a chronic optimist, I like to leave room for possibilities.  I could be in Seattle playing backgammon with my dad and eating my mother’s incredible home cooking.  Or perhaps my close friends have convinced me to a night on the town, which usually means low-key bars with my kind of music (hint: my favorite band is The Strokes). More often than not I’m caught up in the Netflix trend that has swept the nation, usually watching something animated (Mulan, Tarzan, How to Train Your Dragon, to name a few).  I might be honing my tennis skills—which I have very few of—or simply wandering the city for some fresh air.  When there’s no set plan, anything can happen.',
    	'Growing up,  I was spoiled with my mother’s health-conscious grocery lists and exotic concoctions for every meal.  It wasn’t until I arrived at college that I realized how far I was from this previously no-hormone, no-antibiotics, and no-added-preservatives diet.  So I did what college kids do best and put my favorite take-out on speed dial.  It wasn’t until this past year living in a real apartment with a sophisticated kitchen that I realized how far behind I really was.  I was lacking the creativity it took to cook like my mother.  In my first attempts at buying only fresh vegetables, they somehow managed to go bad after I used them once and stuffed them in a drawer for “later use.”  Thankfully, I eventually learned the marvel of cooking in bulk quantities and the splendor of leftovers.  When I went home for breaks I shadowed my mother as she cooked, mimicking her movements for myself when I returned to school.  I found ways to make cooking more enjoyable by persuading my then-boyfriend into doing half the work.  It became a creative project and kept me happy and fed all at once.  Now, with food of unknown origin, I am too unnerved with how I might be deteriorating my body.  So I’m happy to say that I am all-natural once again.  Although don’t be alarmed if you see me with a cheeseburger in hand every now and then—if I were Supergirl it would be my kryptonite.',
    	'<strong>Attention to detail</strong>—I’ve got it.  For example, this specific question in the application online literally reads:  “Why are you a perfect fit the Assistant Producer role?”  This sentence is incorrect as it omits the word ‘for.’ <br><br><strong>Communication</strong>—I do it.  To me, this skill encompasses many others: how the person in question listens to, collaborates with, and motivates those communicated with.  One experience comes to mind where I was grouped with five other peers, a few of whom did not exactly complement my working style.  Group work requires adaptability and patience; in situations like the aforementioned I observed our dynamic and reacted appropriately.  <br><br>For example, one colleague in particular was very narrow-minded and negative—he only presented various forms of the same idea and would shoot down any ‘out there’ ideas others set forth. This didn’t help the lackluster attitude that veiled our group meetings.  With Negative Ned, I listened to his ideas, praised those that were valuable and subtly redirected those that were not.  With the rest of the Lackluster Lads, I allowed my own enthusiastic energy to uplift and focus their own energies.  Interaction is everywhere and I recognize the importance of knowing how to draw the best out of someone when they are unable to do so themselves.  I still have much to learn on this front; however, I have gained the understanding for doing so. <br><br>And lastly the job description—I’m excited by it; <em>passion</em> always wins over practicality in my book.'
    ];

    // Question pagination
    function goTo(index) {
    	clear();
    	vm.index = index;
    	var currentQuestion = '#q' + index;
    	for (var i = 0; i < 6; i++) {
    		var q = '#q' + i;
    		$(q).addClass('fa-circle-o').removeClass('fa-circle');
    	}
    	$(currentQuestion).removeClass('fa-circle-o').addClass('fa-circle');
    	typeQuestion('+');
    }

    vm.goTo = goTo;

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
			if (vm.index === 5) { 
				vm.index = 0; 
				gotoCoverLetter();
				return;
			} else { 
				vm.index++ 
			};
			goTo(vm.index);
		}

		vm.prev = function(){
			if (vm.index !== 0) vm.index--;
			goTo(vm.index);
		}

		typeQuestion('+');

	}]);