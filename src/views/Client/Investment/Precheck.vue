<template>
  <div class="main-container">
    <div class="create-user">
      <div class="user-title mb-3 px-3">Investment Request</div>

      <div class="col user-title p-0 ">
        <b-tabs class="dloat-right" pills card :active-nav-item-class="current">
          <b-tab :title-link-class="active1" title="Returns Calculator">
            <div>
              <form @submit.prevent="passes(createAccount)">
                <div class="tab-content">
                  <div class="row">
                    <div class="col-lg-6  col-md-9">
                      <div class="form-row">
                        <span class="m"
                          >Principal Amount (min: &#8358;100,000 max:
                          &#8358;3,000,000)</span
                        >
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">&#8358;</div>
                          </div>
                          <vue-numeric
                            class="form-control"
                            name="Amount"
                            v-model="principal"
                            separator=","
                          ></vue-numeric>
                        </div>
                      </div>

                      <div class="form-row">
                        <span class="m">Repayment Duration</span>
                        <div class="input-group mb-2">
                          <select
                            class="browser-default custom-select"
                            v-model="tenor"
                            required
                          >
                            <option value="1">1 month</option>
                            <option value="3">3 months</option>
                            <option value="6">6 months</option>
                            <option value="12">12 months</option>
                          </select>
                        </div>
                      </div>

                      <div class="form-row">
                        <span class="m">Return on Investment</span>
                        <label
                          class="sr-only"
                          for="inlineFormInputGroup"
                        ></label>
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">&#8358;</div>
                          </div>
                          <vue-numeric
                            class="form-control"
                            name="Amount"
                            disabled
                            v-model="mra"
                            style="background:whitesmoke"
                            separator=","
                          ></vue-numeric>
                        </div>
                        <p
                          class="text-danger mb-2"
                          style="font-size:13.5px; width:auto"
                        >
                          Please note that the return on investment is
                          investment amount plus accrued interest.
                        </p>
                      </div>

                      <div class="ro d-flex flex-wrap justify-content-end">
                        <button
                          @click="$router.push('/investment/Apply')"
                          class="btn btn-outline-secondary mt-3 mt-sm-0"
                        >
                          Proceed to Application
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import VueNumeric from "vue-numeric";
//import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  name: "Apply",
  components: {
    VueNumeric
    //ValidationObserver,
    //ValidationProvider
  },
  data() {
    return {
      principal: null,
      tenor: 1,
      mra: 0
    };
  },
  computed: {
    current() {
      return ["current2"];
    },
    active2() {
      return ["active2"];
    }
  },
  watch: {
    principal() {
      this.calculate();
    },
    tenor() {
      this.calculate();
    }
  },
  methods: {
    calculate() {
      let r = 18;

      let tenor = this.tenor;
      let principal = this.principal;

      if (tenor == 1) {
        let mra = Math.round(principal * (r / 100) * (30 / 360) + principal);
        this.mra = mra;
      }

      if (tenor == 3) {
        let mra = Math.round(principal * (r / 100) * (90 / 360) + principal);
        this.mra = mra;
      }

      if (tenor == 6) {
        let mra = Math.round(principal * (r / 100) * (180 / 360) + principal);
        this.mra = mra;
      }

      if (tenor == 12) {
        let mra = Math.round(principal * (r / 100) + principal);
        this.mra = mra;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-content {
  max-height: 470px;
  font-family: Montserrat-Regular;
}
</style>
