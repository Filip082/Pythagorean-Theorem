var data = { formulas: {
    pitagoreanTeorem: {
      style: '<style>#card-info{margin-bottom: 1em;} @media (min-width: 576px) { #card-info{ margin-bottom: 0em; } #kartka{ width: 120px; height: 120px; } } @media (min-width: 992px) { #kartka{ width: 240px; height: 240px; } }</style>',
      body: '<div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Twierdzenie Pitagorasa</h1>
          <p class="lead">
            Twierdzenie Pitagorasa mówi, że w dowolnym trójkącie prostokątnym suma kwadratów długości przyprostokątnych jest równa kwadratowi długości przeciwprostokątnej tego trójkąta.
          </p>
          <hr class="my-4">
          <p>Podaj dane, żeby obliczyć Twierdzenie Pitagorasa dla wybranego przez siebie trójkąta prostokątnego.</p>
          <div class="form-group">
            <label for="formGroupExampleInput">
              Podaj długość przyprostokątnej a
            </label>
            <input type="text" class="form-control" id="a" placeholder="Wpisz wartość">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">
                Podaj długość przyprostokątnej b lub przeciwprostokątnej c<span class="text-danger">*</span>
            </label>
            <input type="text" class="form-control" id="bc" placeholder="Wpisz wartość">
          </div>
          <p class="text-danger">
            *Podana wartość to długość:
            <div class="form-check">
              <input class="form-check-input" type="radio" name="bczyc" value="b" checked>
              <label class="form-check-label" for="exampleRadios1">
                Przyprostokątnej b
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="bczyc" value="c">
              <label class="form-check-label" for="exampleRadios2">
                Przeciwprostokątnej c
              </label>
            </div>
          </p>
          <button  class="btn btn-primary" style="margin-top: 1em;" data-toggle="modal" data-target=".bd-example-modal-lg" onclick="oblicz();">Oblicz</button>
        </div>

        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title h4" id="mySmallModalLabel">Wynik</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-sm-7">
                    <div class="card" id="card-info">
                      <div class="card-body">
                        <h4 class="card-title">Informacje</h4>
                        <h6>Oto informacje o Twoim trójkącie:</h6>
                        <p class="card-text" id="info"></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-5">
                    <div class="card">
                      <div class="card-body">
                        <h4 class="card-title">Rysunek</h4>
                        <canvas id="kartka" width="240" height="240" ></canvas>
                      </div>
                    </div>
                  </div>
                </div></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div></div>
',
      script: ''
    }
  }
};

}

function insertContent() {

}
