<template>
  <div class="main-container">
    <div class="create-user">
      <div class="user-title mb-3 px-3">Transaction Summary</div>
      <!-- <br class="d-block d-sm-none" /> -->
      <div class="user-title px-3 py-3">
        <div class="d-flex justify-content-between mb-3" style="flex-wrap:wrap">
          <!-- <div class="date border mb-3 mb-lg-0"> -->
          <div class="mb-md-0">
            <b-form-datepicker
              v-model="fromDate"
              class="mb-2"
              placeholder="--From Date--"
            ></b-form-datepicker>
          </div>
          <div class="mt-sm-0 ">
            <b-form-datepicker
              v-model="toDate"
              class="mb-2"
              placeholder="--To Date--"
            ></b-form-datepicker>
          </div>
      
          <div class="mb-3">
            <div class="input-group">
              <input
                type="search"
                placeholder="search by Agent"
                v-model="name"
                class="form-control"
                name=""
                id=""
              />
              <div class="input-group-append" style="cursor:pointer">
                <div class="input-group-text">
                  <i class="fas fa-search"></i>
                </div>
              </div>
            </div>
          </div>
          <div class=" mb-3">
            <div class="input-group">
              <form
                action="
             "
                @submit.prevent="reset"
              >
                <input
                  type="submit"
                  value="Reset"
                  class="form-control"
                  name=""
                  id=""
                />
              </form>
            </div>
          </div>
          <!-- </div> -->
          <!-- <div @click="reset" class="btn btn-outline-primary  mt-3 mt-md-0">
            Reset
          </div> -->
        </div>
        <div
          class="recent-transactions table-responsive tab-contents"
          ref="html"
        >
          <span
            v-if="fromDate && toDate"
            class="font-weight-bold mb-3 text-secondary"
          >
            Loan Report from {{ customFormatter(fromDate) }} to
            {{ customFormatter(toDate) }}
          </span>
          <table class="mt-3">
            <tr style="color:whitesmoke" class="bg-secondary">
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
              v-for="(transaction, index) in downloadLoanRequests"
              :key="index"
            >
              <td v-if="transaction.reference">{{ transaction.reference }}</td>
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
              <td>{{ truncString1(moment(transaction.createdAt)) }}</td>
            </tr>
          </table>
        </div>
        <div class="download">
          <button class="btn btn-primary" @click="exportToPDF">
            Download
            <i class="fa ml-1 fa-download"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
import html2pdf from "html2pdf.js";

export default {
  name: "Report",
  components: {},
  data() {
    return {
      fromDate: "",
      toDate: "",
      name: "",
      value: ""
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
      TRANSACTIONS: state => state.Agent.TRANSACTIONS
    }),
    //Transaction array based on sorted data
    downloadLoanRequests() {
      if (this.name == "") {
        return this.sortedDataByDate().sort(
          (a, b) => moment(b.createdAt) - moment(a.createdAt)
        );
      } else {
        //this.toUpperCase()
        let result = this.sortedDataByDate().sort(
          (a, b) => moment(b.createdAt) - moment(a.createdAt)
        );
        return result.filter(value => {
          let fullName = value.agent.firstname + " " + value.agent.lastname;
          let fullNameReverse =
            value.agent.lastname + " " + value.agent.firstname;
          let formattedTime = this.moment(value.createdAt);
          let check = moment(value.createdAt, "YYYY/MM/DD");
          let month = check.format("M");
          // let day   = check.format('D');
          let year = check.format("YYYY");

          return (
            value.agent.firstname.indexOf(this.name) == 0 ||
            value.agent.lastname.indexOf(this.name) == 0 ||
            fullName.toLowerCase().indexOf(this.name) == 0 ||
            fullNameReverse.toLowerCase().indexOf(this.name) == 0 ||
            formattedTime
              .toString()
              .toLowerCase()
              .indexOf(this.name) == 0 ||
            year.indexOf(this.name) == 0 ||
            month.toLowerCase().indexOf(this.name) == 0
            // day.indexOf(this.name) == 0 ||
            // monthAndYear.indexOf(this.name) == 0
          );
        });
      }
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
    customFormatter(date) {
      return moment(date).format("MMMM Do YYYY");
    },
    //truncate reference number
    truncString(str) {
      return str.substring(3, 13);
    },
    //truncate date
    truncString1(str) {
      return str.toString().substring(0, 24);
    },
    //clear date fields
    reset() {
      this.fromDate = "";
      this.toDate = "";
      this.name=""
    },
    //download html as  pdf
    exportToPDF() {
      html2pdf(this.$refs.html, {
        margin: 1,
        filename: "loan report.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: { unit: "in", format: "letter", orientation: "landscape" }
      });
    },

    //filter data by date
    sortedDataByDate() {
      if (this.fromDate == "" || this.toDate == "") return this.TRANSACTIONS;

      if (this.moment(this.fromDate) > this.moment(this.toDate)) {
        alert(
          "heyy, don't you think the To date should be greater than the From Date? :) "
        );
        return this.TRANSACTIONS;
      }

      let data = this.TRANSACTIONS;
      let filtered = data.filter(item => {
        let filteredDate =
          this.customFormatter(item.createdAt) >=
            this.customFormatter(this.fromDate) &&
          this.customFormatter(item.createdAt) <=
            this.customFormatter(this.toDate);
        return filteredDate;
      });

      return filtered;
    }
  }
};
</script>

<style scoped>
.tab-contents {
  padding: 0px !important;
}

/* .user-title {
    max-height: 520px
} */
</style>
