$('.input-keyword').on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        $.ajax({
            url: 'https://api.jikan.moe/v3/search/anime?q=' + $('.input-keyword').val(),
            success: result => {
                animes = result.results;
                let cards = '';
                animes.forEach(anime => {
                    cards += `<div class="col-md-3 my-4">
                        <div class="card h-100">
                            <img src="${anime.image_url}" class="card-img-top" alt="">
                                <div class="card-body">
                                    <h5 class="card-title">${anime.title}</h5>
                                    <span class="badge rounded-pill bg-success">${anime.airing ? 'Ongoing' : 'Completed'}</span>
                                    <span class="badge rounded-pill bg-primary">Ep ${anime.episodes}</span>
                                    <span class="badge rounded-pill bg-dark">${anime.type}</span> <br>
                                    <button href="#" class="btn btn-primary detail-button mt-4 btn-sm" data-detail="${anime.mal_id}" data-bs-toggle="modal" data-bs-target="#animeDetail">See Details</button>
                                </div>
                        </div>
                    </div>`;
                });
                $('.card-container').html(cards);    
        
                $('.detail-button').on('click', function(){
                   // console.log($(this).data('detail'));
                   $.ajax({
                       url:' https://api.jikan.moe/v3/anime/' + $(this).data('detail'),
                       success: anime => {
                           const animeDetail = `<div class="container-fluid">
                           <div class="row">
                               <div class="col-md-3">
                                   <img src="${anime.image_url}" class="img-fluid">
                               </div>
                               <div class="col-md-9">
                                   <ul class="list-group">
                                       <li class="list-group-item"><h4>${anime.title}</h4></li>
                                       <li class="list-group-item"><strong>Status : </strong> ${anime.status}</li>
                                       <li class="list-group-item"><strong>Total Episode : </strong> ${anime.episodes}</li>
                                       <li class="list-group-item"><strong>Duration : </strong> ${anime.duration}</li>
                                       <li class="list-group-item"><strong>Rank : </strong> ${anime.rank}</li>
                                       <li class="list-group-item"><strong>Scored MAL : </strong> ${anime.score} / 10.00</li>
                                       <li class="list-group-item"><strong>Synopsis : </strong> <br> ${anime.synopsis}</li>
                                   </ul>
                               </div>
                           </div>
                       </div>`;
                       $('.modal-body').html(animeDetail);
                       }
                   })
                });
            },
            error: e => console.log(e.responseText),
        });
    }
});

$('.search-button').on('click', function() {
    $.ajax({
        url: 'https://api.jikan.moe/v3/search/anime?q=' + $('.input-keyword').val(),
        success: result => {
            animes = result.results;
            let cards = '';
            animes.forEach(anime => {
                cards += `<div class="col-md-3 my-4">
                    <div class="card h-100">
                        <img src="${anime.image_url}" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">${anime.title}</h5>
                                <span class="badge rounded-pill bg-success">${anime.airing ? 'Ongoing' : 'Completed'}</span>
                                <span class="badge rounded-pill bg-primary">Ep ${anime.episodes}</span>
                                <span class="badge rounded-pill bg-dark">${anime.type}</span> <br>
                                <button href="#" class="btn btn-primary detail-button mt-4 btn-sm" data-detail="${anime.mal_id}" data-bs-toggle="modal" data-bs-target="#animeDetail">See Details</button>
                            </div>
                    </div>
                </div>`;
            });
            $('.card-container').html(cards);    
    
            $('.detail-button').on('click', function(){
               // console.log($(this).data('detail'));
               $.ajax({
                   url:' https://api.jikan.moe/v3/anime/' + $(this).data('detail'),
                   success: anime => {
                       const animeDetail = `<div class="container-fluid">
                       <div class="row">
                           <div class="col-md-3">
                               <img src="${anime.image_url}" class="img-fluid">
                           </div>
                           <div class="col-md-9">
                               <ul class="list-group">
                                   <li class="list-group-item"><h4>${anime.title}</h4></li>
                                   <li class="list-group-item"><strong>Status : </strong> ${anime.status}</li>
                                   <li class="list-group-item"><strong>Total Episode : </strong> ${anime.episodes}</li>
                                   <li class="list-group-item"><strong>Duration : </strong> ${anime.duration}</li>
                                   <li class="list-group-item"><strong>Rank : </strong> ${anime.rank}</li>
                                   <li class="list-group-item"><strong>Scored MAL : </strong> ${anime.score} / 10.00</li>
                                   <li class="list-group-item"><strong>Synopsis : </strong> <br> ${anime.synopsis}</li>
                               </ul>
                           </div>
                       </div>
                   </div>`;
                   $('.modal-body').html(animeDetail);
                   }
               })
            });
        },
        error: e => console.log(e.responseText),
    });
});