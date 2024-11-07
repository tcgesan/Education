


function ques() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
        window.location.href = '../HTMLS/updating.html';
    }, 150); 
}



function handleClick() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
        window.location.href = '../HTMLS/quiz.html';
    }, 150); 
}


function Fact() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
        window.location.href = '../HTMLS/Fact.html';
    }, 150);
}



function riddle() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
        window.location.href = '../HTMLS/riddle.html';
    }, 150); 
}



function grammer() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
        window.location.href = '../HTMLS/grammer.html';
    }, 150); 
}


function voca() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
        window.location.href = '../HTMLS/Vocabulary.html';
    }, 150);
}



function proverb() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
        window.location.href = '../HTMLS/proverb.html';
    }, 150);
}



function audioBook() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
        window.location.href = '../HTMLS/audio.html';
    }, 150); 
}




function gk() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
        window.location.href = '../HTMLS/gk.html';
    }, 150); 
}



function library() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
        window.location.href = '../HTMLS/library.html';
    }, 150);
}

function pera() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
        window.location.href = '../HTMLS/sub-pera.html';
    }, 150);
}



function chatbot() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
        window.location.href = '../HTMLS/Gemini-Home.html';
    }, 150);
}


function text() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
        window.location.href = '../HTMLS/Voice.html';
    }, 150); 
}



function tense() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
      window.location.href = '../HTMLS/tense.html'; 
    },150); 
}

function idioms() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
      window.location.href = '../HTMLS/idioms.html'; 
    },150); 
}



function phrase() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
      window.location.href = '../HTMLS/phrase.html';
    },150); 
}



function clause() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
      window.location.href = '../HTMLS/clause.html'; 
    },150); 
}


function voicee() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
      window.location.href = '../HTMLS/voicee.html'; 
    },150); 
}



function vocab() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
      window.location.href = '../HTMLS/vocab.html'; 
    },150);
}



function partof() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
      window.location.href = '../HTMLS/part.html'; 
    },150); 
}



function prepo() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
      window.location.href = '../HTMLS/prepo.html'; 
    },150); 
}

function gs() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
      window.location.href = '../HTMLS/grammar&syntax.html'; 
    },150);
}


function analogy() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
      window.location.href = '../HTMLS/analogy-spelling.html'; // Redirect after 3 seconds
    },150); 
}


function next() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
        window.location.href = '../HTMLS/L2.html';
    }, 150); 
}


function dokhota() {
    var sound = document.getElementById("clickSound");
    sound.play();
    setTimeout(function() {
        window.location.href = '../HTMLS/mental-power.html';
    }, 150); 
}



// Back Button
function goBack() {
    window.history.back();
}



// Service Worker code start

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('../service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }
  
  // Function to handle form submission
  async function handleFormSubmit(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
  
    // Check if we are online
    if (navigator.onLine) {
      // Send data immediately
      await sendDataToServer(data);
    } else {
      // Cache data and set up Background Sync
      await cacheDataForSync(data);
    }
  }
  
  // Function to send data to the server
  async function sendDataToServer(data) {
    await fetch('/api/sync-endpoint', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  
  // Function to cache data for sync
  async function cacheDataForSync(data) {
    const cache = await caches.open(CACHE_NAME);
    await cache.put('/data-to-sync', new Response(JSON.stringify(data)));
  
    // Request Background Sync
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      navigator.serviceWorker.ready
        .then((registration) => {
          return registration.sync.register('sync-data'); // 'sync-data' is the tag
        })
        .catch((error) => {
          console.error('Failed to register sync:', error);
        });
    }
  }
  
// Service Worker code End  !!!!





const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true
});

scroll.on("scroll", () => {
  console.log("Locomotive Scroll is working!");
});





// Search Paragraphs

              // Function to show random three paragraphs
              function showRandomParagraphs() {
                const paragraphs = Array.from(document.querySelectorAll('.paragraph'));
                paragraphs.forEach(paragraph => paragraph.classList.add('hidden'));
          
                // Shuffle paragraphs and pick first 3
                const selectedParagraphs = paragraphs.sort(() => 0.5 - Math.random()).slice(0, 3);
                selectedParagraphs.forEach(paragraph => paragraph.classList.remove('hidden'));
              }
          
              // Initial display of random paragraphs on page load
              showRandomParagraphs();
          
              // Search function
              function searchParagraphs() {
                const keyword = document.getElementById('searchInput').value.toLowerCase();
                const paragraphs = document.querySelectorAll('.paragraph');
                let found = false;
          
                paragraphs.forEach(paragraph => {
                  if (keyword && paragraph.textContent.toLowerCase().includes(keyword)) {
                    paragraph.classList.remove('hidden');
                    found = true;
                  } else {
                    paragraph.classList.add('hidden');
                  }
                });
          
                // Show "no results" message if nothing is found
                document.getElementById('noResults').classList.toggle('hidden', found);
              }