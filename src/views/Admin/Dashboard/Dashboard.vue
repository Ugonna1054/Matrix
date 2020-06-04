<template>
  <div class="main-container">
    <Loader :loading="loading" loading-text="please wait..." />
    <div class="dashboard-container">
      <!-- <div class="side-content border"></div> -->
      <div class="main-content">
        <!-- <div class="content-wrapper"> -->
        <div class="dashboard-title row card mb-5">
          <div class="col-12">Dashboard</div>
        </div>
        <div class="dashboard-cards row mb-2 mt-n4">
          <div class="card-item col-md-3 col-12 mb-3">
            <p v-if="AGENT_DATA[0]" class="item1" style="color:salmon">
              {{ AGENT_DATA.length }}
            </p>
            <p v-else class="item1" style="color:salmon">0</p>
            <p class="item2">Total Agents</p>
            <p class="line1"></p>
          </div>
          <!-- <div class="col-md-1"></div> -->
          <div class="card-item col-md-3 col-12 mb-3">
            <p v-if="transactionDeposit" class="item1" style="color:limegreen">
              &#8358; {{ formatAmount(transactionDeposit) }}
            </p>
            <p v-else class="item1" style="color:limegreen">&#8358; 0</p>
            <p class="item2">Total Deposits</p>
            <p class="line2"></p>
          </div>
          <!-- <div class="col-md-1"></div> -->
          <div class="card-item col-md-3 col-12 mb-3">
            <p class="item1" style="color:violet" v-if="LoanApproved">
              &#8358; {{ formatAmount(LoanApproved) }}
            </p>
            <p class="item1" style="color:violet" v-else>&#8358; 0</p>
            <p class="item2">Total Loan Amount</p>
            <p class="line3"></p>
          </div>
          <!-- <div class="col-md-1"></div> -->
          <!-- <div class="card-item col-md-3 col-12 mb-3">
            hhhhhhh
          </div>-->
          <!-- </div> -->
        </div>

        <!-- Performance -->
        <div class="dashboard-title row card mb-4 m">
          <div class="col-12">Performance</div>
        </div>

     

        <div class="dashboard-title performance-wrapper row card mb-4">
          <div class="col-12 mb-3">Monthly Performance</div>
          <div class="performance row">
            <div class="col-md-6 border-right">
              <p>Target on Deposit : &#8358; 0</p>
              <p>Target on Account Created : 0</p>
              <p>Number of Agents : {{ AGENT_DATA.length }}</p>
            </div>
            <div class="col-md-6">
              Gross Performance Bar
              <Chart />
            </div>
          </div>
        </div>

        <div class="dashboard-title row card mb-0">
          <div class="col-12">
            <p class="mb-3">Recent Transactions</p>
            <div
              class="recent-transactions table-responsive"
              v-if="TRANSACTIONS[0]"
            >
              <table>
                <tr>
                  <th>Reference Number</th>
                  <th>Account</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Agent</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <!-- <th>Performance Bar</th> -->
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
                  <td>
                    {{ transaction.user.firstname }}
                    {{ transaction.user.lastname }}
                    {{ transaction.user.middlename }}
                  </td>
                  <td>{{ moment(transaction.createdAt) }}</td>
                  <!-- <td>
                    <b-progress
                      :value="value"
                      :max="max"
                      show-progress
                      variant="info"
                      animated="true"
                    ></b-progress>
                  </td>-->
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="side-content2 border"></div> -->
    </div>
  </div>
</template>

<script>
import Chart from "../../../components/Chart/chart.vue";
import { mapState } from "vuex";
import { adminService } from "../../../services/AdminServices/admin.services";
import Loader from "../../../utils/vue-loader/loader.vue";
import moment from "moment";

export default {
  name: "Dashboard",
  components: {
    Chart,
    Loader
  },
  data() {
    return {
      value: 50,
      max: 100,
      loading: false,
      Loan: []
    };
  },
  computed: {
    name() {
      return `${this.USER_DATA.firstname} ${this.USER_DATA.lastname}`;
    },
    ...mapState({
      USER_DATA: state => state.User.USER_DATA,
      AGENT_DATA: state => state.Agent.AGENT_DATA,
      TRANSACTIONS: state => state.Agent.TRANSACTIONS
    }),
    transactionDeposit() {
      if (!this.TRANSACTIONS[0]) return;
      let deposit = this.TRANSACTIONS.filter(data => data.type == "deposit");
      let total = 0;
      deposit.forEach(elem => {
        total += elem.amount;
      });
      return total;
    },
    LoanApproved() {
      let approved = this.Loan.filter(item => item.status == "Approved");
      let total = 0;
      approved.forEach(item => (total += item.amount));
      return total;
    },
    slicedTransctions() {
      let transactions = this.TRANSACTIONS;

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

    //truncate reference number
    truncString(str) {
      return str.substring(3, 13);
    },

    //get all agents
    async getAgents() {
      this.loading = true;
      await adminService
        .getAgents()
        .then(res => {
          //this.$toastr.s("Fetched Succesfully");
          this.$store.commit("SET_AGENT_DATA", res);
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    },

    //get all transactions
    async getTransactions() {
      this.loading = true;
      await adminService
        .getTransactions()
        .then(res => {
          //this.$toastr.s("Fetched Succesfully");
          this.$store.commit("SET_TRANSACTIONS", res);
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
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
          this.Loan = res;
          //this.$toastr.s("loan Fetched Succesfully");
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
    this.getAgents();
    this.getTransactions();
    this.getLoan();
    this.$store.dispatch("home");
  }
};
</script>

<style></style>
