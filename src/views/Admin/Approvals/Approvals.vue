<template>
  <div class="main-container">
    <Loader :loading="loading" loading-text="please wait..." />
    <div class="create-user">
      <div class="">
        <b-tabs class="ml-n3" pills no-body :active-nav-item-class="current">
          <!-- Accounts approval tab-->
          <b-tab
            class="ml-3 mb-5"
            :title-link-class="active1"
            title="Account Approval"
          >
            <div class="line mt-3"></div>
            <div class="user-title card mt-3">
              <div class="col-12 tab-contents1">
                <div class="top mb-2">
                  <div class="mb-3">Account Request</div>
                  <div>
                    <div class="input-group float-right">
                      <input
                        type="search"
                        placeholder="Search Account"
                        class="form-control"
                      />
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <i class="fa fa-search"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="recent-transactions table-responsive">
                  <table>
                    <tr style="color:whitesmoke" class="bg-secondary">
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Email Address</th>
                      <th>Status</th>
                      <th>Details</th>
                    </tr>

                    <tr v-for="(customer, index) in Customers" :key="index">
                      <td>{{ customer.firstname }} {{ customer.lastname }}</td>
                      <td>{{ customer.phone }}</td>
                      <td>{{ customer.email }}</td>
                      <td>{{ customer.status }}</td>
                      <td class="text-primary action" @click="Account(index)">
                        View
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </b-tab>

          <!-- Transactions approval tab-->
          <b-tab
            class="ml-3 mb-5"
            :title-link-class="active1"
            title="Transactions Approval"
            :active="transaction"
          >
            <div class="line mt-3"></div>
            <div class="user-title card mt-3">
              <div class="col-12 tab-contents1">
                <div class="top mb-2">
                  <div class="mb-3">Transactions</div>
                  <div>
                    <div class="input-group float-right">
                      <input
                        type="search"
                        placeholder="Search Account"
                        class="form-control"
                      />
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <i class="fa fa-search"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="recent-transactions table-responsive">
                  <table>
                    <tr style="color:whitesmoke" class="btn-secondary">
                      <th>Reference</th>
                      <th>Account</th>
                      <th>Amount</th>
                      <th>Agent</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Details</th>
                    </tr>

                    <tr
                      v-for="(transaction, index) in Transactions"
                      :key="index"
                    >
                      <td>{{ truncString(transaction._id) }}</td>
                      <td>{{ transaction.account }}</td>
                      <td>&#8358; {{ formatAmount(transaction.amount) }}</td>
                      <td >
                        {{ transaction.agent.firstname }}
                        {{ transaction.agent.lastname }}
                        {{ transaction.agent.middlename }}
                      </td>
                      <td>{{ transaction.status }}</td>
                      <td>{{ moment(transaction.createdAt) }}</td>
                      <td
                        class="text-primary action"
                        @click="Transaction(index)"
                      >
                        View
                      </td>
                      <!-- <td>
                        <b-progress
                          :value="value"
                          :max="max"
                          show-progress
                          variant="info"
                          animated="true"
                        ></b-progress>
                      </td> -->
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </b-tab>

          <!-- Loan Approval Tab -->
          <b-tab
            class="ml-3"
            :title-link-class="active1"
            title="Loan Approval"
            :active="loan"
          >
            <div class="line mt-3 mb-3"></div>
            <div class="user-title card mt-3">
              <div class="col-12 tab-contents1">
                <div class="top mb-2">
                  <div class="mb-3">Loan Request</div>
                  <div>
                    <div class="input-group float-right">
                      <input
                        type="search"
                        placeholder="Search Loan"
                        class="form-control"
                      />
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <i class="fa fa-search"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="recent-transactions table-responsive">
                  <table>
                    <tr style="color:whitesmoke" class="bg-secondary">
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Tenor</th>
                      <th>Account</th>
                      <th>Agent</th>
                      <th>Status</th>
                      <th>Date Applied</th>
                      <th>View</th>
                    </tr>

                    <tr v-for="(loan, index) in Loans" :key="index">
                      <td>
                        {{ loan.user.firstname }} {{ loan.user.lastname }}
                      </td>
                      <td>&#8358; {{ formatAmount(loan.amount) }}</td>
                      <td>{{ loan.tenor }} Month(s)</td>
                      <td>{{ loan.account }}</td>
                      <td v-if="loan.agent">
                        {{ loan.agent.firstname }} {{ loan.agent.lastname }}
                      </td>
                      <td v-else>Nil</td>
                      <td>{{ loan.status }}</td>
                      <td>{{ truncString1(moment(loan.createdAt)) }}</td>
                      <td class="text-primary action" @click="Loan(index)">
                        View
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </b-tab>

          <!-- Investment Approval Tab -->
          <!-- <b-tab
            class="ml-3"
            :title-link-class="active1"
            title="Investment Approval"
            :active="investment"
          >
            <div class="line mt-3 mb-0"></div>
            <div class="user-title card mt-3">
              <div class="col-12 tab-contents1">
                <div class="top mb-2">
                  <div class="mb-3">Investment Request</div>
                  <div>
                    <div class="input-group float-right">
                      <input
                        type="search"
                        placeholder="Search Investment"
                        class="form-control"
                      />
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <i class="fa fa-search"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="recent-transactions table-responsive">
                  <table>
                    <tr style="color:whitesmoke"  class="bg-secondary">
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Duration</th>
                      <th>Status</th>
                      <th>Date Applied</th>
                      <th>View</th>
                      <th>Delete</th>
                    </tr>

                    <tr v-for="(one, index) in 9" :key="index">
                      <td>Ubaka Ugonna</td>
                      <td>N 3,000</td>
                      <td>6 Months</td>
                      <td>Pending</td>
                      <td>Something</td>
                      <td class="text-primary action" @click="Investment">
                        View
                      </td>
                      <td class="text-danger  action">Delete</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </b-tab> -->
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { clientService } from "../../../services/ClientServices/client.services";
import { adminService } from "../../../services/AdminServices/admin.services";
import Loader from "../../../utils/vue-loader/loader.vue";
import moment from "moment";

export default {
  name: "Approvals",
  components: {
    Loader
  },
  data() {
    return {
      loading: false,
      Customers: [],
      Transactions: [],
      Loans: [],
      account: true,
      loan: false,
      transaction: false,
      investment: false
    };
  },
  computed: {
    current() {
      return ["current"];
    },
    active1() {
      return ["tab"];
    },
    routeQuery() {
      return this.$route.query.p;
    }
  },
  methods: {
    //format amount
    formatAmount(x) {
      if (x == null || x == "" || x == undefined) return;
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
    //moment
    moment(date) {
      return moment(date);
    },
    //truncate string
    truncString(str) {
      if (str == null || str == "" || str == undefined) return;
      return str.substring(3, 13);
    },
    //truncate string
    truncString1(str) {
      if (str == null || str == "" || str == undefined) return;
      return str.toString().substring(0, 25);
    },
    Account(index) {
      let customer = this.Customers[index];
      this.$store.commit("SET_USER_DETAILS", customer);
      this.$router.push("/Admin/Approvals/Details");
    },
    Transaction(index) {
      let transaction = this.Transactions[index];
      this.$store.commit("SET_TRANSACTION_DETAILS", transaction);
      this.$router.push("/Admin/Approvals/Details?p=1");
    },
    Loan(index) {
      let loan = this.Loans[index];
      this.$store.commit("SET_LOAN_DETAILS", loan);
      this.$router.push("/Admin/Approvals/Details?p=2");
    },
    Investment() {
      this.$router.push("/Admin/Approvals/Details?p=3");
    },
    //get all customers
    async getCustomers() {
      this.loading = true;
      await clientService
        .getCustomers()
        .then(res => {
          //this.$toastr.s("Fetched Succesfully");
          this.Customers = res;
          window.console.log(this.Customers);
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    //get transactions
    async getTransaction() {
      this.loading = true;
      await clientService
        .getTransaction()
        .then(res => {
          this.Transactions = res;
        })
        .catch(err => {
          //this.$toastr.e(err.message || err, "Failed");
          window.console.log(err.message);
          
        })
        .finally(() => {
          this.loading = false;
        });
    },
    //get all loan  requests
    async getLoan() {
      this.loading = true;
      await adminService
        .getLoan()
        .then(res => {
          this.Loans = res;
          //this.$toastr.s("loan Fetched Succesfully");
        })
        .catch(err => {
         // this.$toastr.e(err.message || err, "Failed!");
         window.console.log(err.message);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  mounted() {
    this.getCustomers();
    this.getTransaction();
    this.getLoan();
    if (this.routeQuery == 1) return (this.transaction = true);
    if (this.routeQuery == 2) return (this.loan = true);
    if (this.routeQuery == 3) return (this.investment = true);
  }
};
</script>

<style lang="scss">
.action:hover {
  text-decoration: underline;
  cursor: pointer;
}

.modal-head {
  color: green;
}
</style>
