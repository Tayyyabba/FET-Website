document.addEventListener('DOMContentLoaded', () => {
  const images = [
      {
          url: '../images/bg1.jpg',
          heading: 'Faculty Of Engineering And Technology',
          description: 'University of Sindh, Jamshoro'
      },
      {
          url: '../images/bg2.jpg',
          heading: 'Innovative Research and Development',
          description: 'Advancing Technology for Future'
      },
      {
          url: '../images/coridor.jpg',
          heading: 'Empowering Engineers',
          description: 'Shaping the World with Knowledge'
      }
  ];

  let currentIndex = 0;

  const sliderHeading = document.getElementById('slider-heading');
  const sliderDescription = document.getElementById('slider-description');
  const homeSection = document.querySelector('.home');

  function updateSlide(index) {
      sliderHeading.textContent = images[index].heading;
      sliderDescription.textContent = images[index].description;
      homeSection.style.backgroundImage = `url(${images[index].url})`;
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlide(currentIndex);
  }

  // Initial slide
  updateSlide(currentIndex);

  // Change slide every 5 seconds
  setInterval(nextSlide, 5000);
});

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the form
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Validate the email and password
  if (email === 'tayyabashamim@gmail.com' && password === 'admin') {
      alert('Login successful!');
      // Optionally, redirect to another page
      window.location.href = 'learnmore.html';
  } else {
      alert('Invalid email or password.');
  }
});
