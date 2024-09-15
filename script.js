const surpriseButton = document.getElementById('surpriseButton')
surpriseButton.addEventListener('click', function() {
    document.getElementById('surpriseMessage').style.display = 'block';
    document.getElementById('surpriseImage').style.display = 'block';
    document.getElementById('main_container').style.display='none';
    surpriseButton.style.display='none'
  
    // Play the birthday song
    var audio = document.getElementById('birthdaySong');
    audio.play();
  
    startConfetti();
  });
  
  // Confetti effect
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const confettiColors = ['#ff69b4', '#ff1493', '#ff4500', '#ffd700', '#32cd32', '#00bfff'];
  const confetti = [];
  
  function ConfettiPiece() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.size = Math.random() * 8 + 4;
    this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    this.speed = Math.random() * 3 + 2;
  }
  
  ConfettiPiece.prototype.update = function() {
    this.y += this.speed;
    if (this.y > canvas.height) this.y = 0 - this.size;
  };
  
  ConfettiPiece.prototype.draw = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  };
  
  function startConfetti() {
    for (let i = 0; i < 100; i++) {
      confetti.push(new ConfettiPiece());
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confetti.forEach(piece => {
        piece.update();
        piece.draw();
      });
      requestAnimationFrame(animate);
    }
    animate();
  }
  