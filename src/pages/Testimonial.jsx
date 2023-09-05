import React from "react";

function Testimonial() {
  return (
    <>
      <section class="inner_page_head">
        <div class="container_fuild">
          <div class="row">
            <div class="col-md-12">
              <div class="full">
                <h4>Faire une demande pour devenir livreur</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <img src="images/6501031.png" alt="Image" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <h2>Formulaire de demande</h2>
            <form>
              <div class="form-group row">
                <div class="col-md-6">
                  <label for="nom">Nom</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nom"
                    name="nom"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="prénom">Prénom</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nom"
                    name="nom"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="dateNaissance">Date de naissance</label>
                <input
                  type="date"
                  class="form-control"
                  id="dateNaissance"
                  name="dateNaissance"
                  required
                />
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <label for="pays">Pays</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nom"
                    name="nom"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="ville">Ville</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nom"
                    name="nom"
                    required
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="email">Adresse mail</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <label for="telephone">Numéro de téléphone</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="telephone"
                    name="telephone"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="codePostal">Code postal</label>
                  <input
                    type="text"
                    class="form-control"
                    id="codePostal"
                    name="codePostal"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="situationMatrimoniale">
                  Situation matrimoniale
                </label>
                <select
                  class="form-control"
                  id="situationMatrimoniale"
                  name="situationMatrimoniale"
                  required
                >
                  <option value="celibataire">Célibataire</option>
                  <option value="marie">Marié(e)</option>
                  <option value="divorce">Divorcé(e)</option>
                  <option value="veuf">Veuf/Veuve</option>
                </select>
              </div>
              <button type="submit" class="btn btn-danger">
                Faire une demande
              </button>
            </form>
          </div>
        </div>
      </div>{" "}
      <br />
    </>
  );
}

export default Testimonial;
