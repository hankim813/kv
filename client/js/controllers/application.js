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
    	'Why are you a perfect fit for the Assistant Photo Producer role?'];
    
    // Application answers
    var answers = [
    	'People who are energetic, open-minded, and provide a welcoming environment. At my internship with recruiting firm, Real Staffing, I had the privilege of working under a manager named Jay.  There was one meeting in particular where I realized he was a dedicated, true leader. The meeting was held in regards to what he called, “Vision Day.” It was mandatory for our team of twenty to pause their workflow and attend to ultimately draw our fantasmic goals on paper. <br><br>Jay ushered us into the conference room where we unleashed our imaginations in articulating our visions for ourselves in the form of art (or something like it). My paper bore a stick-figure Kiana as the boxer, the cook, and the impactful intern.  Others wished for tackled marathons, new relationships with new clients, and pet whales. We each received the opportunity to share our goals devoid of judgement, as Jay encouraged even our craziest ideas. <br><br>In the end, we created a vision board as a team, following a similar structure of brainstorming alone followed by idea sharing together. Jay’s positive demeanor uplifted us all, and his straightforward attitude streamlined our processes. <br><br>When I think of the most enjoyable colleagues I’ve had the pleasure of working with, Jay is at the top of my list. His energy alone is what “gets the people going” (Chazz Michael Michaels), and I only hope I can have a similar effect on my future colleagues.',
    	'People who are negative and close-minded, as I find them to be a hindrance to innovation and big dreaming. During my graduate experience at Babson College, I was placed with two friends of mine, Owen and Pedro, to work on a preparational project for Lemonade Day.<br><br>We were to create a lesson plan together for the upcoming teaching event. It seemed a simple enough task, and I knew us three got along swimmingly, but as we began working it became clear obstacles would need to be overcome. My teammates and I were brainstorming engaging yet educational activities when I came to this realization.<br><br>Owen in particular had a more negative outlook than Pedro or myself. When it came to generating ideas, he refused to think outside the box. His ideas involved lecture-based things, which children between the ages of 10 and 14 would not have the attention span for. When Pedro or myself suggested more non-traditional ideas, for example cartoon puzzles, Owen was quick to disagree.<br><br>I found his attitude was halting our productivity and furthermore limiting our creativity and ambition. So Pedro and I agreed that, though it would be difficult considering the circumstances, we would need to chat with Owen before working further together.<br><br>We insisted he allow our ideas to be considered, despite how crazy they may sound to him, and in return we would do the same for him. Once all of our ideas were available to us all, we would narrow down them down as a team.<br><br>Despite his negativity in previous meetings, he was thankfully optimistic about our new plan. Through proper communication and a little hope we were able to move forward and reach our end goal. ',
    	'Aside from Everlane, I love <a href="https://www.thereformation.com/" target="_blank"><strong>The Reformation</strong></a> for their social consciousness and similarly, simply unique styles.  Their mission is to create fashionable products but at a much lower environmental cost compared to most other brands. By creating products that allow “fashion and sustainability [to] coexist,” they have created a brand desirable not only for their aesthetics, but also for the low environmental impact on the world. <br><br><strong>Angelina Jolie Pitt</strong> for staying grounded and using her influence for others rather than for herself. If I were to idolize one celebrity, her personal brand as a humanitarian and an individual would compel me to do so. She has impacted many causes, but her work protecting females in the midst of war has intrigued me the most. At an event held by Women In The World she powerfully stated: “Advancing the rights of women and girls worldwide is not just a moral necessity but a fundamental part of how we overcome insecurity and conflict in the world”. As seen by her devotion to providing a voice for those who are silenced, Angelina is a meritable model for both girls and women to learn from today. <br><br><a href="http://www.rosasfreshpizza.com/" target="_blank"><strong>Rosa’s Fresh Pizza</strong></a> for their mission to end world hunger first by feeding the homeless of Philadelphia. The visionaries at Rosa’s are a channel to help those in need. More than this, they even encourage t-shirt designs by their homeless customers to sell as part of the brand.  The pizza company feeds both stomachs and creativity, proving Rosa’s stance as a truly admirable brand.',
    	'Even I don’t know what I’m doing; as a chronic optimist, I like to leave room for possibilities.  I could be in Seattle playing backgammon with my dad and eating my mother’s incredible home cooking.  Or perhaps my close friends have convinced me to a night on the town, which usually means low-key bars with my kind of music (hint: my favorite band is The Strokes).<br><br>More often than not I’m caught up in the Netflix trend that has swept the nation, usually watching something animated (Mulan, Tarzan, How to Train Your Dragon, to name a few).  I might be honing my tennis skills—which I have very few of—or simply wandering the city for some fresh air.  When there’s no set plan, anything can happen.',
    	'In the weeks post-graduation (the second time around) I began the torturous thought process of \'<em>What am I going to do with my life?</em>\' It had been a plaguing question for at least six months, but now with the priorities of school behind me it was time that I provide an answer.<br><br>I was sitting in the computer room as the sunlight which stole through the blinds managed to swipe my focus as well. I was deep in existential thought: <br><br><strong>Life is a performance to procrastinate death.</strong><br><br>I was frustrated with the repetitive nature of each generation: Graduate high school, go to college, get a job, make money, have a family, have a funeral. Why is it the norm for us to do things simply because we’re supposed to? Where were the people who saw things as I did and how could they participate in this guise knowing it’s not real?<br><br>I needed a break from my pessimistic crisis, turning to the fictional world of Avatar the Last Airbender to uplift me once again. Then, the wise words of <em>Uncle Iro</em> pulled me out of my void:<br><br>“<em>In the darkest times hope is something we give ourselves, and that is the meaning of inner strength.</em>”<br><br>I immediately pressed pause. Perhaps there wasn’t room for people like to me to participate in the performance, but I had the ability to create my own role. If I hoped to make a real impact on people and bettering our way of life, I would have to start somewhere. <br><br>When I saw Everlane’s mission, I knew it would be the perfect first step. ',
    	'<strong>Attention to detail</strong>—I’ve got it. For example, this specific question in the application online literally reads: “Why are you a perfect fit the Assistant Producer role?” This sentence is incorrect as it omits the word ‘for.’<br><br>Aside from complete sentences, I ensure that every project I work on is perfectly in line with my vision before delivering the final result. For example, this entire job application complete with box, resume, application answers, cover letter, and polaroids (all in both digital <em>and</em> print) has taken me about one full month to complete.<br><br>I’ve thought out every detail down to the tissue paper in the box or a specific word in a sentence to ensure each aspect presents the image I mean to convey.  I’ve been working with a great friend - the kindly Asian man who delivered this very package to you - to be my second pair of eyes throughout the process and to create my beautiful website.<br><br>Our skype sessions would be hours at a time; I had him move things pixel by pixel, test out at least four different fonts, and bold this or italicize that.<br><br>When he provided constructive feedback (cruel at times but helpful always) we would go through each sentence and deliberate extensively over the use of which word would fit best or what sentence structure projected my voice the most.<br><br>Although this can be incredibly tedious and at times discouraging, all of this arduous work will be worth it in the end (let\s hope!).<br><br>My completed project will be exactly as I envisioned it, or hopefully even better, and attention to detail is what pulled it all together.<br><br><strong>Communication</strong>—I do it. To me, this skill encompasses many others: how the person in question listens to, collaborates with, and motivates those communicated with. Everyone has the right to present their ideas, and in turn, everyone should have the right to be heard. It is often difficult for people to feel comfortable doing so and that is why being communicative is so important to creating such inclusive environment.<br><br> With that said, I prefer people to be frank as there’s no sense in beating around the bush when striving for efficiency and mutual trust. I admire fearlessness when it comes to sharing ideas. You have to start somewhere and even though your first idea might not be the best, that should never deter you from voicing your opinions.<br><br>In order to trust your team to provide the best results, everyone needs to be honest about their true thoughts. Obviously one should be mindful of the delivery of these thoughts so that they do not diffuse the spirit. <br><br>Each colleague has the responsibility to keep the other going should they become discouraged. Of course I still have many more ways of communication to learn and still some to perfect, but with the tactics above I have a solid start to creating the best environment for myself and my colleagues. <br><br>And lastly the job description—I’m excited by it; <strong>passion</strong> always wins over practicality in my book. Everlane’s brand and mission is innovative and ethical. They embody a brand that I can truly believe in. I have been inspired time and time again by its website and social media alone. I want to learn from the people who create and live by the image of Everlane. I want to be a part of shaping Everlane\'s future and the impact they will undoubtedly have on the fashion industry.'
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

    // Cursor effect
    function cursorBlink() {
	    setInterval (cursorAnimation, 600);
    }

    function cursorAnimation() {
      $('#cursor').animate({
        opacity: 0
      }, 'fast', 'swing').animate({
        opacity: 1
      }, 'fast', 'swing');
    }

    function typeQuestion(direction) {
    	cursorBlink();
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
        	killBlink();
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