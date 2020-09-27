<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card card-default">
              <div class="card-header">
                <template>
                    <div class="vue-tempalte">
                        <form>
                            <h3 class="text-align=center">Sign In</h3>

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
                                <li class="signUp">
                                    <router-link to="/signUp">Sign Up</router-link>
                                </li>
                                <li class="forgotPassword">
                                    <router-link to="/forgotPassword">Forgot Password</router-link>
                                </li>
                            </div>
                        </form>
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
