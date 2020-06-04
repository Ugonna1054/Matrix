<template>
  <div class="main-container">
    <Loader :loading="loading" loading-text="please wait..." />
    <div class="create-user">
      <div class="user-title mb-5">
        <div class="col-12">
          <span class="create mr-4 mr-sm-5" :class="{ active: true }" @click="create">Create User</span>
          <span class="manage" @click="manage">Manage User</span>
        </div>
      </div>
      <div class="row mb-5 mt-n4">
        <div class="col-12">
          <b-tabs pills no-body :active-nav-item-class="current">
            <!-- Agent Tab -->
            <b-tab :title-link-class="active1" title="Agent">
              <div class="line mb-3 mt-2"></div>
              <div class="tab-content">
                <ValidationObserver v-slot="{ passes }">
                  <form @submit.prevent="passes(createAccount)">
                    <div class="container tab-contents user-title">
                      <div class="row">
                        <div class="col-md-8">
                          <div class="row">
                            <!-- Firstname -->
                            <div class="col-md-6 mb-3">
                              <ValidationProvider
                                name="firstname"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <label for="v">
                                  First Name
                                  <span class="text-danger">*</span>
                                </label>
                                <div class="input-group">
                                  <input
                                    type="text"
                                    v-model="firstname"
                                    class="form-control"
                                    placeholder
                                    name="firstname"
                                  />
                                </div>
                                <span style="font-size:13px; color:red">
                                  <span v-if="errors[0]">
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  {{ errors[0] }}
                                </span>
                              </ValidationProvider>
                            </div>

                            <!-- Midlename -->
                            <div class="div3i col-md-6 mb-3">
                              <ValidationProvider
                                name="middlename"
                                rules=""
                                v-slot="{ errors }"
                              >
                                <label for="v">
                                  Middle Name
                                  <span class="text-danger"></span>
                                </label>
                                <div class="input-group">
                                  <input
                                    type="text"
                                    v-model="middlename"
                                    class="form-control"
                                    placeholder
                                    name="middlename"
                                  />
                                </div>
                                <span style="font-size:13px; color:red">
                                  <span v-if="errors[0]">
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  {{ errors[0] }}
                                </span>
                              </ValidationProvider>
                            </div>
                          </div>
                          <div class="row">
                            <!-- Last Name -->
                            <div class="col-md-6 mb-3">
                              <ValidationProvider
                                name="lastname"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <label for="v">
                                  Last Name
                                  <span class="text-danger">*</span>
                                </label>
                                <div class="input-group">
                                  <input
                                    type="text"
                                    v-model="lastname"
                                    class="form-control"
                                    placeholder
                                    name="lastname"
                                  />
                                </div>
                                <span style="font-size:13px; color:red">
                                  <span v-if="errors[0]">
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  {{ errors[0] }}
                                </span>
                              </ValidationProvider>
                            </div>
                            <!-- Phone Number -->
                            <div class="div3i col-md-6 mb-3">
                              <ValidationProvider
                                name="phone"
                                rules="required|max:11|min:11"
                                v-slot="{ errors }"
                              >
                                <label for="v">
                                  Phone Number
                                  <span class="text-danger">*</span>
                                </label>
                                <div class="input-group">
                                  <input
                                    type="number"
                                    v-model="phone"
                                    class="form-control"
                                    placeholder
                                    name="phone"
                                  />
                                </div>
                                <span style="font-size:13px; color:red">
                                  <span v-if="errors[0]">
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  {{ errors[0] }}
                                </span>
                              </ValidationProvider>
                            </div>
                          </div>
                          <!-- Email -->
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <ValidationProvider
                                name="email"
                                rules="required|email"
                                v-slot="{ errors }"
                              >
                                <label for="v">
                                  Email
                                  <span class="text-danger">*</span>
                                </label>
                                <div class="input-group">
                                  <input
                                    type="email"
                                    v-model="email"
                                    class="form-control"
                                    placeholder
                                    name="email"
                                  />
                                </div>
                                <span style="font-size:13px; color:red">
                                  <span v-if="errors[0]">
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  {{ errors[0] }}
                                </span>
                              </ValidationProvider>
                            </div>
                            <!-- password -->
                            <div class="form-group col-md-6 col-sm-12">
                              <ValidationProvider
                                name="password"
                                rules="required|min:6"
                                ref="password"
                                v-slot="{ errors }"
                              >
                                <label for="password">Password</label>
                                <input
                                  v-model="password"
                                  type="password"
                                  name="password"
                                  class="form-control"
                                  id="password"
                                />
                                <span style="font-size:13px; color:red">
                                  <span v-if="errors[0]">
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  {{ errors[0] }}
                                </span>
                              </ValidationProvider>
                            </div>
                            <div class="form-group col-md-6 col-sm-12">
                              <ValidationProvider
                                name="password confirmation"
                                rules="required|confirmed:password"
                                v-slot="{ errors }"
                              >
                                <label for="password">Confirm Password</label>
                                <input
                                  v-model="password1"
                                  name="password confirmation"
                                  type="password"
                                  class="form-control"
                                  id="password1"
                                />
                                <span style="font-size:13px; color:red">
                                  <span v-if="errors[0]">
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  {{ errors[0] }}
                                </span>
                              </ValidationProvider>
                            </div>
                            <!-- Date of Birth -->
                            <div class="col-md-6 mb-3">
                              <ValidationProvider name="dob" rules>
                                <label for>
                                  Date of Birth
                                  <span class="text-danger">*</span>
                                </label>
                                <div class="input-group">
                                  <datetime v-model="dob" class placeholder=" -DD-MM-YY-"></datetime>
                                  <div class="input-group-append">
                                    <span class="input-group-text" style="height:30px">
                                      <i class="fa fa-calendar-check" aria-hidden="true"></i>
                                    </span>
                                  </div>
                                </div>
                                <span v-if="error" style="font-size:13px; color:red">
                                  <span>
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  This field is required
                                </span>
                              </ValidationProvider>
                            </div>
                          </div>

                          <!-- Address -->
                          <div class="row">
                            <div class="col-12">
                              <div class="div1i mb-3">
                                <ValidationProvider
                                  name="address"
                                  rules="required"
                                  v-slot="{ errors }"
                                >
                                  <label for="v">
                                    Current Address
                                    <span class="text-danger">*</span>
                                  </label>
                                  <div class="input-group">
                                    <textarea
                                      type="text"
                                      v-model="address"
                                      class="form-control"
                                      placeholder
                                      rows="3"
                                      name="address"
                                    ></textarea>
                                  </div>
                                  <span style="font-size:13px; color:red">
                                    <span v-if="errors[0]">
                                      <i class="fas fa-ban"></i>
                                    </span>
                                    {{ errors[0] }}
                                  </span>
                                </ValidationProvider>
                              </div>
                            </div>
                          </div>
                          <!-- <div class="btn btn-info float-right">submit</div> -->
                        </div>

                        <!-- Image uploads -->
                        <div class="col-md-4">
                          <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-9">
                              <div class="div1 mb-3">
                                <span class="mt-md-n4 mb-md-3">
                                  ID Attachment
                                  <span class="text-danger">*</span>
                                </span>
                                <div class="mb-2 mb-md-0 uploads" style="height:130px">
                                  <img class="img-fluid" :src="idCard" alt />
                                </div>
                                <span style="font-size:13px; color:red">maximum file size : 2mb</span>

                                <div class="input-group mt-2">
                                  <ValidationProvider
                                    name="idCard"
                                    rules="required|image|size:2000"
                                    v-slot="{ validate, errors }"
                                  >
                                    <label class="btn ml-1 btn-primary btn-file">
                                      BROWSE
                                      <input
                                        type="file"
                                        class="mt-3 mt-md-0 mb-2 mb-md-1 d-none"
                                        @change="
                                          onFileChange1($event);
                                          validate($event);
                                        "
                                        name="idCard"
                                        id="id"
                                      />
                                    </label>
                                    <br />
                                    <span style="font-size:13px; color:red">
                                      <span v-if="errors[0]">
                                        <i class="fas fa-ban"></i>
                                      </span>
                                      {{ errors[0] }}
                                    </span>
                                  </ValidationProvider>
                                </div>
                              </div>
                              <div class="div2">
                                <span class="mt-md-n4 mb-md-3">
                                  Passport
                                  <span class="text-danger">*</span>
                                </span>
                                <div class="mb-2 mb-md-0 uploads" style="height:130px">
                                  <img class="img-fluid" :src="passport" alt />
                                </div>
                                <span style="font-size:13px; color:red">maximum file size : 2mb</span>

                                <div class="input-group mr-2 mt-2">
                                  <ValidationProvider
                                    name="signature"
                                    rules="required|image|size:2000"
                                    v-slot="{ validate, errors }"
                                  >
                                    <label class="btn ml-1 btn-primary btn-file">
                                      BROWSE
                                      <input
                                        type="file"
                                        class="mt-3 mt-md-0 mb-2 mb-md-1 small-screen-id"
                                        @change="
                                          onFileChange2($event);
                                          validate($event);
                                        "
                                        style="display:none"
                                        name="signature"
                                        id="signature"
                                      />
                                    </label>
                                    <br />
                                    <span style="font-size:13px; color:red">
                                      <span v-if="errors[0]">
                                        <i class="fas fa-ban"></i>
                                      </span>
                                      {{ errors[0] }}
                                    </span>
                                  </ValidationProvider>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <b-button type="submit" class="btn mt-3 float-right mr-1 btn-info">SUBMIT</b-button>
                  </form>
                </ValidationObserver>
              </div>
            </b-tab>

            <!-- Teller tab -->
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import Loader from "../../../utils/vue-loader/loader.vue";
import { mapState } from "vuex";
import { adminService } from "../../../services/AdminServices/admin.services";

export default {
  name: "Dashboard",
  components: {
    ValidationObserver,
    ValidationProvider,
    Loader
  },
  data() {
    return {
      firstname: "",
      middlename: "",
      lastname: "",
      phone: "",
      email: "",
      password: "",
      address: "",
      dob: "",
      idCard: "",
      idCard_: "",
      passport: "",
      passport_: "",
      error: false,
      loading: false
    };
  },
  computed: {
    current() {
      return ["current"];
    },
    active1() {
      return ["tab"];
    },
    ...mapState({
      token: state => state.User.AUTH_TOKEN
    })
  },
  methods: {
    create() {
      this.$router.push("/Admin/User/Create");
    },
    manage() {
      this.$router.push("/Admin/User/Manage");
    },
    async createAccount() {
      this.loading = true;
      await adminService
        .createAgent({
          token: this.token,
          firstname: this.firstname,
          middlename: this.middlename,
          dob: this.dob,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          phone: this.phone,
          address: this.address,
          idCard: this.idCard_,
          passport: this.passport_
        })
        .then(res => {
          this.$toastr.s(res.message, "Created Succesfully");
          this.$router.push("/Admin/Dashboard");
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    onFileChange1(e) {
      let files = e.target.files || e.dataTransfer.files;
      this.idCard_ = files[0];
      window.console.log(files[0]);

      if (!files.length) return;
      this.createImage1(files[0]);
    },
    createImage1(file) {
      let reader = new FileReader();
      // converts image to base64 and diaplays selected image to the client
      reader.onload = e => {
        this.idCard = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFileChange2(e) {
      let files = e.target.files || e.dataTransfer.files;
      this.passport_ = files[0];
      if (!files.length) return;
      this.createImage2(files[0]);
    },
    createImage2(file) {
      let reader = new FileReader();
      // converts image to base64 and diaplays selected image to the client
      reader.onload = e => {
        this.passport = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style lang="scss">
.line {
  @include line;
}
.img-fluid {
  max-height: 130px !important;
}
</style>
