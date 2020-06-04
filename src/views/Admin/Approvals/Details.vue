<template>
  <div class="main-container">
    <Loader :loading="loading" loading-text="please wait..." />
    <div class="create-user">
      <div>
        <b-tabs class="ml-n3" pills no-body :active-nav-item-class="current">
          <!-- Account approvals tab -->
          <b-tab
            :active="account"
            class="ml-3 mb-5"
            :title-link-class="active1"
            title="Account Approval"
          >
            <div class="user-title card mt-5">
              <div class="col-12 tab-contents1">
                <div class="top mb-2">
                  <div class="mb-3">Account Request Details</div>
                </div>
                <div class="table-responsive" v-if="customer">
                  <table class="table1">
                    <tr class="row">
                      <td class="col-6 col-md-2">Name</td>
                      <td class="col-6 col-md-4">
                        {{ customer.firstname }} {{ customer.middlename }}
                        {{ customer.lastname }}
                      </td>
                      <td class="col-6 col-md-2">Email Address</td>
                      <td class="col-6 col-md-4">{{ customer.email }}</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Phone Number</td>
                      <td class="col-md-4 col-6">{{ customer.phone }}</td>
                      <td class="col-md-2 col-6">Account Number</td>
                      <td class="col-md-4 col-6" v-if="customer.account">
                        {{ customer.account.accounts[0].number }}
                      </td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Gender</td>
                      <td class="col-md-4 col-6">{{ customer.gender }}</td>
                      <td class="col-md-2 col-6">Home Address</td>
                      <td class="col-md-4 col-6">{{ customer.address }}</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Date of Birth</td>
                      <td class="col-md-4 col-6">{{ customer.dob }}</td>
                      <td class="col-md-2 col-6">Date Applied</td>
                      <td class="col-md-4 col-6">{{ customer.createdAt }}</td>
                    </tr>
                  </table>
                </div>
                <!-- Button -->
                <div class="mt-3 d-flex justify-content-between">
                  <div style="flex-grow:5"></div>
                  <div
                    class="d-flex justify-content-around"
                    style="flex-grow:1"
                  >
                    <div class="btn btn-outline-success" @click="updateApprove">
                      Approve
                    </div>
                    <div
                      class="btn btn-outline-danger mr-md-2"
                      @click="updateDecline"
                    >
                      Decline
                    </div>
                    <div></div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </b-tab>

          <!-- Transactions approvals tab -->
          <b-tab
            :active="transaction"
            class="ml-3 mb-5"
            :title-link-class="active1"
            title="Transactions Approval"
          >
            <div class="user-title card mt-5">
              <div class="col-12 tab-contents1">
                <div class="top mb-2">
                  <div class="mb-3">Transaction Details</div>
                </div>
                <div class="table-responsive" v-if="transactions">
                  <table class="table1">
                    <tr class="row" v-if="transactions.user">
                      <td class="col-6 col-md-2">Account Name</td>
                      <td class="col-6 col-md-4">
                        {{ transactions.user.firstname }}
                        {{ transactions.user.lastname }}
                      </td>
                      <td class="col-6 col-md-2">Account Number</td>
                      <td class="col-6 col-md-4">{{ transactions.account }}</td>
                    </tr>
                    <tr class="row" v-if="transactions.agent">
                      <td class="col-md-2 col-6">Agent</td>
                      <td class="col-md-4 col-6">
                        {{ transactions.agent.firstname }}
                        {{ transactions.agent.lastname }}
                      </td>
                      <td class="col-md-2 col-6">Amount</td>
                      <td class="col-md-4 col-6">
                        &#8358; {{ formatAmount(transactions.amount) }}
                      </td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Date</td>
                      <td class="col-md-4 col-6">
                        {{ moment(transactions.createdAt) }}
                      </td>
                      <td class="col-md-2 col-6">Reference</td>
                      <td class="col-md-4 col-6">
                        {{ transactions.reference }}
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="mt-3 d-flex justify-content-between">
                  <div style="flex-grow:5"></div>
                  <div
                    class="d-flex justify-content-around"
                    style="flex-grow:1"
                  >
                    <div
                      class="btn btn-outline-success"
                      @click="updateApproveT"
                    >
                      Approve
                    </div>
                    <div
                      class="btn btn-outline-danger mr-md-2"
                      @click="updateDeclineT"
                    >
                      Decline
                    </div>
                    <div></div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </b-tab>

          <!-- Loan Approval Tab -->
          <b-tab
            class="ml-3"
            :active="loan"
            :title-link-class="active1"
            title="Loan Approval"
          >
            <div class="user-title card mt-5">
              <div class="col-12 tab-contents1">
                <div class="top mb-2">
                  <div class="mb-3">Loan Request Details</div>
                </div>
                <div class="table-responsive" v-if="loans">
                  <table class="table1">
                    <tr class="row" v-if="loans.user">
                      <td class="col-6 col-md-2">Name</td>
                      <td class="col-6 col-md-4">
                        {{ loans.user.firstname }} {{ loans.user.middlename }}
                        {{ loans.user.lastname }}
                      </td>
                      <td class="col-6 col-md-2">Email Address</td>
                      <td class="col-6 col-md-4">{{ loans.user.email }}</td>
                    </tr>
                    <tr class="row" v-if="loans.user">
                      <td class="col-md-2 col-6">Phone Number</td>
                      <td class="col-md-4 col-6">{{ loans.user.phone }}</td>
                      <td class="col-md-2 col-6">Account Number</td>
                      <td class="col-md-4 col-6">{{ loans.account }}</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Loan Amount</td>
                      <td class="col-md-4 col-6">
                        &#8358; {{ formatAmount(loans.amount) }}
                      </td>
                      <td class="col-md-2 col-6">Tenor</td>
                      <td class="col-md-4 col-6">{{ loans.tenor }}</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Loan Purpose</td>
                      <td class="col-md-4 col-6">{{ loans.purpose }}</td>
                      <td class="col-md-2 col-6">Agent</td>
                      <td class="col-md-4 col-6" v-if="loans.agent">
                        {{ loans.agent.firstname }} {{ loans.agent.middlename }}
                        {{ loans.agent.lastname }}
                      </td>
                      <td v-else>Nil</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Date Applied</td>
                      <td class="col-md-4 col-6">
                        {{ moment(loans.createdAt) }}
                      </td>
                      <td class="col-md-2 col-6">Status</td>
                      <td class="col-md-4 col-6">{{ loans.status }}</td>
                    </tr>
                  </table>
                </div>
                <div class="mt-3 d-flex justify-content-between">
                  <div style="flex-grow:5"></div>
                  <div
                    class="d-flex justify-content-around"
                    style="flex-grow:1"
                  >
                    <div
                      class="btn btn-outline-success"
                      @click="updateApproveL"
                    >
                      Approve
                    </div>
                    <div
                      class="btn btn-outline-danger mr-md-2"
                      @click="updateDeclineL"
                    >
                      Decline
                    </div>
                    <div></div>
                  </div>
                  <div></div>
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
            <div class="user-title card mt-5">
              <div class="col-12 tab-contents1">
                <div class="top mb-2">
                  <div class="mb-3">Investment Request Details</div>
                  <div></div>
                </div>
                <div class="recent-transactions table-responsive">
                  <table class="table1">
                    <tr class="row">
                      <td class="col-6 col-md-2">Name</td>
                      <td class="col-6 col-md-4">Ugonna Ubaks</td>
                      <td class="col-6 col-md-2">Email Address</td>
                      <td class="col-6 col-md-4">Transgehhhnnr@gmail.com</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Phone Number</td>
                      <td class="col-md-4 col-6">09093939333</td>
                      <td class="col-md-2 col-6">Account Number</td>
                      <td class="col-md-4 col-6">636363636</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Gender</td>
                      <td class="col-md-4 col-6">Ugonna Ubaks</td>
                      <td class="col-md-2 col-6">Home Address</td>
                      <td class="col-md-4 col-6">1, Amechi street</td>
                    </tr>
                    <tr class="row">
                      <td class="col-md-2 col-6">Date of Birth</td>
                      <td class="col-md-4 col-6">July, 13 2020</td>
                      <td class="col-md-2 col-6">Date Applied</td>
                      <td class="col-md-4 col-6">Sept, 20, 2019</td>
                    </tr>
                  </table>
                </div>
                <div class="mt-3 d-flex justify-content-between">
                  <div style="flex-grow:5"></div>
                  <div class="d-flex justify-content-around" style="flex-grow:1">
                    <div class="btn btn-outline-success">Approve</div>
                    <div class="btn btn-outline-danger mr-md-2">Decline</div>
                    <div></div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </b-tab>-->
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../../utils/vue-loader/loader.vue";
import { adminService } from "../../../services/AdminServices/admin.services";
import { mapState } from "vuex";
import moment from "moment";

export default {
  name: "Details",
  components: {
    Loader
  },
  data() {
    return {
      loading: false,
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
      return ["tab", "disabled"];
    },
    routeQuery() {
      return this.$route.query.p;
    },
    ...mapState({
      customer: state => state.User.USER_DETAILS,
      transactions: state => state.User.TRANSACTION_DETAILS,
      loans: state => state.User.LOAN_DETAILS
    })
  },
  methods: {
    //format amount
    formatAmount(str) {
      if (str == "" || str == null || str == undefined) return;
      return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
    //moment
    moment(date) {
      return moment(date);
    },
    //truncate string
    truncString(str) {
      if (str == "" || str == null || str == undefined) return;
      return str.substring(3, 13);
    },
    //Approve account
    async updateApprove() {
      this.loading = true;
      await adminService
        .updateApprove({
          id: this.customer._id
        })
        .then(res => {
          this.$toastr.s(res.message, "Fetched Succesfully");
          this.$router.push("/Admin/Approvals");
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    //Decline account
    async updateDecline() {
      this.loading = true;
      await adminService
        .updateDecline({
          id: this.customer._id
        })
        .then(res => {
          this.$toastr.s(res.message, "Fetched Succesfully");
          this.$router.push("/Admin/Approvals");
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    //Approve transaction
    async updateApproveT() {
      this.loading = true;
      await adminService
        .updateApproveT({
          id: this.transactions._id,
          agentId: this.transactions.agent._id
        })
        .then(res => {
          this.$toastr.s(res.message, "Fetched Succesfully");
          this.$router.push("/Admin/Approvals?p=1");
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    //Decline transaction
    async updateDeclineT() {
      this.loading = true;
      await adminService
        .updateDeclineT({
          id: this.transactions._id
        })
        .then(res => {
          this.$toastr.s(res.message, "Fetched Succesfully");
          this.$router.push("/Admin/Approvals?p=1");
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    //Approve Loan
    async updateApproveL() {
      this.loading = true;
      await adminService
        .updateApproveL({
          id: this.loans._id
        })
        .then(res => {
          this.$toastr.s(res.message, "Fetched Succesfully");
          this.$router.push("/Admin/Approvals?p=2");
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    //Decline Loan
    async updateDeclineL() {
      this.loading = true;
      await adminService
        .updateDeclineL({
          id: this.loans._id
        })
        .then(res => {
          this.$toastr.s(res.message, "Fetched Succesfully");
          this.$router.push("/Admin/Approvals?p=1");
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
    if (this.routeQuery == 1) return (this.transaction = true);
    if (this.routeQuery == 2) return (this.loan = true);
    if (this.routeQuery == 3) return (this.investment = true);
  }
};
</script>

<style lang="scss" scoped>
.action:hover {
  text-decoration: underline;
  cursor: pointer;
}
td:nth-child(odd) {
  color: grey;
}
</style>
