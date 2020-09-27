<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card card-default">
              <div class="card-header">
                <template>
                    <div class="vue-tempalte">
                      <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                          <h1 class="display-3 row justify-content-center">notesApp</h1>
                          <form>
                            <h3>Sign In</h3>

                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" class="form-control form-control-lg" />
                            </div>

                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control form-control-lg" />
                            </div>

                            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

                            <div>
                                <ul class="list-style-type: none;">
                                  <li class="signUp">
                                      <a><router-link to="/signUp">Sign Up</router-link></a>
                                  </li>
                                  <li class="forgotPassword">
                                      <a><router-link to="/forgotPassword">Forgot Password</router-link></a>
                                  </li>
                                </ul>
                            </div>
                        </form>
                        </div>
                      </div>
                    </div>
                </template>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
}
</script>
