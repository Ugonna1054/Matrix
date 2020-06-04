<template>
  <div class="main-container">
    <Loader :loading="loading" loading-text="please wait..." />
    <div class="dashboard-container">
      <!-- <div class="side-content border"></div> -->
      <div class="main-content">
        <!-- <div class="content-wrapper"> -->
        <div class="dashboard-title row card mb-5">
          <div class="col-12">Account Summary</div>
        </div>
        <div class="dashboard-cards row mb-2 mt-n4">
          <div class="card-item col-md-3 col-12 mb-3">
            <p class="item1" style="color:salmon">
              &#8358; {{ formatAmount(USER_DATA.account.accounts[0].balance) }}
            </p>
            <p class="item2">Account Balance</p>
            <p class="line1"></p>
          </div>
          <div class="card-item col-md-3 col-12 mb-3">
            <p class="item1" style="color:limegreen" v-if="LoanApproved[0]">
              &#8358;
              {{ formatAmount(LoanApproved[LoanApproved.length - 1].amount) }}
            </p>
            <p class="item1" style="color:limegreen" v-else>&#8358; 0</p>
            <p class="item2">Loan Running</p>
            <p class="line2"></p>
          </div>
          <div class="card-item col-md-3 col-12 mb-3">
            <p class="item1" style="color:violet">&#8358; 0</p>
            <p class="item2">Investment Running</p>
            <p class="line3"></p>
          </div>
        </div>

        <div class="dashboard-title row card mb-0">
          <!-- Main Table -->
          <div class="col-12">
            <div class="px-1 py-3 summary-top">
              <p class="mb-3">Recent Transactions</p>
            </div>
            <div class="recent-transactions table-responsive">
              <table>
                <tr>
                  <th>Reference Number</th>
                  <th>Account</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Agent</th>
                  <th>Date</th>
                </tr>

                <tr
                  v-for="(transaction, index) in slicedTransctions"
                  :key="index"
                >
                  <td v-if="transaction.reference">
                    {{ transaction.reference }}
                  </td>
                  <td v-else>{{ truncString(transaction._id) }}</td>
                  <td>{{ transaction.account }}</td>
                  <td>{{ transaction.type }}</td>
                  <td>&#8358; {{ formatAmount(transaction.amount) }}</td>
                  <td>
                    {{ transaction.agent.firstname }}
                    {{ transaction.agent.lastname }}
                    {{ transaction.agent.middlename }}
                  </td>
                  <td>{{ moment(transaction.createdAt) }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { clientService } from "../../../services/ClientServices/client.services";
import { mapState } from "vuex";
import Loader from "../../../utils/vue-loader/loader.vue";
import moment from "moment";

export default {
  name: "Dashboard",
  components: {
    Loader
  },
  data() {
    return {
      value: 50,
      max: 100,
      Account: "",
      Transactions: [],
      Loan: [],
      price: "",
      loading: true
    };
  },
  computed: {
    name() {
      return `${this.USER_DATA.firstname} ${this.USER_DATA.lastname}`;
    },
    ...mapState({
      USER_DATA: state => state.User.USER_DATA,
      token: state => state.User.AUTH_TOKEN
    }),
    LoanApproved() {
      let approved = this.Loan.filter(item => item.status == "Approved");
      return approved;
    },
    slicedTransctions() {
      let transactions = this.Transactions;

      if (transactions.length >= 10) {
        transactions = transactions.slice(
          transactions.length - 10,
          transactions.length
        );

        return transactions.reverse();
      }

      return transactions.reverse();
    }
  },
  methods: {
    //format amount
    formatAmount(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
    //moment
    moment(date) {
      return moment(date);
    },

    truncString(str) {
      return str.substring(3, 13);
    },
    async getTransaction() {
      this.loading = true;
      await clientService
        .getTransaction()
        .then(res => {
          this.Transactions = res;
        })
        .catch(() => {
          //this.$toastr.e(err.message || err, "Failed");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    //get all loan  requests  for a user
    async getLoan() {
      this.loading = true;
      await clientService
        .getLoan()
        .then(res => {
          this.Loan = res;
          //this.$toastr.s("Fetched Succesfully");
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  mounted() {
    this.getTransaction();
    this.$store.dispatch("AUTHORISE_USER", this.token);
    this.getLoan();
    this.$store.dispatch("home");
  }
};
</script>

<style></style>
