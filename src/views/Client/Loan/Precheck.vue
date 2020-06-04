<template>
  <div class="main-container">
    <div class="create-user">
      <div class="user-title mb-3 px-3">Loan Request</div>

      <div class="col user-title p-0 ">
        <b-tabs class="dloat-right" pills card :active-nav-item-class="current">
          <b-tab :title-link-class="active1" title="Loan Calculator">
            <div>
              <form @submit.prevent="passes(createAccount)">
                <div class="tab-content">
                  <div class="row">
                    <div class="col-lg-6  col-md-9">
                      <div class="form-row">
                        <span class="m"
                          >Loan Amount (min: &#8358;100,000 max:
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
                          <div class="input-group-prepend">
                            <div
                              @click="minus"
                              class="input-group-text"
                              style="cursor:pointer"
                            >
                              -
                            </div>
                          </div>

                          <vue-numeric
                            style="background:whitesmoke"
                            v-model.number="tenor"
                            class="form-control py-0"
                          >
                          </vue-numeric>

                          <div class="input-group-append">
                            <div
                              class="input-group-text d-none d-sm-block"
                              style="color:darkgray"
                            >
                              month(s)
                            </div>
                            <div
                              @click="plus"
                              class="input-group-text"
                              style="cursor:pointer"
                            >
                              +
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="form-row">
                        <span class="m">Monthly Repayment Amount</span>
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
                          Please note that the interest rate is fixed per month
                          on the principal amount.
                        </p>
                      </div>

                      <div class="ro d-flex flex-wrap justify-content-end">
                        <button
                          @click="$router.push('/Loan/Apply')"
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

export default {
  name: "Apply",
  components: {
    VueNumeric
  },
  data() {
    return {
      price: "",
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
    minus() {
      if (this.tenor <= 0) return;
      this.tenor = this.tenor - 1;
    },
    plus() {
      if (this.tenor >= 6) return;
      this.tenor = this.tenor + 1;
    },
    calculate() {
      let a = 13.5;
      let b = 16.7;
      let c = 19.96;
      let d = 23.28;
      let e = 26.66;
      let f = 30;

      let tenor = this.tenor;
      let principal = this.principal;

      if (tenor == 1) {
        let mra = (principal * (a / 100 + 1)) / tenor;
        this.mra = mra;
      }

      if (tenor == 2) {
        let mra = (principal * (b / 100 + 1)) / tenor;
        this.mra = mra;
      }

      if (tenor == 3) {
        let mra = (principal * (c / 100 + 1)) / tenor;
        this.mra = mra;
      }

      if (tenor == 4) {
        let mra = (principal * (d / 100 + 1)) / tenor;
        this.mra = Math.round(mra * 100) / 100;
      }

      if (tenor == 5) {
        let mra = (principal * (e / 100 + 1)) / tenor;
        this.mra = mra;
      }

      if (tenor == 6) {
        let mra = (principal * (f / 100 + 1)) / tenor;
        this.mra = mra;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-content {
  font-family: Montserrat-Regular;
}
</style>
